import React,{Component} from 'react';
import styles from  './style.module.css';
import propTypes from 'prop-types';

/*
*
* 1. 支持受控，和非受控
* 2. 单行和多行输入
* 3. type: string      text|password........
* 4. multi: boolean    多行
* 6. style: object
* 7. model: object  受控，null非受控
*
*
* */


export default class Input extends Component{

  static defaultProps={
    type:'text',
    placeholder:'',
    model: null,
    multi: false,
    style: {}
  };

  static propTypes={
    type: propTypes.string,
    placeholder :propTypes.string,
    model: propTypes.shape({
      value: propTypes.string.isRequired,
      onChange: propTypes.func.isRequired,
      name: propTypes.string.isRequired
    }),
    multi: propTypes.bool,
    style: propTypes.object,
  };


  renderInput=()=>{
    let {model,style,placeholder, type} = this.props;

    let el=null;

    //非受控
    if (!model){
      el = (
        <div className={styles.ucInput}>
          <input type={type} placeholder={placeholder} defaultValue="" style={style}/>
        </div>
      );
      return el;
    }
    //受控
    let {name,value,onChange} = model;

    el = (
      <div className={styles.ucInput}>
        <input
          type={type}
          value={value}
          onChange={onChange}
          name={name}
          style={style}
          placeholder={placeholder}
        />
      </div>
    );

    return el;

  };

  renderTextarea=()=>{
    let {model,} = this.props;
    let el = null;

    //非受控
    if (!model){
      el = (
        <div>
          <textarea></textarea>
        </div>
      );
      return el;
    }

    //受控
    el = (
      <div>
        <textarea
          {...model}
        ></textarea>
      </div>
    );

    return el;


  };

  render(){
    let {multi} = this.props;
    return multi ? this.renderTextarea() : this.renderInput();
  }
}

// 用mockjs模拟生成数据
var Mock = require('mockjs');


//随机id和图片
let mapData = (n) => {

  var data = [];

  for (var i = 1; i <= n; i++) {

    data.push({
      _id: 1000+i+'',
      icon:Mock.Random.image('65x95', Mock.Random.color(), Mock.Random.cword(1)),
      title: "@ctitle(2,8)",
      director: "@cname()",
      star: "@cname() @cname() @cname()",
      detail:{
        bgimg:Mock.Random.image('1680x745',Mock.Random.color(),Mock.Random.cword(4,10)),
        content:"@cparagraph(10,140)",
      }
    })
  }
  return data
};

let mapData2 = (n) => {

  var data = [];

  for (var i = 1; i <= n; i++) {

    data.push({
      // 属性 id 是一个自增数，起始值为 1，每次增 1
      _id: 1000+i+'',
      title: '@ctitle(4,8)',//标题型中文4到8个字
      sub_title: '@ctitle(6,12)',
      banner: Mock.Random.image('1680x745',Mock.Random.color(),Mock.Random.cword(4,10)),
      time:'@integer(1189529603220,1589529603220)',
      detail:{
        bgimg:Mock.Random.image('1680x745',Mock.Random.color(),Mock.Random.cword(4,10)),
        content:"@cparagraph(10,140)"//正文
      }
    })
  }
  return data
};


let mapData3 = (n) => {
  var data = [];
  for (var i = 1; i <= n; i++) {

    data.push({
      // 属性 id 是一个自增数，起始值为 1，每次增 1
      _id: 1000+i+'',
      title: '@ctitle(2,6)',//标题型中文4到8个字
      sub_title: '@ctitle(6,12)',
      num:Math.ceil(Math.random()*30)+20
    })
  }
  return data
}
//对外暴露 函数 | 对象   模块要求是commonJs
module.exports = Mock.mock({

  'banner': mapData2(10),
  "home":mapData(100),
  "column":mapData(30),

  "cinema":mapData3(30),

  "user":{
    "err": 0,
    "msg": "成功",
    "data": {
      "nikename": Mock.Random.cname(),
      "icon": Mock.Random.image('100x100',Mock.Random.color(),Mock.Random.cword(1)),

    }
  }
});

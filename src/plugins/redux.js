import {createStore, applyMiddleware,combineReducers,compose} from "redux";
import thunk from 'redux-thunk';

import global from '../store/reducers/global'
import home from '../store/reducers/home'
import banner from '../store/reducers/banner'

const rootReducer = combineReducers({global,home,banner});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
let store = createStore(rootReducer,composeEnhancers(applyMiddleware(thunk)));//安装了中间件，改装了redux


export default store
import {queryAll, queryBanner,  queryHome} from "../../services/api";
export const actionHome = ()=> dispatch =>queryAll([
    queryBanner({_limit: 5}),
    queryHome({_limit:30})
]).then(
    ({banner,home})=>{
        dispatch({type:'UPDATE_BANNER',arr:banner.data.data})
        dispatch({type:'UPDATE_HOME',arr:home.data.data})
    }
)

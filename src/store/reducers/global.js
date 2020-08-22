let initState = {
    bNav:false,
    bFoot:false,
    bLoading:false
}

const global = (state=initState,{type,bl})=>{
    switch (type) {
      case 'UPDATE_NAV':
        return {...state,bNav:bl};
      case 'UPDATE_FOOT':
        return {...state,bFoot:bl};
      case 'UPDATE_LOADING':
        return {...state,bLoading:bl};
      default:
        return state;
    }
  };
  

  export default global
let initState=[];

const banner = (state=initState,{type,arr}) => {
  switch (type) {
    case 'UPDATE_BANNER':
      return arr;
    default:
      return state;
  }
};

export default banner;
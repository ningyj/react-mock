let initstate = [];

const home = (state=initstate, { type, arr }) => {
    switch (type) {
        case 'UPDATE_HOME':
            return arr;
        default:
            return state;
    }
}
export default home;
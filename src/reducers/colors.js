const defaultColors = () => ({
    green: 15,
    red: 15,
    blue: 15,
    pink: 15
});


const colors = (state = defaultColors(), action) => {
    switch (action.type) {
        case 'CHANGE_VALUE':
            let newValue = {};
            newValue[action.color] = +action.value;
            return Object.assign({}, state, newValue);
        default:
            return state;
    }
};

export default colors;
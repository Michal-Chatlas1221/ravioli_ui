const changeColor = (color, value) => {
    return {
        type: 'CHANGE_VALUE',
        color,
        value
    }
};

const toggleChart = (type) => ({
    type: 'TOGGLE_CHART',
    chartType: type
});

export { changeColor, toggleChart };
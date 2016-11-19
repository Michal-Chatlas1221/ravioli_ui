const charts = (state = [], action) => {
    switch (action.type) {
        case 'TOGGLE_CHART':
            const index = state.indexOf(action.chartType);
            if (index === -1) {
                return [
                    ...state,
                    action.chartType
                ];
            } else {
                return state.slice(0, index).concat(state.slice(index+1))
            }
        default:
            return state;
    }
};

export default charts;
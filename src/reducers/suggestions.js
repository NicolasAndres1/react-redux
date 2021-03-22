const defaultState = [];

const reducer = (state = defaultState, { type, payload }) => {
    switch (type) {
        case 'searchSuggestions':
            return [{
                id: 1,
                title: 'sugerencia'
            }];
        default:
            return state;
    };
};

export default reducer;
export const type = 'searchSuggestions';

const searchSuggestions = (text) => {
    return {
        type,
        payload: text
    };
};

export default searchSuggestions;
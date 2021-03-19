export const type = 'searchResults';

const searchResults = (text) => {
    return {
        type,
        payload: text
    };
};

export default searchResults;
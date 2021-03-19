export const type = 'searchCurrentItem';

const searchCurrentItem = (id) => {
    return {
        type,
        payload: id
    };
};

export default searchCurrentItem;
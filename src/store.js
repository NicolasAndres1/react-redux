import { createStore, combineReducers } from 'redux';

import CurrentItem from './reducers/currentItem';
import Results from './reducers/results';
import Suggestions from './reducers/suggestions';

const reducer = combineReducers({
    CurrentItem,
    Results,
    Suggestions
});

const store = createStore(reducer);

export default store;
import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { Provider } from 'react-redux';

import store from './store';
import Results from './components/results';
import Details from './components/details';

const App = () => {
    const routes = (
        <Switch>
            <Route path="/results" component={Results} />
            <Route path="/details/:itemId" component={Details} />
            <Redirect from="/" to="/results" />
        </Switch>
    )
    
    return (
        <>
            <Provider store={store}>
                { routes }
            </Provider>
        </>
    );
}

export default App;
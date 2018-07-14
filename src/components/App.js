import React from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import PageNotFound from './common/PageNotFound';
import Home from './landing/Home';

import Products from './product/Products';
import Customer from './customer/CustomerAdd';
import CustomerListContainer from './customer/CustomerListContainer';
import createBrowserHistory from 'history/createBrowserHistory';
import HeaderNavContainer from './landing/HeaderNavContainer'; // eslint-disable-line import/no-named-as-default
import Quotation_Generate from './quotation/Quotation_Generate';


const history = createBrowserHistory();


const App = () => {
    return (
        <div >
            <Router history={history}>
                <div>

                    <HeaderNavContainer />

                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route path="/Products" component={Products} />
                        <Route exact path="/customer" component={Customer} />
                        <Route path="/customer/:id" component={Customer} />
                        <Route path="/CustomerListContainer" component={CustomerListContainer} />
                        <Route path="/CustomerView" component={CustomerListContainer} />
                        <Route exact path="/quotation" component={Quotation_Generate} />
                        <Route component={PageNotFound} />
                    </Switch>
                </div>
            </Router>
        </div>
    );
};


export default App;
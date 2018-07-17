import {combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';
import customerReducer from './customerReducer';
import productReducer from './productReducer';
import selectedProductReducer from './selectedProductReducer';
import selectedCustomerReducer from './selectedCustomerReducer';

export default combineReducers({
    customerReducer,
    productReducer,
    selectedProductReducer,
    selectedCustomerReducer,
    form: formReducer    
});



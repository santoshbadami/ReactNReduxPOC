import {combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';
import customerReducer from './customerReducer';
import productreducer from './productReducer';
import selectedProductReducer from './selectedProductReducer';
import selectedCustomerReducer from './selectedCustomerReducer';

export default combineReducers({
    customerReducer,
    productreducer,
    selectedProductReducer,
    selectedCustomerReducer,
    form: formReducer    
});



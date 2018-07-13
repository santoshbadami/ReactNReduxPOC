import {combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';
import coursesReducer from './coursesReducer';
import selectedCourseReducer from './selectedCourseReducer';
import authorReducer from './authorReducer';
import apiReducer from './apiReducer';
import customerReducer from './customerReducer';
import productreducer from './productReducer';
import selectedProductReducer from './selectedProductReducer';

export default combineReducers({
    customerReducer,
    productreducer,
    selectedProductReducer,
    // coursesReducer,
    // selectedCourseReducer,
    // authorReducer,
    // apiReducer,
    form: formReducer    
});



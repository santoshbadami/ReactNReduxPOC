import * as ActionType from '../action/ActionType';
import initialState from './initialState';



const selectedCustomerReducer = (state = initialState.selectedCustomerReducer, action) => {
    switch(action.type) {
        case ActionType.GET_CUSTOMER_RESPONSE: {
            return {
                ...state,
                customer: Object.assign({},action.customer)
            };
        }
        case ActionType.DISPOSE_SELECTED_CUSTOMER:{
            return{
                ...state,
                customer: Object.assign({},action.customer)
            }
        }


        default: { return state; }
    }
};


export default selectedCustomerReducer;
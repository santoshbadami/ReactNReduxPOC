import * as ActionType from '../action/ActionType';
import initialState from './initialState';


const customerReducer = (state = initialState.customerReducer, action) => {
    switch(action.type) {
        case ActionType.GET_CUSTOMERS_RESPONSE: {
            return {
                ...state, 
                customers:Object.assign([],action.customers)
            };
        }
        default: { return state; }
    }
};

export default customerReducer;
import * as ActionType from '../action/ActionType';
import initialState from './initialState';


const productReducer = (state = initialState.productReducer, action) => {
    switch(action.type) {
        case ActionType.GET_PRODUCTS_RESPONSE: {
            return {
                ...state, 
                products:Object.assign([],action.products)
            };
        }
        default: { return state; }
    }
};

export default productReducer;
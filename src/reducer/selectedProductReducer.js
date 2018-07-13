import * as ActionType from '../action/ActionType';
import initialState from './initialState';



const selectedProductReducer = (state = initialState.selectedProductReducer, action) => {
    debugger;
    switch(action.type) {
        case ActionType.GET_PRODUCT_RESPONSE: {
            return {
                ...state,
                product: Object.assign({},action.product)
            };
        }
        case ActionType.DISPOSE_SELECTED_PRODUCT:{
            return{
                ...state,
                product: Object.assign({},action.product)
            }
        }


        default: { return state; }
    }
};


export default selectedProductReducer;
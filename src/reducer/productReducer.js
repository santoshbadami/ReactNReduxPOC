import * as ActionType from '../action/ActionType';
import initialState from './initialState';




const coursesReducer = (state = initialState.productReducer, action) => {
    switch(action.type) {
        case ActionType.GET_PRODUCTS_RESPONSE: {
            // '...' spread operator clones the state
            // lodash Object assign simply clones action.courses into a new array.
            // The return object is a copy of state and overwrites the state.courses with a fresh clone of action.courses
            return {
                ...state, 
                courses: Object.assign([], action.products)
            };
        }


        default: { return state; }
    }
};
import * as ActionType from './ActionType';
import ProductApi from '../api/ProductApi';

export const getProductResponse = products => (
    {
    type: ActionType.GET_PRODUCTS_RESPONSE,
    products
});

export function getProductsAction() {
    debugger;
    return (dispatch) => {
        return ProductApi.getAllProducts()
            .then(products => {debugger;
                dispatch(getProductResponse(products));
            }).catch(error => {
                throw error;
            });
    };
}

export function saveProductAction(courseBeingAddedOrEdited) {
    return function (dispatch) {

        //if authorId exists, it means that the course is being edited, therefore update it.
        //if authorId doesn't exist, it must therefore be new course that is being added, therefore add it
        return CourseApi.saveCourse(courseBeingAddedOrEdited)
            .then(() => {
                if (courseBeingAddedOrEdited.id) {
                    dispatch(updateExistingCourseResponse());
                } else {
                    dispatch(addNewCourseResponse());
                }
            }).then(() => {
                dispatch(getCoursesAction());
            }).catch(error => {
                dispatch(ApiCallErrorAction());
                throw (error);
            });
    };
}
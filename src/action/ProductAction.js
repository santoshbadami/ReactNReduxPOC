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

export const addNewProductResponse = () => ({
    type: ActionType.ADD_NEW_PRODUCT_RESPONSE
});
export const updateExistingProductResponse = () => ({
    type: ActionType.UPDATE_PRODUCT_RESPONSE
});

export function saveProductAction(product) {
    return function (dispatch) {
        return ProductApi.saveProduct(product)
            .then(() => {
                if (product.productid) {
                    dispatch(updateExistingProductResponse());
                } else {
                    dispatch(addNewProductResponse());
                }
            }).then(() => {
                dispatch(getProductsAction()); 
            }).catch(error => {
                throw (error);
            });
    };
}

export const deleteProductResponse = () => ({
    type: ActionType.DELETE_PRODUCT_RESPONSE
});



export function deleteProductAction(productid) {
    return (dispatch) => {
        return ProductApi.deleteProduct(productid)
            .then(() => {
                dispatch(deleteProductResponse());
            }).then(() => {
                dispatch(getProductsAction());
            }).catch(error => {
                throw error;
            });
    };
}


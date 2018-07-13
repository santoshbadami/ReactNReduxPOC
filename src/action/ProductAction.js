import * as ActionType from './ActionType';
import ProductApi from '../api/ProductApi';

export const getProductsResponse = products => (
    {
    type: ActionType.GET_PRODUCTS_RESPONSE,
    products
});

export function getProductsAction() {
    return (dispatch) => {
        return ProductApi.getAllProducts()
            .then(products => {debugger;
                dispatch(getProductsResponse(products));
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

export const disposeSelectedProduct = () => ({
    type: ActionType.DISPOSE_SELECTED_PRODUCT,
    product: {}
});


export function saveProductAction(product) {
    return function (dispatch) {
        return ProductApi.saveProduct(product)
            .then(() => {
                if (product.productid) {
                    dispatch(updateExistingProductResponse());
                    dispatch(disposeSelectedProduct());
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

export const getProductResponse = productFound => ({
    type: ActionType.GET_PRODUCT_RESPONSE,
    product: productFound
});

export function getProductAction(id){
    debugger;
    return (dispatch) => {
        return ProductApi.getProduct(id)
            .then(product => {
                dispatch(getProductResponse(product));
            }).catch(error => {
                throw error;
            });
    };
}


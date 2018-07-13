import * as ActionType from './ActionType';
import CustomerApi from '../api/CustomerApi';

export const getCustomerResponse = customers => (
    {
    type: ActionType.GET_CUSTOMERS_RESPONSE,
    customers
});

export function getCustomersAction() {
    return (dispatch) => {
        return CustomerApi.getAllCustomers()
            .then(customers => {debugger;
                dispatch(getCustomerResponse(customers));
            }).catch(error => {
                debugger;
                throw error;
            });
    };
}

export const addNewCustomerResponse = () => ({
    type: ActionType.ADD_NEW_CUSTOMER_RESPONSE
});
export const updateExistingCustomerResponse = () => ({
    type: ActionType.UPDATE_CUSTOMER_RESPONSE
});

export function saveCustomerAction(customer) {
    return function (dispatch) {
        return CustomerApi.saveProduct(customer)
            .then(() => {
                if (customer.custId) {
                    dispatch(updateExistingCustomerResponse());
                } else {
                    dispatch(addNewCustomerResponse());
                }
            }).then(() => {
                dispatch(getCustomersAction()); 
            }).catch(error => {
                throw (error);
            });
    };
}

export const deleteCustomerResponse=()=>({
    type:ActionType.DELETE_CUSTOMER_RESPONSE
})

export function deleteCustomerAction(id){
    return (dispatch)=>{
        return CustomerApi.deleteCustomer(id)
        .then(()=>{
            dispatch(deleteCustomerResponse());
        }).then(()=>{
            dispatch(getCustomersAction());
        }).catch(error=>{
            throw error;
        });
    };
}
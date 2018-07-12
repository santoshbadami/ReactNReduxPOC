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
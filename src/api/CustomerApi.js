import delay from './delay';


const customers=[{
    custId:1,
    custName:'ABMypol',
    address:'Mysore',
    phone:123,
    mobile:9731565322,
    emailId:'santosh@gmail.com',
    vatNo:'vat123',
    status:1,
    type:'Manual',
    dateCreated:'2018-05-05',
    dateModified:'2018-05-05'
},
{
    custId:2,
    custName:'XYZypol',
    address:'Mysore',
    phone:123,
    mobile:9731565322,
    emailId:'santosh@gmail.com',
    vatNo:'vat123',
    status:1,
    type:'Manual',
    dateCreated:'2018-05-05',
    dateModified:'2018-05-05'
},
{
    custId:3,
    custName:'MNOPOl',
    address:'Mysore',
    landline:123,
    mobile:9731565322,
    emailId:'santosh@gmail.com',
    vatNo:'vat123',
    status:1,
    type:'Manual',
    dateCreated:'2018-05-05',
    dateModified:'2018-05-05'
}
]

const generateId=()=>{
    return customers.length+1;
}
class CustomerApi {
    static getAllCustomers() {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(Object.assign([], customers));
            }, delay);
        });
    }

    static saveProduct(customer) {
        customer = Object.assign({}, customer); // to avoid manipulating object passed in.
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                // Simulate server-side validation
                debugger;
                if (customer.custId) {
                    const existingCustomerIndex = customers.findIndex(a => a.custId === customer.custId);
                    customers.splice(existingCustomerIndex, 1, customer);
                } else {
                    customer.custId = generateId();
                    customers.push(customer);
                }

                resolve(customer);
            }, delay);
        });
    }

    static deleteCustomer(id){
        return new Promise((resolve)=>{
            setTimeout(()=>{
                debugger;
                const indexOfcustomerToDelete=customers.findIndex(customer=>customer.custId===id);
                customers.splice(indexOfcustomerToDelete,1);
                resolve();
            },delay);
        });
    }
    static getCustomer(id) {
        return new Promise((resolve) => {
            setTimeout(() => {
                const existingCustomerIndex = customers.findIndex(customer => customer.custId === id);
                
                const customerFound = Object.assign({}, customers[existingCustomerIndex]);
                resolve(customerFound);

            }, delay);
        });
    }
}



export default CustomerApi;
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
    phone:123,
    mobile:9731565322,
    emailId:'santosh@gmail.com',
    vatNo:'vat123',
    status:1,
    type:'Manual',
    dateCreated:'2018-05-05',
    dateModified:'2018-05-05'
}
]

class CustomerApi {
    static getAllCustomers() {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(Object.assign([], customers));
            }, delay);
        });
    }
}

export default CustomerApi;
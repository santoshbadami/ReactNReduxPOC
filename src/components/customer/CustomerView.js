import React from 'react';


class CustomerView extends React.Component{
    constructor(){
        super();
        
    }
    componentDidMount(){
        
    }
    render(){    
        const {customer}=this.props;
    return(
        <tr>
        <td>{customer.custName}</td>
        <td>{customer.address}</td>
        <td>{customer.phone}</td>
        <td>{customer.mobile}</td>
        <td>{customer.emailId}</td>
        <td>{customer.vatNo}</td>
        <td>Action</td>
        </tr>
    );
}
}

export default CustomerView;


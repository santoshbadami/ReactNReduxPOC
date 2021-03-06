import React, { PropTypes } from 'react';
// import browserHistory from 'react-router';


class CustomerView extends React.Component{
    constructor(){
        super();
        this.deleteCustomer=this.deleteCustomer.bind(this);
        this.EditCustomer=this.EditCustomer.bind(this);
    }
    deleteCustomer(){
        if(confirm('Are you sure!'))
        this.props.deleteCustomer(this.props.customer.custId);
    }
    EditCustomer(){
        this.props.editCustomer(this.props.customer.custId);    
    }
    
    render(){    
        const {customer}=this.props;
    return(
        <tr> 
        <td>{customer.custName}</td>
        <td>{customer.address}</td>
        <td>{customer.landline}</td>
        <td>{customer.mobile}</td>
        <td>{customer.emailId}</td>
        <td>{customer.vatNo}</td>
        <td>
        <i className="fa fa-edit" onClick={this.EditCustomer}></i> {`     `}
        <i className="fa fa-trash" onClick={this.deleteCustomer}></i>
        </td>
        </tr>
    );
}
}
CustomerView.propTypes = {
    history: PropTypes.object
};
export default CustomerView;


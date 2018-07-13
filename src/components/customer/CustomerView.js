import React from 'react';


class CustomerView extends React.Component{
    constructor(){
        super();
        this.state={isEditable:true}
        this.deleteCustomer=this.deleteCustomer.bind(this);
        this.EditCustomer=this.EditCustomer.bind(this);
    }
    deleteCustomer(){
        if(confirm('Are you sure!'))
        this.props.deleteCustomer(this.props.customer.custId);
    }
    EditCustomer(){
        this.setState({isEditable:false})
        
    }
    componentDidMount(){
        
    }
    render(){    
        const {customer}=this.props;
    return(
        <tr>
        {/* { {
            this.state.isEditable===true?
            (
                <td><input className="form-control" type="text" ref={inputcpm=>this.inputcpm=inputcpm}/></td>
                <td><textarea className="form-control" rows="4" ref={inputadd=>this.inputadd=inputadd} ></textarea></td>
                <td><input className="form-control" type="text" ref={inputlandline=>this.inputlandline=inputlandline} /></td>
                <td><input className="form-control" type="number" ref={inputph=>this.inputph=inputph} /></td>
                <td><input className="form-control" type="email" ref={inputemail=>this.inputemail=inputemail} /></td>
                <td><input className="form-control" type="text" ref={inputvat=>this.inputvat=inputvat} /></td>
                <td></td>
                <td></td>
                
            ):( */}
        
        <td>{customer.custName}</td>
        <td>{customer.address}</td>
        <td>{customer.phone}</td>
        <td>{customer.mobile}</td>
        <td>{customer.emailId}</td>
        <td>{customer.vatNo}</td>
        <td>
        <i className="fa fa-edit" onClick={this.EditCustomer}></i> {`     `}
        <i className="fa fa-trash" onClick={this.deleteCustomer}></i>
        </td>
        
            {/* ) 
        } */}
        </tr>
    )
}
}

export default CustomerView;


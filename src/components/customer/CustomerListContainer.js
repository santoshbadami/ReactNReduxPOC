import React from 'react';
import toastr from 'toastr';
import { NavLink } from 'react-router-dom';
import {connect} from 'react-redux';
import CustomerView from './CustomerView';
import { bindActionCreators } from 'redux';
import * as customerAction from '../../action/CustomerAction';


class CustomerListContainer extends React.Component{
  constructor(){
    super();
    this.deleteCustomer=this.deleteCustomer.bind(this);
  }

  deleteCustomer(id){
    this.props.action.deleteCustomerAction(id)
    .catch(error=>{
      toastr.error(error);
    })
  }

  componentDidMount() {
    this.props.action.getCustomersAction()
        .catch(error => {
            toastr.error(error);
        });
    }
  render(){
    const { customers } = this.props;
  return (
    <main className="app-content">
      <div className="app-title">
        <div>
          <h1>Customer</h1> 
        </div>
        <ul className="app-breadcrumb breadcrumb">
          <li className="breadcrumb-item"><i className="fa fa-home fa-lg"></i></li>
          <li className="breadcrumb-item"><NavLink to="/customer" >Add</NavLink></li>
          <li className="breadcrumb-item"><NavLink to="/CustomerListContainer" >View</NavLink></li>
          {/* <li className="breadcrumb-item"><a href="#">View</a></li> */}
        </ul>
      </div>
      <div className="row">
        <div className="col-md-12">
          <div className="tile">
            <div className="tile-body">
              <table className="table table-hover table-bordered" id="sampleTable">
                <thead>
                  <tr>
                    <th>Company Name</th>
                    <th>Address</th>
                    <th>Landline</th>
                    <th>Mobile</th>
                    <th>Email</th>
                    <th>Vat No</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                {
                 customers.customers.map(customer=>{
                 return(<CustomerView customer={customer} deleteCustomer={this.deleteCustomer}/>); 
                })
                }
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
};

const mapStateToProps=(state,ownProps)=>{
  return{
  customers:state.customerReducer
  }
}

const mapDispatchToProps=dispatch=>({
  action:bindActionCreators(customerAction,dispatch)

})

export default connect(mapStateToProps,mapDispatchToProps)(CustomerListContainer);
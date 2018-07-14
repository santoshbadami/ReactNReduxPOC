import React from 'react';
import { NavLink } from 'react-router-dom';
import { bindActionCreators } from '../../../node_modules/redux';
import * as customerAction from '../../action/CustomerAction';
import {connect} from 'react-redux';

class Customer extends React.Component{
  constructor(){
    super();
    this.state={cust:{
      custId:'',
      custName:'',
      address:'',
      phone:'',
      landline:'',
      emailId:'',
      vatNo:'',
      status:'',
      type:'',
      dateCreated:'',
      dateModified:''  
    }}
    this.saveCustomer=this.saveCustomer.bind(this);
  }
  componentWillMount(){
     debugger;
    
  }
  componentWillUpdate(newProps,newState){
  debugger;  
  this.setState({cust:newProps.selectedCustomer.customer});

  };
  componentDidUpdate(oldProps,oldState){
    debugger;
    

  };
  saveCustomer(){
    debugger;
    const customer={
    custId:this.inputcid.value,
    custName:this.inputcpm.value,
    address: this.inputadd.value,
    phone:this.inputph.value,
    landline:this.inputlandline.value,
    emailId:this.inputemail.value,
    vatNo:this.inputvat.value,
    status:1,
    type:'Manual',
    dateCreated:'2018-05-05',
    dateModified:'2018-05-05'
    }
  
    this.props.action.saveCustomerAction(customer);
    this.inputcpm.value='',
    this.inputadd.value='',
    this.inputph.value='',
    this.inputlandline.value='',
    this.emailId.value='',
    this.inputvat.value=''
  }
  onChangeFunction(component, value){
    this.setValue({value:value});
}

  render(){
    debugger;    
  return (
    <main className="app-content">
      <div className="app-title">
        <div>
          <h1>Customer</h1>
        </div>
        <ul className="app-breadcrumb breadcrumb">
          <li className="breadcrumb-item"><i className="fa fa-home fa-lg"></i></li>
          <li className="breadcrumb-item"><NavLink to="/customer" >Add</NavLink></li>
          <li className="breadcrumb-item"><NavLink to="/CustomerView" >View</NavLink></li>
          {/* <li className="breadcrumb-item"><a href="#">View</a></li> */}
        </ul>
      </div>
      <div className="row center">
        <div className="col-md-12">
          <div className="tile">
            {/* <h3 className="tile-title">Vertical Form</h3> */}
            <div className="tile-body">
              <form>
                <div className="form-group">
                <input type="hidden" value={this.state.cust.custId}  ref={inputcid=>this.inputcid=inputcid}/>
                  <label className="control-label">Company Name</label>
                  <input className="form-control" value={this.state.cust.custName} onChange={this.onChangeFunction} type="text" ref={inputcpm=>this.inputcpm=inputcpm}/>
                </div>
                <div className="form-group">
                  <label className="control-label">Address</label>
                  <textarea className="form-control" rows="4" value={this.state.cust.address} onChange={this.onChangeFunction} ref={inputadd=>this.inputadd=inputadd} ></textarea>
                </div>
                <div className="form-group">
                  <label className="control-label">Landline</label>
                  <input className="form-control" type="text" value={this.state.cust.landline} onChange={this.onChangeFunction} ref={inputlandline=>this.inputlandline=inputlandline} />
                </div>
                <div className="form-group">
                  <label className="control-label">Phone No</label>
                  <input className="form-control" type="number" value={this.state.cust.phone} onChange={this.onChangeFunction} ref={inputph=>this.inputph=inputph} />
                </div>
                <div className="form-group">
                  <label className="control-label">Email</label>
                  <input className="form-control" type="email" value={this.state.cust.emailId} onChange={this.onChangeFunction} ref={inputemail=>this.inputemail=inputemail} />
                </div>
                <div className="form-group">
                  <label className="control-label">Vat No</label>
                  <input className="form-control" type="text" value={this.state.cust.vatNo} onChange={this.onChangeFunction} ref={inputvat=>this.inputvat=inputvat} />
                </div>
              </form>
            </div>
            <div className="tile-footer">
            <button className="btn btn-primary" type="button" onClick={this.saveCustomer} ><i className="fa fa-fw fa-lg fa-check-circle"></i>{this.props.selectedCustomer.customer===undefined?'Save':'Update'}</button>&nbsp;&nbsp;&nbsp;<a className="btn btn-secondary" href="#"><i className="fa fa-fw fa-lg fa-times-circle"></i>Cancel</a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
};

const mapStateToProps=(state)=>({
  selectedCustomer:state.selectedCustomerReducer
})

const mapDispatchToProps=dispatch=>({
  action:bindActionCreators(customerAction,dispatch)
})

export default connect(mapStateToProps,mapDispatchToProps)(Customer);
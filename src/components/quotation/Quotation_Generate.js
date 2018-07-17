import React,{Component} from 'react';
import { NavLink } from 'react-router-dom';
import { bindActionCreators } from '../../../node_modules/redux';
import * as customerAction from '../../action/CustomerAction';
import * as productAction from '../../action/ProductAction';
import {connect} from 'react-redux';
import toastr from 'toastr';

import DatePicker from 'react-datepicker';
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';

class Quotation_Generate extends Component{
    constructor(props){
        super(props);
        this.state={Items:[],ToTExVat:0,vat:0,startDate: moment()}
        this.handleChange = this.handleChange.bind(this);
        this.addProduct=this.addProduct.bind(this);
        this.deleteProduct=this.deleteProduct.bind(this);
    }
    handleChange(date) {
        this.setState({
          startDate: date
        });
      }
    componentDidMount() {
        this.props.action.getProductsAction()
            .catch(error => {
                toastr.error(error);
            });
        
        this.props.action.getCustomersAction()
            .catch(error => {
                toastr.error(error);
            });
        }
    onChangeFunction(component, value){
        this.txtTotalPrice.value=this.txtQty.value*this.txtUnitPrice.value;
    }
    addProduct(){
        var idGen=this.state.Items.length>0?(parseInt(this.state.Items.length)+1):1
        const product={
            id:idGen,
            description:this.selectDescr.value,
            qty:this.txtQty.value,
            unitprice:this.txtUnitPrice.value,
            total:this.txtTotalPrice.value
        }
        var Total=this.state.ToTExVat;
        Total=parseFloat(Total)+parseFloat(this.txtTotalPrice.value);
        // var vat=this.state.vat;
        // vat=(parseFloat(Total)/100)*parseFloat(this.vat.value)
        const prodcuts=this.state.Items;
        prodcuts.push(product);
        this.setState({Items:prodcuts,ToTExVat:Total,vat:this.vat.value});
        this.selectDescr.value='',
        this.txtQty.value='',
        this.txtUnitPrice.value='',
        this.txtTotalPrice.value=''
    }
    deleteProduct(id){
    const products=this.state.Items;
    const filteredproduct=products.filter(product=>{
      return product.id!==id;
    })
    this.setState({Items:filteredproduct});
    }
  render(){
      var style={};
      if(this.state.Items.length===0)
      style.display = 'none'
      debugger;
  return (
    <main className="app-content">
      <div className="app-title">
        <div>
          <h1>Generate Quotation</h1>
        </div>
        <ul className="app-breadcrumb breadcrumb">
          <li className="breadcrumb-item"><i className="fa fa-home fa-lg"></i></li>
          <li className="breadcrumb-item"><NavLink to="/customer" >Add</NavLink></li>
          <li className="breadcrumb-item"><NavLink to="/CustomerView" >View</NavLink></li>
        </ul>
      </div>
      <div className="row center">
        <div className="col-md-12">
          <div className="tile">
            <div className="row">
              <div className="col-lg-4">
                  <div className="form-group">
                    <label>Customer</label>
                    <select className="form-control" ref={selectProduct=>this.selectProduct=selectProduct}>
                      {this.props.customers.customers.map(cust=>(  
                              <option defaultValue={cust.custID}>{cust.custName}</option>
                      ))}
                    </select>
                  </div>
              </div>
              <div className="col-lg-4">
                  <div className="form-group">
                    <label>Quotation No</label>
                    <input className="form-control" ref={inputQTno=>this.inputQTno=inputQTno} type="text" />
                  </div>
                </div>
              <div className="col-lg-4">
                  <div className="form-group">
                    <label >Quotation Date</label>
                    {/* <input className="form-control" ref={inputQTdate=>this.inputQTdate=inputQTdate} type="text" /> */}
                    <DatePicker className="form-control" selected={this.state.startDate} onChange={this.handleChange} ref={inputQTdate=>this.inputQTdate=inputQTdate}/>
                  </div>
                </div>
            </div>
            <table className="table table-hover table-bordered table-responsive-md">
            <thead className="colorBlue">
            <tr>
            <th>
                Item
                No.
            </th>
            <th className="text-center">
                Description
            </th>
            <th>
                Qty.
            </th>
            <th className="text-center">
                Unit Price</th>
            <th className="text-center">
                Total Price<br />
            </th>
            <th>
                Action
            </th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>
            </td>
            <td className="product-select">
            <select className="form-control" ref={selectDescr=>this.selectDescr=selectDescr}>
            {this.props.products.products.map(prod=>(  
                <option defaultValue={prod.productid}>{prod.productName}</option>
            ))}
            </select>
            </td>
            <td>
                <input type="text" ref={txtQty=>this.txtQty=txtQty} className="form-control" onChange={this.onChangeFunction.bind(this)} />
            </td>
            <td className="text-right">
                <input type="number" ref={txtUnitPrice=>this.txtUnitPrice=txtUnitPrice} onChange={this.onChangeFunction.bind(this)} className="form-control"/>
            </td>
            <td className="text-right">
                <input type="number" ref={txtTotalPrice=>this.txtTotalPrice=txtTotalPrice} className="form-control"/>
            </td>
            <td>
                <input type="button" value="Add" className="btn btn-primary" onClick={this.addProduct} />
            </td>
        </tr>
        <tr>
            <td>
            </td>
            <td>
                {/* <input type="button" value="Add New Product & Service" className="btn btn-default" /> */}
            </td>
            <td colSpan={2}>
            </td>
            <td className="colorBlue">
                <b>Vat %</b>
            </td>
            <td>
                <select ref={vat=>this.vat=vat} className="form-control">
                <option>5</option>
                <option>6</option>
                <option>7</option>
                <option>8</option>
                <option>9</option>
                <option>10</option>
                </select>
            </td>
        </tr>
    </tbody>
</table><br/>


<div style={style}><table className="table table-hover table-bordered table-responsive-md">
    <thead className="colorBlue">
        <tr>
            <th>
                Item
                No.
            </th>
            <th className="text-center">
                Description
            </th>
            <th>
                Qty.
            </th>
            <th className="text-center">
                Unit Price</th>
            <th className="text-center">
                Total Price<br />
            </th>
            <th >
                Action
            </th>
        </tr>
    </thead>
    <tbody>
        {
            this.state.Items.map(item=>{
            return(
                <tr>
                <td>
                {item.id}
                </td>
                <td>
                {item.description}
                </td>
                <td>
                   {item.qty}
                </td>
                <td className="text-right">
                    {item.unitprice}
                </td>
                <td className="text-right">
                    {item.total}
                </td>
                <td>
                <i className="fa fa-trash" onClick={() => this.deleteProduct(item.id)}></i>
                </td>
            </tr>
            )
            
        })}
        <tr>
        <td colSpan="4" className="text-right">
        Total Exclusive Vat {this.state.vat}%
        </td>
        <td className="text-right">
        {this.state.ToTExVat}
        </td>
        </tr>
        <tr>
        <td colSpan="4" className="text-right">
        Vat {this.state.vat}%
        </td>
        <td className="text-right">
        {(parseFloat(this.state.ToTExVat)/100)*parseFloat(this.state.vat)}
        </td>
        </tr>
        <tr>
        <td colSpan="4" className="text-right">
        Total
        </td>
        <td className="text-right">
        {this.state.ToTExVat+((parseFloat(this.state.ToTExVat)/100)*parseFloat(this.state.vat))}
        </td>
        </tr>
        
    </tbody>
</table></div>
<div className="row">
    <label>
        <b>Terms & Conditions : </b>
    </label>
    <textarea className="form-control" rows="4"/>
</div>
<div className="row">
    <div className="col-md-12">
        <div className="modal-footer">
            <input type="button" id="btnSave" value="Generate Quotation" className="btn btn-success"
            />
            <input type="button" id="btnUpdate" value="Update Quotation" className="btn btn-success"
                 />
            <input type="button" id="btnClear" className="btn btn-danger" value="Clear" />
        </div>
    </div>
</div>
          </div>
        </div>
      </div>
    </main>
  );
}
};

const mapStateToProps=(state)=>{
    debugger
    return{
    products:state.productReducer,
    customers:state.customerReducer
};
};

const mapDispatchToProps=dispatch=>({
  action:bindActionCreators(Object.assign({},productAction,customerAction),dispatch)
  
})

export default connect(mapStateToProps,mapDispatchToProps)(Quotation_Generate);
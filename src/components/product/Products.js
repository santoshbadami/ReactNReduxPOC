import React from 'react';
import ProductAdd from '../product/ProductAdd'
import ProductView from '../product/ProductView'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as productAction from '../../action/ProductAction';
import toastr from 'toastr';

class Products extends React.Component{
  constructor(){
    super();
    this.handleSave=this.handleSave.bind(this);
    this.deleteProduct=this.deleteProduct.bind(this);
    this.editProduct=this.editProduct.bind(this);
  }
  componentDidMount() {
    this.props.action.getProductsAction()
        .catch(error => {
            toastr.error(error);
        });
    }
  handleSave(pid,productName,unitPrice){
    const product={
    productid:pid,
    productName:productName,
    unitPrice:unitPrice
    }
    this.props.action.saveProductAction(product)
      .catch(error=>{
        toastr.error(error);
      })
   }
    deleteProduct(id){
      debugger;
    this.props.action.deleteProductAction(id)
    .catch(error => {
    toastr.error(error);
     });
  }
    editProduct(id){
      this.props.action.getProductAction(id)
      .catch(error=>{
        toastr.error(error);
      });
  }
  render(){
    const {products}=this.props;
    const {product}=this.props.selectedProduct;
  return (
    <main className="app-content">
      <div className="app-title">
        <div>
          <h1>Products</h1>
        </div>
        <ul className="app-breadcrumb breadcrumb">
          <li className="breadcrumb-item"><i className="fa fa-home fa-lg"></i></li>
          <li className="breadcrumb-item">Forms</li>
          <li className="breadcrumb-item"><a href="#">Sample Forms</a></li>
        </ul>
      </div>
      <div className="row">
      <ProductAdd {...product} handleSave={this.handleSave}/>
      <div className="col-md-6">
    <div className="tile">
      {/* <h3 className="tile-title">Register</h3> */}
      <table className="table table-hover">
        <thead>
          <tr>
            <th>#</th>
            <th>Product</th>
            <th>Unit Price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
        {
          products.products.map(product=>{
          return(<ProductView product={product} deleteProduct={this.deleteProduct} editProduct={this.editProduct}/>); 
           })
        }
        </tbody>
      </table>
    </div>
  </div>
      </div>
    </main>
  );
}
};

const mapStateToProps=(state)=>{
  return{
    products:state.productreducer,
    selectedProduct:state.selectedProductReducer
  }
}

const mapDispatchToProps=(dispatch)=>({
  action:bindActionCreators(productAction,dispatch)
})

export default connect(mapStateToProps,mapDispatchToProps)(Products);
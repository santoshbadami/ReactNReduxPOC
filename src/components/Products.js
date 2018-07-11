import React from 'react';
import ProductAdd from '../components/ProductAdd'
import ProductView from '../components/ProductView'

export default class Products extends React.Component{
  constructor(){
    super();
    this.handleSave=this.handleSave.bind(this);
  }
  handleSave(){
  alert('products');
}
  render(){
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
      <ProductAdd handleSave={this.handleSave}/>
      <ProductView/>
      </div>
    </main>
  );
}
};
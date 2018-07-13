import React from 'react';


class ProductView extends React.Component{
  constructor(){
    super();
    this.deleteProduct=this.deleteProduct.bind(this);
    this.editProduct=this.editProduct.bind(this);
  }
  deleteProduct(){
    if(confirm('Are you sure!'))
    this.props.deleteProduct(this.props.product.productid);
  }
  editProduct(){
    this.props.editProduct(this.props.product.productid)
  }
  render(){
    const {product}=this.props;
  return (
    <tr>
     <td>{product.productid}</td>
     <td>{product.productName}</td>
     <td>{product.unitPrice}</td>
     <td>
     <i className="fa fa-edit" onClick={this.editProduct}></i> {`     `}
     <i className="fa fa-trash" onClick={this.deleteProduct}></i>
     </td>
     </tr>
);
}
};


export default ProductView;
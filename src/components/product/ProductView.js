import React from 'react';


class ProductView extends React.Component{
  constructor(){
    super();
    this.deleteProduct=this.deleteProduct.bind(this);
  }
  deleteProduct(){
    if(confirm('Are you sure!'))
    this.props.deleteProduct(this.props.product.productid);
  }
  render(){
    const {product}=this.props;
  return (
    <tr>
      <td>1</td>
     <td>{product.productName}</td>
     <td>{product.unitPrice}</td>
     <td><button btn btn-default btn-sm><i className="fa fa-edit"></i></button> 
     <button onClick={this.deleteProduct}>Delete</button>
     <a class="btn btn-default btn-sm"><i className="fa fa-edit"></i></a>
     <a class="btn btn-default btn-sm"><i className="fa fa-trash"></i></a>
     </td>
     </tr>
);
}
};


export default ProductView;
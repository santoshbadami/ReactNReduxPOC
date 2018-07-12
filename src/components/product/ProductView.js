import React from 'react';


class ProductView extends React.Component{
  render(){
    const {product}=this.props;
  return (
    <tr>
      <td>1</td>
     <td>{product.productName}</td>
     <td>{product.unitPrice}</td>
     <td>Action</td>
     </tr>
);
}
};


export default ProductView;
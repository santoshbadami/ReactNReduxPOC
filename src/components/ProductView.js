import React from 'react';


const ProductView = () => {
  return (
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
          <tr>
            <td>1</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          <tr>
            <td>3</td>
            <td>Larry</td>
            <td>the Bird</td>
            <td>@twitter</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
);
};


export default ProductView;
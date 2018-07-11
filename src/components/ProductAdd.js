import React from 'react';


const ProductAdd = () => {
  return (
      <div className="col-md-6">
      <div className="tile">
        {/* <h3 className="tile-title">Vertical Form</h3> */}
        <div className="tile-body">
          <form>
            <div className="form-group">
              <label className="control-label">Product</label>
              <input className="form-control" type="text"/>
            </div>
            <div className="form-group">
              <label className="control-label">Unit Price</label>
              <input className="form-control" type="number" />
            </div>
          </form>
        </div>
        <div className="tile-footer">
          <button className="btn btn-primary" type="button"><i className="fa fa-fw fa-lg fa-check-circle"></i>Save</button>&nbsp;&nbsp;&nbsp;<a className="btn btn-secondary" href="#"><i className="fa fa-fw fa-lg fa-times-circle"></i>Cancel</a>
        </div>
      </div>
    </div>
);
};


export default ProductAdd;
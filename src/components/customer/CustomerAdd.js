import React from 'react';
import { NavLink } from 'react-router-dom';

const Customer = () => {
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
                  <label className="control-label">Company Name</label>
                  <input className="form-control" type="text"/>
                </div>
                <div className="form-group">
                  <label className="control-label">Address</label>
                  <textarea className="form-control" rows="4" ></textarea>
                </div>
                <div className="form-group">
                  <label className="control-label">Landline</label>
                  <input className="form-control" type="email" />
                </div>
                <div className="form-group">
                  <label className="control-label">Phone No</label>
                  <input className="form-control" type="email" />
                </div>
                <div className="form-group">
                  <label className="control-label">Email</label>
                  <input className="form-control" type="email" />
                </div>
                <div className="form-group">
                  <label className="control-label">Vat No</label>
                  <input className="form-control" type="email" />
                </div>
              </form>
            </div>
            <div className="tile-footer">
              <button className="btn btn-primary" type="button"><i className="fa fa-fw fa-lg fa-check-circle"></i>Save</button>&nbsp;&nbsp;&nbsp;<a className="btn btn-secondary" href="#"><i className="fa fa-fw fa-lg fa-times-circle"></i>Cancel</a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};


export default Customer;
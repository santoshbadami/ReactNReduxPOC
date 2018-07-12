import React from 'react';

export default class  ProductAdd extends React.Component{
  constructor(){
    super();
    this.handleSave = this.handleSave.bind(this);
  }
  handleSave(){
    this.props.handleSave(this.inputproduct.value,this.inputup.value);
    this.inputproduct.value='';
    this.inputup.value='';
  }
  render(){
  return (
      <div className="col-md-6">
      <div className="tile">
        {/* <h3 className="tile-title">Vertical Form</h3> */}
        <div className="tile-body">
          <form>
            <div className="form-group">
              <label className="control-label">Product</label>
              <input className="form-control" type="text" ref={inputproduct=>this.inputproduct=inputproduct}/>
            </div>
            <div className="form-group">
              <label className="control-label">Unit Price</label>
              <input className="form-control" type="number" ref={inputup=>this.inputup=inputup}/>
            </div>
          </form>
        </div>
        <div className="tile-footer">
          <button className="btn btn-primary" type="button" onClick={this.handleSave} ><i className="fa fa-fw fa-lg fa-check-circle"></i>Save</button>&nbsp;&nbsp;&nbsp;<a className="btn btn-secondary" href="#"><i className="fa fa-fw fa-lg fa-times-circle"></i>Cancel</a>
        </div>
      </div>
    </div>
  );
}
}
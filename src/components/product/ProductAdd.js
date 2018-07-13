import React from 'react';

export default class  ProductAdd extends React.Component{
  constructor(){
    super();
    this.handleSave = this.handleSave.bind(this);
  }
  handleSave(){
    debugger
    this.props.handleSave(Number(this.inputpid.value),this.inputproduct.value,this.inputup.value);
    this.inputproduct.value='';
    this.inputup.value='';
  }
  onChangeFunction(component, value){
    this.setValue({value:value});
}
  render(){
  return (
      <div className="col-md-6">
      <div className="tile">
        {/* <h3 className="tile-title">Vertical Form</h3> */}
        <div className="tile-body">
          <form>
          <input type="hidden" value={this.props===undefined?undefined:this.props.productid}  ref={inputpid=>this.inputpid=inputpid}/>
            <div className="form-group">
              <label className="control-label">Product</label>
              {/* <input value={this.props.productName} onChange={this.onChangeFunction} ref={inputproduct1=>this.inputproduct1=inputproduct1}/> */}
              <input className="form-control" value={this.props.productName} onChange={this.onChangeFunction} type="text" ref={inputproduct=>this.inputproduct=inputproduct}/>
            </div>
            <div className="form-group">
              <label className="control-label">Unit Price</label>
              <input className="form-control" type="number" value={this.props.unitPrice} onChange={this.onChangeFunction} ref={inputup=>this.inputup=inputup}/>
            </div>
          </form>
        </div>
        <div className="tile-footer">
          <button className="btn btn-primary" type="button" onClick={this.handleSave} ><i className="fa fa-fw fa-lg fa-check-circle"></i>{this.props.productName===undefined?'Save':'Update'}</button>&nbsp;&nbsp;&nbsp;<a className="btn btn-secondary" href="#"><i className="fa fa-fw fa-lg fa-times-circle"></i>Cancel</a>
        </div>
      </div>
    </div>
  );
}
}
import React,{Component} from 'react';
import { NavLink } from 'react-router-dom';
import { bindActionCreators } from '../../../node_modules/redux';
import * as quotationAction from '../../action/CustomerAction';
import {connect} from 'react-redux';

class Quotation_Generate extends Component{
  render(){
  return (
    <main className="app-content">
      testing
    </main>
  );
}
};

const mapStateToProps=(state)=>({
  
})

const mapDispatchToProps=dispatch=>({
  action:bindActionCreators(quotationAction,dispatch)
})

export default connect(mapStateToProps,mapDispatchToProps)(Quotation_Generate);
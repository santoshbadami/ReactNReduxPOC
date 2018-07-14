import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';

export const HeaderNavContainer = ({apiCallsInProgress}) => {
    return (
      <div>
        <header className="app-header">
        <NavLink className="app-header__logo" activeClassName="active" to="/customer" >Customer</NavLink>
        <NavLink className="app-header__logo" activeClassName="active" to="/Products" >Product</NavLink>
        <NavLink className="app-header__logo" activeClassName="active" to="/quotation" >Quotation</NavLink>
      <ul className="app-nav">
        <li className="dropdown"><a className="app-nav__item" href="#" data-toggle="dropdown" aria-label="Open Profile Menu"><i className="fa fa-user fa-lg"></i></a>
          <ul className="dropdown-menu settings-menu dropdown-menu-right">
            <li><a className="dropdown-item" href="page-user.html"><i className="fa fa-cog fa-lg"></i> Settings</a></li>
            <li><a className="dropdown-item" href="page-user.html"><i className="fa fa-user fa-lg"></i> Profile</a></li>
            <li><a className="dropdown-item" href="page-login.html"><i className="fa fa-sign-out fa-lg"></i> Logout</a></li>
          </ul>
        </li>
      </ul>
    </header>
<div>
</div>
</div>
    );
};




HeaderNavContainer.propTypes = {
    // apiCallsInProgress: PropTypes.number.isRequired
};



const mapStateToProps = state => ({
    // apiCallsInProgress: state.apiReducer.apiCallsInProgress
});



export default connect(mapStateToProps)(HeaderNavContainer);


import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import Spinner from '../common/Spinner';


export const HeaderNavContainer = ({apiCallsInProgress}) => {
    return (
      <div>
        <header className="app-header">
        <NavLink className="app-header__logo" activeClassName="active" to="/customer" >Customer</NavLink>
        <NavLink className="app-header__logo" activeClassName="active" to="/Products" >Product</NavLink>
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


        // <nav className="navbar navbar-toggleable-sm bg-info navbar-inverse">
        //     <div className="container">
        //         <button className="navbar-toggler" data-toggle="collapse" data-target="#mainNav">
        //             <span className="navbar-toggler-icon" />
        //         </button>

        //         <div className="collapse navbar-collapse" id="mainNav">
        //             <div className="navbar-nav">
        //                 <NavLink className="nav-item nav-link" exact activeClassName="active" to="/">Home</NavLink>
        //                 <NavLink className="nav-item nav-link" activeClassName="active" to="/courses" >Courses</NavLink>
        //                 <NavLink className="nav-item nav-link" activeClassName="active" to="/about">About</NavLink>

        //                 <span className="ml-5">
        //                     {apiCallsInProgress > 0 && <Spinner className="nav-item nav-link" interval={100} dots={20} />}
        //                 </span>
        //             </div>
        //         </div>
        //     </div>
        // </nav>
    );
};




HeaderNavContainer.propTypes = {
    apiCallsInProgress: PropTypes.number.isRequired
};



const mapStateToProps = state => ({
    apiCallsInProgress: state.apiReducer.apiCallsInProgress
});



export default connect(mapStateToProps)(HeaderNavContainer);


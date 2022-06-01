import React from "react";
import { Link } from 'react-router-dom'
import '../index.css'

function NavBar () {

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
          <div className="container">
            <Link className="navbar-brand" to={'/home'}>
            <img src="/assets/logo2.png" style={{height: '30px', paddingRight: '10px'}}/>
              Ordering Simplified 
            </Link>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <Link className="nav-link" to={'/login'}>
                    Login
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={'/sign-up'}>
                    Sign up
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
    )
}

export default NavBar;
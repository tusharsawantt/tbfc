import React, { Component } from "react";
// import { Header } from "react-router-dom";
class Header extends Component {
  render() {
    return(
        <div>
      <div className="container-fluid dark-bg ">
        <header className="headerarea container ">
          <div className="row">
            <div className="col-4 col-lg-3 col-md-2 text-start tablogo logo ">
              <a href="/">
                {" "}
                <img
                  src="assets/images/logo.svg"
                  className="mainlogo"
                  alt="TBFC"
                  title="TBFC"
                />{" "}
              </a>
            </div>
            <div className="col-12 col-lg-9 col-md-10 topnav">
              <nav>
                <input type="checkbox" id="nav" className="hidden" />
                <label htmlFor="nav" className="nav-open">
                  <i></i>
                  <i></i>
                  <i></i>
                </label>
                <div className="nav-container">
                  <ul>
                    <li>
                      {" "}
                      <a className="active" href="/">
                        HOME
                      </a>
                    </li>
                    <li>
                      <a href="/About">ABOUT US </a>
                    </li>
                    <li>
                      <a href="/OurTeam">OUR TEAM</a>
                    </li>
                    <li>
                      <a href="/BlendIn">BLEND IN</a>
                    </li>
                  </ul>
                </div>
              </nav>
            </div>
          </div>
        </header>
      </div>
    </div>
    )
    
  }
}

export default Header;

import React, { Component } from "react";

class Footer extends Component {
  render() {
    return (
      <div>
        <footer className="Sectionpadding footerholder">
          <div className="container">
            <div className="row c">
              <div className="col-12 col-lg-4 mf copyR ">
                © The Blended Finance Company 2023. All Rights Reserved
              </div>
              <div className="col-12 col-lg-7 mf">
                <ul>
                  <li>
                    <a href="#">Privacy Policy</a>
                  </li>
                  <li>
                    <a href="#">Cookie Policy</a>
                  </li>
                  <li>
                    <a href="#">Terms of Use</a>
                  </li>
                  <li>
                    <a href="#">Subscribe</a>
                  </li> 
                  <li>
                    <a href="OurTeam">Our Team</a>
                  </li>
                </ul>
              </div>
              <div className="col-12 col-lg-1 mf flogo">
                <img src="assets/images/favicon.svg" className="img-fluid" />
              </div>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}

export default Footer;

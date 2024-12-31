import React, {Component} from "react";
import Header from "./Header";
class BannerSection extends Component{
    render(){
        return(
            <section className="banner">
          <div id="banner-fluid">
            <picture>
              <source
                media="(min-width:1400px)"
                srcSet="assets/images/banner-image.jpg"
              />
              <source
                media="(min-width:768px)"
                srcSet="assets/images/banner-image.jpg"
              />
              <img
                src="assets/images/mobile_banner.jpg"
                alt="Flowers"
                style={{width:'auto'}}
              />
            </picture>
            <div className=" Bannertxtholder">
              <div className="container text-start">
                <div className="row">
                  <div className="col-12 col-lg-7 col-md-12">
                    <h1>
                      When money aligns with meaning,
                      <br /> the opportunities are endless
                    </h1>
                    <br />
                    <span className="leadTxt">
                      We make Blended Finance simple, efficient & scalable
                    </span>
                  </div>
                  <div className="col-12 col-lg-5 col-md-12 btnholderbanner">
                    <a href="about-us.html" className="blueBtn">
                      Know more{" "}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div id="container">
            <Header/>
          </div>
        </section>
        )
    }
}
export default BannerSection;
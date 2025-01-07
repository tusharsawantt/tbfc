import React from "react";
import Header from "../components/Header";
import BannerSection from "../components/BannerSection";
import Footer from "../components/Footer";
import ContactusSection from "../components/ContactusSection";

function About() {
  return (
    <div>
      <div className="wrapper aboutus">
        {/* <!--    Banner and menu part Start--> */}

        <section class="banner">
          <div id="banner-fluid">
            <picture>
              <source
                media="(min-width:1400px)"
                srcset="assets/images/about-banner-desktop.jpg"
              />
              <source
                media="(min-width:768px)"
                srcset="assets/images/about-banner-desktop.jpg"
              />
              <img
                src="assets/images/about-us-mobile-banner.jpg"
                alt="Flowers"
                style={{ width: "auto" }}
              />
            </picture>

            <div class=" Bannertxtholder">
              <div class="container text-start">
                <div class="row">
                  <div class="col-12 col-lg-8 col-md-12">
                    <h1>
                      Meaningfully addressing the world's most pressing
                      development challenges
                    </h1>
                    <br />
                    <span class="leadTxt">
                      We unlock the world of blended finance by combining the
                      power of high-quality design, rapid fundraising, and
                      seamless performance management- all under one roof. 
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="container">
            <div class="row">
              <div class="col-12 col-lg-12 text-center colearn">
                <h2 class="">Our Distinct Approach</h2>
                <span class="text-center capstxt">
                  Making Every Challenge Our Next Adventure
                </span>
              </div>
            </div>
          </div>

          <div id="container">
            <Header />
          </div>
        </section>

        {/* <!--    Banner and menu part End--> */}

        {/* <!--    3 verticales section start   --> */}

        <div className="container-fluid Sectionpadding verticals">
          <div className="cardSlider__section">
            <div className="swiper cardSlider">
              <div className="swiper-wrapper">
                <div className="swiper-slide cardItem">
                  <div className="grid">
                    <figure className="effect-sadie">
                      <img
                        src="assets/images/oda-1.jpg"
                        alt="Bring large-scale transformation with solutions we build"
                      />
                      <figcaption>
                        <h2>
                          Bring large-scale transformation with solutions we
                          build
                          <img
                            src="assets/images/arrow.svg"
                            className="arrowBtn"
                          />
                        </h2>

                        <ul>
                          <li>Create modular structures</li>
                          <li>Build on successful pilots</li>
                          <li>Establish platforms</li>
                        </ul>
                      </figcaption>
                    </figure>
                  </div>
                </div>

                <div className="swiper-slide cardItem">
                  <div className="grid">
                    <figure className="effect-sadie">
                      <img
                        src="assets/images/oda-2.jpg"
                        alt="Expand the playing field"
                      />
                      <figcaption>
                        <h2>
                          Expand the <br />
                          playing field
                          <img
                            src="assets/images/arrow.svg"
                            className="arrowBtn"
                          />
                        </h2>

                        <ul>
                          <li>New Structures</li>
                          <li>New Funders</li>
                          <li>New Sectors</li>
                        </ul>
                      </figcaption>
                    </figure>
                  </div>
                </div>

                <div className="swiper-slide cardItem">
                  <div className="grid">
                    <figure className="effect-sadie">
                      <img
                        src="assets/images/oda-3.jpg"
                        alt="Standardize to improve efficiency & minimize overheads"
                      />
                      <figcaption>
                        <h2>
                          Standardize to improve efficiency & minimize overheads
                          <img
                            src="assets/images/arrow.svg"
                            className="arrowBtn"
                          />
                        </h2>

                        <ul>
                          <li>Regulatory Compliance</li>
                          <li>Contracts</li>
                          <li>Rate Cards</li>
                          <li>Monitoring & Evaluation</li>
                        </ul>
                      </figcaption>
                    </figure>
                  </div>
                </div>
              </div>
            </div>
            <div className="swiper-pagination"></div>
            <div className="swiper-button-prev"></div>
            <div className="swiper-button-next"></div>
          </div>
        </div>

        {/* <!--    3 verticales section End   -->       */}

        {/* <!--CTA BFBB section  Start    --> */}
        <section class="bfbb Sectionpadding">
          <div class="container text-center">
            <h2>We Are Backed By Pioneers In Impact Investing.</h2>

            <span>
              the Michael & Susan Dell Foundation, Asha Impact & ISDM 
            </span>

            <p>
              <a href="#" class="blueBtn">
                LEARN MORE
              </a>
            </p>
            <p>&nbsp;</p>
          </div>
        </section>

        {/* <!--CTA BFBB section  End    -->       */}

        {/* <!--circle graphic  Start    --> */}

        <section className="Sectionpadding creemC">
          <div className="container">
            <h2 className="text-center abgiftitle">
              How Blended Finance Works
            </h2>

            <div className="row">
              <div className="col-12 col-lg-7 col-md-12">
                <img
                  src="assets/images/TBFC-About-us-gif.gif"
                  className="img-fluid"
                />
              </div>

              <div className="col-12 col-lg-5 col-md-12 text-center giftxt">
                <h5>Illustrative structures </h5>

                <ul>
                  <li>Design Stage Grants</li>
                  <li>Technical Assistance</li>
                  <li>Guarantees or Risk Sharing</li>
                  <li>Result-based Financing</li>
                  <li>Concessional Debt or Equity</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* <!--circle graphic  End    -->     */}

        {/* <!--footer section      --> */}

        <Footer />
      </div>

      {/* <!--    Default script--> */}

      <script src="assets/js/jquery-1.12.3.min.js"></script>

      {/* <!-- Option 2: Separate Popper and Bootstrap JS --> */}

      <script src="assets/js/popper.min.js"></script>
      <script src="assets/js/bootstrap.min.js"></script>

      {/* <!--    image swipe effect for mobile script--> */}

      <script src="assets/js/swiper-bundle.min.js"></script>
      {/* // image swiper - mobile only // */}
    </div>
  );
}

export default About;

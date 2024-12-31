import React from "react";
import Header from '../components/Header';
import Footer from "../components/Footer";
import BannerSection from "../components/BannerSection";
import ContactusSection from "../components/ContactusSection";

function Index() {
  return (
    <div>
      <div className="wrapper home">
        <BannerSection/>

        <div className="container-fluid Sectionpadding verticals">
          <div className="cardSlider__section">
            <div className="swiper cardSlider">
              <div className="swiper-wrapper">
                <div className="swiper-slide cardItem">
                  <div className="grid">
                    <figure className="effect-sadie">
                      <img
                        src="assets/images/design-structure-new.jpg"
                        alt="Design & Structuring"
                      />
                      <figcaption>
                        <h2>
                          Design & Structuring
                          <img
                            src="assets/images/arrow.svg"
                            className="arrowBtn"
                          />
                        </h2>
                        <ul>
                          <li>Deep-dive to gather unique insights</li>
                          <li>Learn from past successes and failures</li>
                          <li>
                            Design innovatively for scale & sustainability
                          </li>
                        </ul>
                      </figcaption>
                    </figure>
                  </div>
                </div>

                <div className="swiper-slide cardItem">
                  <div className="grid">
                    <figure className="effect-sadie">
                      <img
                        src="assets/images/Capital-Mobilization.jpg"
                        alt="Capital Mobilization"
                      />
                      <figcaption>
                        <h2>
                          Capital Mobilization
                          <img
                            src="assets/images/arrow.svg"
                            className="arrowBtn"
                          />
                        </h2>

                        <ul>
                          <li>Engage domestic & international funders</li>
                          <li>Maximize philanthropic leverage</li>
                          <li>Mobilize funds from untapped sources</li>
                        </ul>
                      </figcaption>
                    </figure>
                  </div>
                </div>
                <div className="swiper-slide cardItem">
                  <div className="grid">
                    <figure className="effect-sadie">
                      <img
                        src="assets/images/Performance-Management.jpg"
                        alt="Performance Management"
                      />
                      <figcaption>
                        <h2>
                          Performance Management
                          <img
                            src="assets/images/arrow.svg"
                            className="arrowBtn"
                          />
                        </h2>
                        <ul>
                          <li>
                            Implement strong performance management & governance
                            systems
                          </li>
                          <li>
                            Boost implementation partner capacity to maximize
                            impact
                          </li>
                          <li>
                            Use standard measurement & evaluation frameworks
                          </li>
                        </ul>
                      </figcaption>
                    </figure>
                  </div>
                </div>

                <div className="swiper-slide cardItem">
                  <div className="grid">
                    <figure className="effect-sadie">
                      <img
                        src="assets/images/MARKET-BUILDING.jpg"
                        alt="MARKET BUILDING"
                      />
                      <figcaption>
                        <h2>
                          MARKET BUILDING
                          <img
                            src="assets/images/arrow.svg"
                            className="arrowBtn"
                          />
                        </h2>
                        <ul>
                          <li>Collaborate with regulatory bodies</li>
                          <li>Make knowledge outputs freely available</li>
                          <li>Co-create & co-learn</li>
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

          <div className="container">
            <div className="row">
              <div className="col-12 col-lg-12 text-center colearn">
                <h2 className="">
                  Maximizing Impact Through Financially Sustainable Solutions
                </h2>
                <span className="text-center capstxt">
                  We design solutions and bring them to life in partnership with
                  mission-aligned organizations.
                </span>

                <p>
                  <a href="about-us.html" className="blueBtn">
                    Read More{" "}
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 4 verticales section End     */}

        {/* circle graphic  Start  */}

        <section className="Sectionpadding creemC">
          <div className="container">
            <div className="row">
              <div className="col-12 col-lg-6 col-md-12 ccim">
                <img src="assets/images/3circle.svg" className="img-fluid" />
              </div>
              <div className="col-12 col-lg-6 col-md-12 text-center txtCreem">
                <div id="carouselExampleInterval">
                  <div className="carousel-inner">
                    <div className="quotes">
                      <p>
                        “Blended finance is a powerful tool to mobilize private
                        capital for SDGs.”
                        <span>The World Bank Group</span>
                      </p>

                      <p>
                        “Relying solely on philanthropy and govt funding cannot
                        address transnational challenges... We must look towards
                        blended finance solutions.”
                        <span>ROCKEFELLER FOUNDATION</span>
                      </p>

                      <p>
                        "Blended finance key to supporting India's energy
                        transition given its ability to drive more private
                        capital to high-impact climate projects."
                        <span>IFC</span>
                      </p>

                      <p>
                        “We need innovative finance solutions to deal with
                        climate change, which could include blended finance and
                        co-financing with the private sector”
                        <span className="last-itm">
                          Amitabh Kant, India’s G20 Sherpa
                        </span>
                      </p>
                    </div>

                    <div className="quotes">
                      <p>
                        “Blended finance is helping the public, private and
                        nonprofit sectors collaborate on projects that would
                        otherwise be very difficult to get off the ground”
                        <span>Bank of America</span>
                      </p>

                      <p>
                        "Capital deployed through blended finance structures can
                        help address the SDG funding gap by enabling the entry
                        of more conventional capital flows into products,
                        companies, and funds which incorporate impact
                        objectives"
                        <span>The Global Impact Investment Network (GIIN)</span>
                      </p>

                      <p>
                        "By mobilizing private capital, blended finance helps
                        create additionality and human impact."
                        <span className="last-itm">USAID</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="counters Sectionpadding">
          <div className="container  text-center">
            <h2>
              Blended Finance Unlocks A $4.2 Trillion Development Opportunity
            </h2>
            <div className="row counterFx" id="counter">
              <div>
                <span className="orange">
                  $
                  <span className="count percent" data-count="200">
                    20
                  </span>{" "}
                  Billion{" "}
                </span>
                <span className="green">Mobilized</span>
              </div>

              <div>
                <span className="orange">
                  <span className="count percent" data-count="100">
                    10
                  </span>
                  +{" "}
                </span>
                <span className="green">Countries</span>
              </div>

              <div>
                <span className="orange">
                  <span className="count percent" data-count="1000">
                    100
                  </span>
                  +{" "}
                </span>
                <span className="green">Transactions</span>
              </div>

              <div>
                <span className="orange">
                  <span className="count percent" data-count="16">
                    0
                  </span>{" "}
                  SDGs
                </span>
                <span className="green">Covered</span>
              </div>

              <div>
                <span className="orange">
                  <span className="count percent" data-count="4">
                    0
                  </span>
                  x Leverage
                </span>
                <span className="green">on Concessional Capital</span>
              </div>
            </div>
          </div>
        </section>

        {/* counters section END   */}

        {/* CTA */}

        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-12 text-center colearn">
              <h2 className="">
                Blended Finance Opportunity In India Is At An Inflection Point
              </h2>
              <span className="text-center capstxt ctabig">
                $5.6 billion mobilized between 2010-2022, CAGR of 19%
              </span>
            </div>
          </div>
        </div>

        {/* CTA END */}

        <section className="imagegrid6 ">
          <div className="container">
            <div className="row">
              <div className="cardSlider__section">
                <div className="swiper cardSlider">
                  <div className="swiper-wrapper">
                    <div className="swiper-slide cardItem">
                      <div className="grid">
                        <figure className="effect-sadie">
                          <picture>
                            <source
                              media="(min-width:1400px)"
                              srcSet="assets/images/Social-Stock-Exchange.jpg"
                              alt="Social-Stock-Exchange"
                            />
                            <source
                              media="(min-width:1024px)"
                              srcSet="assets/images/Social-Stock-Exchange.jpg"
                              alt="Social-Stock-Exchange"
                            />
                            <source
                              media="(min-width:768px)"
                              srcSet="assets/images/tab1-im.jpg"
                              alt="Social-Stock-Exchange"
                            />
                            <img
                              src="assets/images/Fin1-mob.jpg"
                              alt="Social-Stock-Exchange"
                              style={{width:'auto'}}
                            />
                          </picture>

                          <figcaption>
                            <h2>
                              Social Stock Exchange
                              <img
                                src="assets/images/arrow.svg"
                                className="arrowBtn"
                              />
                            </h2>

                            <ul>
                              <a href="#" className="readmoreHover">
                                Read more
                              </a>
                            </ul>
                          </figcaption>
                        </figure>
                      </div>
                    </div>

                    <div className="swiper-slide cardItem">
                      <div className="grid">
                        <figure className="effect-sadie">
                          <picture>
                            <source
                              media="(min-width:1400px)"
                              srcSet="assets/images/pfp.jpg"
                              alt="Public Finance Programs"
                            />
                            <source
                              media="(min-width:1024px)"
                              srcSet="assets/images/pfp.jpg"
                              alt="Public Finance Programs"
                            />
                            <source
                              media="(min-width:768px)"
                              srcSet="assets/images/tab2-im.jpg"
                              alt="Public Finance Programs"
                            />
                            <img
                              src="assets/images/Fin2-mob.jpg"
                              alt="Public Finance Programs"
                              style={{width:'auto'}}
                            />
                          </picture>

                          <figcaption>
                            <h2>
                              Public Finance Programs
                              <img
                                src="assets/images/arrow.svg"
                                className="arrowBtn"
                              />
                            </h2>
                            <ul>
                              <a href="#" className="readmoreHover">
                                Read more
                              </a>
                            </ul>
                          </figcaption>
                        </figure>
                      </div>
                    </div>

                    <div className="swiper-slide cardItem smimag">
                      <div className="grid">
                        <figure className="effect-sadie">
                          <picture>
                            <source
                              media="(min-width:1400px)"
                              srcSet="assets/images/private-finance.jpg"
                              alt="Private Finance Programs"
                            />
                            <source
                              media="(min-width:1024px)"
                              srcSet="assets/images/private-finance.jpg"
                              alt="Private Finance Programs"
                            />
                            <source
                              media="(min-width:768px)"
                              srcSet="assets/images/tab3-im.jpg"
                              alt="Private Finance Programs"
                            />
                            <img
                              src="assets/images/Fin3-mob.jpg"
                              alt="Private Finance Programs"
                              style={{width:'auto'}}
                            />
                          </picture>

                          <figcaption>
                            <h2>
                              {" "}
                              Private Finance Programs{" "}
                              <img
                                src="assets/images/arrow.svg"
                                className="arrowBtn"
                              />
                            </h2>
                            <ul>
                              <a href="#" className="readmoreHover">
                                Read more
                              </a>
                            </ul>
                          </figcaption>
                        </figure>
                      </div>
                    </div>

                    <div className="swiper-slide cardItem bigimg">
                      <div className="grid">
                        <figure className="effect-sadie">
                          <picture>
                            <source
                              media="(min-width:1400px)"
                              srcSet="assets/images/outcomebased.jpg"
                              alt="Outcome-Based Financing Innovations"
                            />
                            <source
                              media="(min-width:1024px)"
                              srcSet="assets/images/ipad-proimg.jpg"
                              alt="Outcome-Based Financing Innovations"
                            />
                            <source
                              media="(min-width:768px)"
                              srcSet="assets/images/tab4-im.jpg"
                              alt="Outcome-Based Financing Innovations"
                            />
                            <img
                              src="assets/images/Fin4-mob.jpg"
                              alt="Outcome-Based Financing Innovations"
                              style={{width:'auto'}}
                            />
                          </picture>
                          <figcaption>
                            <h2>
                              {" "}
                              Outcome-Based Financing Innovations{" "}
                              <img
                                src="assets/images/arrow.svg"
                                className="arrowBtn"
                              />{" "}
                            </h2>
                            <ul>
                              <a href="#" className="readmoreHover">
                                Read more
                              </a>
                            </ul>
                          </figcaption>
                        </figure>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Image 6-6 grid section END */}

        {/* CTA BFBB section  Start */}

        <section className="bfbb Sectionpadding">
          <div className="container text-center">
            <h2>Blending Finance, Breaking Barriers</h2>
            <span>
              Discover our distinctive approach & How we’re redefining the
              future of development finance.
            </span>
            <p>
              <a href="our-team.html" className="blueBtn">
                Learn more{" "}
              </a>
            </p>
          </div>
        </section>

        {/* CTA BFBB section  End       */}

        {/* Email ID section */}
        <ContactusSection/>

        {/* Email ID section  END  */}

        {/* footer section  */}
        <Footer/>
      </div>

      {/* Default script */}
      <script src="js/jquery-1.12.3.min.js"></script>
      {/* Option 2: Separate Popper and Bootstrap JS  */}
      <script src="js/popper.min.js"></script>
      <script src="js/bootstrap.min.js"></script>
      {/* image swipe effect for mobile script */}
      <script src="js/swiper-bundle.min.js"></script>
    </div>
  );
}

export default Index;

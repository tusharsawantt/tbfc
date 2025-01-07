import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

function BlendIn() {
  return (
    <div>
      <div class="wrapper blendIN">
        {/* <!--    Banner and menu part Start--> */}

        <section class="banner">
          <div id="banner-fluid">
            <picture>
              <source
                media="(min-width:1400px)"
                srcset="assets/images/blend-in-banner-desktop.jpg"
              />
              <source
                media="(min-width:768px)"
                srcset="assets/images/blend-in-banner-desktop.jpg"
              />
              <img
                src="assets/images/blend-in-banner-mobile.jpg"
                alt="Flowers"
                style={{ width: "auto" }}
              />
            </picture>

            <div class=" Bannertxtholder">
              <div class="container text-start">
                <div class="row">
                  <div class="col-12 col-lg-8 col-md-12">
                    <h1>Join us as the change-makers of tomorrow</h1>
                    {/* <!--
                          <br/>
                      <span class="leadTxt">Unlocking change, one team member at a time 
      Get to know the team that makes it all happen! </span>
      --> */}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div id="container">
            <Header/>
          </div>
        </section>

        {/* <!--    Banner and menu part End--> */}

        {/* <!--      form and email holder Start--> */}

        <section class="contactHolder Sectionpadding">
          <div class="container">
            <div class="row">
              <div class="col-12 col-lg-4 col-md-4 emailSction">
                <div class="darkC">
                  <p>
                    We are always happy to hear from you. For more information
                    or projects or partnership inquiries reach out using the
                    form or directly email us at:
                  </p>

                  <p>
                    <a
                      href="mailto:partnerships@theblendedfinance.com"
                      class="emailsto text-break"
                    >
                      partnerships@theblendedfinance.com
                    </a>
                  </p>
                  <p>
                    <a
                      href="mailto:careers@theblendedfinance.com"
                      class="emailsto text-break"
                    >
                      careers@theblendedfinance.com
                    </a>
                  </p>

                  <hr style={{color:'#000', height: '1px', opacity: '1', marginTop: '50px', display:'block'}} />
                </div>
              </div>

              <div class="col-12 col-lg-7 col-md-8 formPart">
                <h3>Contact us:</h3>

                <form
                  id="blendIn"
                  name="blendin"
                  method="post"
                  action="#thank_you_msg"
                >
                  <div class="row validation">
                    <div class="col-12 col-lg-12 col-md-12">
                      <input
                        name="name"
                        type="text"
                        class="form-control"
                        placeholder="YOUR NAME *"
                        value="name
                              "
                        minlength="2"
                        maxlength="50"
                        id="name"
                        required
                      />
                      <span class="error"></span>
                    </div>

                    <div class="col-12 col-lg-6 col-md-6">
                      <input
                        name="email"
                        type="email"
                        class="form-control"
                        placeholder="EMAIL ADDRESS *"
                        value=""
                        id="email"
                        required
                      />
                      <span class="error"></span>
                    </div>

                    <div class="col-12 col-lg-6 col-md-6">
                      <input
                        name="mobile_no"
                        type="number"
                        class="form-control"
                        placeholder="CONTACT NUMBER *"
                        minlength="4"
                        value=""
                        maxlength="18"
                        id="number"
                        required
                      />
                      <span class="error"></span>
                    </div>
                    <div class="col-12 col-lg-12 col-md-12">
                      <input
                        name="subject"
                        type="text"
                        class="form-control"
                        placeholder="SUBJECT OF YOUR REQUEST *"
                        minlength="2"
                        value=""
                        maxlength="100"
                        id="subject"
                        required
                      />{" "}
                    </div>

                    <div class="col-12 col-lg-12 col-md-12">
                      <textarea
                        name="message"
                        rows="4"
                        class="form-control"
                        placeholder="MESSAGE"
                        id="message"
                        minlength="2"
                        maxlength="500"
                      ></textarea>
                    </div>

                    <div class="col-12 col-lg-12 col-md-12">
                      <input
                        type="Submit"
                        name="Submit"
                        value="SUBMIT"
                        class="blueBtn"
                      />
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* <!--      form and email holder End-->     */}

        {/* <!--footer section  Start    --> */}

        <Footer/>

        {/* <!--footer section  End    -->   */}
      </div>

      {/* <!--    Default script--> */}

      <script src="assets/js/jquery-1.12.3.min.js"></script>

      {/* <!-- Option 2: Separate Popper and Bootstrap JS --> */}

      <script src="assets/js/popper.min.js"></script>
      <script src="assets/js/bootstrap.min.js"></script>
    </div>
  );
}

export default BlendIn;

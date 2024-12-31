import React from "react";
import Header from "../components/Header";


function OurTeam() {
  return (
    <div>
      <div className="wrapper ourTeam">
        {/* <!--    Banner and menu part Start--> */}

        <section className="banner">
          <div id="banner-fluid">
            <picture>
              <source
                media="(min-width:1400px)"
                srcset="assets/images/our-team-banner-desktop.jpg"
              />
              <source
                media="(min-width:768px)"
                srcset="assets/images/our-team-banner-desktop.jpg"
              />
              <img
                src="assets/images/outteam-mobile-banner.jpg"
                alt="Flowers"
                style={{ width: "auto" }}
              />
            </picture>

            <div className=" Bannertxtholder">
              <div className="container text-start">
                <div className="row">
                  <div className="col-12 col-lg-6 col-md-12">
                    <h1>Adding Meaning to Money</h1>
                    <br />
                    <span className="leadTxt">
                      Unlocking change, one team member at a time Get to know
                      the team that makes it all happen! 
                    </span>
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

        {/* <!--Profile section start--> */}

        <section className="profileHolder">
          <div className="accordion" id="accordionExample">
            <div className="container">
              <div className="row">
                <div className="col-12 col-lg-6 col-md-12 imgp">
                  <img
                    src="assets/images/team/nirav.jpg"
                    className="img-fluid"
                    alt="Nirav Khambhati"
                  />
                </div>

                <div className="col-12 col-lg-6 col-md-12 profileDetails">
                  <h2 className="pName">
                    Nirav Khambhati <span>| Partner</span>{" "}
                  </h2>
                  <ul>
                    <li> Blended finance in Asia & Africa;  </li>
                    <li>Chairman, Global Schools Forum;</li>
                    <li>Steering Committee Member, USAID’s</li>
                    <li>Education Finance Network (EFN);</li>
                    <li>ex-Managing Partner, Kaizenvest; </li>
                    <li>ex-CEO, Tata classNameEdge</li>
                  </ul>

                  {/* <!--Accordion Start--> */}

                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseOne"
                        aria-expanded="false"
                        aria-controls="collapseTwo"
                      >
                        What’s your personal drive towards Blended Finance?
                      </button>
                    </h2>
                    <div
                      id="collapseOne"
                      className="accordion-collapse collapse "
                      aria-labelledby="headingOne"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        <p>Scalable and sustainable impact</p>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTwo">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseTwo"
                        aria-expanded="false"
                        aria-controls="collapseTwo"
                      >
                        What’s your favorite part of working at TBFC?
                      </button>
                    </h2>
                    <div
                      id="collapseTwo"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        <p>Being surrounded by amazing talent</p>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingThree">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseThree"
                        aria-expanded="false"
                        aria-controls="collapseThree"
                      >
                        What advice would you give your younger self?
                      </button>
                    </h2>
                    <div
                      id="collapseThree"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingThree"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        <p>The universe has a plan</p>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingFour">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseFour"
                        aria-expanded="false"
                        aria-controls="collapseTwo"
                      >
                        What inspires you?
                      </button>
                    </h2>
                    <div
                      id="collapseFour"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingFour"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        <p>Taking on seemingly unsurmountable challenges</p>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingFive">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseFive"
                        aria-expanded="false"
                        aria-controls="collapseTwo"
                      >
                        What are your interests & passions outside TBFC?
                      </button>
                    </h2>
                    <div
                      id="collapseFive"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingFive"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        <p>Table Tennis, Travel. Fitness, and Cooking</p>
                      </div>
                    </div>
                  </div>

                  {/* <!--Accorion End    --> */}
                </div>
              </div>

              <div className="row reverseMobile">
                <div className="col-12 col-lg-6 col-md-12 profileDetails">
                  <h2 className="pName">
                    Aparna Dua<span>| Director</span>{" "}
                  </h2>
                  <ul>
                    <li>Designed India’s first Social Impact Bond;</li>
                    <li>
                      Author of key research reports on blended finance in
                      India;
                    </li>
                    <li>
                      Advisor, Center for Innovative Finance at ISDM;
                      <br /> Ex-Asha Impact,
                    </li>
                    <li>
                      BCG Social Impact and investment banking at Credit Suisse
                    </li>
                  </ul>

                  {/* <!--Accordion Start--> */}

                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingSix">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseSix"
                        aria-expanded="false"
                        aria-controls="collapseSix"
                      >
                        What’s your personal drive towards Blended Finance?
                      </button>
                    </h2>
                    <div
                      id="collapseSix"
                      className="accordion-collapse collapse "
                      aria-labelledby="headingSix"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        <p>
                          I've always been passionate about creating social
                          change. I'm excited at the opportunity BF presents to
                          scale impact.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingSeven">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseSeven"
                        aria-expanded="false"
                        aria-controls="collapseSeven"
                      >
                        What’s your favorite part of working at TBFC?
                      </button>
                    </h2>
                    <div
                      id="collapseSeven"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingSeven"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        <p>The fresh thinking and the can-do attitude. </p>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingEight">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseEight"
                        aria-expanded="false"
                        aria-controls="collapseEight"
                      >
                        What advice would you give your younger self?
                      </button>
                    </h2>
                    <div
                      id="collapseEight"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingThree"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        <p>Be bold! Take more risks. </p>
                      </div>
                    </div>
                  </div>

                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingNine">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseNine"
                        aria-expanded="false"
                        aria-controls="collapseTwo"
                      >
                        What inspires you?
                      </button>
                    </h2>
                    <div
                      id="collapseNine"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingFour"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        <p>Entrepreneurs who fight the hard fight</p>
                      </div>
                    </div>
                  </div>

                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTen">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseTen"
                        aria-expanded="false"
                        aria-controls="collapseTwo"
                      >
                        What are your interests & passions outside TBFC?
                      </button>
                    </h2>
                    <div
                      id="collapseTen"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingTen"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        <p>
                          I love spending time outdoors/ in nature whether its
                          trekking, going for long walks or outdoor sports. Love
                          playtime with my son and dog.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* <!--Accorion End    --> */}
                </div>

                <div className="col-12 col-lg-6 col-md-12 imgp">
                  <img
                    src="assets/images/team/aparna.jpg"
                    className="img-fluid"
                    alt="Aparna Dua"
                  />
                </div>
              </div>

              <div className="row">
                <div className="col-12 col-lg-6 col-md-12 imgp">
                  <img
                    src="assets/images/team/surabhi.jpg"
                    className="img-fluid"
                    alt="Surabhi Mohan"
                  />
                </div>

                <div className="col-12 col-lg-6 col-md-12 profileDetails">
                  <h2 className="pName">
                    Surabhi Mohan <span>| Associate</span>{" "}
                  </h2>
                  <ul>
                    <li>Impact investment in the US with Tideline;</li>
                    <li>
                      Private equity in Southeast Asia and India at the ADB and
                      NIIF;
                    </li>
                    ex-Goldman Sachs;
                    <li>
                      MPA from Columbia University and MSc in Economics from
                      Singapore Management University
                    </li>
                  </ul>

                  {/* <!--Accordion Start--> */}

                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingEleven">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseEleven"
                        aria-expanded="false"
                        aria-controls="collapseTwo"
                      >
                        What’s your personal drive towards Blended Finance?
                      </button>
                    </h2>
                    <div
                      id="collapseEleven"
                      className="accordion-collapse collapse "
                      aria-labelledby="headingSix"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        <p>
                          I discovered a passion for impact investing at policy
                          school triggered by a className on financial
                          inclusion. And as I dwelled deeper into the subject I
                          saw the innovative use of capital that blended finance
                          enables. This approach could be particularly impactful
                          in a market like India where things must happen at
                          scale.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTwelve">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseTwelve"
                        aria-expanded="false"
                        aria-controls="collapseTwo"
                      >
                        What’s your favorite part of working at TBFC?
                      </button>
                    </h2>
                    <div
                      id="collapseTwelve"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingEleven"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        <p>
                          More than one! Building an organization from scratch,
                          hearing the need for an organization like ours from
                          all stakeholders and of course, listening to and
                          learning from inspiring entrepreneurs!
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTharteen">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseTharteen"
                        aria-expanded="false"
                        aria-controls="collapseEight"
                      >
                        What advice would you give your younger self?
                      </button>
                    </h2>
                    <div
                      id="collapseTharteen"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingThree"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        <p>Just carry on, you'll be fine!</p>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingFourteen">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseFourteen"
                        aria-expanded="false"
                        aria-controls="collapseTwo"
                      >
                        What inspires you?
                      </button>
                    </h2>
                    <div
                      id="collapseFourteen"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingFour"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        <p>Nature and its resilience</p>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingFifteen">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseFifteen"
                        aria-expanded="false"
                        aria-controls="collapseTwo"
                      >
                        What are your interests & passions outside TBFC?
                      </button>
                    </h2>
                    <div
                      id="collapseFifteen"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingFive"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        <p>
                          I am a total jungle kid! I love being out in nature
                          and exploring national parks and occasionally spotting
                          wild animals through safaris or hikes. I love birding
                          and get extra thrilled discovering 'lifers'. I am also
                          a certified scuba diver so dive whenever life offers
                          me a chance!
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* <!--Accorion End    --> */}
                </div>
              </div>

              <div className="row reverseMobile">
                <div className="col-12 col-lg-6 col-md-12 profileDetails">
                  <h2 className="pName">
                    David Proddok<span>| Associate</span>{" "}
                  </h2>
                  <ul>
                    <li>
                      {" "}
                      End-to-end innovative financing structure experience;
                      <br />
                      Design and performance management for one of the largest
                      education DIBs in the world;
                      <br />
                      x-Dalberg;
                    </li>
                    <li>
                      Bachelors and Masters in Technology from IIT Kharagpur
                    </li>
                  </ul>

                  {/* <!--Accordion Start--> */}

                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingSixteen">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseSixteen"
                        aria-expanded="false"
                        aria-controls="collapseTwo"
                      >
                        What’s your personal drive towards Blended Finance?
                      </button>
                    </h2>
                    <div
                      id="collapseSixteen"
                      className="accordion-collapse collapse "
                      aria-labelledby="headingOne"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        <p>
                          I've always wanted to create positive social impact in
                          the world. There are many ways to do that but in a
                          world where money drives almost everything (for better
                          or for worse), Blended Finance is a great tool to
                          enable meaningful on-ground change by helping direct
                          more money towards impactful initiatives
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingSeventeen">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseSeventeen"
                        aria-expanded="false"
                        aria-controls="collapseTwo"
                      >
                        What’s your favorite part of working at TBFC?
                      </button>
                    </h2>
                    <div
                      id="collapseSeventeen"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        <p>
                          The work and the people. The work because I believe in
                          the power of blended finance to drive change. The
                          people because everyone comes from stellar, diverse
                          backgrounds and are highly driven and want to be here
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingEighteen">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseEighteen"
                        aria-expanded="false"
                        aria-controls="collapseThree"
                      >
                        What advice would you give your younger self?
                      </button>
                    </h2>
                    <div
                      id="collapseEighteen"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingThree"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        <p>Trust the process</p>
                      </div>
                    </div>
                  </div>

                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingNinteen">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseNinteen"
                        aria-expanded="false"
                        aria-controls="collapseTwo"
                      >
                        What inspires you?
                      </button>
                    </h2>
                    <div
                      id="collapseNinteen"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingFour"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        <p>
                          Tackling big, hairy problems especially those with
                          real world implications. Fortunately (or
                          unfortunately?) there is no shortage of such problems
                          for us to try and solve
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTweenty">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseTweenty"
                        aria-expanded="false"
                        aria-controls="collapseTwo"
                      >
                        What are your interests & passions outside TBFC?
                      </button>
                    </h2>
                    <div
                      id="collapseTweenty"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingFive"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        <p>
                          I love traveling especially to places that are not
                          overly touristy and exploring different cultures. I'm
                          also exploring improv comedy - it's amazing what you
                          can collectively create on the spot even if you don't
                          really know the other person(s)
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* <!--Accorion End    --> */}
                </div>

                <div className="col-12 col-lg-6 col-md-12 imgp">
                  <img
                    src="assets/images/team/david.jpg"
                    className="img-fluid"
                    alt="David PRODDOK"
                  />
                </div>
              </div>

              <div className="row">
                <div className="col-12 col-lg-6 col-md-12 imgp">
                  <img
                    src="assets/images/team/riddhi.png"
                    className="img-fluid"
                    alt="Ridhi Lodha"
                  />
                </div>

                <div className="col-12 col-lg-6 col-md-12 profileDetails">
                  <h2 className="pName">
                    Ridhi Lodha<span>| Associate</span>{" "}
                  </h2>
                  <ul>
                    <li>
                      Built valuation plans for early-stage investments in the
                      UK;{" "}
                    </li>
                    <li>
                      Facilitated strategic value decision - making of leading
                      infrastructure funds;
                    </li>
                    <li>Focused on energy transition in Europe;</li>
                    <li>Chartered Accountant from ICAI</li>
                  </ul>

                  {/* <!--Accordion Start--> */}

                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTeentyone">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseTeentyone"
                        aria-expanded="false"
                        aria-controls="collapseTwo"
                      >
                        What’s your personal drive towards Blended Finance?
                      </button>
                    </h2>
                    <div
                      id="collapseTeentyone"
                      className="accordion-collapse collapse "
                      aria-labelledby="headingOne"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        <p>
                          Its a dynamic industry and challenges me to explore
                          the opportunities that lie beyond the conventional. I
                          am excited by the idea to use finance creatively to
                          deepen the impact while also generating returns.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTeentyttwo">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseTeentyttwo"
                        aria-expanded="false"
                        aria-controls="collapseTeentyttwo"
                      >
                        What’s your favorite part of working at TBFC?
                      </button>
                    </h2>
                    <div
                      id="collapseTeentyttwo"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        <p>
                          Definitely the team, so much enthusiasm and positivity
                          to always strive for more!
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTeentytthree">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseTeentytthree"
                        aria-expanded="false"
                        aria-controls="collapseThree"
                      >
                        What advice would you give your younger self?
                      </button>
                    </h2>
                    <div
                      id="collapseTeentytthree"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingThree"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        <p>Keep putting in the effort and trust the process</p>
                      </div>
                    </div>
                  </div>

                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTeentyfour">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseTeentyfour"
                        aria-expanded="false"
                        aria-controls="collapseTwo"
                      >
                        What inspires you?
                      </button>
                    </h2>
                    <div
                      id="collapseTeentyfour"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingFour"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        <p>
                          The possibility that there is so much to see in the
                          world and so much to learn everyday keeps me going
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTeentyfive">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseTeentyfive"
                        aria-expanded="false"
                        aria-controls="collapseTwo"
                      >
                        What are your interests & passions outside TBFC?
                      </button>
                    </h2>
                    <div
                      id="collapseTeentyfive"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingFive"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        <p>
                          I like to travel, to explore local culture and food. I
                          also have a budding interest in yoga.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* <!--Accorion End    --> */}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* <!--Profile section end--> */}

        {/* <!--footer section  Start    --> */}

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
                    <a href="our-team.html">Our Team</a>
                  </li>
                </ul>
              </div>

              <div className="col-12 col-lg-1 mf flogo">
                <img src="assets/images/favicon.svg" className="img-fluid" />
              </div>
            </div>
          </div>
        </footer>

        {/* <!--footer section  End    -->    */}
      </div>

      {/* <!--    Default script--> */}

      <script src="assets/js/jquery-1.12.3.min.js"></script>
      {/* <!-- Option 2: Separate Popper and Bootstrap JS --> */}
      <script src="assets/js/popper.min.js"></script>
      <script src="assets/js/bootstrap.min.js"></script>
    </div>
  );
}

export default OurTeam;

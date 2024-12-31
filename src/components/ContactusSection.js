import React, {Component} from "react";

class ContactusSection extends Component {
    render(){
        return(
            <div>
                <section className="emailIDsection Sectionpadding">
          <div className="container text-center">
            <h4>
              {" "}
              We are on a mission to revolutionize blended finance. We'd love to
              hear from you.
              <br />
              Reach out to us for inquiries on projects, partnerships and
              careers.
              <br />
              <br /> Please email us at:{" "}
            </h4>
            <p>
              <a
                href="mailto:partnerships@theblendedfinance.com"
                className="emailsto"
              >
                partnerships@theblendedfinance.com
              </a>
            </p>
            <p>
              <a
                href="mailto:careers@theblendedfinance.com"
                className="emailsto"
              >
                careers@theblendedfinance.com
              </a>
            </p>
          </div>
        </section>
            </div>
        );
    }
}

export default ContactusSection;
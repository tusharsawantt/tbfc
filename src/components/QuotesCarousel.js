import React, { useEffect } from "react";
import $ from "jquery"; // Ensure you have jQuery installed: `npm install jquery`

const QuotesCarousel = () => {
useEffect(() => {
  const quotes = $(".quotes");
  let quoteIndex = 0; // Start with the first quote

  // Initially hide all quotes except the first one
  quotes.hide().eq(quoteIndex).show();

  function showNextQuote() {
    // Hide the current quote
    quotes.eq(quoteIndex).fadeOut(100, () => {
      // Move to the next quote, looping back to the first after the last
      quoteIndex = (quoteIndex + 1) % quotes.length;

      // Show the next quote
      quotes.eq(quoteIndex).fadeIn(300, () => {
        // After showing the quote, delay for 4000ms, then fade it out
        setTimeout(() => {
          quotes.eq(quoteIndex).fadeOut(400, showNextQuote);
        }, 4000);
      });
    });
  }

  // Start the carousel by hiding the first quote and immediately showing the second quote after the initial delay
  setTimeout(() => {
    quotes.eq(quoteIndex).fadeOut(100, () => {
      quoteIndex = (quoteIndex + 1) % quotes.length; // Move to the next quote
      quotes.eq(quoteIndex).fadeIn(300, showNextQuote); // Show the next quote
    });
  }, 4000); // Initial delay before hiding the first quote
}, []); // Empty dependency array to ensure this runs once on component mount

  return (
    <section className="Sectionpadding creemC">
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-6 col-md-12 ccim">
            <img src="assets/images/3circle.svg" className="img-fluid" alt="3 circles" />
          </div>
          <div className="col-12 col-lg-6 col-md-12 text-center txtCreem">
            <div id="carouselExampleInterval">
              <div className="carousel-inner">
                <div className="quotes">
                  <p>
                    “Blended finance is a powerful tool to mobilize private capital for SDGs.”
                    <span>The World Bank Group</span>
                  </p>
                  <p>
                    “Relying solely on philanthropy and govt funding cannot address transnational challenges... We must look towards blended finance solutions.”
                    <span>ROCKEFELLER FOUNDATION</span>
                  </p>
                  <p>
                    "Blended finance key to supporting India's energy transition given its ability to drive more private capital to high-impact climate projects."
                    <span>IFC</span>
                  </p>
                  <p>
                    “We need innovative finance solutions to deal with climate change, which could include blended finance and co-financing with the private sector”
                    <span className="last-itm">Amitabh Kant, India’s G20 Sherpa</span>
                  </p>
                </div>

                <div className="quotes">
                  <p>
                    “Blended finance is helping the public, private and nonprofit sectors collaborate on projects that would otherwise be very difficult to get off the ground”
                    <span>Bank of America</span>
                  </p>
                  <p>
                    "Capital deployed through blended finance structures can help address the SDG funding gap by enabling the entry of more conventional capital flows into products, companies, and funds which incorporate impact objectives"
                    <span>The Global Impact Investment Network (GIIN)</span>
                  </p>
                  <p>
                    "By mobilizing private capital, blended finance helps create additionality and human impact."
                    <span className="last-itm">USAID</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuotesCarousel;

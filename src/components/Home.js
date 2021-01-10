import React from "react";
import "./Home.css";

import hkImg from "../assets/hk.037d11d4.jpg";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <div className="image">
          <img src={hkImg} alt="" />
        </div>
        <div className="home__sreenContainer">
          <h2>Welcome</h2>
          <div>
            <p className="home__paragraphCenter">
              Your Prenetics Health Passport is your new digital wallet that
              lets you book your COVID-19 tests, and stores your border-crossing
              health proof.
            </p>
          </div>
          <h2>What do you need?</h2>
          <div>
            <p className="paragraph center">
              To help you with your order, please tell us more about your travel
              plans.
            </p>
          </div>
          <div className="GlobalRapidWelcome">
            <div className="ContainerWithShadow  undefined padding-normal">
              <div className="welcome-page-title">
                <span>Pre-Departure COVID-19 Test </span>
                <span>I need a test before I fly out from Hong Kong</span>
              </div>
              <div className="HighlightContainer label">Test and Fly</div>
              <div className="Paragraphs margin mediumgray">
                <p className="paragraph left">
                  This test will be taken at Hong Kong International Airport,
                  and needs to be purchased prior to your flight. Available
                  option(s) below:
                </p>
              </div>
              <div className="ContainerWithShadow  undefined padding-normal">
                <div className="welcome-page-title">
                  <span>Pre-Departure COVID-19 Test</span>
                  <span>At Airport Rapid PCR Test</span>
                </div>
                <ul>
                  <li>
                    Receive Test Results in 2 Hours in your digital passport,
                    SMS and email
                  </li>
                </ul>
                <ul>
                  <li>
                    Negative results issued by Prenetics, a{" "}
                    <a
                      href="https://www.coronavirus.gov.hk/pdf/List_of_recognised_laboratories.pdf"
                      className="standard-link"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      government-recognised
                    </a>{" "}
                    ISO 15189 laboratory, can be accepted anywhere PCR test is
                    required
                  </li>
                </ul>
                <ul>
                  <li>
                    Combined nasal and throat swab collection will be performed
                    by a trained health professional
                  </li>
                </ul>
                <ul>
                  <li>
                    Bookings are available from 2 hours to 2 weeks in advance
                  </li>
                </ul>
                <ul>
                  <li>Suitable for age 6 and above</li>
                </ul>
                <button
                  id="view-sample-report"
                  className="Button link-green"
                  type="button"
                >
                  View Sample Report
                </button>
                <button id="go-to-cart" className="Button green" type="button">
                  Select
                </button>
              </div>
            </div>
            <div className="ContainerWithShadow  undefined padding-normal">
              <div className="welcome-page-title">
                <span>On-Arrival COVID-19 Test </span>
                <span>I need a test when I land in Hong Kong</span>
              </div>
              <div className="HighlightContainer label">
                Travel Bubble Flights Only
              </div>
              <div className="Paragraphs margin mediumgray">
                <p className="paragraph left">
                  This test will be taken in Hong Kong, and must be purchased
                  prior to boarding your flight in Singapore. Available
                  option(s) below:
                </p>
              </div>
              <div className="ContainerWithShadow  undefined padding-normal">
                <div className="welcome-page-title">
                  <span>On-Arrival COVID-19 Test </span>
                  <span>Arrival COVID-19 Test</span>
                </div>
                <ul>
                  <li>Conducted at Hong Kong International Airport</li>
                </ul>
                <ul>
                  <li>Deep Throat Saliva Test</li>
                </ul>
                <ul>
                  <li>Results released in 3 hours</li>
                </ul>
                <button
                  id="go-to-cart"
                  className="Button disabled"
                  disabled=""
                  type="button"
                >
                  Not Available
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;

import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../../style/css/Header.css";

const Header = () => {
  const [city, setCity] = useState("");

  const HandleCity = (e) => {
    setCity(e.target.value);
  };
  return (
    <div id="test">
      <div className="container-content-banner">
        <div className="container-text-presentation">
          <h1 className="presentation">Ridy.</h1>
          <p className="informations"> </p>
        </div>

        {/* We shall provide some carrots... */}

        <div className="custom-select">
          <select name="city" id="city" onChange={HandleCity}>
            <option className="optionlist" value="">
              Rent your ride, anywhere, anytime.{" "}
            </option>
            <option className="optionlist" value="Bordeaux">
              {" "}
              Bordeaux{" "}
            </option>
            <option className="optionlist" value="Nantes">
              {" "}
              Nantes{" "}
            </option>
            <option className="optionlist" value="Toulouse">
              {" "}
              Toulouse{" "}
            </option>
            <option className="optionlist" value="Brest">
              {" "}
              Brest{" "}
            </option>
            <option className="optionlist" value="Bayonne">
              {" "}
              Bayonne{" "}
            </option>
            <option className="optionlist" value="Lyon">
              {" "}
              Lyon{" "}
            </option>
          </select>
          <span className="custom-arrow"> </span>
        </div>

        <div className="container-boutton">
          <Link
            to={{
              pathname: "/Map",
              state: { city },
            }}
            className="link-search"
          >
            Search
          </Link>
        </div>
      </div>

      <div className="container-where">
        <h2 className="about-ridy">Ridy</h2>
        <p
          className="information-about"
          style={{ fontStyle: "oblique", fontFamily: "Montserrat, sans-serif" }}
        >
          No mount for your journey ? This application is made for you ! Ridy
          helps you to find the perfect loyal steed.
          <div className="advantages">
            <div className="advantage">
              <img
                src="https://www.flaticon.com/svg/static/icons/svg/952/952782.svg"
                alt="no parking hassle"
              />
              <p>
                No
                <br />
                parking
                <br />
                hassle
              </p>
            </div>
            <div className="advantage">
              <img
                src="https://www.flaticon.com/svg/static/icons/svg/2776/2776192.svg"
                alt="no maintenance hassle"
              />
              <p>
                No
                <br />
                maintenance
                <br />
                hassle
              </p>
            </div>
            <div className="advantage">
              <img
                src="https://www.flaticon.com/svg/static/icons/svg/3713/3713291.svg"
                alt="only savings"
              />
              <p>
                Only
                <br />
                savings
              </p>
            </div>
          </div>
          <p className="try" style={{ fontSize: "27px" }}>
            <a className="try-a" href="#test">
              Have a try !
            </a>
          </p>
        </p>
      </div>
    </div>
  );
};

export default Header;

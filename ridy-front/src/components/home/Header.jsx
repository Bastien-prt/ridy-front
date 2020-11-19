import React from "react";
import { Link } from "react-router-dom";
import '../../style/css/Header.css'

const Header = () => {
    return (
        <div>
            <div className="container-content-banner">
                <div className="container-text-presentation">
                    <h1 className="presentation"> Rent your ride <p> anytime</p> <p>anywhere  </p> </h1>
                    <p className="informations"> We will provide you some carrots ... </p>
                </div>
                
            </div>
            <div className="container-where">
                <p className="rent"> Where do you want to rent ? </p>

                <select name="city" id="city">
                    <option value="">-- Please choose a city --</option>
                    <option value="bordeaux"> Bordeaux </option>
                    <option value="nantes"> Nantes </option>
                    <option value="toulouse"> Toulouse </option>
                    <option value="brest"> Brest </option>
                    <option value="bayonne"> Bayonne </option>
                    <option value="lyon"> Lyon </option>
                </select>

                {/* <input className="input-city" type="text" name="" id="" placeholder="Please, enter your city"/> */}
            </div>

            <div className="container-boutton">
                <Link to="/Map" className="link-search"  >  Search </Link>
            </div>
            

        </div>
    )
}

export default Header;
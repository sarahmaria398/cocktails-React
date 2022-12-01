import React from "react";

import { Link } from "react-router-dom";
import "./Nav.css"

function Nav() {
    return (
        <section className="navbar">
            <nav className="left-menu">
                <Link className="button" to="/">Cocktails and Candy</Link>
            </nav>

            <nav className="right-menu">
                <Link className="nav-button" to="/">Home</Link>
                <Link className="nav-button" to="/cocktails">Cocktail</Link>
            </nav>

        </section>
    );
}

export default Nav;
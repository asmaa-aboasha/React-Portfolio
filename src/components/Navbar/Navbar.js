import React from "react";
import "./Navbar.css";

const navbar = () => {
    return (   
        <header className="navbar">
            <div className="navbar-navigation">
                <div className="navbar-items">
                    <ul>
                        <li className="items"><a href="/">About Me</a></li>
                        <li className="items"><a href="/Portfolio">Portfolio</a></li>
                        <li className="items"><a href="/Contact">Contact</a></li>
                    </ul>
                </div>
            </div>
        </header>
    );
}

export default navbar;

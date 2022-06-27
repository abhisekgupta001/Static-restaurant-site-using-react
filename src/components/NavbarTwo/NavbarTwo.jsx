import React, { useState } from "react";
import { BiGridAlt } from "react-icons/bi";
import { MdOutlineRestaurantMenu } from "react-icons/md";
import images from "../../constants/images";
import "./NavbarTwo.css";

const NavbarTwo = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <img src={images.gericht} alt="app logo" />
      </div>

      <ul className="app__navbar-links">
        <li className="p__opensans">
          <a href="#home">Home</a>
        </li>
        <li className="p__opensans">
          <a href="#about">About</a>
        </li>
        <li className="p__opensans">
          <a href="#menu">Menu</a>
        </li>
        <li className="p__opensans">
          <a href="#awards">Awards</a>
        </li>
        <li className="p__opensans">
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="app__navbar-login">
        <a href="#login" className="p__opensans">
          Login / Registration
        </a>
        <div />
        <a href="#book" className="p__opensans">
          Book Table
        </a>
      </div>

      <div className="app__navbar-smallscreen">
        <BiGridAlt
          fontSize={27}
          color="#fff"
          onClick={() => {
            setToggleMenu(true);
          }}
        />

        {toggleMenu && (
          <div className="app__navbar__smallscreen-overlay slide-bottom">
            <MdOutlineRestaurantMenu
              fontSize={27}
              className="overlay__close"
              onClick={() => {
                setToggleMenu(false);
              }}
            />

            <ul className="app__navbar-smallscreen_links">
              <li className="p__opensans">
                <a href="#home">Home</a>
              </li>
              <li className="p__opensans">
                <a href="#about">About</a>
              </li>
              <li className="p__opensans">
                <a href="#menu">Menu</a>
              </li>
              <li className="p__opensans">
                <a href="#awards">Awards</a>
              </li>
              <li className="p__opensans">
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavbarTwo;

import React, { useEffect, useState } from "react";
import "./Navigation.css";
import logo from "../../images/logo.svg";
import hamburgerMenu from "../../images/icon-hamburger.svg";
import close from "../../images/icon-close.svg";

function Navigation() {
  let [toggleMenu, setToggleMenu] = useState(false);
  let [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
    };
    window.addEventListener("resize", changeWidth);
    (toggleMenu || window.innerWidth > 575) ?   document.body.style.overflow = 'hidden' : document.body.style.overflow = 'visible';
  
    return () => {
      window.removeEventListener("resize", changeWidth);
    };
  }, [toggleMenu]);

  const toggleNav = () => {
    setToggleMenu(!toggleMenu);
  };
  return (
    <div className="navigation-section d-flex   align-items-center shadow ">
      <div className="n-wrapper container d-flex justify-content-between align-items-center px-lg-5">
        <div className="n-logo">
          <img src={logo} alt="logo" />
        </div>

        {(toggleMenu || screenWidth > 576) && (
          <div className="n d-flex  flex-sm-row justify-content-between align-items-center">
            <nav className="navbar navbar-expand">
              <div className=" navbar-collapse">
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <a href="#" className="nav-link">
                      home
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="#" className="nav-link">
                      about
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="#" className="nav-link">
                      Contact
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="#" className="nav-link">
                      blog
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="#" className="nav-link">
                      careers
                    </a>
                  </li>
                </ul>
              </div>
            </nav>
            <div className="invite-link">
              <button className="link-btn">Request Invite</button>
            </div>
          </div>
        )}

        <div className="toggle-btn">
          {toggleMenu ? (
            <img src={close} alt="menu" onClick={toggleNav} />
          ) : (
            <img src={hamburgerMenu} alt="menu" onClick={toggleNav} />
          )}
        </div>
      </div>
    </div>
  );
}

export default Navigation;

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



    return () => {
      window.removeEventListener("resize", changeWidth);
    };
  }, []);

  (toggleMenu && (screenWidth < 576)) ? document.body.classList.add("body-cls") : document.body.classList.remove("body-cls");

  const toggleNav = () => {
    setToggleMenu(!toggleMenu);
  };
  return (
    <div className="navigation-section d-flex   align-items-center shadow ">
      <div className="n-wrapper container cont d-flex justify-content-between align-items-center ">
        <div className="n-logo">
          <img src={logo} alt="logo" />
        </div>

        {(toggleMenu || screenWidth > 576) && (
          // <div className="n d-flex  flex-sm-row justify-content-between align-items-center">
          <>
            <div className="n">
              <nav className="navbar navbar-expand ">
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
            </div>
            <div className="invite-link">
              <button className="link-btn n-btn">Request Invite</button>
            </div>
          </>
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

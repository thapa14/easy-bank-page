import React from "react";
import "./Footer.css";
import { ReactComponent as Logo } from "../../images/logo.svg";
import {ReactComponent as Facebook } from "../../images/icon-facebook.svg";
import {ReactComponent as Instagram } from "../../images/icon-instagram.svg";
import {ReactComponent as Twitter } from "../../images/icon-twitter.svg";
import {ReactComponent as Pinterest } from "../../images/icon-pinterest.svg";
import {ReactComponent as Youtube } from "../../images/icon-youtube.svg";

function Footer() {
  return (
    <div className="footer">
      <div className="container">
        <div className="row">
          <div className=" f-content col-11 col-sm-8 col-lg-6 mx-auto d-flex flex-column flex-sm-row justify-content-sm-between align-items-center">
            <div className="footer-logo d-flex flex-column justify-content-between gap-4 ">
              {/* <img src={logo} alt="logo" /> */}
              <Logo fill="#ffffff" />
              <div className="social-media d-flex gap-3 mt-4 mt-sm-0">
                <Facebook className="social-media-icon"/>
                <Instagram className="social-media-icon"/>
                <Twitter className="social-media-icon"/>
                <Pinterest className="social-media-icon"/>
                <Youtube className="social-media-icon"/>
              </div>
            </div>
            <div className="elements">
              <ul className="d-flex flex-column  gap-sm-3 text-center">
                <li>
                  <a href="#">About Us</a>
                </li>
                <li>
                  <a href="#">Contact</a>
                </li>
                <li>
                  <a href="#">Blog</a>
                </li>
              </ul>
            </div>
            <div className="elements">
              <ul className="d-flex flex-column gap-sm-3 text-center">
                <li>
                  <a href="#">Careers</a>
                </li>
                <li>
                  <a href="#">Support</a>
                </li>
                <li>
                  <a href="#">Privacy Policy</a>
                </li>
              </ul>
            </div>
          </div>

          <div className="f-content col-11 col-sm-3 col-lg-6 mx-auto d-flex justify-content-sm-end justify-content-center">
            <div className="footer-invite d-flex flex-column justify-content-between align-items-sm-end align-items-center">
              <button className="link-btn py-3 my-4 my-sm-0 ">Request Invite</button>
              <p className="mt-3 mt-sm-0" >©Easybank. All Rights Reserved</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;

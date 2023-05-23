import React, { useEffect, useState } from "react";
import pagelogo from "../assets/images/svg/page-logo.svg";
import { CloseIcon, ToggleIcon } from "./Icons";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Header = () => {
  const [navShow, setNavShow] = useState(false);
  if (navShow) {
    document.documentElement.classList.add("overflow-hidden");
    document.body.classList.add("overflow-hidden");
    document.body.classList.add("vh-100");
  } else {
    document.documentElement.classList.remove("overflow-hidden");
    document.body.classList.remove("overflow-hidden");
    document.body.classList.remove("vh-100");
  }

  gsap.registerPlugin(ScrollTrigger);
  useEffect(() => {
    let headerValue = gsap.matchMedia();
    headerValue.add("(min-width:992px)", () => {
      gsap.fromTo(
        ".header_section",
        {
          yPercent: "-70",
          duration: 2,
        },
        {
          yPercent: "10",
          duration: 2,
        }
      );
    });
  }, []);

  return (
    <div className="header_parent bg_dark_gray">
      <div className="container-lg common_container py-2 py-lg-0">
        <div className="header_section d-flex align-items-center justify-content-between px-2 px-lg-0 mx-sm-1 mx-lg-0 py-4 py-lg-5 navbar_links">
          <a href="/">
            <img
              className="logo_width logo_md_100"
              src={pagelogo}
              alt="pagelogo"
            />
          </a>
          <div
            onClick={() => setNavShow(!navShow)}
            className="text-danger px-2 py-1 d-lg-none rounded-3 toggle_icon"
          >
            <ToggleIcon />
          </div>
          <ul className="d-flex align-items-center mb-0 d-none d-lg-flex ps-0 mb-0">
            <li className="ps-4 ps-xxl-5">
              <a
                href="#main-assets"
                className="font_sm color_white_off nav_hover ms-2"
              >
                Main Assets
              </a>
            </li>
            <li className="ps-4 ps-xxl-5">
              <a
                href="#servizi"
                className="font_sm color_white_off nav_hover ms-2"
              >
                Servizi
              </a>
            </li>
            <li className="ps-4 ps-xxl-5">
              <a
                href="#daicar-group"
                className="font_sm color_white_off nav_hover ms-2"
              >
                Daicar Group
              </a>
            </li>
            <li className="ps-4 ps-xxl-5">
              <a
                href="#contatti"
                className="font_sm color_white_off nav_hover ms-2"
              >
                Contatti
              </a>
            </li>
          </ul>
          <div className="d-flex d-none d-lg-flex align-items-center gap-5">
            <a
              className="mb-0 fw-bold font_sm color_white_off parliamone sentia_link me-2"
              href="/"
            >
              Sentiamoci
            </a>
            <button className="navbar_btn font_2xl color_dark_gray">
              chat
            </button>
          </div>
        </div>
        <div className="d-lg-none d-flex navbar_overlay_links">
          <div className={` ${navShow ? "nav-fix nav_bg" : "fix-navbar"}`}>
            <ul className="ps-0 mb-0 d-flex flex-column align-items-center list-unstyled gap-4">
              <a
                onClick={() => setNavShow(false)}
                className="btn_close_position position-absolute"
                href="#"
              >
                <CloseIcon />
              </a>
              <li>
                <a
                  onClick={() => setNavShow(false)}
                  href="#main-assets"
                  className="font_lg color_white_off nav_hover"
                >
                  Main Assets
                </a>
              </li>
              <li>
                <a
                  onClick={() => setNavShow(false)}
                  href="#servizi"
                  className="font_lg color_white_off nav_hover"
                >
                  Servizi
                </a>
              </li>
              <li>
                <a
                  onClick={() => setNavShow(false)}
                  href="#daicar-group"
                  className="font_lg color_white_off nav_hover"
                >
                  Daicar Group
                </a>
              </li>
              <li>
                <a
                  onClick={() => setNavShow(false)}
                  href="#contatti"
                  className="font_lg color_white_off nav_hover"
                >
                  Contatti
                </a>
              </li>
              <a
                onClick={() => setNavShow(false)}
                className="mb-0 fw-bold font_lg color_white_off sentia_link"
                href="/"
              >
                Sentiamoci
              </a>
              <button className="navbar_btn font_2xl color_dark_gray mt-2 mt-sm-4">
                chat
              </button>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;

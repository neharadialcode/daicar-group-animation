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
      const tl = gsap.timeline({});
      tl.from(".header_section", {
        autoAlpha: 0,
      }).from(".header_section", {
        top: "-100px",
        duration: 1,
        delay: 2,
      });
    });
  }, []);
  const mainAssetsBtn = () => {
    if (window.innerWidth > 1600) {
      gsap.to(window, { duration: 0.3, scrollTo: 17000, ease: "linear" });
    }
    if (window.innerWidth < 1599) {
      gsap.to(window, { duration: 0.3, scrollTo: 15000, ease: "linear" });
    }
    if (window.innerWidth < 1200) {
      gsap.to(window, { duration: 0.3, scrollTo: 11000, ease: "linear" });
    }
    if (window.innerWidth < 600) {
      gsap.to(window, { duration: 0.3, scrollTo: 9000, ease: "linear" });
    }
  };
  const contactBtn = () => {
    if (window.innerWidth > 1600) {
      gsap.to(window, { duration: 0.3, scrollTo: 30000, ease: "linear" });
    }
    if (window.innerWidth < 1599) {
      gsap.to(window, { duration: 0.3, scrollTo: 32000, ease: "linear" });
    }
  };
  const daicarBtn = () => {
    gsap.to(window, { duration: 0.3, scrollTo: 100, ease: "linear" });
  };
  const Servizi = () => {
    if (window.innerHeight > 1025) {
      gsap.to(window, { duration: 0.3, scrollTo: 7200, ease: "linear" });
    }
    if (window.innerHeight < 1025) {
      gsap.to(window, { duration: 0.3, scrollTo: 6500, ease: "linear" });
    }
  };
  return (
    <div className="header_parent bg_dark_gray" style={{ height: "100px" }}>
      <div className="container-lg common_container py-2 py-lg-1 position-relative">
        <div className="header_section position-absolute w-100 d-flex align-items-center justify-content-between px-2 px-lg-0 mx-sm-1 mx-lg-0 py-2 py-sm-4 navbar_links">
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
            <li className="ps-4 ps-xxl-5" onClick={() => mainAssetsBtn()}>
              <a
                href="#timeline"
                className="font_sm color_white_off nav_hover ms-2"
              >
                Main Assets
              </a>
            </li>
            <li className="ps-4 ps-xxl-5" onClick={() => Servizi()}>
              <a
                href="#servizi"
                className="font_sm color_white_off nav_hover ms-2"
              >
                Servizi
              </a>
            </li>
            <li className="ps-4 ps-xxl-5" onClick={() => daicarBtn()}>
              <a
                href="#daicar-group"
                className="font_sm color_white_off nav_hover ms-2"
              >
                Daicar Group
              </a>
            </li>
            <li className="ps-4 ps-xxl-5" onClick={() => contactBtn()}>
              <a
                href="#footer"
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
            <button className="navbar_btn font_2xl color_dark_gray  custom_tab_button_012">
              chat
            </button>
          </div>
        </div>
        <div className="d-lg-none d-flex navbar_overlay_links">
          <div className={` ${navShow ? "nav-fix nav_bg" : "fix-navbar"}`}>
            <ul className="ps-0 mb-0 d-flex flex-column align-items-center list-unstyled gap-sm-4">
              <a
                onClick={() => setNavShow(false)}
                className="btn_close_position position-absolute"
                href="#"
              >
                <CloseIcon />
              </a>
              <li onClick={() => mainAssetsBtn()}>
                <a
                  onClick={() => setNavShow(false)}
                  href="#timeline"
                  className="font_2xl color_white_off nav_hover"
                >
                  Main Assets
                </a>
              </li>
              <li className="pt-2">
                <a
                  onClick={() => setNavShow(false)}
                  href="#servizi"
                  className="font_2xl color_white_off nav_hover"
                >
                  Servizi
                </a>
              </li>
              <li className="pt-2">
                <a
                  onClick={() => setNavShow(false)}
                  href="#daicar-group"
                  className="font_2xl color_white_off nav_hover"
                >
                  Daicar Group
                </a>
              </li>
              <li className="pt-2">
                <a
                  onClick={() => setNavShow(false)}
                  href="#contatti"
                  className="font_2xl color_white_off nav_hover"
                >
                  Contatti
                </a>
              </li>
              <a
                onClick={() => setNavShow(false)}
                className="mb-0 fw-bold font_2xl color_white_off sentia_link pt-2"
                href="/"
              >
                Sentiamoci
              </a>
              <button className="navbar_btn font_2xl color_dark_gray mt-4  custom_tab_button_012">
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

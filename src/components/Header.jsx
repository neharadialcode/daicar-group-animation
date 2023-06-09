import React, { useState } from "react";
import pagelogo from "../assets/images/svg/page-logo.svg";

const Header = () => {
  const [navShow, setNavShow] = useState(false);
  if (navShow) {
    document.body.classList.add("overflow-hidden");
    document.body.classList.add("vh-100");
  } else {
    document.body.classList.remove("overflow-hidden");
    document.body.classList.remove("vh-100");
  }
  return (
    <section className="bg_navbar">
      <div className="container common_container">
        <div className="d-flex align-items-center justify-content-between padding_y55">
          <a href="#">
            <img
              className="logo_width logo_md_100"
              src={pagelogo}
              alt="pagelogo"
            />
          </a>
          <div
            onClick={() => setNavShow(!navShow)}
            className="text-danger px-2 py-1 d-lg-none rounded-3"
          >
            <div className="line_black"></div>
            <div className="line_black"></div>
            <div className="line_black"></div>
          </div>
          <ul className="d-flex align-items-center mb-0 d-none d-lg-flex  ps-0 mb-0 common_gap">
            <li>
              <a
                href="#"
                className="font-normal font_md color_white_off nav_hover"
              >
                Main Assets
              </a>
            </li>
            <li>
              <a
                href="#"
                className="font-normal font_md color_white_off nav_hover"
              >
                Servizi
              </a>
            </li>
            <li>
              <a
                href="#"
                className="font-normal font_md color_white_off nav_hover"
              >
                Daicar Group
              </a>
            </li>
            <li>
              <a
                href="#"
                className="font-normal font_md color_white_off nav_hover"
              >
                Contatti
              </a>
            </li>
          </ul>
          <div className="d-flex d-none d-lg-flex align-items-center gap-5">
            <a
              className="mb-0 ff_mundial_bold font_lg color_white_off parliamone text_white"
              href="#"
            >
              Parliamone
            </a>
            <button className="navbar_btn font-normal font_2xl color_gray ms-xl-2">
              Chat
            </button>
          </div>
        </div>
        <div className="d-lg-none d-flex ">
          <div className={` ${navShow ? "nav-fix nav_bg" : "fix-navbar"}`}>
            <ul className="ps-0 mb-0 d-flex flex-column  align-items-center  list-unstyled gap-4">
              <a
                onClick={() => setNavShow(false)}
                className="btn_close_position position-absolute"
                href="#"
              >
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M13 1L1 13M1 1L13 13"
                    stroke="#7ee49c"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
              <li>
                <a
                  onClick={() => setNavShow(false)}
                  href="#"
                  className="font-normal font_lg color_white_off nav_hover"
                >
                  Main Assets
                </a>
              </li>
              <li>
                <a
                  onClick={() => setNavShow(false)}
                  href="#"
                  className="font-normal font_lg color_white_off nav_hover"
                >
                  Servizi
                </a>
              </li>
              <li>
                <a
                  onClick={() => setNavShow(false)}
                  href="#"
                  className="font-normal font_lg color_white_off nav_hover"
                >
                  Daicar Group
                </a>
              </li>
              <li>
                <a
                  onClick={() => setNavShow(false)}
                  href="#"
                  className="font-normal font_lg color_white_off nav_hover"
                >
                  Contatti
                </a>
              </li>{" "}
              <a
                onClick={() => setNavShow(false)}
                className="mb-0 ff_mundial_bold font_lg color_white_off parliamone text_white"
                href="#"
              >
                Parliamone
              </a>
              <button className="navbar_btn font-normal font_2xl color_gray ms-xl-2">
                Chat
              </button>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;

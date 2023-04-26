import React from "react";
import tiguidoimg from "../assets/images/svg/tiguido-logo.svg";
import linkdinIcon from "../assets/images/svg/linkdin-icon.svg";
import diacararrow from "../assets/images/svg/diacar-arrow.svg";
import roadmapline2 from "../assets/images/svg/roadmap-line2.svg";
import roadmaparrow from "../assets/images/svg/roapmap-arrow.svg";
import candlecake from "../assets/images/svg/candle-cake.svg";
const Tiguido = () => {
  return (
    <>
      <div className="carplanner_bg min-vh-100 d-flex align-items-center justify-content-between position-relative">
        <div className="container">
          <div className=" d-none d-lg-block">
            <div className="mt-lg-5 pt-lg-5 d-flex align-items-center gap-4 justify-content-end position-absolute daicar_arrow_set">
              <p className="mb-0 font_md font_md lh_125 color_white_off white_space">
                Daicar Group
              </p>
              <img src={diacararrow} alt="diacararrow" />
            </div>
          </div>
          <div className="row align-items-end justify-content-between">
            <div className="tiguido_card">
              <a
                href="#"
                className="d-flex gap-3 align-items-center mb-4
              "
              >
                <div className="carplanner_logo">
                  <img className="w-100" src={tiguidoimg} alt="tiguidoimg" />
                </div>
                <a target="blanck" href="https://in.linkedin.com/">
                  <img src={linkdinIcon} alt="linkdin-icon" />
                </a>
              </a>
              <p className="fw-normal color_white_off font_2xl ff_mundial_regular mb-4 pb-lg-4">
                Nel 2022 nasce TiGuido.io che trasferisce l’elevato know-how e
                la tecnologia sviluppata in ambito automotive al servizio di
                nuovi mercati. Si afferma dunque come Digital Media Partner
                pioniere nell’uso del marketing conversazionale e nella
                tecnologia proprietaria per la validazione e generazione di lead
                altamente qualificate.
              </p>
              <div className="d-md-flex gap-3">
                <button className="carplanner_btn font_xl text-white fw-normal border-0 d-flex gap-4 align-items-center ff_mundial_regular mb-3">
                  <svg
                    width="26"
                    height="15"
                    viewBox="0 0 26 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M24.8357 1.36011L14.4747 11.7211L9.02152 6.26794L0.841797 14.4477"
                      stroke="#EDFAFB"
                      stroke-width="1.09677"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M18.291 1.36011H24.8348V7.90389"
                      stroke="#EDFAFB"
                      stroke-width="1.09677"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  Finanza
                </button>
                <button className="carplanner_btn font_xl text-white fw-normal border-0 d-flex gap-4 align-items-center ff_mundial_regular mb-3">
                  <svg
                    width="23"
                    height="21"
                    viewBox="0 0 23 21"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M17.0089 17.4766C17.0089 18.262 16.7095 19.0152 16.1766 19.5705C15.6437 20.1259 14.9209 20.4379 14.1672 20.4379C13.4136 20.4379 12.6908 20.1259 12.1579 19.5705C11.625 19.0152 11.3256 18.262 11.3256 17.4766V10.5669M21.745 10.5669C21.4975 7.86577 20.2929 5.35773 18.3663 3.53251C16.4397 1.70728 13.9294 0.695923 11.3256 0.695923C8.72184 0.695923 6.21156 1.70728 4.28493 3.53251C2.3583 5.35773 1.15367 7.86577 0.90625 10.5669H21.745Z"
                      stroke="#EDFAFB"
                      stroke-width="1.09677"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  Assicurazione
                </button>
                <button className="carplanner_btn font_xl text-white fw-normal border-0 d-flex gap-4 align-items-center ff_mundial_regular mb-3">
                  <svg
                    width="30"
                    height="22"
                    viewBox="0 0 30 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M21.5691 4.4292C23.0654 6.22561 23.8848 8.48962 23.8848 10.8276C23.8848 13.1655 23.0654 15.4295 21.5691 17.2259"
                      stroke="#EDFAFB"
                      stroke-width="1.63594"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M24.7928 1.17749C27.134 3.83356 28.4258 7.25257 28.4258 10.7932C28.4258 14.3339 27.134 17.7529 24.7928 20.4089"
                      stroke="#EDFAFB"
                      stroke-width="1.63594"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M18.3263 7.63928C18.9818 8.56196 19.334 9.66574 19.334 10.7976C19.334 11.9294 18.9818 13.0332 18.3263 13.9558"
                      stroke="#EDFAFB"
                      stroke-width="1.63594"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M14.793 10.7919L14.793 10.8007"
                      stroke="#EDFAFB"
                      stroke-width="1.63594"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M8.01683 4.4292C6.52055 6.22561 5.70117 8.48962 5.70117 10.8276C5.70117 13.1655 6.52055 15.4295 8.01683 17.2259"
                      stroke="#EDFAFB"
                      stroke-width="1.63594"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M4.79318 1.17749C2.45193 3.83356 1.16016 7.25257 1.16016 10.7932C1.16016 14.3339 2.45193 17.7529 4.79318 20.4089"
                      stroke="#EDFAFB"
                      stroke-width="1.63594"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M11.2596 7.63928C10.6041 8.56196 10.252 9.66574 10.252 10.7976C10.252 11.9294 10.6041 13.0332 11.2596 13.9558"
                      stroke="#EDFAFB"
                      stroke-width="1.63594"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M14.793 10.7919L14.793 10.8007"
                      stroke="#EDFAFB"
                      stroke-width="1.63594"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  Telco
                </button>
              </div>
              <p className="mb-0 ff_mundial_light font_2xl color_white_off mt-5">
                2022
              </p>
            </div>
          </div>
          <div className="position-relative mt-5 pb-5 pb-md-0">
            <img
              className="position-absolute roadmaparrow_left1"
              src={roadmaparrow}
              alt="roadmaparrow"
            />
            <img
              className="position-absolute candlecake_icon"
              src={candlecake}
              alt="candlecake"
            />
            <img
              className=" position-absolute roadmapline_set"
              src={roadmapline2}
              alt="roadmapline2"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Tiguido;

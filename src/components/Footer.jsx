import React from "react";
import footer_logo from "../assets/images/svg/footer_logo.svg";
import smsImg from "../assets/images/svg/sms_img.svg";
import iconImg from "../assets/images/svg/icon.svg";
import footerbg from "../assets/images/png/footer_bg.png";
import footerMobilebg from "../assets/images/png/footer-bg-mobile-sc.png";
import BackToTop from "./BackToTopButton";
import { FbIcon, InstagramIcon, Linkedin } from "./Icons";
import meetingManImg from "../assets/images/svg/meeting_man_img.svg";

function Footer() {
  return (
    <>
      <div className="footer_top_space">
        <div className="pt-xl-4 pt-xxl-5 position-relative z_2 manager_content meeting_fissa_top_space">
          <div className="d-flex align-items-center justify-content-center meeting_btn_parent meeting_fissa_top_space">
            <a
              className="custom_tab_button_012 cursor-pointer common_button mt-5 mt-sm-0 fissa_bg"
              href="https://calendly.com/"
              target="_blank"
              rel="noreferrer"
            >
              <span className="d-sm-none">F</span>
              <span className="d-none d-sm-inline-block">f</span>issa un meeting
            </a>
            <p className="custom_line d-none d-sm-block"></p>
            <button className="custom_tab_button_012 cursor-pointer common_button meeting_border_line parliamone d-none d-sm-block fissa_bg">
              chat
            </button>
          </div>
          <div className="d-flex justify-content-center gap-1 gap-sm-3 mt-3 mt-xl-4 align-items-center fissa-meeting-content-parent">
            <img
              className="meeting_man_img me-sm-2"
              src={meetingManImg}
              alt="meetingManImg"
            />
            <p className="mb-0 font_md meeting_text_color">
              <span className="ps-1">Matteo,</span>
              <br className="d-sm-none" />
              <span className="fw_thin ff_mundial_thin opacity_09">
                &nbsp;Business Development Manager
              </span>
            </p>
          </div>
        </div>
        <div
          className="pt-5 position-relative d-flex align-items-sm-end justify-content-sm-center"
          id="footer"
        >
          {/* BACKTOTOP ICON */}
          <BackToTop />
          <img
            className="position-absolute footer_background_set d-sm-none"
            src={footerMobilebg}
            alt="footerMobilebg"
          />
          <img
            className="position-absolute footer_background_set d-none d-sm-block"
            src={footerbg}
            alt="footerbg"
          />
          <div className="container position-relative z_2 pb-5 pt-lg-5 pt-xl-0">
            <div className="row justify-content-md-center justify-content-between gap-lg- text-center text-sm-start">
              <div className="col-12 col-sm-4 col-lg-3 d-flex flex-column justify-content-between">
                <a href="/">
                  <img
                    className="footer_logo"
                    src={footer_logo}
                    alt="footer_logo"
                  />
                </a>
                <div className="mt-4 mt-sm-0 d-none d-md-block">
                  <p className="font_xsm fw_medium ff_montserrat color_white_off pt-3 pt-lg-5">
                    Daicar Group è un marchio <br /> di Daicar Srl. <br /> Tutti
                    i diritti sono riservati
                  </p>
                  <p className="mb-0 font_xsm fw_medium color_light_gray mt-1 ff_montserrat">
                    P.IVA 14570951005
                  </p>
                  <p className="mb-0 font_xsm fw_medium color_light_gray mt-1 ff_montserrat">
                    Designed & developed<br className="d-md-block d-none"></br>
                    <a
                      href="https://www.alfatauristudio.com/"
                      target="_blank"
                      rel="noreferrer"
                      className="color_light_gray list_item_text"
                    >
                      alfatauristudio.com
                    </a>
                  </p>
                </div>
              </div>

              <div className="col-5 col-md-3 col-lg-2 pe-0 pe-sm-2 ps-0 mx-auto mx-sm-0">
                <ul className="ps-sm-0 text-start mb-5 mb-sm-0 p pb-sm-0 text-nowrap px-2 px-sm-0 mx-auto mx-sm-0">
                  <li className="list-unstyled">
                    <a
                      className="font_xsm text-decoration-none fw_medium color_white_off list_item_text ff_montserrat"
                      href="/"
                    >
                      Terms of Service
                    </a>
                  </li>
                  <li className="mt-3 list-unstyled">
                    <a
                      className="font_xsm text-decoration-none fw_medium color_white_off list_item_text ff_montserrat"
                      href="/"
                    >
                      Privacy Policy
                    </a>
                  </li>
                  <li className="mt-3 list-unstyled">
                    <a
                      className="font_xsm  text-decoration-none  fw_medium color_white_off list_item_text ff_montserrat"
                      href="/"
                    >
                      Partners <span className="ff_roboto pe-1">&</span>
                      Affiliates
                    </a>
                  </li>
                  <li className="mt-3 list-unstyled d-none d-md-block">
                    <a
                      className="font_xsm  text-decoration-none fw_medium color_white_off list_item_text ff_montserrat"
                      href="/"
                    >
                      Sitemap
                    </a>
                  </li>
                </ul>
              </div>

              <div className="col-12 col-sm-4 col-md-3 mt-sm-0 ps-0 ps-sm-2 d-none d-md-block pt-md-3">
                <div className="d-flex align-items-center footer_icons_hover">
                  <img className="contact_icon" src={smsImg} alt="smsImg" />
                  <div className="flex-column d-flex d-inline-block ms-3 ps-3">
                    <a
                      className="mb-0 font_sm fw-normal list-unstyled text-decoration-none color_light_gray ff_roboto list_item_text mt-sm-1"
                      href="mailTo:hello@daicargroup.com"
                    >
                      hello@daicargroup.com
                    </a>
                  </div>
                </div>

                <div className="d-flex align-items-center footer_icons_hover custom_margin_footer">
                  <div className="location_icon">
                    <img className="contact_icon" src={iconImg} alt="iconImg" />
                  </div>
                  <div className="flex-column d-flex d-inline-block ms-3 ps-3">
                    <a
                      className="mb-0 font_sm fw-normal list-unstyled text-decoration-none color_light_gray ff_roboto list_item_text mt-sm-1"
                      href="/"
                    >
                      Via Del Porto Fluviale, 1/C{" "}
                      <br className="d-none d-xl-block" />
                      00154 ROMA
                    </a>
                  </div>
                </div>
              </div>

              <div className="col-12 col-sm-4 col-md-3 col-lg-2">
                <div className="d-flex justify-content-center mb-5 mb-sm-4 mb-md-0 social_links_parent ms-lg-5 ms-xl-0">
                  <a
                    target="blank"
                    rel="noreferrer"
                    href="https://www.instagram.com/"
                    className="footer_social_icon insta_icon"
                  >
                    <InstagramIcon />
                  </a>
                  <a
                    target="blank"
                    rel="noreferrer"
                    href="https://www.facebook.com/"
                    className="mx-3 mx-xl-4 footer_social_icon"
                  >
                    <FbIcon />
                  </a>
                  <a
                    target="blank"
                    rel="noreferrer"
                    href="https://in.linkedin.com/"
                    className="footer_social_icon"
                  >
                    <Linkedin />
                  </a>
                </div>

                <p className="mb-0 font_xsm d-md-none d-block fw_medium text-center color_light_gray mt-1 ff_montserrat">
                  P.IVA 14570951005
                </p>
                <p className="mb-0 font_xsm d-md-none d-block fw_medium text-center color_light_gray list_item_text ff_montserrat">
                  Designed & developed <br />
                  <a
                    href="https://www.alfatauristudio.com/"
                    target="_blank"
                    rel="noreferrer"
                    className="color_light_gray"
                  >
                    alfatauristudio.com
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;

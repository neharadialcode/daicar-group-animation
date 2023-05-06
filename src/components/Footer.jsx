import React from "react";
import footer_logo from "../assets/images/svg/footer_logo.svg";
import sms_img from "../assets/images/svg/sms_img.svg";
import phone_img from "../assets/images/svg/phone.svg";
import icon_img from "../assets/images/svg/icon.svg";
import icon_1 from "../assets/images/svg/icon-1.svg";
import icon_2 from "../assets/images/svg/icon-2.svg";
import icon_3 from "../assets/images/svg/icon-3.svg";
import footerbg from "../assets/images/png/footer_bg.png";
import BackToTop from "./BackToTopButton";

function Footer() {
  const getnewyear = new Date().getFullYear();
  return (
    <>
      <section className="green pt-5 min -vh-100 position-relative d-flex align-items-end justify-content-center">
        <BackToTop />
        <img
          className="position-absolute footer_background_set"
          src={footerbg}
          alt="footerbg"
        />
        <div className="container position-relative z_index2 pb-5">
          <div className="row justify-content-md-center justify-content-between gap-md-5 ">
            <div className="col-md-2 col-sm-3 col-4 d-flex flex-column justify-content-between">
              <a href="#">
                <img
                  className="footer_logo"
                  src={footer_logo}
                  alt="footer_logo"
                />
              </a>
              <div className="mt-4 mt-sm-0 d-md-block d-none">
                <p className="mb-0 font_xsm fw_medium color_white_off ff_montserrat text-nowrap">
                  <span className="ff_roboto pe-1">@</span>
                  {getnewyear} Tutti i diritti riservati
                </p>
                <p className="mb-0 font_xsm fw_medium color_light_gray mt-1 ff_montserrat">
                  P.IVA 056382975839
                </p>
                <p className="mb-0 font_xsm fw_medium color_light_gray text_hover mt-1 ff_montserrat">
                  Designed & developed<br className="d-md-block d-none"></br>
                  alfatauristudio.com
                </p>
              </div>
            </div>
            <div className="col-md-2 col-sm-4 col-4 pe-0 pe-sm-2 ps-0">
              <ul className="ps-0">
                <li className="lh_0 list-unstyled">
                  <a
                    className="font_xsm  text-decoration-none  fw_medium color_white_off list_item_text ff_montserrat"
                    href="#"
                  >
                    Terms of Service
                  </a>
                </li>
                <li className="margin_top15 lh_0 list-unstyled">
                  <a
                    className="font_xsm  text-decoration-none  fw_medium color_white_off list_item_text ff_montserrat"
                    href="#"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li className="margin_top15 lh_0 list-unstyled">
                  <a
                    className="font_xsm  text-decoration-none  fw_medium color_white_off list_item_text ff_montserrat"
                    href="#"
                  >
                    Partners <span className="ff_roboto pe-1">&</span>Affiliates
                  </a>
                </li>
                <li className="margin_top15 lh_0 list-unstyled">
                  <a
                    className="font_xsm  text-decoration-none fw_medium color_white_off list_item_text ff_montserrat"
                    href="#"
                  >
                    Sitemap
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-md-3 col-sm-4 col-4  mt-sm-0 ps-0 ps-sm-2">
              <div className="d-flex align-items-center common_gap scle">
                <img className="common_width" src={sms_img} alt="sms_img" />
                <div className=" flex-column d-flex d-inline-block">
                  <a
                    className="mb-0 list_item_text list-unstyled text-decoration-none  font_sm fw-bold letter_spacing color_white_off ff_montserrat"
                    href="mailTo:mail@wonw.xyz"
                  >
                    Email
                  </a>
                  <a
                    className="mb-0 font_sm fw-normal list-unstyled text-decoration-none color_light_gray ff_roboto text_hover mt-sm-1"
                    href="mailTo:mail@wonw.xyz"
                  >
                    mail@wonw.xyz
                  </a>
                </div>
              </div>
              <div className="d-flex align-items-center common_gap scle margin_top36">
                <img className="common_width" src={phone_img} alt="sms_img" />
                <div className=" flex-column d-flex d-inline-block">
                  <a
                    className="mb-0 list_item_text list-unstyled text-decoration-none font_sm fw-bold letter_spacing color_white_off ff_montserrat"
                    href="tel:521-239-4623"
                  >
                    Phone
                  </a>
                  <a
                    className="mb-0 font_sm list-unstyled text-decoration-none fw-normal color_light_gray ff_roboto text_hover mt-sm-1"
                    href="tel:521-239-4623"
                  >
                    521-239-4623
                  </a>
                </div>
              </div>
              <div className="d-flex align-items-center common_gap scle margin_top36">
                <img className="common_width" src={icon_img} alt="sms_img" />
                <div className=" flex-column d-flex d-inline-block">
                  <a
                    className="mb-0 list_item_text list-unstyled text-decoration-none font_sm fw-bold letter_spacing color_white_off ff_montserrat"
                    href="#"
                  >
                    La nostra sede
                  </a>
                  <a
                    className="mb-0 font_sm fw-normal list-unstyled text-decoration-none color_light_gray ff_roboto text_hover mt-sm-1lh_0
                    "
                    href="#"
                  >
                    480 Laurie Causeway Suite 088
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-2 col-12 mt-4 mt-md-0">
              <div className="d-md-flex d-none justify-content-center gap-lg-4 gap-3">
                <a target="blank" href="https://www.instagram.com/">
                  <img className="svg" src={icon_1} alt="icon_1" />
                </a>
                <a target="blank" href="https://www.facebook.com/">
                  <img className="svg" src={icon_2} alt="icon_2" />
                </a>
                <a target="blank" href="https://in.linkedin.com/">
                  <img className="svg" src={icon_3} alt="icon_3" />
                </a>
              </div>
              <p className="mb-0 font_xsm d-md-none d-block fw_medium text-center color_white_off ff_montserrat">
                <span className="ff_roboto pe-1 ">@</span>
                {getnewyear} Tutti i diritti riservati
              </p>
              <p className="mb-0 font_xsm d-md-none d-block fw_medium text-center color_light_gray mt-1 ff_montserrat">
                P.IVA 056382975839
              </p>
              <p className="mb-0 font_xsm d-md-none d-block fw_medium text-center color_light_gray text_hover ff_montserrat">
                Designed & developed<br className="d-md-block d-none"></br>
                alfatauristudio.com
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Footer;

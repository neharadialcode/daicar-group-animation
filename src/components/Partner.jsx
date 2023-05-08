import React, { useEffect } from "react";
import leasyslogo from "../assets/images/svg/leasys-logo.svg";
import enelexlogo from "../assets/images/svg/enel-x-logo.svg";
import athlonlogo from "../assets/images/svg/athlon-logo.svg";
import insurama from "../assets/images/svg/insurama-logo.svg";
import aldlogo from "../assets/images/svg/ald-logo.svg";
import bmwlogo from "../assets/images/svg/bmw-group-logo.svg";
import toyatologo from "../assets/images/svg/toyoto-logo.svg";
import audilogo from "../assets/images/svg/audi-logo.svg";
import jaguarlogo from "../assets/images/svg/jaguar-logo.svg";
import leftTextImg from "../assets/images/png/partner-left-text-img.png";
import gsap from "gsap";

const Partner = () => {
  useEffect(() => {
    let partnerValues = gsap.matchMedia();
    partnerValues.add("(min-width:992px)", () => {
      let partners = gsap.timeline({
        scrollTrigger: {
          trigger: ".partner_main",
          pin: true,
          pinSpacing: false,
        },
      });
    });
    partnerValues.add("(min-width:576px) and (max-width:991.98px)", () => {
      let partnerSlider = gsap.timeline({
        scrollTrigger: {
          trigger: ".partner_slider_parent",
          start: "top top",
          end: "bottom center",
          scrub: 3,
          pin: true,
        },
      });
      partnerSlider.fromTo(
        ".partner_parent_img",
        {
          xPercent: 30,
        },
        {
          xPercent: -40,
        }
      );
    });
    partnerValues.add("(max-width:575.98px)", () => {
      let partnerSlider = gsap.timeline({
        scrollTrigger: {
          trigger: ".partner_slider_parent",
          start: "top top",
          end: "bottom center",
          scrub: 3,
          pin: true,
        },
      });
      partnerSlider.fromTo(
        ".partner_parent_img",
        {
          xPercent: 40,
        },
        {
          xPercent: -50,
        }
      );
    });
  }, []);
  return (
    <div className="partner_main">
      <div className="bg_light_white py-5 position-relative partner_parent d-flex justify-content-center align-items-center overflow-hidden ">
        <div className="container custom_container d-none d-lg-block">
          <div className="position-absolute arrowbtn_set d-none d-lg-block">
            <img src={leftTextImg} alt="partner-left-text-img" />
          </div>
          <div className="partner_text">
            <div className="mt-xxl-5 pt-xxl-5">
              <div className="d-flex align-items-center gap-2 justify-content-center mt-5 pt-xxl-5 pb-4">
                <p className="ff_mundial_regular font_5xl color_dark_gray mb-0 partner_para custom_letter_spacing">
                  Non cerchiamo clienti ma
                </p>
                <button className="ff_mundial_regular font_2xl color_dark_gray common_button d-flex mt-2 mt-xxl-1 common_btn">
                  partner
                </button>
                <span className="font_lg">.</span>
              </div>
            </div>
            <div className="pb-lg-5">
              <div className="row flex-md-wrap justify-content-center align-items-center d-none d-lg-flex my-xl-5 pt-5 pb-xl-5 gap_5 gap_xxl_66">
                <div className="col-auto">
                  <div className="w-100">
                    <img
                      className="leasyslogo"
                      src={leasyslogo}
                      alt="leasyslogo"
                    />
                  </div>
                </div>
                <div className="col-auto">
                  <div className="w-100">
                    <img
                      className="enelexlogo"
                      src={enelexlogo}
                      alt="enelexlogo"
                    />
                  </div>
                </div>
                <div className="col-auto">
                  <div className="w-100">
                    <img
                      className="athlonlogo"
                      src={athlonlogo}
                      alt="athlonlogo"
                    />
                  </div>
                </div>
                <div className="col-auto">
                  <div className="w-100">
                    <img
                      className="insuramalogo"
                      src={insurama}
                      alt="insurama"
                    />
                  </div>
                </div>
                <div className="col-auto">
                  <div className="w-100">
                    <img className="aldlogo" src={aldlogo} alt="aldlogo" />
                  </div>
                </div>
                <div className="col-auto">
                  <div className="w-100">
                    <img className="bmwlogo" src={bmwlogo} alt="bmwlogo" />
                  </div>
                </div>
                <div className="col-auto">
                  <div className="w-100">
                    <img
                      className="toyatologo"
                      src={toyatologo}
                      alt="toyatologo"
                    />
                  </div>
                </div>
                <div className="col-auto">
                  <div className="w-100">
                    <img className="audilogo" src={audilogo} alt="amazonlogo" />
                  </div>
                </div>
                <div className="col-auto">
                  <div className="w-100">
                    <img
                      className="jaguarlogo"
                      src={jaguarlogo}
                      alt="jaguarlogo"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="partner_slider_parent d-lg-none">
          <div className="mt-lg-5 pt-lg-5">
            <div className="d-flex align-items-center gap-2 justify-content-center pt-5 pb-4">
              <p className="ff_mundial_regular font_5xl color_dark_gray mb-0 partner_para custom_letter_spacing">
                Non cerchiamo clienti ma
              </p>
              <button className="ff_mundial_regular font_2xl color_dark_gray common_button d-sm-flex mt-2 mt-xxl-1 common_btn">
                partner
              </button>
            </div>
          </div>
          <div className="d-flex align-items-center gap-5 pt-5 mb-5 partner_parent_img">
            <div className="crm_slider w-100">
              <img className="leasyslogo" src={leasyslogo} alt="leasyslogo" />
            </div>
            <div className="crm_slider w-100">
              <img className="enelexlogo" src={enelexlogo} alt="enelexlogo" />
            </div>
            <div className="crm_slider w-100">
              <img className="athlonlogo" src={athlonlogo} alt="athlonlogo" />
            </div>
            <div className="crm_slider w-100">
              <img className="insuramalogo" src={insurama} alt="insurama" />
            </div>
            <div className="crm_slider w-100">
              <img className="aldlogo" src={aldlogo} alt="aldlogo" />
            </div>
            <div className="crm_slider w-100">
              <img className="bmwlogo" src={bmwlogo} alt="bmwlogo" />
            </div>
            <div className="crm_slider w-100">
              <img className="toyatologo" src={toyatologo} alt="toyatologo" />
            </div>
            <div className="crm_slider w-100">
              <img className="audilogo" src={audilogo} alt="amazonlogo" />
            </div>
            <div className="crm_slider w-100">
              <img className="jaguarlogo" src={jaguarlogo} alt="jaguarlogo" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Partner;

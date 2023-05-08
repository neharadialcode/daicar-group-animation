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
import arrowbtn from "../assets/images/svg/partner-arrow.svg";
import gsap from "gsap";

const Partner = () => {
  // useEffect(() => {
  //   let partner = gsap.matchMedia();
  //   partner.add("(min-width: 992px)", () => {
  //     let partner_value = gsap.timeline({
  //       scrollTrigger: {
  //         trigger: ".partner_parent",
  //         start: "top top",
  //         end: "bottom top",
  //         // markers: true,
  //       },
  //     });
  //     partner_value.from(".partner_text", {
  //       yPercent: 100,
  //       autoAlpha: 0,
  //       ease: "back(2)",
  //       stagger: 0.02,
  //     });
  //   });
  // }, []);
  // const partnerData = [
  //   {
  //     imgUrl: "../assets/images/svg/leasys-logo.svg",
  //   },
  //   {
  //     imgUrl: "../assets/images/svg/enel-x-logo.svg",
  //   },
  //   {
  //     imgUrl: "../assets/images/svg/athlon-logo.svg",
  //   },
  //   {
  //     imgUrl: "../assets/images/svg/insurama-logo.svg",
  //   },
  //   {
  //     imgUrl: "../assets/images/svg/ald-logo.svg",
  //   },
  //   {
  //     imgUrl: "../assets/images/svg/bmw-group-logo.svg",
  //   },
  //   {
  //     imgUrl: "../assets/images/svg/toyoto-logo.svg",
  //   },
  //   {
  //     imgUrl: "../assets/images/svg/audi-logo.svg",
  //   },
  //   {
  //     imgUrl: "../assets/images/svg/jaguar-logo.svg",
  //   },
  // ];

  useEffect(() => {
    let crmValues = gsap.matchMedia();
    crmValues.add("(min-width:992px)", () => {
      let partner = gsap.timeline({
        scrollTrigger: {
          trigger: ".partner_parent",
          pin: true,
          pinSpacing: false,
        },
      });
    });

    crmValues.add("(min-width:576px) and (max-width:991.98px)", () => {
      let crmicons = gsap.timeline({
        scrollTrigger: {
          trigger: ".partner_parent",
          start: "top top",
          end: "bottom center",
          scrub: 3,
          pin: true,
        },
      });
      crmicons.fromTo(
        ".partner_parent_img",
        {
          xPercent: 0,
        },
        {
          xPercent: -100,
        }
      );
    });
    crmValues.add("(max-width:575.98px)", () => {
      let crmicons = gsap.timeline({
        scrollTrigger: {
          trigger: ".partner_parent",
          start: "top top",
          end: "bottom center",
          scrub: 3,
          pin: true,
        },
      });
      crmicons.fromTo(
        ".partner_parent_img",
        {
          xPercent: 0,
        },
        {
          xPercent: -160,
        }
      );
    });
  }, []);
  return (
    <div className="bg_light_white py-5 position-relative partner_parent min-vh-100 d-flex justify-content-center align-items-center overflow-hidden">
      <div className="container custom_container">
        <div className="position-absolute arrowbtn_set d-none d-lg-block">
          <div className="mt-lg-5 pt-lg-5 d-flex align-items-center gap-4 justify-content-end position-absolute arrowbtn_set">
            <p className="mb-0 ff_mundial_regular font_md lh_125 color_dark_gray">
              Partner
            </p>
            <img src={arrowbtn} alt="arrowbtn" />
          </div>
        </div>
        <div className="partner_text">
          <div className="mt-lg-5 pt-lg-5 d-none d-lg-block">
            <div className="d-flex align-items-center gap-2 justify-content-center mt-5 pt-lg-5 pb-4">
              <p className="ff_mundial_regular font_5xl color_dark_gray mb-0 partner_para custom_letter_spacing">
                Non cerchiamo clienti ma
              </p>
              <button className="ff_mundial_regular font_2xl color_dark_gray common_button d-flex mt-2 mt-xxl-1 common_btn">
                partner
              </button>
            </div>
          </div>
          <div className="pb-lg-5">
            <div className="row flex-md-wrap justify-content-center align-items-center d-none d-lg-flex my-xl-5 pt-5 pb-xl-5 gap_5 gap_xxl_66">
              {/* {partnerData.map((obj, index) => {
                return ( */}
              <div className="col-auto">
                <div className="w-100">
                  <img
                    className="leasyslogo"
                    src={leasyslogo}
                    alt="leasyslogo"
                  />
                </div>
              </div>
              {/* );
              })} */}
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
                  <img className="insuramalogo" src={insurama} alt="insurama" />
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

      <div className="webkit_scrollbar partner_parent_img">
        <div className="mt-lg-5 pt-lg-5 d-lg-none">
          <div className="d-flex align-items-center gap-2 justify-content-center mt-5 pt-lg-5 pb-4">
            <p className="ff_mundial_regular font_5xl color_dark_gray mb-0 partner_para custom_letter_spacing">
              Non cerchiamo clienti ma
            </p>
            <button className="ff_mundial_regular font_2xl color_dark_gray common_button d-sm-flex mt-2 mt-xxl-1 common_btn">
              partner
            </button>
          </div>
        </div>

        <div className="d-flex align-items-center gap-5 pt-5 mb-5 overflow-auto d-lg-none">
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
  );
};

export default Partner;

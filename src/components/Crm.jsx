import { useEffect } from "react";
import salesfortlogo from "../assets/images/svg/salesforce-logo.svg";
import amazonlogo from "../assets/images/svg/amazon-logo.svg";
import hubsportlogo from "../assets/images/svg/hubsport-logo.svg";
import pipedrivelogo from "../assets/images/svg/pipedrive-logo.svg";
import zendexlogo from "../assets/images/svg/zendesk-suite-logo.svg";
import crmLeftIcon from "../assets/images/png/crm-left-icon.png";
import { gsap } from "gsap";
const Crm = () => {
  useEffect(() => {
    let crmValues = gsap.matchMedia();
    crmValues.add("(min-width:992px)", () => {
      let crm = gsap.timeline({
        scrollTrigger: {
          trigger: ".crm_parent",
          pin: true,
          pinSpacing: false,
        },
      });
    });

    crmValues.add("(min-width:576px) and (max-width:991.98px)", () => {
      let crmicons = gsap.timeline({
        scrollTrigger: {
          trigger: ".crm_parent",
          start: "top top",
          end: "bottom center",
          scrub: 3,
          pin: true,
        },
      });
      crmicons.fromTo(
        ".crm_parent_img",
        {
          xPercent: 0,
        },
        {
          xPercent: -80,
        }
      );
    });
    crmValues.add("(max-width:575.98px)", () => {
      let crmicons = gsap.timeline({
        scrollTrigger: {
          trigger: ".crm_parent",
          start: "top top",
          end: "bottom center",
          scrub: 3,
          pin: true,
        },
      });
      crmicons.fromTo(
        ".crm_parent_img",
        {
          xPercent: 0,
        },
        {
          xPercent: -150,
        }
      );
    });
  }, []);
  return (
    <>
      <div className="d-flex justify-content-center align-items-center crm_parent overflow-hidden">
        <div className="position-absolute crm_left_icon d-none d-lg-block z_negative">
          <img src={crmLeftIcon} alt="crm-left-icon" />
        </div>
        <div className="container custom_container crm_text">
          <div className="d-sm-flex align-items-center gap-2 justify-content-center pt-1 pt-md-5 pb-4 pb-lg-0 text-center text-sm-start">
            <p className="font_5xl color_dark_gray mb-0 partner_para custom_letter_spacing">
              É possibile integrare i dati con il tuo
            </p>
            <button className="font_2xl color_dark_gray common_button common_btn">
              CRM
            </button>
            <span className="font_lg">.</span>
          </div>
          <div className="pb-lg-5 crm_parent_img">
            <div className="pb-lg-5 d-flex justify-content-between align-items-center my-xl-5 py-5 crm_img">
              <div className="crm_slider text-center">
                <img className="w-100" src={salesfortlogo} alt="icon-1" />
              </div>
              <div className="crm_slider text-center ps-5">
                <img className="w-100" src={amazonlogo} alt="icon-1" />
              </div>
              <div className="crm_slider text-center ps-5">
                <img className="w-100" src={hubsportlogo} alt="icon-2" />
              </div>
              <div className="crm_slider text-center ps-5">
                <img className="w-100" src={pipedrivelogo} alt="icon-3" />
              </div>
              <div className="crm_slider text-center ps-5">
                <img className="w-100" src={zendexlogo} alt="icon-4" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Crm;

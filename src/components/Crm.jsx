import { useLayoutEffect } from "react";
import salesfortlogo from "../assets/images/svg/salesforce-logo.svg";
import amazonlogo from "../assets/images/svg/amazon-logo.svg";
import hubsportlogo from "../assets/images/svg/hubsport-logo.svg";
import pipedrivelogo from "../assets/images/svg/pipedrive-logo.svg";
import zendexlogo from "../assets/images/svg/zendesk-suite-logo.svg";
import { gsap } from "gsap";
const Crm = () => {
  // useLayoutEffect(() => {
  //   let crm = gsap.matchMedia();
  //   crm.add("(min-width: 992px)", () => {
  //     let crm_value = gsap.timeline({
  //       scrollTrigger: {
  //         trigger: ".crm_parent",
  //         start: "top top",
  //         end: "bottom top",
  //         // markers: true,
  //       },
  //     });
  //     crm_value.from(".crm_text", {
  //       yPercent: 100,
  //       autoAlpha: 0,
  //       ease: "back(2)",
  //       stagger: 0.02,
  //     });
  //   });
  //   // crm.add("(max-width:767.98px)", () => {
  //   //   let crmicons = gsap.timeline({
  //   //     scrollTrigger: {
  //   //       trigger: ".crm_parent_img",
  //   //       start: "30% 50%",
  //   //       end: "bottom center",
  //   //       scrub: 10,
  //   //     },
  //   //   });
  //   //   crmicons.fromTo(
  //   //     ".crm_img",
  //   //     {
  //   //       xPercent: 0,
  //   //     },
  //   //     {
  //   //       xPercent: -150,
  //   //     }
  //   //   );
  //   //   // },
  //   // });
  // }, []);
  return (
    <>
      <div className="bg_light_white min-vh-100 d-flex justify-content-center align-items-center crm_parent overflow-hidden">
        <div className="container custom_container crm_text">
          <div className="d-flex align-items-center gap-2 justify-content-center pt-1 pt-md-5 pb-4 pb-lg-0">
            <p className="ff_mundial_normal font_5xl text_secondary mb-0 partner_para">
              É possibile integrare i dati con il tuo
            </p>
            <button className="ff_mundial_normal font_2xl text_secondary partner_btn ">
              CRM
            </button>
          </div>
          <div className=" pb-lg-5 crm_parent_img">
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

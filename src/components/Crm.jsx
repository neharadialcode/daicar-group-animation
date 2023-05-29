import { useEffect, useState } from "react";
import salesfortlogo from "../assets/images/svg/salesforce-logo.svg";
import amazonlogo from "../assets/images/svg/amazon-logo.svg";
import hubsportlogo from "../assets/images/svg/hubsport-logo.svg";
import pipedrivelogo from "../assets/images/svg/pipedrive-logo.svg";
import zendexlogo from "../assets/images/svg/zendesk-suite-logo.svg";
import crmLeftIcon from "../assets/images/png/crm-left-icon.png";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

gsap.registerPlugin(ScrollTrigger);
const Crm = () => {
  const [isMobileDevice, setIsMobileDevice] = useState(false);

  var settings = {
    dots: false,
    infinite: true,
    arrows: false,
    autoplay: true,
    centerMode: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
  };

  useEffect(() => {
    window.innerWidth < 576.99 && setIsMobileDevice(true);
    window.innerWidth > 576.99 && setIsMobileDevice(false);
    window.addEventListener("resize", () => {
      window.innerWidth < 576.99 && setIsMobileDevice(true);
      window.innerWidth > 576.99 && setIsMobileDevice(false);
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#CRM",
        start: "top top",
        pin: true,
      },
    });

    tl
      .from("#CRM-img-container img", {
      x: -50,
      autoAlpha: 0,
      stagger: 0.07,
    });
  }, []);
  return (
    <>
      <div
        id="CRM"
        className="d-flex justify-content-center align-items-center overflow-hidden bg_light_white min-vh-100"
      >
        <div className="position-absolute crm_left_icon d-none d-xl-block z_negative">
          <img src={crmLeftIcon} alt="crm-left-icon" />
        </div>
        <div className="container custom_container crm_text">
          <div
            id="CRM-content-heading"
            className="d-sm-flex align-items-center gap-2 justify-content-center pt-1 pt-md-5 pb-4 pb-lg-0 text-center text-sm-start"
          >
            <p className="font_5xl color_dark_gray mb-0 custom_letter_spacing">
              É possibile integrare i dati con il tuo
            </p>
            <a href="#contatti">
              <button className="custom_tab_button_012 cursor-pointer font_2xl color_dark_gray common_button common_btn">
                CRM
              </button>
            </a>
            <span className="font_lg">.</span>
          </div>
          {!isMobileDevice && (
            <div className="pb-lg-5">
              <div className="pb-lg-5 d-flex justify-content-center justify-content-lg-between align-items-center my-xxl-5 py-5 crm_parent_img">
                <div
                  id="CRM-img-container"
                  className="p-xxl-4 text-center crm_img_size mt-2 mt-lg-0"
                >
                  <img
                    width={180}
                    height={126}
                    src={salesfortlogo}
                    alt="crm-icon-1"
                  />
                </div>
                <div
                  id="CRM-img-container"
                  className="p-xxl-4 text-center crm_img_size mt-2 mt-lg-0"
                >
                  <img
                    width={181}
                    height={76}
                    src={amazonlogo}
                    alt="crm-icon-2"
                  />
                </div>
                <div
                  id="CRM-img-container"
                  className="p-xxl-4 text-center crm_img_size mt-2 mt-lg-0"
                >
                  <img
                    width={152}
                    height={43}
                    src={hubsportlogo}
                    alt="crm-icon-3"
                  />
                </div>
                <div
                  id="CRM-img-container"
                  className="p-xxl-4 text-center crm_img_size mt-2 mt-lg-0"
                >
                  <img
                    width={196}
                    height={52}
                    src={pipedrivelogo}
                    alt="crm-icon-4"
                  />
                </div>
                <div
                  id="CRM-img-container"
                  className="p-xxl-4 text-center crm_img_size mt-2 mt-lg-0"
                >
                  <img
                    width={280}
                    height={85}
                    src={zendexlogo}
                    alt="crm-icon-5"
                  />
                </div>
              </div>
            </div>
          )}
          {isMobileDevice && (
            <Slider {...settings}>
              <div
                id="CRM-img-container"
                className="d-flex justify-content-center"
              >
                <img
                  width={180}
                  height={126}
                  src={salesfortlogo}
                  alt="icon-1"
                  className="px-3 w-100 crm_image_size"
                />
              </div>
              <div
                id="CRM-img-container"
                className="d-flex justify-content-center"
              >
                <img
                  width={181}
                  height={76}
                  src={amazonlogo}
                  alt="icon-1"
                  className="px-3 w-100 crm_image_size"
                />
              </div>
              <div
                id="CRM-img-container"
                className="d-flex justify-content-center"
              >
                <img
                  width={152}
                  height={43}
                  src={hubsportlogo}
                  alt="icon-2"
                  className="px-3 w-100 crm_image_size"
                />
              </div>
              <div
                id="CRM-img-container"
                className="d-flex justify-content-center"
              >
                <img
                  width={196}
                  height={52}
                  src={pipedrivelogo}
                  alt="icon-3"
                  className="px-3 w-100 crm_image_size"
                />
              </div>
              <div
                id="CRM-img-container"
                className="d-flex justify-content-center"
              >
                <img
                  width={280}
                  height={85}
                  src={zendexlogo}
                  alt="icon-4"
                  className="px-3 w-100 crm_image_size"
                />
              </div>
            </Slider>
          )}
        </div>
      </div>
    </>
  );
};

export default Crm;

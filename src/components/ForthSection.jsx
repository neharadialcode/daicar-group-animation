import React, { useEffect } from "react";
import roadmapImg1 from "../assets/images/svg/roadmap_img1.png";
import roadmapImg2 from "../assets/images/svg/roadmap_img2.png";

// import smallArrowOne from "../assets/images/png/small-arrow.png";
// import smallArrowTwo from "../assets/images/png/small-arrow-2.png";

import bigFounder from "../assets/images/png/big-founder-federico-img.png";
// import bigFounderTwo from "../assets/images/png/arrow-founder-2.png";
// import bigFounderThree from "../assets/images/png/arrow-founder-3.png";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { DownArrowNoiIcon, UpArrowNoiIcon } from "./Icons";
const ForthSection = () => {
  useEffect(() => {
    let secondSection2 = gsap.timeline({
      scrollTrigger: {
        trigger: ".forth_section",
        start: "top top",
        end: "bottom top",
        scrub: 1,
        pin: true,
        pinSpacing: false,
      },
    });
    secondSection2
      .fromTo(
        ".roadmap_icon_1",
        {
          left: "-100%",
        },
        {
          left: "0%",
        }
      )
      .fromTo(
        ".roadmap_icon_2",
        {
          left: "-100%",
        },
        {
          left: "10%",
        },
        "-=.5"
      )
      .fromTo(
        ".roadmap_text_1",
        {
          autoAlpha: 0,
        },
        {
          autoAlpha: 1,
        },
        "-=.5"
      )
      // .fromTo(
      //   ".forth_section_background",
      //   {
      //     autoAlpha: 0,
      //   },
      //   {
      //     autoAlpha: 1,
      //   },
      //   "-=.5"
      // )
      .fromTo(
        ".roadmap_icon_1",
        {
          left: "0%",
        },
        {
          left: "10%",
        }
      )
      .fromTo(
        ".roadmap_icon_2",
        {
          left: "10%",
        },
        {
          left: "20%",
        },
        "-=.5"
      )
      .fromTo(
        ".roadmap_text_2",
        {
          autoAlpha: 0,
        },
        {
          autoAlpha: 1,
        },
        "-=.5"
      )
      .to(
        ".roadmap_text_1",
        {
          autoAlpha: 0,
        },

        "-=.5"
      )
      .fromTo(
        ".roadmap_icon_1",
        {
          left: "10%",
        },
        {
          left: "20%",
        }
      )
      .fromTo(
        ".roadmap_icon_2",
        {
          left: "20%",
        },
        {
          left: "30%",
        },
        "-=.5"
      )
      .fromTo(
        ".roadmap_text_3",
        {
          autoAlpha: 0,
        },
        {
          autoAlpha: 1,
        },
        "-=.5"
      )
      .to(
        ".roadmap_text_2",
        {
          autoAlpha: 0,
        },

        "-=.5"
      );
  }, []);
  return (
    <div className="vh-100 overflow-hidden forth_section">
      <div className="position-relative h-100">
        {/* <div className="bg_white position-absolute top-0 start-0 w-100 h-100 forth_section_background"></div> */}
        <img className="roadmap_icon_1" src={roadmapImg1} alt="roadmapImg1" />
        <img className="roadmap_icon_2" src={roadmapImg2} alt="roadmapImg1" />
        <div className="container h-100">
          <div className="row justify-content-end align-items-center ">
            <div className="col-6">
              {/* <div className="roadmap_text_1">
                <h4 className="font_8xl color_dark_gray mt-4 mt-xl-5 pt-xl-5 ps-xl-5 pe-xxl-5 me-xxl-5">
                  Siamo un’azienda digitale che si concentra sulla generazione
                  di opportunità di business.
                </h4>
                <p>Federico, CF Tecnology Officer</p>
              </div> */}

              <div className="roadmap_text_1 text_one_arrow position-absolute top_space_business_text ps-3 ps-sm-5 ps-lg-0">
                <div className="position-absolute small_icon_arrow">
                  <UpArrowNoiIcon />
                </div>
                <div className="position-absolute small_icon_arrow_2">
                  <DownArrowNoiIcon />
                </div>
                <div className="top_space_custom_arrow_text">
                  <h4 className="font_8xl color_dark_gray mt-4 mt-xl-5 pt-xl-5 ps-xl-5 pe-xxl-5 me-xxl-5">
                    Siamo un’azienda digitale che si concentra sulla generazione
                    di opportunità di business.
                  </h4>
                </div>
                <div className="d-flex align-items-center ps-xl-5 pt-4 mt-xl-3">
                  <img
                    className="founder_img"
                    src={bigFounder}
                    alt="arrow-founder"
                  />
                  <p className="font_2xl color_dark_gray ps-3 mb-0">
                    Federico,
                    <span className="fw-light ff_mundial_ligh ms-2">
                      CF Tecnology Officer
                    </span>
                  </p>
                </div>
              </div>

              <h2 className="roadmap_text_2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
                ullam, atque nostrum quo voluptatum quibusdam placeat distinctio
                culpa pariatur est natus harum itaque consequuntur incidunt
                iusto. Iusto quibusdam aut reiciendis?
              </h2>
              <h2 className="roadmap_text_3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
                ullam, atque nostrum quo voluptatum quibusdam placeat distinctio
                culpa pariatur est natus harum itaque consequuntur incidunt
                iusto. Iusto quibusdam aut reiciendis?
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForthSection;

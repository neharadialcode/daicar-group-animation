import React, { useEffect } from "react";
import roadmapImg1 from "../assets/images/svg/roadmap_img1.png";
import roadmapImg2 from "../assets/images/svg/roadmap_img2.png";
import bigFounder from "../assets/images/png/big-founder-federico-img.png";
import bigFounder2 from "../assets/images/png/big-founder-matteo-img.png";
import bigFounder3 from "../assets/images/png/big-founder-francesca-img.png";
import lefttextImg from "../assets/images/png/left-text-icon-img.png";
import smallbgImg from "../assets/images/png/small-bg-forth.png";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { DownArrowNoiIcon, UpArrowNoiIcon } from "./Icons";
const ForthSection = () => {
  useEffect(() => {
    let media = gsap.matchMedia();
    media.add("(min-width: 1400px)", () => {
      let secondSection4 = gsap.timeline({
        scrollTrigger: {
          trigger: ".forth_section",
          start: "top top",
          end: "bottom top",
          scrub: 1,
          pin: true,
          pinSpacing: false,
        },
      });
      secondSection4
        .fromTo(
          ".left_text_forth",
          {
            autoAlpha: 0,
          },
          {
            autoAlpha: 1,
          }
        )
        .fromTo(
          ".forth_heading",
          {
            autoAlpha: 0,
          },
          {
            autoAlpha: 1,
          }
        )
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
        .to(".forth_section", {
          background: "#b5efcb",
        })
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
            left: "6%",
          }
        )
        .fromTo(
          ".roadmap_icon_2",
          {
            left: "10%",
          },
          {
            left: "16%",
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
            left: "6%",
          },
          {
            left: "10%",
          }
        )
        .fromTo(
          ".roadmap_icon_2",
          {
            left: "16%",
          },
          {
            left: "20%",
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
    });
    media.add("(min-width: 992px) and (max-width:1399.98px)", () => {
      let secondSection4 = gsap.timeline({
        scrollTrigger: {
          trigger: ".forth_section",
          start: "top top",
          end: "bottom top",
          scrub: 1,
          pin: true,
          pinSpacing: false,
        },
      });
      secondSection4
        .fromTo(
          ".left_text_forth",
          {
            autoAlpha: 0,
          },
          {
            autoAlpha: 1,
          }
        )
        .fromTo(
          ".forth_heading",
          {
            autoAlpha: 0,
          },
          {
            autoAlpha: 1,
          }
        )
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
        .to(".forth_section", {
          background: "#b5efcb",
        })
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
            left: "10%",
          }
        )
        .fromTo(
          ".roadmap_icon_2",
          {
            left: "20%",
          },
          {
            left: "20%",
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
    });
    media.add("(max-width:991.98px)", () => {
      let secondSection4 = gsap.timeline({
        scrollTrigger: {
          trigger: ".forth_section",
          start: "top 30%",
          end: "bottom top",
        },
      });
      secondSection4
        .from(".founder_1", {
          xPercent: "-100",
          duration: 1,
          stagger: 0.3,
        })
        .from(".founder_2", {
          xPercent: "100",
          duration: 1,
          stagger: 0.3,
        })
        .from(".founder_3", {
          xPercent: "-100",
          duration: 1,
          stagger: 0.3,
        });
      // .to(
      //   ".business_left_icon",
      //   {
      //     autoAlpha: 0,
      //   },
      //   "+=.5"
      // );
    });
  }, []);

  return (
    <div className="vh-100 overflow-hidden forth_section">
      <div className="position-relative h-100 z_1">
        <img className="roadmap_icon_1" src={roadmapImg1} alt="roadmapImg1" />
        <img className="roadmap_icon_2" src={roadmapImg2} alt="roadmapImg1" />
        <div className="position-absolute d-none d-sm-block d-lg-none z_negative">
          <img
            className="w-100 small_tab_arrow_img_forth"
            src={smallbgImg}
            alt="arrow-tab-img"
          />
        </div>
        <div className="text-center pt-5 mt-sm-5 mt-lg-0 px-sm-4 px-lg-0 forth_heading z_1">
          <p className="font_6xl text-white pt-sm-5 pt-lg-0 px-sm-5 px-lg-0 mx-sm-5 mx-lg-0">
            Ideata da
            <span className="hero_btn noi_btn bg_light_green mx-2">noi</span>
            grazie all’esperienza acquisita nel
            <span className="hero_btn noi_btn bg_light_green mx-2">tempo</span>
            <span className="text-black">.</span>
          </p>
        </div>
        <div className="position-absolute z-1 end-0 d-none d-lg-block pe-5 left_text_forth">
          <img src={lefttextImg} alt="business-small-arrow-2" />
        </div>
        <div className="container h-100 pb-5 pb-lg-0">
          <div className="row justify-content-lg-end align-items-center mb-sm-5 my-lg-0">
            <div className="col-6 roadmap_col_content d-none d-lg-block">
              <div className="roadmap_text_1 text_one_arrow position-absolute ps-3 ps-sm-5 ps-lg-0">
                <div className="position-absolute small_icon_arrow">
                  <UpArrowNoiIcon />
                </div>
                <div className="position-absolute small_icon_arrow_2">
                  <DownArrowNoiIcon />
                </div>
                <div className="top_space_custom_arrow_text">
                  <h4 className="font_8xl color_dark_gray mt-4 mt-xl-5 pt-xl-5 px-lg-4 ps-xl-5 pe-xxl-5 me-xxl-5">
                    Siamo un’azienda digitale che si concentra sulla generazione
                    di opportunità di business.
                  </h4>
                </div>
                <div className="d-flex align-items-center ps-xl-5 pt-4 mt-xl-3 px-lg-4">
                  <img
                    className="founder_img"
                    src={bigFounder}
                    alt="arrow-founder"
                  />
                  <p className="font_2xl color_dark_gray fw-normal ps-3 mb-0">
                    Federico,
                    <span className="fw-light ff_mundial_ligh ms-2">
                      CF Tecnology Officer
                    </span>
                  </p>
                </div>
              </div>

              <div className="roadmap_text_2 text_one_arrow position-absolute ps-3 ps-sm-5 ps-lg-0">
                <div className="position-absolute small_icon_arrow">
                  <UpArrowNoiIcon />
                </div>
                <div className="position-absolute small_icon_arrow_2">
                  <DownArrowNoiIcon />
                </div>
                <div className="top_space_custom_arrow_text">
                  <h4 className="font_8xl color_dark_gray mt-4 mt-xl-5 pt-xl-5 px-lg-4 ps-xl-5 pe-xxl-5 me-xxl-5 mb-0">
                    Obiettivi chiari e definiti perseguiti con un approccio
                    personalizzato verso risultati concreti e misurabili.
                  </h4>
                </div>
                <div className="d-flex align-items-center ps-xl-5 pt-4 mt-xl-3 px-lg-4">
                  <img
                    className="founder_img"
                    src={bigFounder2}
                    alt="arrow-founder"
                  />
                  <p className="font_2xl color_dark_gray fw-normal ps-3 mb-0">
                    Matteo,
                    <span className="fw-light ff_mundial_ligh ms-2">
                      Business Developmet Manager
                    </span>
                  </p>
                </div>
              </div>

              <div className="roadmap_text_3 text_one_arrow position-absolute ps-3 ps-sm-5 ps-lg-0">
                <div className="position-absolute small_icon_arrow">
                  <UpArrowNoiIcon />
                </div>
                <div className="position-absolute small_icon_arrow_2">
                  <DownArrowNoiIcon />
                </div>
                <div className="top_space_custom_arrow_text">
                  <h4 className="font_8xl color_dark_gray mt-4 mt-xl-5 pt-xl-5 px-lg-4 ps-xl-5 pe-xxl-5 me-xxl-4 mb-0">
                    Qualifichiamo i dati in tempo reale consentendo di
                    incrementare il ROI delle azioni di lead generation.
                  </h4>
                </div>
                <div className="d-flex align-items-center ps-xl-5 pt-4 mt-xl-3 px-lg-4">
                  <img
                    className="founder_img"
                    src={bigFounder3}
                    alt="arrow-founder"
                  />
                  <p className="font_2xl color_dark_gray fw-normal ps-3 mb-0">
                    Federico,
                    <span className="fw-light ff_mundial_ligh ms-2">
                      IT Manager
                    </span>
                  </p>
                </div>
              </div>
            </div>

            <div className="col-12 d-lg-none custom_top_spacing mb-4 mb-sm-0 founder_1">
              <div className="position-relative roadmap_para">
                <div className="position-absolute small_icon_arrow">
                  <UpArrowNoiIcon />
                </div>
                <div className="top_space_custom_arrow_text position-relative">
                  <h4 className="font_8xl color_dark_gray mt-4 mt-xl-5 pt-xl-5 px-lg-4 ps-xl-5 pe-xxl-5 me-xxl-5">
                    Siamo un’azienda digitale che si concentra sulla generazione
                    di opportunità di business.
                  </h4>
                  <div className="position-absolute small_icon_arrow_2">
                    <DownArrowNoiIcon />
                  </div>
                </div>
                <div className="d-flex align-items-sm-center ps-xl-5 pt-3 pt-4 mt-xl-3">
                  <img
                    className="founder_img d-none d-sm-block"
                    src={bigFounder}
                    alt="arrow-founder"
                  />
                  <p className="font_2xl color_dark_gray fw-normal ps-sm-3 mb-0">
                    Marta Daina,
                    <span className="fw-light ff_mundial_ligh ms-2">
                      Founder
                    </span>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-12 d-lg-none py-sm-5 my-sm-4 founder_2">
              <div className="position-relative roadmap_para">
                <div className="position-absolute small_icon_arrow">
                  <UpArrowNoiIcon />
                </div>
                <div className="top_space_custom_arrow_text position-relative">
                  <h4 className="font_8xl color_dark_gray mt-4 mt-xl-5 pt-xl-5 px-lg-4 ps-xl-5 pe-xxl-5 me-xxl-5 mb-0">
                    Obiettivi chiari e definiti perseguiti con un approccio
                    personalizzato verso risultati concreti e misurabili.
                  </h4>
                  <div className="position-absolute small_icon_arrow_2">
                    <DownArrowNoiIcon />
                  </div>
                </div>
                <div className="d-flex align-items-sm-center ps-xl-5 pt-3 pt-4 mt-xl-3">
                  <img
                    className="founder_img d-none d-sm-block"
                    src={bigFounder2}
                    alt="arrow-founder"
                  />
                  <p className="font_2xl color_dark_gray fw-normal ps-sm-3 mb-0">
                    Matteo,
                    <span className="fw-light ff_mundial_ligh ms-2">
                      Business Developmet Manager
                    </span>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-12 d-lg-none mt-4 mt-sm-0 founder_3">
              <div className="position-relative roadmap_para">
                <div className="position-absolute small_icon_arrow">
                  <UpArrowNoiIcon />
                </div>
                <div className="top_space_custom_arrow_text position-relative">
                  <h4 className="font_8xl color_dark_gray mt-4 mt-xl-5 pt-xl-5 px-lg-4 ps-xl-5 pe-xxl-5 me-xxl-4 mb-0">
                    Qualifichiamo i dati in tempo reale consentendo di
                    incrementare il ROI delle azioni di lead generation.
                    <div className="position-absolute small_icon_arrow_2">
                      <DownArrowNoiIcon />
                    </div>
                  </h4>
                </div>
                <div className="d-flex align-items-sm-center ps-xl-5 pt-3 pt-4 mt-xl-3">
                  <img
                    className="founder_img d-none d-sm-block"
                    src={bigFounder3}
                    alt="arrow-founder"
                  />
                  <p className="font_2xl color_dark_gray fw-normal ps-sm-3 mb-0">
                    Francesca,
                    <span className="fw-light ff_mundial_ligh ms-2">
                      Responsabile Marketing
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForthSection;

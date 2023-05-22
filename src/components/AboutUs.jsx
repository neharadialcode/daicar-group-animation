import React, { useEffect } from "react";
import bigFounder from "../assets/images/svg/big-founder-img-1.svg";
import bigFounder2 from "../assets/images/svg/big-founder-img-2.svg";
import bigFounder3 from "../assets/images/svg/big-founder-img-3.svg";
import lefttextImg from "../assets/images/png/left-text-icon-img.png";
import smallbgImg from "../assets/images/png/small-bg-forth.png";
import aboutEText from "../assets/images/svg/about-e-text.svg";
import { gsap } from "gsap";
import { DownArrowNoiIcon, UpArrowNoiIcon } from "./Icons";

import aboutArrow from "../assets/about-arrow.png";

const About = () => {
  useEffect(() => {
    let mm = gsap.matchMedia();
    mm.add("(min-width: 1600px)", () => {
      const tl1 = gsap.timeline({
        scrollTrigger: {
          trigger: ".about_parent",
          start: "top bottom",
          end: "top top",
          scrub: true,
          fastScrollEnd: true,
        },
      });
      tl1
        .to("#hero-large-arrow", {
          scale: 1.2,
          top: "-80%",
          duration: 5,
        })
        .to(
          "#root",
          {
            backgroundColor: "#7EE49C80",
          },
          "<2"
        );
      let secondSection4 = gsap.timeline({
        scrollTrigger: {
          trigger: ".about_parent",
          start: "top top",
          end: "+=300%",
          scrub: 1,
          pin: true,
        },
      });
      secondSection4
        .fromTo(
          ".left_text_about",
          {
            autoAlpha: 0,
          },
          {
            autoAlpha: 1,
          }
        )
        .to(
          ".left_text_about",
          {
            bottom: "0%",
          },
          "-=.5"
        )

        // FIRST VALUES
        .fromTo(
          ".about_icon_2",
          {
            left: "-40%",
          },
          {
            left: "10%",
            duration: 5,
          },
          "-=.5"
        )

        .fromTo(
          ".about_text_1",
          {
            autoAlpha: 0,
          },
          {
            autoAlpha: 1,
            duration: 5,
          },
          "-=.5"
        )

        // SECOND VALUES
        .fromTo(
          ".about_icon_2",
          {
            left: "10%",
          },
          {
            left: "16%",
            duration: 5,
          },
          "-=.5"
        )
        .to(
          ".about_text_1",
          {
            autoAlpha: 0,
          },

          "-=.5"
        )
        .fromTo(
          ".about_text_2",
          {
            autoAlpha: 0,
          },
          {
            autoAlpha: 1,
            duration: 5,
          },
          "-=.1"
        )
        .to(
          ".left_text_about",
          {
            bottom: "25%",
          },
          "-=.5"
        )

        // THIRD VALUES
        .fromTo(
          ".about_icon_2",
          {
            left: "16%",
          },
          {
            left: "20%",
            duration: 5,
          },
          "-=.5"
        )
        .to(
          ".about_text_2",
          {
            autoAlpha: 0,
          },

          "-=.5"
        )
        .fromTo(
          ".about_text_3",
          {
            autoAlpha: 0,
          },
          {
            autoAlpha: 1,
            duration: 5,
          },
          "-=.1"
        )
        .to(
          ".left_text_about",
          {
            bottom: "50%",
          },
          "-=.5"
        )
        .to("#hero-large-arrow", {
          scale: 1.2,
          top: "-200%",
          duration: 5,
        });
    });
    mm.add("(min-width: 992px) and (max-width:1599.98px)", () => {
      const tl1 = gsap.timeline({
        scrollTrigger: {
          trigger: ".about_parent",
          start: "top bottom",
          end: "top top",
          scrub: true,
          fastScrollEnd: true,
        },
      });
      tl1
        .to("#hero-large-arrow", {
          scale: 1.2,
          top: "-120%",
          duration: 5,
        })
        .to(
          "#root",
          {
            backgroundColor: "#7EE49C80",
          },
          "<2"
        );
      let secondSection4 = gsap.timeline({
        scrollTrigger: {
          trigger: ".about_parent",
          start: "top top",
          end: "+=300%",
          scrub: 1,
          pin: true,
        },
      });
      secondSection4

        // FIRST VALUES
        .fromTo(
          ".about_icon_2",
          {
            left: "-50%",
          },
          {
            left: "10%",
            duration: 5,
          },
          "-=.5"
        )

        .fromTo(
          ".about_text_1",
          {
            autoAlpha: 0,
          },
          {
            autoAlpha: 1,
            duration: 5,
          },
          "-=.5"
        )

        // SECOND VALUES
        .fromTo(
          ".about_icon_2",
          {
            left: "10%",
          },
          {
            left: "15%",
            duration: 5,
          },
          "-=.5"
        )
        .to(
          ".about_text_1",
          {
            autoAlpha: 0,
          },

          "-=.5"
        )
        .fromTo(
          ".about_text_2",
          {
            autoAlpha: 0,
          },
          {
            autoAlpha: 1,
            duration: 5,
          },
          "-=.1"
        )
        // THIRD VALUES
        .fromTo(
          ".about_icon_2",
          {
            left: "15%",
          },
          {
            left: "20%",
            duration: 5,
          },
          "-=.5"
        )
        .to(
          ".about_text_2",
          {
            autoAlpha: 0,
          },

          "-=.5"
        )
        .fromTo(
          ".about_text_3",
          {
            autoAlpha: 0,
          },
          {
            autoAlpha: 1,
            duration: 5,
          },
          "-=.1"
        )
        .to("#hero-large-arrow", {
          scale: 1.2,
          top: "-200%",
          duration: 5,
        });
    });
    mm.add("(max-width:991.98px)", () => {
      let secondSection4 = gsap.timeline({
        scrollTrigger: {
          trigger: ".about_parent",
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
    });
  }, []);

  return (
    <div className="vh-100 overflow-hidden about_parent z_5 top_minus_space">
      <div className="position-relative h-100 z_1">
        <img
          className="about_icon_2 d-none d-lg-block"
          src={aboutArrow}
          alt="aboutArrow"
        />
        <div className="position-absolute d-none d-sm-block d-lg-none z_negative">
          <img
            className="w-100 small_tab_arrow_img_forth"
            src={smallbgImg}
            alt="arrow-tab-img"
          />
        </div>
        <div className="text-center pt-5 mt-sm-5mt-lg-0 px-sm-4 px-lg-0 about_text_size z_1">
          <p className="font_5xl text-white pt-sm-5 px-sm-5 px-lg-0 mx-sm-5 mx-lg-0 custom_letter_spacing px-2 px-sm-0">
            Ideata da
            <span className="hero_btn noi_btn bg_light_green mx-2">noi</span>
            grazie all’esperienza acquisita nel
            <span className="hero_btn noi_btn bg_light_green mx-2">tempo</span>
            <span className="color_dark_gray">.</span>
          </p>
        </div>
        <div className="position-absolute z-1 end-0 d-none d-xxl-block pe-5 me-5 left_text_about">
          <img src={lefttextImg} alt="business-small-arrow-2" />
        </div>
        <div className="container h-100 pb-5 pb-lg-0">
          <div className="row justify-content-lg-end align-items-center mb-sm-5 my-lg-0">
            <div className="col-6 about_col_content d-none d-lg-block">
              <div className="about_text_1 text_one_arrow position-absolute ps-3 ps-sm-5 ps-lg-0">
                <div className="position-absolute small_icon_arrow">
                  <UpArrowNoiIcon />
                </div>
                <div className="position-absolute small_icon_arrow_2">
                  <DownArrowNoiIcon />
                </div>
                <div>
                  <h4 className="font_8xl color_dark_gray mt-4 mt-xl-5 pt-xl-5 px-lg-4 ps-xl-5">
                    Il futuro della lead generation{" "}
                    <span>
                      <img
                        className="mb-2 about_e_text"
                        src={aboutEText}
                        alt="about-e-text"
                      />
                    </span>{" "}
                    basato sulla creazione di relazioni di fiducia, sostenute
                    dalla tecnologia.
                  </h4>
                </div>
                <div className="d-flex align-items-center ps-xl-5 pt-4 mt-xl-3 px-lg-4">
                  <img
                    className="founder_img"
                    src={bigFounder}
                    alt="arrow-founder"
                  />
                  <p className="font_2xl color_dark_gray ps-3 mb-0">
                    Federico,
                    <span className="ff_mundial_light ms-2">
                      Chief Technology Officer
                    </span>
                  </p>
                </div>
              </div>

              <div className="about_text_2 text_one_arrow position-absolute ps-3 ps-sm-5 ps-lg-0">
                <div className="position-absolute small_icon_arrow">
                  <UpArrowNoiIcon />
                </div>
                <div className="position-absolute small_icon_arrow_2">
                  <DownArrowNoiIcon />
                </div>
                <div>
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
                  <p className="font_2xl color_dark_gray ps-3 mb-0">
                    Matteo,
                    <span className="ff_mundial_light ms-2">
                      Business Developmet Manager
                    </span>
                  </p>
                </div>
              </div>

              <div className="about_text_3 text_one_arrow position-absolute ps-3 ps-sm-5 ps-lg-0">
                <div className="position-absolute small_icon_arrow">
                  <UpArrowNoiIcon />
                </div>
                <div className="position-absolute small_icon_arrow_2">
                  <DownArrowNoiIcon />
                </div>
                <div>
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
                  <p className="font_2xl color_dark_gray ps-3 mb-0">
                    Francesca,
                    <span className="ff_mundial_light ms-2">
                      Marketing Manager
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
                <div className="position-relative">
                  <h4 className="font_8xl color_dark_gray mt-4 mt-xl-5 pt-xl-5 px-lg-4 ps-xl-5 pe-xxl-5 me-xxl-5">
                    Il futuro della lead generation{" "}
                    <span>
                      <img
                        className="mb-2 about_e_text"
                        src={aboutEText}
                        alt="about-e-text"
                      />
                    </span>{" "}
                    basato sulla creazione di relazioni di fiducia, sostenute
                    dalla tecnologia.
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
                  <p className="font_2xl color_dark_gray ps-sm-3 mb-0">
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
                <div className="position-relative">
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
                  <p className="font_2xl color_dark_gray ps-sm-3 mb-0">
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
                <div className="position-relative">
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
                  <p className="font_2xl color_dark_gray ps-sm-3 mb-0">
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

export default About;

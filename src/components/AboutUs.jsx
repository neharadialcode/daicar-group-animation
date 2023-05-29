import React, { useEffect } from "react";
import bigFounder from "../assets/images/svg/big-founder-img-1.svg";
import bigFounder2 from "../assets/images/svg/big-founder-img-2.svg";
import bigFounder3 from "../assets/images/svg/big-founder-img-3.svg";
import lefttextImg from "../assets/images/png/left-text-icon-img.png";
import smallbgImg from "../assets/images/png/small-bg-forth.png";
import { gsap } from "gsap";
import { DownArrowNoiIcon, UpArrowNoiIcon } from "./Icons";
import aboutArrow from "../assets/images/png/about-arrow.png";

const About = () => {
  useEffect(() => {
    gsap.set(["#about-image-block-2", "#about-image-block-3"], {
      autoAlpha: 0,
    });
    let mm = gsap.matchMedia();
    mm.add("(min-width: 1600px)", () => {
      const tl1 = gsap.timeline({
        scrollTrigger: {
          trigger: "#about",
          start: "top bottom",
          end: "top top",
          scrub: true,
          fastScrollEnd: true,
        },
      });
      tl1
        .to("#hero-large-arrow", {
          scale: 1.2,
          top: "-95%",
          duration: 5,
        })
        .to(
          "#root",
          {
            backgroundColor: "#7EE49C80",
          },
          "<2"
        );
      const tl2 = gsap.timeline({
        scrollTrigger: {
          trigger: "#about",
          start: "top top",
          end: "+=300%",
          scrub: 1,
          pin: true,
        },
      });

      tl2
        // .from("#about-content-2", {
        //   xPercent: -50,
        //   autoAlpha: 0,
        //   scale: 0.8,
        // })
        .from("#about-arrow-img", {
          xPercent: -50,
          autoAlpha: 0,
          scale: 0.8,
        })
        .from(
          "#about-image-block",
          {
            autoAlpha: 0,
            scale: 0,
            xPercent: -50,
          },
          "<"
        )
        .fromTo(
          "#about-image-block",
          {
            width: "90%",
          },
          {
            width: "70%",
          },
          "<3"
        )
        .to("#about-image-block-1", {
          autoAlpha: 0,
        })
        .to("#about-image-block-2", {
          autoAlpha: 1,
        })
        .fromTo(
          "#about-image-block",
          {
            width: "70%",
          },
          {
            width: "60%",
          },
          "<3"
        )
        .to("#about-image-block-2", {
          autoAlpha: 0,
        })
        .to("#about-image-block-3", {
          autoAlpha: 1,
        })
        .to(
          "#about-image-block-3",
          {
            autoAlpha: 1,
          },
          "<3"
        );
    });
    mm.add("(min-width: 1200px) and (max-width:1599.98px)", () => {
      const tl1 = gsap.timeline({
        scrollTrigger: {
          trigger: "#about",
          start: "top bottom",
          end: "top top",
          scrub: true,
          fastScrollEnd: true,
        },
      });
      tl1
        .to("#hero-large-arrow", {
          scale: 1.2,
          top: "-145%",
          duration: 5,
        })
        .to(
          "#root",
          {
            backgroundColor: "#7EE49C80",
          },
          "<2"
        );
      const tl2 = gsap.timeline({
        scrollTrigger: {
          trigger: "#about",
          start: "top top",
          end: "+=300%",
          scrub: 1,
          pin: true,
        },
      });

      tl2
        .from("#about-arrow-img", {
          xPercent: -50,
          autoAlpha: 0,
          scale: 0.8,
        })
        .from(
          "#about-image-block",
          {
            autoAlpha: 0,
            scale: 0,
            xPercent: -50,
          },
          "<"
        )
        .fromTo(
          "#about-image-block",
          {
            width: "90%",
          },
          {
            width: "70%",
          },
          "<3"
        )
        .to("#about-image-block-1", {
          autoAlpha: 0,
        })
        .to("#about-image-block-2", {
          autoAlpha: 1,
        })
        .fromTo(
          "#about-image-block",
          {
            width: "70%",
          },
          {
            width: "60%",
          },
          "<3"
        )
        .to("#about-image-block-2", {
          autoAlpha: 0,
        })
        .to("#about-image-block-3", {
          autoAlpha: 1,
        })
        .to(
          "#about-image-block-3",
          {
            autoAlpha: 1,
          },
          "<3"
        );
    });
    mm.add("(min-width: 992px) and (max-width:1199.98px)", () => {
      const tl1 = gsap.timeline({
        scrollTrigger: {
          trigger: "#about",
          start: "top bottom",
          end: "top top",
          scrub: true,
          fastScrollEnd: true,
        },
      });
      tl1
        .to("#hero-large-arrow", {
          scale: 1.2,
          top: "-190%",
          duration: 5,
        })
        .to(
          "#root",
          {
            backgroundColor: "#7EE49C80",
          },
          "<2"
        );
      const tl2 = gsap.timeline({
        scrollTrigger: {
          trigger: "#about",
          start: "top top",
          end: "+=300%",
          scrub: 1,
          pin: true,
        },
      });

      tl2
        .from("#about-arrow-img", {
          xPercent: -50,
          autoAlpha: 0,
          scale: 0.8,
        })
        .from(
          "#about-image-block",
          {
            autoAlpha: 0,
            scale: 0,
            xPercent: -50,
          },
          "<"
        )
        .fromTo(
          "#about-image-block",
          {
            width: "70%",
          },
          {
            width: "60%",
          },
          "<3"
        )
        .to("#about-image-block-1", {
          autoAlpha: 0,
        })
        .to("#about-image-block-2", {
          autoAlpha: 1,
        })
        .fromTo(
          "#about-image-block",
          {
            width: "60%",
          },
          {
            width: "50%",
          },
          "<3"
        )
        .to("#about-image-block-2", {
          autoAlpha: 0,
        })
        .to("#about-image-block-3", {
          autoAlpha: 1,
        })
        .to(
          "#about-image-block-3",
          {
            autoAlpha: 1,
          },
          "<3"
        );
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
    <>
      <div className="position-relative" id="about_section">
        <div id="about" className="vh-100 w-100 z-10 d-none d-lg-block">
          <div className="position-absolute z-1 end-0 d-none d-xxl-block pe-5 me-5 left_text_about">
            <img src={lefttextImg} alt="business-small-arrow-2" />
          </div>
          <div className="container position-relative vh-100">
            <div className="d-flex align-items-center flex-column justify-content-between position-relative h-100 top_csutom_space z-10">
              <p className="font_5xl text-white pt-sm-5 px-sm-5 px-lg-0 mx-sm-5 mx-lg-0 custom_letter_spacing px-2 px-sm-0">
                Ideata da
                <a href="#timeline">
                  <button className="custom_tab_button_012 cursor-pointer hero_btn noi_btn bg_light_green mx-2">
                    noi
                  </button>
                </a>
                grazie all’esperienza acquisita nel
                <a href="#timeline">
                  <button className="custom_tab_button_012 cursor-pointer hero_btn noi_btn bg_light_green mx-2">
                    tempo
                  </button>
                </a>
                <span className="color_dark_gray">.</span>
              </p>
              <div
                id="about-content-2"
                className="d-flex justify-content-end align-items-center flex-grow-1 w-100 about_text_parent_max_w"
              >
                <div
                  className="h-100 d-flex align-items-center justify-content-end position-relative about_arrow_img_width"
                  id="about-arrow-img"
                >
                  <img
                    src={aboutArrow}
                    className="position-absolute end-0 about_img"
                  />
                </div>
                <div
                  id="about-image-block"
                  className="h-100 d-flex align-items-end flex-column gap-2 justify-content-center position-relative"
                >
                  <div
                    id="about-image-block-1"
                    className="position-absolute about_text_value ps-4 ps-xl-0"
                  >
                    <div className="ps-3 ps-sm-5 ps-lg-0 w-100">
                      <div className="position-absolute small_icon_arrow">
                        <UpArrowNoiIcon />
                      </div>
                      <div className="position-absolute small_icon_arrow_2">
                        <DownArrowNoiIcon />
                      </div>
                      <div>
                        <h4 className="font_8xl color_dark_gray mt-4 mt-xl-5 pt-xl-5 ps-4 ps-xl-5">
                          Il futuro della lead generation è basato sulla
                          creazione di relazioni di fiducia, sostenute dalla
                          tecnologia.
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
                          <span className="fw_light ms-2">
                            Chief Technology Officer
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div
                    id="about-image-block-2"
                    className="position-absolute about_text_value ps-4 ps-xl-0"
                  >
                    <div className="ps-3 ps-sm-5 ps-lg-0 w-100">
                      <div className="position-absolute small_icon_arrow">
                        <UpArrowNoiIcon />
                      </div>
                      <div className="position-absolute small_icon_arrow_2">
                        <DownArrowNoiIcon />
                      </div>
                      <div>
                        <h4 className="font_8xl color_dark_gray mt-4 mt-xl-5 pt-xl-5 ps-4 ps-xl-5 mb-0">
                          Obiettivi chiari e definiti perseguiti con un
                          approccio personalizzato verso risultati concreti e
                          misurabili.
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
                          <span className="fw_light ms-2">
                            Business Developmet Manager
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div
                    id="about-image-block-3"
                    className="position-absolute about_text_value ps-4 ps-xl-0"
                  >
                    <div className="ps-3 ps-sm-5 ps-lg-0 w-100">
                      <div className="position-absolute small_icon_arrow">
                        <UpArrowNoiIcon />
                      </div>
                      <div className="position-absolute small_icon_arrow_2">
                        <DownArrowNoiIcon />
                      </div>
                      <div>
                        <h4 className="font_8xl color_dark_gray mt-4 mt-xl-5 pt-xl-5 ps-4 ps-xl-5 mb-0">
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
                          <span className="fw_light ms-2">
                            Marketing Manager
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="vh-100 overflow-hidden about_parent z_5 top_minus_space d-lg-none"
        id="about_section"
      >
        <div className="position-relative h-100 z_1">
          <div className="position-absolute d-none d-sm-block d-lg-none z_negative">
            <img
              className="w-100 small_tab_arrow_img_forth"
              src={smallbgImg}
              alt="arrow-tab-img"
            />
          </div>
          <div className="container h-100 pb-5 pb-lg-0">
            <div className="text-center pt-5">
              <p className="font_5xl text-white pt-sm-5 px-sm-5 px-lg-0 mx-sm-5 mx-lg-0 custom_letter_spacing px-2 px-sm-0">
                Ideata da
                <a href="#timeline">
                  <button className="custom_tab_button_012 cursor-pointer hero_btn noi_btn bg_light_green mx-2">
                    noi
                  </button>
                </a>
                grazie all’esperienza acquisita nel
                <a href="#timeline">
                  <button className="custom_tab_button_012 cursor-pointer hero_btn noi_btn bg_light_green mx-2">
                    tempo
                  </button>
                </a>
                <span className="color_dark_gray">.</span>
              </p>
            </div>
            <div className="row align-items-center mb-sm-5">
              <div className="col-12 custom_top_spacing mb-4 mb-sm-0 founder_1">
                <div className="position-relative roadmap_para">
                  <div className="position-absolute small_icon_arrow">
                    <UpArrowNoiIcon />
                  </div>
                  <div className="position-relative">
                    <h4 className="font_8xl color_dark_gray mt-4 mt-xl-5 pt-xl-5 px-lg-4 ps-xl-5 pe-xxl-5 me-xxl-5">
                      Il futuro della lead generation è basato sulla creazione
                      di relazioni di fiducia, sostenute dalla tecnologia.
                    </h4>
                    <div className="position-absolute small_icon_arrow_2">
                      <DownArrowNoiIcon />
                    </div>
                  </div>
                  <div className="d-flex align-items-sm-center ps-xl-5 pt-2 pt-sm-3 mt-xl-3">
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
              <div className="col-12 py-sm-5 my-sm-4 founder_2">
                <div className="position-relative roadmap_para">
                  <div className="position-absolute small_icon_arrow">
                    <UpArrowNoiIcon />
                  </div>
                  <div className="position-relative">
                    <h4 className="font_8xl color_dark_gray mt-4 mt-xl-5 pt-xl-5 px-lg-4 ps-xl-5 pe-xxl-5 me-xxl-5">
                      Obiettivi chiari e definiti perseguiti con un approccio
                      personalizzato verso risultati concreti e misurabili.
                    </h4>
                    <div className="position-absolute small_icon_arrow_2">
                      <DownArrowNoiIcon />
                    </div>
                  </div>
                  <div className="d-flex align-items-sm-center ps-xl-5 pt-2 pt-sm-3 mt-xl-3">
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
              <div className="col-12 mt-4 mt-sm-0 founder_3">
                <div className="position-relative roadmap_para">
                  <div className="position-absolute small_icon_arrow">
                    <UpArrowNoiIcon />
                  </div>
                  <div className="position-relative">
                    <h4 className="font_8xl color_dark_gray mt-4 mt-xl-5 pt-xl-5 px-lg-4 ps-xl-5 pe-xxl-5 me-xxl-4">
                      Qualifichiamo i dati in tempo reale consentendo di
                      incrementare il ROI delle azioni di lead generation.
                      <div className="position-absolute small_icon_arrow_2">
                        <DownArrowNoiIcon />
                      </div>
                    </h4>
                  </div>
                  <div className="d-flex align-items-sm-center ps-xl-5 pt-2 pt-sm-3 mt-xl-3">
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
    </>
  );
};

export default About;

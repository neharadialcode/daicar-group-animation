import React, { useEffect } from "react";
import timelineImg1 from "../assets/images/png/timeline-content-img-1.png";
import timelineImg2 from "../assets/images/png/timeline-content-img-2.png";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import largeArrow2 from "../assets/images/svg/arrow-large-2.svg";
import businessLeftTextIcon from "../assets/images/svg/small-arrow-icon.svg";
import pagelogo from "../assets/images/svg/page-logo.svg";
gsap.registerPlugin(ScrollTrigger);
const Timeline = () => {
  useEffect(() => {
    let mm = gsap.matchMedia();
    gsap.set(
      [
        "#timeline-heading-1",
        "#timeline-heading-2",
        "#timeline-heading-3",
        "#timeline-heading-4",
        "#timeline-year-1",
        "#timeline-year-2",
        "#timeline-year-3",
        "#timeline-year-4",
      ],
      {
        autoAlpha: 0,
      }
    );
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#timeline",
        start: "top bottom",
        end: "top center",
        scrub: true,
      },
    });
    tl.to("#hero-large-arrow", {
      top: "-150%",
      autoAlpha: 0,
    }).to("#root", {
      backgroundColor: "#29424D",
    });
    mm.add("(min-width: 1800px)", () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: "#timeline",
          start: "top bottom",
          end: "top 50%",
          scrub: true,
        },
      });
      tl.to("#hero-large-arrow-2", {
        // bottom: "-51%",
        display: "block",
        autoAlpha: 0,
        immediateRender: false,
      });
    });
    mm.add("(min-width: 1600px) and (max-width:1799.98px)", () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: "#timeline",
          start: "top bottom",
          end: "top 50%",
          scrub: true,
        },
      });
      tl.to("#hero-large-arrow-2", {
        // bottom: "-48%",
        display: "block",
        autoAlpha: 0,
        immediateRender: false,
      });
    });
    mm.add("(min-width: 1500px) and (max-width:1599.98px)", () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: "#timeline",
          start: "top bottom",
          end: "top 50%",
          scrub: true,
        },
      });
      tl.to("#hero-large-arrow-2", {
        // bottom: "-85%",
        display: "block",
        autoAlpha: 0,
        immediateRender: false,
      });
    });
    mm.add("(max-width: 1499.98px)", () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: "#timeline",
          start: "top bottom",
          end: "top 50%",
          scrub: true,
        },
      });
      tl.to("#hero-large-arrow-2", {
        // bottom: "-83%",
        display: "block",
        autoAlpha: 0,
        immediateRender: false,
      });
    });
    mm.add("(max-width: 1299.98px)", () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: "#timeline",
          start: "top bottom",
          end: "top 50%",
          scrub: true,
        },
      });
      tl.to("#hero-large-arrow-2", {
        // bottom: "-79%",
        display: "block",
        autoAlpha: 0,
        immediateRender: false,
      });
    });
    mm.add("(max-width: 1199.98px)", () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: "#timeline",
          start: "top bottom",
          end: "top 50%",
          scrub: true,
        },
      });
      tl.to("#hero-large-arrow-2", {
        // bottom: "-117%",
        display: "block",
        autoAlpha: 0,
        immediateRender: false,
      });
    });
    mm.add("(max-width: 991.98px)", () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: "#timeline",
          start: "top bottom",
          end: "top 50%",
          scrub: true,
        },
      });
      tl.to("#hero-large-arrow-2", {
        // bottom: "-48%",
        display: "block",
        autoAlpha: 0,
        immediateRender: false,
      });
    });
    mm.add("(min-width: 576px) and (max-width:769.98px)", () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: "#timeline",
          start: "top bottom",
          end: "top 50%",
          scrub: true,
        },
      });
      tl.to("#hero-large-arrow-2", {
        // bottom: "-59%",
        display: "block",
        autoAlpha: 0,
        immediateRender: false,
      });
    });

    mm.add("(min-width: 1200px)", () => {
      const tl2 = gsap.timeline({
        scrollTrigger: {
          trigger: "#timeline",
          start: "top top",
          end: "+=400%",
          scrub: 1,
          pin: true,
        },
      });
      // FIRST VALUE
      tl2
        .fromTo(
          ".timeline_text_heading",
          {
            autoAlpha: 0,
          },
          {
            autoAlpha: 1,
          }
        )
        .fromTo(
          "#hero-large-arrow-2",
          {
            right: "130%",
          },
          {
            right: `${
              document.querySelector("#timeline-dot-4").getBoundingClientRect()
                .right
            }px`,
            autoAlpha: 1,
          }
        )
        .from(
          [
            "#timeline-dot-1",
            "#timeline-dot-2",
            "#timeline-dot-3",
            "#timeline-dot-4",
          ],
          {
            autoAlpha: 0,
            xPercent: -100,
            stagger: 0.4,
          },
          "<"
        )
        .from(
          "#timeline-dot-line",
          {
            width: 0,
            duration: 1,
          },
          ">20%"
        )
        .to(
          ["#timeline-heading-1", "#timeline-year-1"],
          {
            autoAlpha: 1,
          },
          "<"
        )
        .fromTo(
          ".timeline_left_icon",
          {
            bottom: "0%",
            autoAlpha: 0,
          },
          {
            bottom: "20%",
            autoAlpha: 1,
          }
        )
        // SECOND VALUE
        .to("#hero-large-arrow-2", {
          right: `${
            document.querySelector("#timeline-dot-3").getBoundingClientRect()
              .right
          }px`,
          duration: 4,
        })
        .to(
          "#timeline-heading-container",
          {
            left: `${
              document.querySelector("#timeline-dot-2").getBoundingClientRect()
                .right -
              document
                .querySelector("#timeline-heading-container")
                .parentNode.getBoundingClientRect().left
            }px`,
          },
          "<1"
        )
        .to(
          ["#timeline-heading-1", "#timeline-year-1"],
          {
            autoAlpha: 0,
          },
          "<"
        )
        .to(
          ["#timeline-heading-2", "#timeline-year-2"],
          {
            autoAlpha: 1,
          },
          "<"
        )
        .fromTo(
          ".timeline_left_icon",
          {
            bottom: "20%",
          },
          {
            bottom: "40%",
          }
        )
        // THIRD VALUE
        .to("#hero-large-arrow-2", {
          right: `${
            document.querySelector("#timeline-dot-2").getBoundingClientRect()
              .right
          }px`,
          duration: 4,
        })
        .to(
          "#timeline-heading-container",
          {
            left: `${
              document.querySelector("#timeline-dot-3").getBoundingClientRect()
                .right -
              document
                .querySelector("#timeline-heading-container")
                .parentNode.getBoundingClientRect().left
            }px`,
          },
          "<1"
        )
        .to(
          ["#timeline-heading-2", "#timeline-year-2"],
          {
            autoAlpha: 0,
          },
          "<"
        )
        .to(
          ["#timeline-heading-3", "#timeline-year-3"],
          {
            autoAlpha: 1,
          },
          "<"
        )
        .fromTo(
          ".timeline_left_icon",
          {
            bottom: "40%",
          },
          {
            bottom: "80%",
          }
        )
        // FOURTH VALUE
        .to("#hero-large-arrow-2", {
          right: `${
            document.querySelector("#timeline-dot-1").getBoundingClientRect()
              .right
          }px`,
          duration: 4,
        })
        .to(
          "#timeline-heading-container",
          {
            left: `${
              document.querySelector("#timeline-dot-4").getBoundingClientRect()
                .right -
              document
                .querySelector("#timeline-heading-container")
                .parentNode.getBoundingClientRect().left
            }px`,
          },
          "<1"
        )
        .to(
          ["#timeline-heading-3", "#timeline-year-3"],
          {
            autoAlpha: 0,
          },
          "<"
        )
        .to(
          ["#timeline-heading-4", "#timeline-year-4"],
          {
            autoAlpha: 1,
          },
          "<"
        )
        .to(
          ["#timeline-heading-4", "#timeline-year-4"],
          {
            autoAlpha: 1,
          },
          "+=2"
        )
        .fromTo(
          ".timeline_left_icon",
          {
            bottom: "80%",
          },
          {
            bottom: "90%",
          }
        );
    });
    mm.add("(min-width: 992px) and (max-width:1199.98px)", () => {
      const tl2 = gsap.timeline({
        scrollTrigger: {
          trigger: "#timeline",
          start: "top top",
          end: "+=400%",
          scrub: 1,
          pin: true,
        },
      });
      // FIRST VALUE
      tl2
        .fromTo(
          ".timeline_text_heading",
          {
            autoAlpha: 0,
          },
          {
            autoAlpha: 1,
          }
        )
        .fromTo(
          "#hero-large-arrow-2",
          {
            right: "130%",
          },
          {
            right: `${
              document.querySelector("#timeline-dot-4").getBoundingClientRect()
                .right
            }px`,
            autoAlpha: 1,
          }
        )
        .from(
          [
            "#timeline-dot-1",
            "#timeline-dot-2",
            "#timeline-dot-3",
            "#timeline-dot-4",
          ],
          {
            autoAlpha: 0,
            xPercent: -100,
            stagger: 0.4,
          },
          "<"
        )
        .from(
          "#timeline-dot-line",
          {
            width: 0,
            duration: 1,
          },
          ">20%"
        )
        .to(
          ["#timeline-heading-1", "#timeline-year-1"],
          {
            autoAlpha: 1,
          },
          "<"
        )

        // SECOND VALUE
        .to("#hero-large-arrow-2", {
          right: `${
            document.querySelector("#timeline-dot-3").getBoundingClientRect()
              .right
          }px`,
          duration: 4,
        })
        .to(
          "#timeline-heading-container",
          {
            left: `${
              document.querySelector("#timeline-dot-2").getBoundingClientRect()
                .right -
              document
                .querySelector("#timeline-heading-container")
                .parentNode.getBoundingClientRect().left
            }px`,
          },
          "<1"
        )
        .to(
          ["#timeline-heading-1", "#timeline-year-1"],
          {
            autoAlpha: 0,
          },
          "<"
        )
        .to(
          ["#timeline-heading-2", "#timeline-year-2"],
          {
            autoAlpha: 1,
          },
          "<"
        )

        // THIRD VALUE
        .to("#hero-large-arrow-2", {
          right: `${
            document.querySelector("#timeline-dot-2").getBoundingClientRect()
              .right
          }px`,
          duration: 4,
        })
        .to(
          "#timeline-heading-container",
          {
            left: `${
              document.querySelector("#timeline-dot-3").getBoundingClientRect()
                .right -
              document
                .querySelector("#timeline-heading-container")
                .parentNode.getBoundingClientRect().left
            }px`,
          },
          "<1"
        )
        .to(
          ["#timeline-heading-2", "#timeline-year-2"],
          {
            autoAlpha: 0,
          },
          "<"
        )
        .to(
          ["#timeline-heading-3", "#timeline-year-3"],
          {
            autoAlpha: 1,
          },
          "<"
        )

        // FOURTH VALUE
        .to("#hero-large-arrow-2", {
          right: `${
            document.querySelector("#timeline-dot-1").getBoundingClientRect()
              .right
          }px`,
          duration: 4,
        })
        .to(
          "#timeline-heading-container",
          {
            left: `${
              document.querySelector("#timeline-dot-4").getBoundingClientRect()
                .right -
              document
                .querySelector("#timeline-heading-container")
                .parentNode.getBoundingClientRect().left -
              60
            }px`,
          },
          "<1"
        )
        .to(
          ["#timeline-heading-3", "#timeline-year-3"],
          {
            autoAlpha: 0,
          },
          "<"
        )
        .to(
          ["#timeline-heading-4", "#timeline-year-4"],
          {
            autoAlpha: 1,
          },
          "<"
        )
        .to(
          ["#timeline-heading-4", "#timeline-year-4"],
          {
            autoAlpha: 1,
          },
          "+=2"
        );
    });
    mm.add("(min-width: 576px) and (max-width: 991.98px)", () => {
      const tl2 = gsap.timeline({
        scrollTrigger: {
          trigger: "#timeline",
          start: "top top",
          end: "+=400%",
          scrub: 1,
          pin: true,
        },
      });
      tl2
        .fromTo(
          ".timeline_text_heading",
          {
            autoAlpha: 0,
          },
          {
            autoAlpha: 1,
          }
        )
        .fromTo(
          "#hero-large-arrow-2",
          {
            right: "130%",
          },
          {
            right: `${
              document.querySelector("#timeline-dot-4").getBoundingClientRect()
                .right
            }px`,
            autoAlpha: 1,
          }
        )
        .from(
          [
            "#timeline-dot-1",
            "#timeline-dot-2",
            "#timeline-dot-3",
            "#timeline-dot-4",
          ],
          {
            autoAlpha: 0,
            xPercent: -100,
            stagger: 0.4,
          },
          "<"
        )
        .from(
          "#timeline-dot-line",
          {
            width: 0,
            duration: 1,
          },
          ">20%"
        )
        .to(
          ["#timeline-heading-1", "#timeline-year-1"],
          {
            autoAlpha: 1,
          },
          "<"
        )

        .to("#hero-large-arrow-2", {
          right: `${
            document.querySelector("#timeline-dot-3").getBoundingClientRect()
              .right
          }px`,
          duration: 4,
        })
        .to(
          ["#timeline-heading-1", "#timeline-year-1"],
          {
            autoAlpha: 0,
          },
          "<"
        )
        .to(
          ["#timeline-heading-2", "#timeline-year-2"],
          {
            autoAlpha: 1,
          },
          "<"
        )

        .to("#hero-large-arrow-2", {
          right: `${
            document.querySelector("#timeline-dot-2").getBoundingClientRect()
              .right
          }px`,
          duration: 4,
        })
        .to(
          ["#timeline-heading-2", "#timeline-year-2"],
          {
            autoAlpha: 0,
          },
          "<"
        )
        .to(
          ["#timeline-heading-3", "#timeline-year-3"],
          {
            autoAlpha: 1,
          },
          "<"
        )

        .to("#hero-large-arrow-2", {
          right: `${
            document.querySelector("#timeline-dot-1").getBoundingClientRect()
              .right
          }px`,
          duration: 4,
        })
        .to(["#timeline-heading-3", "#timeline-year-3"], {
          autoAlpha: 0,
        })
        .to(
          ["#timeline-heading-4", "#timeline-year-4"],
          {
            autoAlpha: 1,
          },
          "<"
        )
        .to(
          ["#timeline-heading-4", "#timeline-year-4"],
          {
            autoAlpha: 1,
          },
          "+=4"
        );
    });
    mm.add("(max-width: 575.98px)", () => {
      const tl2 = gsap.timeline({
        scrollTrigger: {
          trigger: "#timeline",
          start: "top top",
          end: "+=400%",
          scrub: 1,
          pin: true,
        },
      });
      tl2
        .fromTo(
          ".timeline_text_heading",
          {
            autoAlpha: 0,
          },
          {
            autoAlpha: 1,
          }
        )
        .fromTo(
          ".timeline_arrow_icon",
          {
            left: "-100vw",
          },
          {
            left: "-95vw",
            delay: 1,
          }
        )
        .from(
          [
            "#timeline-dot-1",
            "#timeline-dot-2",
            "#timeline-dot-3",
            "#timeline-dot-4",
          ],
          {
            autoAlpha: 0,
            xPercent: -100,
            stagger: 0.4,
          },
          "<"
        )
        .from(
          "#timeline-dot-line",
          {
            width: 0,
            duration: 1,
          },
          ">20%"
        )
        .to(
          ["#timeline-heading-1", "#timeline-year-1"],
          {
            autoAlpha: 1,
          },
          "<"
        )
        .fromTo(
          ".timeline_arrow_icon",
          {
            left: "-95vw",
          },
          {
            left: "-60vw",
            delay: 1,
          }
        )
        .to(
          ["#timeline-heading-1", "#timeline-year-1"],
          {
            autoAlpha: 0,
          },
          "<"
        )
        .to(
          ["#timeline-heading-2", "#timeline-year-2"],
          {
            autoAlpha: 1,
          },
          "<"
        )
        .fromTo(
          ".timeline_arrow_icon",
          {
            left: "-60vw",
          },
          {
            left: "-35vw",
            delay: 1,
          }
        )
        .to(
          ["#timeline-heading-2", "#timeline-year-2"],
          {
            autoAlpha: 0,
          },
          "<"
        )
        .to(
          ["#timeline-heading-3", "#timeline-year-3"],
          {
            autoAlpha: 1,
          },
          "<"
        )
        .fromTo(
          ".timeline_arrow_icon",
          {
            left: "-35vw",
          },
          {
            left: "-5vw",
            delay: 1,
          }
        )
        .to(["#timeline-heading-3", "#timeline-year-3"], {
          autoAlpha: 0,
        })
        .to(
          ["#timeline-heading-4", "#timeline-year-4"],
          {
            autoAlpha: 1,
          },
          "<"
        )
        .to(
          ["#timeline-heading-4", "#timeline-year-4"],
          {
            autoAlpha: 1,
          },
          "+=4"
        );
    });
  }, []);
  return (
    <>
      <div id="timeline" className="min-vh-100 w-100 z-10">
        <div className="position-relative h-100 w-100">
          <span className="d-sm-none">
            <img
              className="timeline_arrow_icon w-100"
              src={largeArrow2}
              alt="largeArrow2"
            />
          </span>
          <div>
            <img
              alt="largeArrow2"
              src={largeArrow2}
              id="hero-large-arrow-2"
              className="position-fixed z-0 pointer-events-none d-none d-sm-block timeline_arrow_img"
            />
          </div>
          <div className="position-absolute end-0 timeline_left_icon text_left_rotate d-none d-xl-flex align-items-center pt-4 me-2 pe-xl-4">
            <p className="color_white_off font_sm mb-0">Il nostro percorso</p>
            <div className="ps-4">
              <img src={businessLeftTextIcon} alt="business-small-arrow" />
            </div>
          </div>
          <div className="container position-relative h-100">
            <div
              id="timeline-content"
              className="d-flex align-items-center flex-column justify-content-between position-relative h-100 pt-3 pb-5 py-md-5 z-10"
            >
              <div className="text-center pt-md-5 pt-lg-0 px-sm-5 px-lg-0 about_text_size z-10 position-absolute timeline_text_heading">
                <p className="font_5xl text-white text-center">
                  {/* Ideata da
                  <a href="#partners">
                    <button className="custom_tab_button_012 cursor-pointer hero_btn noi_btn bg_light_green mx-2">
                      noi
                    </button>
                  </a> */}
                  grazie all’esperienza acquisita nel
                  <a href="#partners">
                    <button className="custom_tab_button_012 cursor-pointer hero_btn noi_btn bg_light_green mx-2">
                      tempo
                    </button>
                  </a>
                </p>
              </div>
              <div className="flex-grow-1 w-100 timeline_text_parent_max_w">
                <div className="text_parent_height w-100 position-relative">
                  <div
                    id="timeline-heading-container"
                    className="position-absolute w-100 timeline_text1_max_w"
                  >
                    <div
                      id="timeline-heading-1"
                      className="position-absolute w-100 pe-xxl-5 me-xxl-5 pt-sm-3 pt-md-0"
                    >
                      <img
                        className="w-100 mb-3 mb-3 mb-xl-5 timeline_car_icon"
                        src={timelineImg1}
                        alt="timelineImg1"
                      />
                      <p className="font_md color_white_off mb-sm-4 pe-5 pe-lg-0 me-5 me-lg-0 pe-xxl-5 me-xxl-5">
                        Carplanner.com nasce nel 2015 posizionandosi nel settore
                        automotive, specializzata nella lead generation
                        innovativa.
                      </p>
                      <div className="timeline_all_btns_hover">
                        <a
                          className="custom_tab_button_012 cursor-pointer font_sm color_white_off timeline_btn bg-transparent d-inline-block"
                          href="#partners"
                        >
                          automotive
                        </a>
                      </div>
                    </div>
                    <h2
                      id="timeline-heading-2"
                      className="font_md color_white_off position-absolute w-100 pt-sm-3 pt-md-0"
                    >
                      Sviluppiamo la nostra piattaforma proprietaria
                      <br className="d-xl-block" />
                      tramite tecnologia A.I. Nello stesso anno entriamo
                      <br className="d-xl-block" />a far parte di Facebook
                      Success Case per lo <br className="d-xl-block" />
                      sviluppo di chatbot sulla piattaforma Messenger
                    </h2>
                    <div
                      id="timeline-heading-3"
                      className="position-absolute w-100 me-xxl-5 pe-xxl-5"
                    >
                      <img
                        className="timeline_tiguido_icon w-100"
                        src={timelineImg2}
                        alt="timelineImg2"
                      />
                      <p className="font_md color_white_off mb-0 mb-md-3 pe-3 pe-sm-0 pe-md-5 pe-xl-1 me-md-3 me-xxl-5">
                        Nasce TiGuido.io che trasferisce l’elevato know
                        <span className="ff_math">-</span>how e la tecnologia
                        sviluppata in ambito automotive al servizio di nuovi
                        mercati. Si afferma come Digital Media Partner, pioniere
                        nell’uso del marketing conversazionale e nella
                        tecnologia proprietaria per la validazione e generazione
                        di lead altamente qualificate.
                      </p>
                      <div className="d-flex align-items-center mt-4 mt-sm-2 mt-md-4 mt-lg-0 timeline_all_btns_hover">
                        <a
                          className="custom_tab_button_012 cursor-pointer font_sm color_white_off timeline_btn bg-transparent"
                          href="#partners"
                        >
                          finanza
                        </a>
                        <a
                          className="custom_tab_button_012 cursor-pointer font_sm color_white_off timeline_btn bg-transparent mx-2 mx-sm-3"
                          href="#partners"
                        >
                          assicurazione
                        </a>
                        <a
                          className="custom_tab_button_012 cursor-pointer font_sm color_white_off timeline_btn bg-transparent"
                          href="#partners"
                        >
                          telco
                        </a>
                      </div>
                    </div>
                    <div
                      id="timeline-heading-4"
                      className="position-absolute w-100 timeline_content_4_parent pt-5"
                    >
                      <img
                        src={pagelogo}
                        alt="timeline-content-img-2"
                        className="timeline_icon_3"
                      />
                      <p className="font_md color_white_off py-sm-3">
                        Il 2 Ottobre faremo <br /> otto anni.
                      </p>
                      <div className="timeline_all_btns_hover">
                        <a
                          className="font_sm color_white_off timeline_btn bg-transparent custom_tab_button_012 d-inline-block"
                          href="#partners"
                        >
                          compleanno
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-100 position-relative d-flex align-items-center justify-content-between mb-5 pb-5">
                  <div id="timeline-dot-1" className="timeline_dots"></div>
                  <div id="timeline-dot-2" className="timeline_dots"></div>
                  <div id="timeline-dot-3" className="timeline_dots"></div>
                  <div id="timeline-dot-4" className="timeline_dots"></div>
                  <div
                    id="timeline-dot-line"
                    className="position-absolute bg-white timeline_line_img"
                  ></div>
                  <div className="position-absolute end-0 top-0 timeline_years">
                    <h2
                      id="timeline-year-1"
                      className="position-absolute font_9xl fw-normal color_white_off top-50 end-0"
                    >
                      2015
                    </h2>
                    <h2
                      id="timeline-year-2"
                      className="position-absolute font_9xl fw-normal color_white_off top-50 end-0"
                    >
                      2018
                    </h2>
                    <h2
                      id="timeline-year-3"
                      className="position-absolute font_9xl fw-normal color_white_off top-50 end-0"
                    >
                      2022
                    </h2>
                    <h2
                      id="timeline-year-4"
                      className="position-absolute font_9xl fw-normal color_white_off top-50 end-0"
                    >
                      2023
                    </h2>
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

export default Timeline;

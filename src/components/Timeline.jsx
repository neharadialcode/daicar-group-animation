import React, { useEffect } from "react";
import timelineLeftIcon from "../assets/images/png/timeline-left-icon.png";
import timelineImg1 from "../assets/images/png/timeline-content-img-1.png";
import timelineImg2 from "../assets/images/png/timeline-content-img-2.png";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
// import cake from "../assets/images/svg/timeline-cake.svg";
import largeArrow2 from "../assets/arrow-large-2.svg";
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
        end: "top 50%",
        scrub: true,
      },
    });
    tl.to("#hero-large-arrow", {
      top: "-150%",
      autoAlpha: 0,
      immediateRender: false,
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
        bottom: "-51%",
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
        bottom: "-48%",
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
        bottom: "-85%",
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
        bottom: "-83%",
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
        bottom: "-79%",
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
        bottom: "-117%",
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
        bottom: "-48%",
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
        bottom: "-59%",
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
                .parentNode.getBoundingClientRect().left-60
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
          <div className="container position-relative h-100">
            <div
              id="timeline-content"
              className="d-flex align-items-center flex-column justify-content-between position-relative h-100 pt-4 pb-5 py-sm-5 z-10"
            >
              <div className="text-center pt-sm-5 pt-lg-0 px-sm-5 px-lg-0 about_text_size z-10 position-absolute timeline_text_heading">
                <p className="font_5xl text-white text-center">
                  Ideata da
                  <button className="custom_tab_button_012 cursor-pointer hero_btn noi_btn bg_light_green mx-2">
                    noi
                  </button>
                  grazie all’esperienza acquisita nel
                  <button className="custom_tab_button_012 cursor-pointer hero_btn noi_btn bg_light_green mx-2">
                    tempo
                  </button>
                </p>
              </div>
              <div className="position-absolute timeline_left_icon pt-sm-5 z_1 d-none d-xxl-block me-2">
                <img src={timelineLeftIcon} alt="timeline-left-icon" />
              </div>
              <div className="d-flex justify-contentbetween flex-column align-items-center flex-grow-1 w-100 text_parent_max_w">
                <div className="text_parent_height w-100 position-relative">
                  <div
                    id="timeline-heading-container"
                    className="position-absolute -translate-y-1/2 w-100 timeline_text1_max_w"
                  >
                    <div
                      id="timeline-heading-1"
                      className="position-absolute w-100"
                    >
                      <img
                        className="w-100 mb-3 mb-sm-5 mb-lg-3 mb-xl-5 timeline_car_icon"
                        src={timelineImg1}
                        alt="timelineImg1"
                      />
                      <p className="font_2xl custom_size_timeline_text text-white mb-3">
                        Carplanner.com nasce nel 2015 posizionandosi nel settore
                        automotive, specializzata nella lead generation
                        innovativa.
                      </p>
                      <button className="custom_tab_button_012 cursor-pointer font_xl color_white_off timeline_btn bg-transparent">
                        automotive
                      </button>
                    </div>
                    <h2
                      id="timeline-heading-2"
                      className="font_2xl text-white position-absolute w-100"
                    >
                      Sviluppiamo la nostra piattaforma proprietaria tramite
                      tecnologia A.I. Nello stesso anno entriamo a far parte di
                      Facebook Success Case per lo sviluppo di chatbot sulla
                      piattaforma Messenger
                    </h2>
                    <div
                      id="timeline-heading-3"
                      className="position-absolute w-100"
                    >
                      <img
                        className="timeline_tiguido_icon w-100"
                        src={timelineImg2}
                        alt="timelineImg2"
                      />
                      <p className="font_2xl custom_size_timeline_text text-white mb-3 pe-3 pe-sm-5 pe-xl-0 me-sm-3 me-xl-0">
                        Nasce TiGuido.io che trasferisce l’elevato know
                        <span className="ff_math">-</span>how e la tecnologia
                        sviluppata in ambito automotive al servizio di nuovi
                        mercati. Si afferma come Digital Media Partner, pioniere
                        nell’uso del marketing conversazionale e nella
                        tecnologia proprietaria per la validazione e generazione
                        di lead altamente qualificate.
                      </p>
                      <div className="d-flex align-items-center gap-1gap-sm-3 mt-4 mt-lg-0">
                        <button className="custom_tab_button_012 cursor-pointer font_xl color_white_off timeline_btn bg-transparent">
                          finanza
                        </button>
                        <button className="custom_tab_button_012 cursor-pointer font_xl color_white_off timeline_btn bg-transparent mx-2 mx-sm-3">
                          assicurazione
                        </button>
                        <button className="custom_tab_button_012 cursor-pointer font_xl color_white_off timeline_btn bg-transparent">
                          telco
                        </button>
                      </div>
                    </div>
                    <div
                      id="timeline-heading-4"
                      className="font_2xl text-white position-absolute w-100 timeline_cake_img_parent pt-5"
                    >
                      <img
                        src={timelineImg2}
                        alt="timeline-content-img-2"
                        className="timeline_icon_3"
                      />
                      <p className="font_md color_white_off">
                        Il 2 Ottobre faremo <br /> otto anni.
                      </p>
                      <button className="font_sm color_white_off timeline_btn bg-transparent">
                        compleanno
                      </button>
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
                      className="position-absolute font_9xl fw_light text-white top-50 end-0 -translate-y-1/2"
                    >
                      2015
                    </h2>
                    <h2
                      id="timeline-year-2"
                      className="position-absolute font_9xl fw_light text-white top-50 end-0 -translate-y-1/2"
                    >
                      2018
                    </h2>
                    <h2
                      id="timeline-year-3"
                      className="position-absolute font_9xl fw_light text-white top-50 end-0 -translate-y-1/2"
                    >
                      2022
                    </h2>
                    <h2
                      id="timeline-year-4"
                      className="position-absolute font_9xl fw_light text-white top-50 end-0 -translate-y-1/2"
                    >
                      {/* <p className="font_2xl opacity_05 mb-0 text-end d-none d-sm-block">
                        2 Ottobre
                      </p> */}
                      2023
                      {/* <p className="font_2xl opacity_05 text-end mb-0">
                        Otto anni
                      </p> */}
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

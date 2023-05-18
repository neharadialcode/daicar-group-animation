import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import icon1 from "../assets/images/svg/roadmap_side_icon.svg";
import timelineLeftIcon from "../assets/images/png/timeline-left-icon.png";
import timelineImg1 from "../assets/images/png/timeline-content-img-1.png";
import timelineImg2 from "../assets/images/png/timeline-content-img-2.png";
import timelineImg3 from "../assets/images/png/timeline-content-cake-img-3.png";

const FifthSection = () => {
  const [leftMargin, setLeftMargin] = useState(0);
  const [leftSpacing, setLeftSpacing] = useState(0);
  const [leftSpacing2, setLeftSpacing2] = useState(0);
  const containerRef = useRef(null);
  const secondText = useRef(null);
  const secondText2 = useRef(null);
  useEffect(() => {
    if (containerRef.current) {
      setLeftMargin(containerRef.current.getBoundingClientRect().left);
    }
    if (secondText.current) {
      setLeftSpacing(secondText.current.getBoundingClientRect().left);
    }
    if (secondText2.current) {
      setLeftSpacing2(secondText2.current.getBoundingClientRect().left);
    }

    window.addEventListener("resize", () => {
      if (containerRef.current) {
        setLeftMargin(containerRef.current.getBoundingClientRect().left);
      }
      if (secondText.current) {
        setLeftSpacing(secondText.current.getBoundingClientRect().left);
      }
      if (secondText2.current) {
        setLeftSpacing2(secondText2.current.getBoundingClientRect().left);
      }
    });
  }, [leftMargin]);

  useEffect(() => {
    let timelineMedia = gsap.matchMedia();
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".timeline_parent",
        start: "top bottom",
        end: "top 50%",
        scrub: true,
        // markers: true,
      },
    });
    tl.to("#root", {
      backgroundColor: "#29424D",
    });
    timelineMedia.add("(min-width: 992px)", () => {
      let timeline = gsap.timeline({
        scrollTrigger: {
          trigger: ".timeline_parent",
          start: "top top",
          end: "+=400%",
          scrub: 1,
          pin: true,
        },
      });
      timeline
        .fromTo(
          ".timeline_line_img",
          {
            autoAlpha: 0,
          },
          {
            autoAlpha: 1,
          }
        )

        // FIRST VALUES
        .fromTo(
          ".timeline_arrow_icon",
          {
            left: "-90vw",
          },
          {
            left: "-80vw",
            delay: 1,
          }
        )
        .fromTo(
          ".timeline_text_1",
          {
            autoAlpha: 0.3,
            duration: 2,
          },
          {
            autoAlpha: 1,
            duration: 2,
          },
          "-=.5"
        )
        .fromTo(
          ".year_1",
          {
            autoAlpha: 0,
            duration: 2,
          },
          {
            autoAlpha: 1,
            duration: 2,
          },
          "-=.5"
        )
        .fromTo(
          ".timeline_text_1",
          {
            autoAlpha: 1,
            duration: 2,
          },
          {
            autoAlpha: 0,
            duration: 2,
            delay: 1,
          }
        )
        .fromTo(
          ".year_1",
          {
            autoAlpha: 1,
            duration: 2,
          },
          {
            autoAlpha: 0,
            duration: 2,
          },
          "-=.5"
        )

        // SECOND VALUES
        .fromTo(
          ".timeline_text_2",
          {
            autoAlpha: 0,
            duration: 2,
          },
          {
            autoAlpha: 1,
            duration: 2,
            delay: 1,
          }
        )
        .fromTo(
          ".timeline_arrow_icon",
          {
            left: "-82vw",
          },
          {
            left: "-60vw",
          },
          "-=.5"
        )
        .fromTo(
          ".year_2",
          {
            autoAlpha: 0,
          },
          {
            autoAlpha: 1,
          },
          "-=.5"
        )
        .fromTo(
          ".timeline_text_2",
          {
            autoAlpha: 1,
            duration: 2,
          },
          {
            autoAlpha: 0,
            duration: 2,
            delay: 1,
          }
        )
        .fromTo(
          ".year_2",
          {
            autoAlpha: 1,
            duration: 2,
          },
          {
            autoAlpha: 0,
            duration: 2,
          },
          "-=.5"
        )

        // THIRD VALUES
        .fromTo(
          ".timeline_text_3",
          {
            autoAlpha: 0,
          },
          {
            autoAlpha: 1,
            delay: 1,
          }
        )
        .fromTo(
          ".timeline_arrow_icon",
          {
            left: "-61vw",
          },
          {
            left: "-38vw",
          },
          "-=.5"
        )
        .fromTo(
          ".year_3",
          {
            autoAlpha: 0,
          },
          {
            autoAlpha: 1,
          },
          "-=.5"
        )
        .fromTo(
          ".timeline_text_3",
          {
            autoAlpha: 1,
            duration: 2,
          },
          {
            autoAlpha: 0,
            duration: 2,
            delay: 1,
          }
        )
        .fromTo(
          ".year_3",
          {
            autoAlpha: 1,
            duration: 2,
          },
          {
            autoAlpha: 0,
            duration: 2,
          },
          "-=.5"
        )

        // FOURTH VALUES
        .fromTo(
          ".timeline_text_4",
          {
            autoAlpha: 0,
          },
          {
            autoAlpha: 1,
            delay: 1,
          }
        )
        .fromTo(
          ".timeline_arrow_icon",
          {
            left: "-39vw",
          },
          {
            left: "-14vw",
          },
          "-=.5"
        )
        .fromTo(
          ".year_4",
          {
            autoAlpha: 0,
          },
          {
            autoAlpha: 1,
          },
          "-=.5"
        )
        .fromTo(
          ".timeline_text_4",
          {
            autoAlpha: 1,
            duration: 2,
          },
          {
            autoAlpha: 0,
            duration: 2,
            delay: 1,
          }
        )
        .fromTo(
          ".year_4",
          {
            autoAlpha: 1,
            duration: 2,
          },
          {
            autoAlpha: 0,
            duration: 2,
          },
          "-=.5"
        );
    });

    timelineMedia.add("(max-width: 991.98px)", () => {
      let timeline = gsap.timeline({
        scrollTrigger: {
          trigger: ".timeline_parent",
          start: "top top",
          end: "+=400%",
          scrub: 5,
          pin: true,
        },
      });
      timeline
        .fromTo(
          ".timeline_line_img",
          {
            autoAlpha: 0,
          },
          {
            autoAlpha: 1,
          }
        )
        // FIRST VALUES

        .fromTo(
          ".timeline_arrow_icon",
          {
            left: "-90vw",
          },
          {
            left: "-80vw",
            delay: 1,
          }
        )
        .fromTo(
          ".timeline_text_1",
          {
            autoAlpha: 0.3,
            duration: 2,
          },
          {
            autoAlpha: 1,
            duration: 2,
          },
          "-=.5"
        )
        .fromTo(
          ".year_1",
          {
            autoAlpha: 0,
            duration: 2,
          },
          {
            autoAlpha: 1,
            duration: 2,
          },
          "-=.5"
        )
        .fromTo(
          ".timeline_text_1",
          {
            autoAlpha: 1,
            duration: 2,
          },
          {
            autoAlpha: 0,
            duration: 2,
            delay: 1,
          }
        )
        .fromTo(
          ".year_1",
          {
            autoAlpha: 1,
            duration: 2,
          },
          {
            autoAlpha: 0,
            duration: 2,
          },
          "-=.5"
        )

        // SECOND VALUES
        .fromTo(
          ".timeline_text_2",
          {
            autoAlpha: 0,
            duration: 2,
          },
          {
            autoAlpha: 1,
            duration: 2,
            delay: 1,
          }
        )
        .fromTo(
          ".timeline_arrow_icon",
          {
            left: "-82vw",
          },
          {
            left: "-57vw",
          },
          "-=.5"
        )
        .fromTo(
          ".year_2",
          {
            autoAlpha: 0,
          },
          {
            autoAlpha: 1,
          },
          "-=.5"
        )
        .fromTo(
          ".timeline_text_2",
          {
            autoAlpha: 1,
            duration: 2,
          },
          {
            autoAlpha: 0,
            duration: 2,
            delay: 1,
          }
        )
        .fromTo(
          ".year_2",
          {
            autoAlpha: 1,
            duration: 2,
          },
          {
            autoAlpha: 0,
            duration: 2,
          },
          "-=.5"
        )

        // THIRD VALUES
        .fromTo(
          ".timeline_text_3",
          {
            autoAlpha: 0,
          },
          {
            autoAlpha: 1,
            delay: 1,
          }
        )
        .fromTo(
          ".timeline_arrow_icon",
          {
            left: "-61vw",
          },
          {
            left: "-30vw",
          },
          "-=.5"
        )
        .fromTo(
          ".year_3",
          {
            autoAlpha: 0,
          },
          {
            autoAlpha: 1,
          },
          "-=.5"
        )
        .fromTo(
          ".timeline_text_3",
          {
            autoAlpha: 1,
            duration: 2,
          },
          {
            autoAlpha: 0,
            duration: 2,
            delay: 1,
          }
        )
        .fromTo(
          ".year_3",
          {
            autoAlpha: 1,
            duration: 2,
          },
          {
            autoAlpha: 0,
            duration: 2,
          },
          "-=.5"
        )

        // FOURTH VALUES
        .fromTo(
          ".timeline_text_4",
          {
            autoAlpha: 0,
          },
          {
            autoAlpha: 1,
            delay: 1,
          }
        )
        .fromTo(
          ".timeline_arrow_icon",
          {
            left: "-39vw",
          },
          {
            left: "-5vw",
          },
          "-=.5"
        )
        .fromTo(
          ".year_4",
          {
            autoAlpha: 0,
          },
          {
            autoAlpha: 1,
          },
          "-=.5"
        )
        .fromTo(
          ".timeline_text_4",
          {
            autoAlpha: 1,
            duration: 2,
          },
          {
            autoAlpha: 0,
            duration: 2,
            delay: 1,
          }
        )
        .fromTo(
          ".year_4",
          {
            autoAlpha: 1,
            duration: 2,
          },
          {
            autoAlpha: 0,
            duration: 2,
          },
          "-=.5"
        );
    });
  }, []);

  return (
    <>
      <div className="container" ref={containerRef}></div>
      <div
        className="vh-100 overflow-hidden timeline_parent z-10"
        id="daicar-group"
      >
        <div className="text-center pt-4 pt-sm-5 px-sm-5 px-lg-0 about_text_size z-10 position-absolute timeline_text_heading">
          <p className="font_5xl text-white px-mdx-5px-lg-0mx-mdx-5mx-lg-0">
            Ideata da
            <span className="hero_btn noi_btn bg_light_green mx-2">noi</span>
            grazie all’esperienza acquisita nel
            <span className="hero_btn noi_btn bg_light_green mx-2">tempo</span>
          </p>
        </div>
        <div className="position-absolute timeline_left_icon pt-sm-5 z_1 d-none d-xxl-block">
          <img src={timelineLeftIcon} alt="timeline-left-icon" />
        </div>
        <div className="bg_darkgray vh-100 position-absolute w-100"></div>
        <div className="vh-100 d-flex flex-column justify-content-center z_2 position-relative">
          <div className="d-flex timeline_slide_content justify-content-center">
            <div
              className="timeline_text_1 text-white"
              style={{ marginLeft: `${leftMargin + 16}px` }}
            >
              <img
                className="w-100 mb-3 mb-sm-5 mb-lg-3 mb-xl-5 timeline_car_icon"
                src={timelineImg1}
                alt="timelineImg1"
              />
              <p className="font_2xl custom_size_timeline_text fw-normal text-white mb-3">
                Carplanner.com nasce nel 2015 posizionandosi nel settore
                automotive, specializzata nella lead generation innovativa.
              </p>
              <button className="font_xl fw-normal color_white_off timeline_btn bg-transparent">
                automotive
              </button>
            </div>
            <div
              className="timeline_text_2 text-white position-absolute ps-2"
              style={{ left: `${leftSpacing - 10}px` }}
            >
              <p className="font_2xl custom_size_timeline_text fw-normal text-white mb-3">
                Sviluppiamo la nostra piattaforma proprietaria tramite
                tecnologia A.I. Nello stesso anno entriamo a far parte di
                Facebook Success Case per lo sviluppo di chatbot sulla
                piattaforma Messenger
              </p>
            </div>
            <div
              className="timeline_text_3 text-white position-absolute"
              style={{ left: `${leftSpacing2 - 10}px` }}
            >
              <img className="w100" src={timelineImg2} alt="timelineImg2" />
              <p className="font_2xl custom_size_timeline_text fw-normal text-white mb-3 pe-3 pe-sm-5 pe-lg-0 me-sm-3 me-lg-0">
                Nasce TiGuido.io che trasferisce l’elevato know
                <span className="ff_math">-</span>how e la tecnologia sviluppata
                in ambito automotive al servizio di nuovi mercati. Si afferma
                come Digital Media Partner, pioniere nell’uso del marketing
                conversazionale e nella tecnologia proprietaria per la
                validazione e generazione di lead altamente qualificate.
              </p>
              <div className="d-flex align-items-center gap-1gap-sm-3 mt-4 mt-lg-0">
                <button className="font_xl fw-normal color_white_off timeline_btn bg-transparent">
                  finanza
                </button>
                <button className="font_xl fw-normal color_white_off timeline_btn bg-transparent mx-2 mx-sm-3">
                  assicurazione
                </button>
                <button className="font_xl fw-normal color_white_off timeline_btn bg-transparent">
                  telco
                </button>
              </div>
            </div>
            <div className="timeline_text_4 position-absolute">
              <img className="w-100" src={timelineImg3} alt="timelineImg3" />
            </div>
          </div>
          <span
            style={{ marginLeft: `${leftMargin - 16}px` }}
            className="d-inline-block"
          >
            <img
              className="timeline_arrow_icon w-100"
              src={icon1}
              alt="icon1"
            />
          </span>

          <div className="container mt-5 pt-3 ps-sm-5 ps-lg-0">
            <div className="d-flex mx-auto timeline_line_img ps-5 ps-lg-0">
              <div className="col-4 timeline_with_dot timeline_ist_dot"></div>
              <div ref={secondText} className="col-4 timeline_with_dot"></div>
              <div ref={secondText2} className="col-4 timeline_with_dot"></div>
              <div className="position-relative w-100">
                <p className="timeline_year position-absolute year_1">2015</p>
                <p className="timeline_year position-absolute year_2">2018</p>
                <p className="timeline_year position-absolute year_3">2022</p>
                <div className="position-absolute year_4 pt-2">
                  <p className="font_2xl custom_size_timeline_text ff_mundial_light color_white_off mb-0 text-end d-none d-sm-block">
                    2 Ottobre
                  </p>
                  <p className="timeline_year mb-0">2023</p>
                  <p className="font_2xl custom_size_timeline_text ff_mundial_light color_white_off mb-0 text-end">
                    Otto anni
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FifthSection;

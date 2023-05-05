import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import icon1 from "../assets/images/svg/roadmap_side_icon.svg";
// import icon2 from "../assets/images/png/roadmap_icon2.png";

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
  // useEffect(() => {
  //   let timelineParent = gsap.timeline({
  //     scrollTrigger: {
  //       trigger: ".timeline_parent",
  //       start: "top 5%",
  //       end: "bottom top",
  //       toggleActions: "play none none reverse",
  //     },
  //   });
  //   timelineParent.fromTo(
  //     ".bg-green",
  //     { scale: 0 },
  //     {
  //       scale: 1,
  //     }
  //   );
  //   let fifth = gsap.timeline({
  //     scrollTrigger: {
  //       trigger: ".timeline_parent",
  //       start: "top top",
  //       end: "bottom top",
  //       scrub: 1,
  //       pin: true,
  //       pinSpacing: true,
  //       // markers: true,
  //     },
  //   });
  //   fifth
  //     .fromTo(
  //       ".timeline_parent",
  //       {
  //         opacity: 0,
  //       },
  //       {
  //         opacity: 1,
  //       }
  //     )
  //     .fromTo(
  //       ".forth_section",
  //       {
  //         opacity: 1,
  //       },
  //       {
  //         opacity: 0,
  //       },
  //       "-=.5"
  //     )
  //     .fromTo(
  //       ".timeline_arrow_icon",
  //       {
  //         left: "-75vw",
  //       },
  //       {
  //         left: "-65vw",
  //       },
  //       "+=1"
  //     )
  //     .fromTo(
  //       ".timeline_text_2",
  //       {
  //         autoAlpha: 0,
  //       },
  //       {
  //         autoAlpha: 1,
  //       }
  //     )
  //     .fromTo(
  //       ".timeline_text_1",
  //       {
  //         autoAlpha: 1,
  //       },
  //       {
  //         autoAlpha: 0,
  //       },
  //       "-=.8"
  //     )

  //     .fromTo(
  //       ".timeline_arrow_icon",
  //       {
  //         left: "-85vw",
  //       },
  //       {
  //         left: "-65vw",
  //       }
  //     )
  //     .fromTo(
  //       ".timeline_text_3",
  //       {
  //         autoAlpha: 0,
  //       },
  //       {
  //         autoAlpha: 1,
  //       }
  //     )
  //     .fromTo(
  //       ".timeline_text_2",
  //       {
  //         autoAlpha: 1,
  //       },
  //       {
  //         autoAlpha: 0,
  //       },
  //       "-=.8"
  //     )
  //     .fromTo(
  //       ".timeline_arrow_icon",
  //       {
  //         left: "-65vw",
  //       },
  //       {
  //         left: "-45vw",
  //       }
  //     )
  //     .fromTo(
  //       ".timeline_text_4",
  //       {
  //         autoAlpha: 0,
  //       },
  //       {
  //         autoAlpha: 1,
  //       }
  //     )
  //     .fromTo(
  //       ".timeline_text_3",
  //       {
  //         autoAlpha: 1,
  //       },
  //       {
  //         autoAlpha: 0,
  //       },
  //       "-=.8"
  //     );
  // }, []);

  // MY CHANGES
  useEffect(() => {
    let timelineMedia = gsap.matchMedia();
    timelineMedia.add("(min-width:1600px)", () => {
      // let timelineParent = gsap.timeline({
      //   scrollTrigger: {
      //     trigger: ".timeline_parent",
      //     start: "top 5%",
      //     end: "bottom top",
      //     toggleActions: "play none none reverse",
      //   },
      // });

      // timelineParent.fromTo(
      //   ".bg-green",
      //   { scale: 0 },
      //   {
      //     scale: 1,
      //   }
      // );
      let timeline = gsap.timeline({
        scrollTrigger: {
          trigger: ".timeline_parent",
          start: "top top",
          end: "bottom top",
          scrub: 1,
          pin: true,
          pinSpacing: true,
          markers: true,
        },
      });
      timeline
        .fromTo(
          ".timeline_parent",
          {
            opacity: 0,
          },
          {
            opacity: 1,
          }
        )
        .fromTo(
          ".forth_section",
          {
            opacity: 1,
          },
          {
            opacity: 0,
          },
          "-=.5"
        )
        .fromTo(
          ".timeline_arrow_icon",
          {
            left: "-82vw",
            duration: 0.5,
          },
          {
            left: "-80vw",
            duration: 0.5,
          },
          "+=1"
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
          },
          "-=.1"
        )
        .fromTo(
          ".timeline_arrow_icon",
          {
            left: "-74.4vw",
            duration: 0.5,
          },
          {
            left: "-74.4vw",
            duration: 0.5,
          },
          "+=1"
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
          "-=.1"
        )
        .fromTo(
          ".timeline_text_2",
          {
            autoAlpha: 0,
            duration: 2,
          },
          {
            autoAlpha: 1,
            duration: 2,
          }
        )
        .fromTo(
          ".year_2",
          {
            autoAlpha: 0,
            duration: 2,
          },
          {
            autoAlpha: 1,
            duration: 2,
          }
        )
        .fromTo(
          ".timeline_arrow_icon",
          {
            left: "-74.4vw",
          },
          {
            left: "-58.6vw",
          },
          "-=.8"
        )
        .fromTo(
          ".timeline_text_3",
          {
            autoAlpha: 0,
            duration: 2,
            delay: 1,
          },
          {
            autoAlpha: 1,
            duration: 2,
            delay: 1,
          }
        )
        .fromTo(
          ".year_3",
          {
            autoAlpha: 0,
            duration: 2,
            delay: 1,
          },
          {
            autoAlpha: 1,
            duration: 2,
            delay: 1,
          }
        )

        //
        .fromTo(
          ".timeline_text_2",
          {
            autoAlpha: 1,
            duration: 2,
          },
          {
            autoAlpha: 0,
            duration: 2,
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
          }
        )
        .fromTo(
          ".timeline_arrow_icon",
          {
            left: "-58.6vw",
          },
          {
            left: "-41vw",
          }
        )
        .fromTo(
          ".timeline_text_4",
          {
            autoAlpha: 0,
            duration: 2,
          },
          {
            autoAlpha: 1,
            duration: 2,
          }
        )
        .fromTo(
          ".year_4",
          {
            autoAlpha: 0,
            duration: 2,
          },
          {
            autoAlpha: 1,
            duration: 2,
          }
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
          },
          "-=.4"
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
          "-=.4"
        )
        .fromTo(
          ".timeline_arrow_icon",
          {
            left: "-41vw",
          },
          {
            left: "-23.7vw",
          }
        );
    });
    timelineMedia.add("(min-width: 1400px) and (max-width:1599.98px)", () => {
      // let timelineParent = gsap.timeline({
      //   scrollTrigger: {
      //     trigger: ".timeline_parent",
      //     start: "top 5%",
      //     end: "bottom top",
      //     toggleActions: "play none none reverse",
      //     // markers: true,
      //   },
      // });

      // timelineParent.fromTo(
      //   ".bg-green",
      //   { scale: 0 },
      //   {
      //     scale: 1,
      //   }
      // );
      let timeline = gsap.timeline({
        scrollTrigger: {
          trigger: ".timeline_parent",
          start: "top top",
          end: "bottom top",
          scrub: 1,
          pin: true,
          pinSpacing: true,
          // markers: true,
        },
      });
      timeline
        .fromTo(
          ".timeline_parent",
          {
            opacity: 0,
          },
          {
            opacity: 1,
          }
        )
        .fromTo(
          ".forth_section",
          {
            opacity: 1,
          },
          {
            opacity: 0,
          },
          "-=.5"
        )
        // .fromTo(
        //   ".timeline_arrow_icon",
        //   {
        //     left: "-82vw",
        //     duration: 0.5,
        //   },
        //   {
        //     left: "-80vw",
        //     duration: 0.5,
        //   },
        //   "+=1"
        // )
        .fromTo(
          ".timeline_arrow_icon",
          {
            left: "-80vw",
            duration: 0.5,
          },
          {
            left: "-82vw",
            duration: 0.5,
          }
          // "+=8"
        )
        .fromTo(
          ".timeline_text_1",
          {
            autoAlpha: 1,
            duration: 0.5,
            delay: 1,
          },
          {
            autoAlpha: 0,
            duration: 0.5,
            delay: 1,
          },
          "-=.1"
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
          "-=.1"
        )
        .fromTo(
          ".timeline_text_2",
          {
            autoAlpha: 0,
            duration: 2,
          },
          {
            autoAlpha: 1,
            duration: 2,
          }
        )
        .fromTo(
          ".year_2",
          {
            autoAlpha: 0,
            duration: 2,
          },
          {
            autoAlpha: 1,
            duration: 2,
          }
        )
        .fromTo(
          ".timeline_arrow_icon",
          {
            left: "-74.4vw",
          },
          {
            left: "-58.6vw",
          },
          "-=.8"
        )
        .fromTo(
          ".timeline_text_3",
          {
            autoAlpha: 0,
            duration: 2,
            delay: 1,
          },
          {
            autoAlpha: 1,
            duration: 2,
            delay: 1,
          }
        )
        .fromTo(
          ".year_3",
          {
            autoAlpha: 0,
            duration: 2,
            delay: 1,
          },
          {
            autoAlpha: 1,
            duration: 2,
            delay: 1,
          }
        )

        //
        .fromTo(
          ".timeline_text_2",
          {
            autoAlpha: 1,
            duration: 2,
          },
          {
            autoAlpha: 0,
            duration: 2,
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
          }
        )
        .fromTo(
          ".timeline_arrow_icon",
          {
            left: "-58.6vw",
          },
          {
            left: "-41vw",
          }
        )
        .fromTo(
          ".timeline_text_4",
          {
            autoAlpha: 0,
            duration: 2,
          },
          {
            autoAlpha: 1,
            duration: 2,
          }
        )
        .fromTo(
          ".year_4",
          {
            autoAlpha: 0,
            duration: 2,
          },
          {
            autoAlpha: 1,
            duration: 2,
          }
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
          },
          "-=.4"
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
          "-=.4"
        )
        .fromTo(
          ".timeline_arrow_icon",
          {
            left: "-41vw",
          },
          {
            left: "-23.7vw",
          }
        );
    });
    timelineMedia.add("(min-width: 992px) and (max-width:1399.98px)", () => {
      // let timelineParent = gsap.timeline({
      //   scrollTrigger: {
      //     trigger: ".timeline_parent",
      //     start: "top 5%",
      //     end: "bottom top",
      //     toggleActions: "play none none reverse",
      //   },
      // });

      // timelineParent.fromTo(
      //   ".bg-green",
      //   { scale: 0 },
      //   {
      //     scale: 1,
      //   }
      // );
      let timeline = gsap.timeline({
        scrollTrigger: {
          trigger: ".timeline_parent",
          start: "top top",
          end: "bottom top",
          scrub: 1,
          pin: true,
          pinSpacing: true,
          // markers: true,
        },
      });
      timeline
        .fromTo(
          ".timeline_parent",
          {
            opacity: 0,
          },
          {
            opacity: 1,
          }
        )
        .fromTo(
          ".forth_section",
          {
            opacity: 1,
          },
          {
            opacity: 0,
          },
          "-=.5"
        )
        .fromTo(
          ".timeline_arrow_icon",
          {
            left: "-82vw",
            duration: 0.5,
          },
          {
            left: "-80vw",
            duration: 0.5,
          },
          "+=1"
        )
        .fromTo(
          ".timeline_arrow_icon",
          {
            left: "-74.4vw",
            duration: 0.5,
          },
          {
            left: "-74.4vw",
            duration: 0.5,
          },
          "+=1"
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
          },
          "-=.1"
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
          "-=.1"
        )
        .fromTo(
          ".timeline_text_2",
          {
            autoAlpha: 0,
            duration: 2,
          },
          {
            autoAlpha: 1,
            duration: 2,
          }
        )
        .fromTo(
          ".year_2",
          {
            autoAlpha: 0,
            duration: 2,
          },
          {
            autoAlpha: 1,
            duration: 2,
          }
        )
        .fromTo(
          ".timeline_arrow_icon",
          {
            left: "-74.4vw",
          },
          {
            left: "-58.6vw",
          },
          "-=.8"
        )
        .fromTo(
          ".timeline_text_3",
          {
            autoAlpha: 0,
            duration: 2,
            delay: 1,
          },
          {
            autoAlpha: 1,
            duration: 2,
            delay: 1,
          }
        )
        .fromTo(
          ".year_3",
          {
            autoAlpha: 0,
            duration: 2,
            delay: 1,
          },
          {
            autoAlpha: 1,
            duration: 2,
            delay: 1,
          }
        )

        //
        .fromTo(
          ".timeline_text_2",
          {
            autoAlpha: 1,
            duration: 2,
          },
          {
            autoAlpha: 0,
            duration: 2,
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
          }
        )
        .fromTo(
          ".timeline_arrow_icon",
          {
            left: "-58.6vw",
          },
          {
            left: "-41vw",
          }
        )
        .fromTo(
          ".timeline_text_4",
          {
            autoAlpha: 0,
            duration: 2,
          },
          {
            autoAlpha: 1,
            duration: 2,
          }
        )
        .fromTo(
          ".year_4",
          {
            autoAlpha: 0,
            duration: 2,
          },
          {
            autoAlpha: 1,
            duration: 2,
          }
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
          },
          "-=.4"
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
          "-=.4"
        )
        .fromTo(
          ".timeline_arrow_icon",
          {
            left: "-41vw",
          },
          {
            left: "-23.7vw",
          }
        );
    });
  }, []);

  return (
    <>
      <div className="container" ref={containerRef}></div>
      {/* <div className="timeline_parent"> */}
      <div className="vh-100 overflow-hidden timeline_parent z-10">
        <div className="bg_dark_gray vh-100 position-absolute w-100"></div>
        <div className="vh-100 d-flex flex-column justify-content-center z_index2 position-relative">
          <div className="d-flex timeline_slide_content justify-content-center">
            <div
              className="timeline_text_1 text-white"
              style={{ marginLeft: `${leftMargin + 16}px` }}
            >
              <img
                className="w-100 mb-5"
                src={timelineImg1}
                alt="timelineImg1"
              />
              <p className="font_2xl fw-normal text-white mb-3">
                Carplanner.com nasce nel 2015 posizionandosi nel settore
                automotive, specializzata nella lead generation innovativa.
              </p>
              <button className="font_xl fw-normal color_white_off timeline_btn pulse bg-transparent">
                automotive
              </button>
            </div>
            <div
              className="timeline_text_2 text-white position-absolute ps-2"
              style={{ left: `${leftSpacing - 10}px` }}
            >
              <p className="font_2xl fw-normal text-white mb-3">
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
              <img className="w-100" src={timelineImg2} alt="timelineImg2" />
              <p className="font_2xl fw-normal text-white mb-3">
                Nasce TiGuido.io che trasferisce l’elevato know-how e la
                tecnologia sviluppata in ambito automotive al servizio di nuovi
                mercati. Si afferma come Digital Media Partner, pioniere
                nell’uso del marketing conversazionale e nella tecnologia
                proprietaria per la validazione e generazione di lead altamente
                qualificate.
              </p>
              <div className="d-flex align-items-center gap-3">
                <button className="font_xl fw-normal color_white_off timeline_btn pulse bg-transparent">
                  finanza
                </button>
                <button className="font_xl fw-normal color_white_off timeline_btn pulse bg-transparent">
                  assicurazione
                </button>
                <button className="font_xl fw-normal color_white_off timeline_btn pulse bg-transparent">
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

          {/* <div
              className="line mt-5"
              style={{ marginLeft: `${leftMargin + 16}px` }}
            ></div> */}
          <div className="container mt-5 pt-3">
            <div className="d-flex mx-auto timeline_line_img">
              <div className="col-4 timeline_with_dot timeline_ist_dot"></div>
              <div ref={secondText} className="col-4 timeline_with_dot"></div>
              <div ref={secondText2} className="col-4 timeline_with_dot"></div>
              <div className="position-relative w-100">
                <p className="timeline_year position-absolute year_1">2015</p>
                <p className="timeline_year position-absolute year_2">2018</p>
                <p className="timeline_year position-absolute year_3">2022</p>
                <p className="timeline_year position-absolute year_4">2023</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* </div> */}
    </>
  );
};

export default FifthSection;

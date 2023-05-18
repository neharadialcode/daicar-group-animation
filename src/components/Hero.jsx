import React, { useEffect } from "react";
import { Icon4 } from "./Icons";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import heroEtext from "../assets/images/svg/hero-e-text.svg";
import Header from "./Header";

import ipad from "../assets/ipad.png";
import ipadWhite from "../assets/ipad-white.png";
import arrow from "../assets/arrow.svg";

const Hero = () => {
  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

  useEffect(() => {
    let tl = gsap.matchMedia();

    tl.add("(min-width: 1400px)", () => {
      gsap.from("#hero-main-heading", {
        yPercent: 100,
        // opacity: 0,
      });
      gsap.set(".arrow-hero-two", {
        xPercent: 100,
        scale: 0.4,
      });

      gsap.set(".arrow-hero-three", {
        xPercent: -100,
        y: -130,
        scale: 0.2,
      });
      // gsap.set("#hero-large-arrow", {
      //   left: "50%",
      //   xPercent: -50,
      //   top: "75%",
      // });
      // gsap.set("#intro-content", {
      //   display: "none",
      // });
      gsap.from([".arrow-hero-one", ".arrow-hero-two", ".arrow-hero-three"], {
        y: 100,
        stagger: 0.1,
      });

      gsap.set(
        [
          "#hero-sub-heading-one",
          "#hero-sub-heading-two",
          "#hero-para-one",
          "#hero-para-two",
        ],
        {
          autoAlpha: 0,
        }
      );

      gsap.set("#hero-outline-arrow", {
        autoAlpha: 0,
        yPercent: 100,
      });

      gsap.set(["#hero-ipad", "#hero-ipad-white"], {
        scale: 2,
        top: "50%",
        left: "50%",
        xPercent: -50,
        yPercent: -50,
      });

      tl = gsap.timeline({
        scrollTrigger: {
          trigger: "#hero",
          start: "top top",
          end: "+=200%",
          pin: true,
          scrub: 1,
          // markers: true,
        },
      });

      tl.to(".arrow-hero-one", {
        yPercent: -200,
        autoAlpha: 0,
      })
        .to(
          ".arrow-hero-three",
          {
            yPercent: -300,
            autoAlpha: 0,
          },
          "<"
        )
        .to("#hero-main-heading", {
          yPercent: 100,
          opacity: 0,
        })
        .to(
          ".arrow-hero-two",
          {
            scale: 0.2,
            rotate: "45deg",
          },
          "<"
        )
        .set("#hero-outline-arrow", {
          autoAlpha: 1,
        })
        .set(
          "#hero-ipad",
          {
            autoAlpha: 1,
          },
          "<"
        )
        .to(["#hero-sub-heading-one", "#hero-para-one"], {
          autoAlpha: 1,
        })
        .to("#hero-ipad", {
          scale: 1,
        })
        .to(
          "#main-content",
          {
            scale: 1,
          },
          "<"
        )
        .to("#hero-outline-arrow", {
          yPercent: -200,
          duration: 5,
        })
        .to(
          ["#hero-sub-heading-one", "#hero-para-one"],
          {
            autoAlpha: 0,
          },
          "<1"
        )
        .to(
          ["#hero-sub-heading-two", "#hero-para-two"],
          {
            autoAlpha: 1,
          },
          "<"
        )
        .to(
          "#white-section",
          {
            height: 0,
            duration: 2,
          },
          "<"
        )
        .set(
          "#hero-ipad-white",
          {
            scale: 1,
          },
          ">"
        )
        .to(
          "#hero-ipad",
          {
            autoAlpha: 0,
          },
          ">"
        )
        .to(
          "#hero-ipad-white",
          {
            opacity: 1,
          },
          "<"
        )
        .to(
          "#hero-ipad-white",
          {
            scale: 0.8,
          },
          ">"
        )
        .set(
          "#main-content",
          {
            display: "none",
          },
          "<"
        )
        .to(
          "#root",
          {
            backgroundColor: "#29424D",
          },
          "+=2"
        );
    });

    tl.add("(min-width: 992px) and (max-width:1399.98px)", () => {
      gsap.set("#main-content", {
        y: "-60px",
      });
      gsap.set(".arrow-hero-one", {
        scale: 0.8,
      });
      gsap.set(".arrow-hero-two", {
        xPercent: 75,
        scale: 0.3,
      });
      gsap.set(".arrow-hero-three", {
        xPercent: -55,
        yPercent: -5,
        scale: 0.15,
      });

      gsap.from("#hero-main-heading", {
        yPercent: 100,
        // opacity: 0,
      });
      // gsap.set(".arrow-hero-two", {
      //   xPercent: 100,
      //   scale: 0.4,
      // });

      // gsap.set(".arrow-hero-three", {
      //   xPercent: -100,
      //   y: -130,
      //   scale: 0.2,
      // });
      // gsap.set("#hero-large-arrow", {
      //   left: "50%",
      //   xPercent: -50,
      //   top: "75%",
      // });
      // gsap.set("#intro-content", {
      //   display: "none",
      // });
      gsap.from([".arrow-hero-one", ".arrow-hero-two", ".arrow-hero-three"], {
        y: 100,
        stagger: 0.1,
      });

      gsap.set(
        [
          "#hero-sub-heading-one",
          "#hero-sub-heading-two",
          "#hero-para-one",
          "#hero-para-two",
        ],
        {
          autoAlpha: 0,
        }
      );

      gsap.set("#hero-outline-arrow", {
        autoAlpha: 0,
        yPercent: 100,
      });

      gsap.set(["#hero-ipad", "#hero-ipad-white"], {
        scale: 2,
        top: "50%",
        left: "50%",
        xPercent: -50,
        yPercent: -50,
      });

      tl = gsap.timeline({
        scrollTrigger: {
          trigger: "#hero",
          start: "top top",
          end: "+=200%",
          pin: true,
          scrub: 1,
          // markers: true,
        },
      });

      tl.to(".arrow-hero-one", {
        yPercent: -200,
        autoAlpha: 0,
      })
        .to(
          ".arrow-hero-three",
          {
            yPercent: -300,
            autoAlpha: 0,
          },
          "<"
        )
        .to("#hero-main-heading", {
          yPercent: 100,
          opacity: 0,
        })
        .to(
          ".arrow-hero-two",
          {
            scale: 0.2,
            rotate: "45deg",
          },
          "<"
        )
        .set("#hero-outline-arrow", {
          autoAlpha: 1,
        })
        .set(
          "#hero-ipad",
          {
            autoAlpha: 1,
          },
          "<"
        )
        .to(["#hero-sub-heading-one", "#hero-para-one"], {
          autoAlpha: 1,
        })
        .to("#hero-ipad", {
          scale: 1,
        })
        .to(
          "#main-content",
          {
            scale: 1,
          },
          "<"
        )
        .to("#hero-outline-arrow", {
          yPercent: -200,
          duration: 5,
        })
        .to(
          ["#hero-sub-heading-one", "#hero-para-one"],
          {
            autoAlpha: 0,
          },
          "<1"
        )
        .to(
          ["#hero-sub-heading-two", "#hero-para-two"],
          {
            autoAlpha: 1,
          },
          "<"
        )
        .to(
          "#white-section",
          {
            height: 0,
            duration: 2,
          },
          "<"
        )
        .set(
          "#hero-ipad-white",
          {
            scale: 1,
          },
          ">"
        )
        .to(
          "#hero-ipad",
          {
            autoAlpha: 0,
          },
          ">"
        )
        .to(
          "#hero-ipad-white",
          {
            opacity: 1,
          },
          "<"
        )
        .to(
          "#hero-ipad-white",
          {
            scale: 0.8,
          },
          ">"
        )
        .set(
          "#main-content",
          {
            display: "none",
          },
          "<"
        )
        .to(
          "#root",
          {
            backgroundColor: "#29424D",
          },
          "+=2"
        );
    });

    tl.add("(min-width: 576px) and (max-width:991.98px)", () => {
      gsap.set("#main-content", {
        y: "-60px",
      });
      gsap.set(".arrow-hero-one", {
        scale: 0.8,
      });
      gsap.set(".arrow-hero-two", {
        xPercent: 58,
        yPercent: 48,
        scale: 0.3,
      });
      gsap.set(".arrow-hero-three", {
        xPercent: -54,
        yPercent: -15,
        scale: 0.15,
      });

      gsap.from("#hero-main-heading", {
        yPercent: 100,
        // opacity: 0,
      });
      // gsap.set(".arrow-hero-two", {
      //   xPercent: 100,
      //   scale: 0.4,
      // });

      // gsap.set(".arrow-hero-three", {
      //   xPercent: -100,
      //   y: -130,
      //   scale: 0.2,
      // });
      // gsap.set("#hero-large-arrow", {
      //   left: "50%",
      //   xPercent: -50,
      //   top: "75%",
      // });
      // gsap.set("#intro-content", {
      //   display: "none",
      // });
      gsap.from([".arrow-hero-one", ".arrow-hero-two", ".arrow-hero-three"], {
        y: 100,
        stagger: 0.1,
      });

      gsap.set(
        [
          "#hero-sub-heading-one",
          "#hero-sub-heading-two",
          "#hero-para-one",
          "#hero-para-two",
        ],
        {
          autoAlpha: 0,
        }
      );

      gsap.set("#hero-outline-arrow", {
        autoAlpha: 0,
        yPercent: 100,
      });

      gsap.set(["#hero-ipad", "#hero-ipad-white"], {
        scale: 2,
        top: "50%",
        left: "50%",
        xPercent: -50,
        yPercent: -50,
      });

      tl = gsap.timeline({
        scrollTrigger: {
          trigger: "#hero",
          start: "top top",
          end: "+=200%",
          pin: true,
          scrub: 1,
          // markers: true,
        },
      });

      tl.to(".arrow-hero-one", {
        yPercent: -200,
        autoAlpha: 0,
      })
        .to(
          ".arrow-hero-three",
          {
            yPercent: -300,
            autoAlpha: 0,
          },
          "<"
        )
        .to("#hero-main-heading", {
          yPercent: 100,
          opacity: 0,
        })
        .to(
          ".arrow-hero-two",
          {
            scale: 0.2,
            rotate: "45deg",
          },
          "<"
        )
        .set("#hero-outline-arrow", {
          autoAlpha: 1,
        })
        .set(
          "#hero-ipad",
          {
            autoAlpha: 1,
          },
          "<"
        )
        .to(["#hero-sub-heading-one", "#hero-para-one"], {
          autoAlpha: 1,
        })
        .to("#hero-ipad", {
          scale: 1,
        })
        .to(
          "#main-content",
          {
            scale: 1,
          },
          "<"
        )
        .to("#hero-outline-arrow", {
          yPercent: -200,
          duration: 5,
        })
        .to(
          ["#hero-sub-heading-one", "#hero-para-one"],
          {
            autoAlpha: 0,
          },
          "<1"
        )
        .to(
          ["#hero-sub-heading-two", "#hero-para-two"],
          {
            autoAlpha: 1,
          },
          "<"
        )
        .to(
          "#white-section",
          {
            height: 0,
            duration: 2,
          },
          "<"
        )
        .set(
          "#hero-ipad-white",
          {
            scale: 1,
          },
          ">"
        )
        .to(
          "#hero-ipad",
          {
            autoAlpha: 0,
          },
          ">"
        )
        .to(
          "#hero-ipad-white",
          {
            opacity: 1,
          },
          "<"
        )
        .to(
          "#hero-ipad-white",
          {
            scale: 0.8,
          },
          ">"
        )
        .set(
          "#main-content",
          {
            display: "none",
          },
          "<"
        )
        .to(
          "#root",
          {
            backgroundColor: "#29424D",
          },
          "+=2"
        );
    });

    tl.add("(max-width:575.98px)", () => {
      gsap.set("#main-content", {
        y: "-60px",
      });
      gsap.set(".arrow-hero-one", {
        scale: 0.6,
      });
      gsap.set(".arrow-hero-two", {
        xPercent: 29,
        yPercent: -31,
        scale: 0.15,
      });
      gsap.set(".arrow-hero-three", {
        xPercent: -54,
        yPercent: -15,
        scale: 0.15,
      });

      gsap.from("#hero-main-heading", {
        yPercent: 100,
        // opacity: 0,
      });
      // gsap.set(".arrow-hero-two", {
      //   xPercent: 100,
      //   scale: 0.4,
      // });

      // gsap.set(".arrow-hero-three", {
      //   xPercent: -100,
      //   y: -130,
      //   scale: 0.2,
      // });
      // gsap.set("#hero-large-arrow", {
      //   left: "50%",
      //   xPercent: -50,
      //   top: "75%",
      // });
      // gsap.set("#intro-content", {
      //   display: "none",
      // });
      gsap.from([".arrow-hero-one", ".arrow-hero-two", ".arrow-hero-three"], {
        y: 100,
        stagger: 0.1,
      });

      gsap.set(
        [
          "#hero-sub-heading-one",
          "#hero-sub-heading-two",
          "#hero-para-one",
          "#hero-para-two",
        ],
        {
          autoAlpha: 0,
        }
      );

      gsap.set("#hero-outline-arrow", {
        autoAlpha: 0,
        yPercent: 100,
      });

      gsap.set(["#hero-ipad", "#hero-ipad-white"], {
        scale: 2,
        top: "50%",
        left: "50%",
        xPercent: -50,
        yPercent: -50,
      });

      tl = gsap.timeline({
        scrollTrigger: {
          trigger: "#hero",
          start: "top top",
          end: "+=200%",
          pin: true,
          scrub: 1,
          // markers: true,
        },
      });

      tl.to(".arrow-hero-one", {
        yPercent: -200,
        autoAlpha: 0,
      })
        .to(
          ".arrow-hero-three",
          {
            yPercent: -300,
            autoAlpha: 0,
          },
          "<"
        )
        .to("#hero-main-heading", {
          yPercent: 100,
          opacity: 0,
        })
        .to(
          ".arrow-hero-two",
          {
            scale: 0.2,
            rotate: "45deg",
          },
          "<"
        )
        .set("#hero-outline-arrow", {
          autoAlpha: 1,
        })
        .set(
          "#hero-ipad",
          {
            autoAlpha: 1,
          },
          "<"
        )
        .to(["#hero-sub-heading-one", "#hero-para-one"], {
          autoAlpha: 1,
        })
        .to("#hero-ipad", {
          scale: 1,
        })
        .to(
          "#main-content",
          {
            scale: 1,
          },
          "<"
        )
        .to("#hero-outline-arrow", {
          yPercent: -200,
          duration: 5,
        })
        .to(
          ["#hero-sub-heading-one", "#hero-para-one"],
          {
            autoAlpha: 0,
          },
          "<1"
        )
        .to(
          ["#hero-sub-heading-two", "#hero-para-two"],
          {
            autoAlpha: 1,
          },
          "<"
        )
        .to(
          "#white-section",
          {
            height: 0,
            duration: 2,
          },
          "<"
        )
        .set(
          "#hero-ipad-white",
          {
            scale: 1,
          },
          ">"
        )
        .to(
          "#hero-ipad",
          {
            autoAlpha: 0,
          },
          ">"
        )
        .to(
          "#hero-ipad-white",
          {
            opacity: 1,
          },
          "<"
        )
        .to(
          "#hero-ipad-white",
          {
            scale: 0.8,
          },
          ">"
        )
        .set(
          "#main-content",
          {
            display: "none",
          },
          "<"
        )
        .to(
          "#root",
          {
            backgroundColor: "#29424D",
          },
          "+=2"
        );
    });
  }, []);

  return (
    <>
      <div className="bg_dark_gray">
        <Header />
        <div id="hero" className="color_dark_gray z-10 overflow-hidden">
          <div className="container vh-100 z-0 position-relative">
            <div
              id="main-content"
              className="d-flex align-items-center flex-column justify-content-center position-relative h-100"
            >
              <h1
                id="hero-main-heading"
                className="ff_mundial_regular color_white_off font_6xl mb-0 position-relative letter_spacing_01"
              >
                Il futuro delle tue
                <span className="d-inline-block hero_heading_btn me-2 mx-sm-3">
                  vendite
                </span>
                <span>
                  <img
                    className="hero_e_text"
                    src={heroEtext}
                    alt="hero-e-text"
                  />
                </span>
                digitale
              </h1>

              <div
                id="hero-sub-heading"
                className="w-100 d-flex flex-column justify-content-center hero_section_text align-items-center text-white"
              >
                <div className="hero_slide_1" id="hero-sub-heading-one">
                  <h2 className="ff_mundial_regular font_6xl mb-0 text-center flex align-items-center">
                    Il futuro delle tue&nbsp;
                    <span className="d-inline-block hero_heading_btn hero_slide_3_btn me-2 mx-sm-2 mx-lg-3">
                      vendite
                    </span>
                    <span>
                      <img
                        className="hero_e_text"
                        src={heroEtext}
                        alt="hero-e-text"
                      />
                    </span>{" "}
                    digitale
                  </h2>
                  <h3 className="font_8xl fw-bold number_heading pt-4 pb-4 text-center color_light_green">
                    200.000
                  </h3>
                  <p className="font_xl color_white_off ff_mundial_regular text-center pb-4 hero_slide_para_1">
                    Lead
                    <span className="ff_mundial_bold mx-2">Qualificati</span>
                    nel 2022
                  </p>
                  <p className="font_4xl color_white_off ff_mundial_regular text-center pt-5 pt-lg-2 pt-xl-0 pb-4 hero_slide_para_2">
                    Daicar aiuta a far
                    <span className="ff_mundial_bold mx-2">crescere</span> la
                    tua azienda, <br className="d-none d-sm-block" />
                    creando contatti e generando vendite
                  </p>
                </div>

                <div className="hero_slide_2" id="hero-sub-heading-two">
                  <h2 className="ff_mundial_regular font_6xl mb-0 text-center flex align-items-center">
                    Il futuro delle tue&nbsp;
                    <span className="d-inline-block hero_heading_btn hero_slide_3_btn me-2 mx-sm-2 mx-lg-3">
                      vendite
                    </span>
                    <span>
                      <img
                        className="hero_e_text"
                        src={heroEtext}
                        alt="hero-e-text"
                      />
                    </span>
                    &nbsp;digitale
                  </h2>
                  <h3 className="font_8xl fw-bold number_heading pt-4 pb-4 text-center color_light_green">
                    10.000
                  </h3>
                  <p className="font_xl color_white_off ff_mundial_regular text-center pb-4 hero_slide_para_1">
                    Campagne
                    <span className="ff_mundial_bold mx-2">Generate</span>
                    nel 2022
                  </p>
                  <p className="font_4xl color_white_off ff_mundial_regular text-center pt-5 pt-lg-2 pt-xl-0 pb-4 hero_slide_para_2">
                    Campaign management
                    <span className="ff_mundial_bold mx-2">flessibile</span> e
                    altamente
                    <br className="d-none d-sm-block" />
                    <span className="ff_mundial_bold mx-2">
                      personalizzabile
                    </span>
                    sulle criticità di ogni partner
                    <br />
                  </p>
                </div>
              </div>

              <div
                id="hero-outline-arrow"
                className="position-absolute z-10 pointer-events-none"
              >
                <Icon4 />
              </div>
              <img
                className="arrow-hero-one position-absolute -z-10 pointer-events-none"
                src={arrow}
              />
              <img
                className="arrow-hero-two position-absolute -z-10 pointer-events-none"
                src={arrow}
              />
              <img
                className="arrow-hero-three position-absolute -z-10  pointer-events-none"
                src={arrow}
              />
            </div>
            {/* <div id="intro-content" className="position-relative h-100 w-100"> */}
            {/* <img
                id="intro-image-4"
                src={Image4}
                className="position-absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-96 w-[600px] object-cover"
              />
              <img
                id="intro-image-3"
                src={Image3}
                className="position-absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-96 w-[600px] object-cover"
              />
              <img
                id="intro-image-2"
                src={Image2}
                className="position-absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-96 w-[600px] object-cover"
              />
              <img
                id="intro-image-1"
                src={Image1}
                className="position-absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-96 w-[600px] object-cover"
              /> */}
            {/* <div
                id="intro-navigation"
                className="position-absolute intro-navigation w-100 d-flex justify-content-center align-items-center"
              > */}
            {/* =================== */}
            {/* <div className="text-center pb-sm-5 pb-xxl-0">
                <div className="max_width_tabs d-flex justify-content-center tabs_wrap pt-sm-5 pt-lg-0">
                  {buttonData.map((obj, index) => (
                    <div className="px-2 pt-sm-2" key={index}>
                      <div className={`card_img_${index}`}>
                        <div
                          className={`${
                            index === 5
                              ? "d-none"
                              : `${
                                  index === 0
                                    ? "tabs_lottie_1 position-absolute start-0 custom_height_tab_img tabs_img"
                                    : "position-absolute start-0 w-100 pt-3 custom_height_tab_img tabs_img tabs_lottie"
                                }`
                          }`}
                        >
                          <Lottie
                            className="w-tabs_lottie position-absolute custom_position"
                            animationData={obj.card_img}
                            loop={true}
                            play
                          />
                        </div>
                      </div>
                      <div className="d-flex align-items-center pt-sm-3 pt-lg-0">
                        <p className="font_2xl color_gray pt-3">{obj.para}</p>
                        {obj.buttonText &&
                          (console.log(obj.buttonId, "hello"),
                          (
                            <button
                              className={`active_button_${index} tabs_btn ms-2 ms-sm-3 font_2xl color_gray`}
                              dangerouslySetInnerHTML={{
                                __html: obj.buttonText,
                              }}
                              onClick={() => moveTo("hero", obj.label)}
                              id={obj.buttonId}
                            ></button>
                          ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div> */}

            {/* ======================================================= */}
            {/* <div
                  id="intro-image-1-btn"
                  className="bg-green-200 px-10 py-3 rounded-xl font-bold"
                  onClick={() => moveTo("hero", "btn-1")}
                >
                  Image 1
                </div>
                <div
                  id="intro-image-2-btn"
                  className="bg-green-200 px-10 py-3 rounded-xl font-bold"
                  onClick={() => moveTo("hero", "btn-2")}
                >
                  Image 2
                </div>
                <div
                  id="intro-image-3-btn"
                  className="bg-green-200 px-10 py-3 rounded-xl font-bold"
                  onClick={() => moveTo("hero", "btn-3")}
                >
                  Image 3
                </div>
                <div
                  id="intro-image-4-btn"
                  className="bg-green-200 px-10 py-3 rounded-xl font-bold"
                  onClick={() => moveTo("hero", "btn-4")}
                >
                  Image 4
                </div> */}
            {/* ======================================================= */}
            {/* </div> */}
            {/* </div> */}

            <img
              id="hero-ipad"
              className="position-absolute -z-10 pointer-events-none origin-center ipad_img"
              src={ipad}
            />
            <img
              id="hero-ipad-white"
              className="position-absolute -z-10 pointer-events-none origin-center ipad_img opacity-0"
              src={ipadWhite}
            />
          </div>
          {/* <div id="white-section" className="bg_dark_gray inset-0 -z-10"></div> */}
        </div>
      </div>
    </>
  );
};

export default Hero;

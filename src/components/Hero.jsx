import React, { useEffect } from "react";
import { Icon1, Icon2, Icon3, Icon4, Icon4_2 } from "./Icons";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import heroEtext from "../assets/images/svg/hero-e-text.svg";
import Header from "./Header";

import ipad from "../assets/ipad.png";
import ipadWhite from "../assets/ipad-white.png";
import arrow from "../assets/arrow.svg";
import Lottie from "react-lottie-player";
import comeLottie from "../assets/lotties/tabs-1.json";
import marketingLottie from "../assets/lotties/tabs-2.json";
import techDrivenLottie from "../assets/lotties/tabs-3.json";
import realTimeLottie from "../assets/lotties/tabs-4.json";
import crmLottie from "../assets/lotties/tabs-5.json";

const Hero = () => {
  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);
  let tl;

  useEffect(() => {
    gsap.from("#hero-main-heading", {
      yPercent: 100,
      opacity: 0,
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
        // pinSpacing: false,
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
      // .set(
      //   "#intro-content",
      //   {
      //     display: "block",
      //   },
      //   "<"
      // )
      // .addLabel("btn-1")
      // .to("#intro-image-1-btn", {
      //   rotate: 10,
      // })
      // .to(
      //   "#intro-image-1",
      //   {
      //     autoAlpha: 0,
      //   },
      //   "+=2"
      // )
      // .addLabel("btn-2")
      // .to(
      //   "#intro-image-1-btn",
      //   {
      //     rotate: 0,
      //   },
      //   ">"
      // )
      // .to("#intro-image-2-btn", {
      //   rotate: 10,
      // })
      // .to(
      //   "#intro-image-2",
      //   {
      //     autoAlpha: 0,
      //   },
      //   "+=2"
      // )
      // .addLabel("btn-3")
      // .to(
      //   "#intro-image-2-btn",
      //   {
      //     rotate: 0,
      //   },
      //   ">"
      // )
      // .to("#intro-image-3-btn", {
      //   rotate: 10,
      // })
      // .to(
      //   "#intro-image-3",
      //   {
      //     autoAlpha: 0,
      //   },
      //   "+=2"
      // )
      // .addLabel("btn-4")
      // .to(
      //   "#intro-image-3-btn",
      //   {
      //     rotate: 0,
      //   },
      //   ">"
      // )
      // .to("#intro-image-4-btn", {
      //   rotate: 10,
      // })
      .to(
        "#root",
        {
          backgroundColor: "#29424D",
        },
        "+=2"
      );
  });

  const moveTo = (sectionId, id) => {
    const section = document.querySelector(`#${sectionId}`);
    const pos = Math.ceil(
      section.parentNode.scrollHeight * (tl.labels[id] / tl.duration()) +
        section.parentNode.offsetTop
    );

    gsap.to(window, { duration: 0.3, scrollTo: pos, ease: "linear" });
  };

  // ======================================================
  // gsap.registerPlugin(ScrollTrigger);
  // useEffect(() => {
  //   gsap.from(".hero_heading", {
  //     filter: "blur(2px)",
  //     duration: 3,
  //   });
  //   gsap.from(".icon_1", {
  //     yPercent: 100,
  //     duration: 2,
  //   });
  //   gsap.from(".icon_2", {
  //     y: "50%",
  //     duration: 2,
  //   });
  //   gsap.from(".icon_3", {
  //     yPercent: 100,
  //     duration: 2,
  //     zIndex: 1,
  //   });
  //   let secondSlide = gsap.timeline({
  //     scrollTrigger: {
  //       trigger: ".hero_parent",
  //       start: "top top",
  //       end: "+=400%",
  //       scrub: 2,
  //       pin: true,
  //     },
  //   });

  //   secondSlide
  //     .to(".hero_slide_parent", {
  //       yPercent: -100,
  //       duration: 1,
  //       delay: 1,
  //     })
  //     .to(
  //       ".hero_heading",
  //       {
  //         opacity: 0,
  //         duration: 1,
  //       },
  //       "-=1"
  //     )
  //     .to(
  //       ".icon_1",
  //       {
  //         y: "-100vh",
  //         duration: 1,
  //       },
  //       "-=1"
  //     )
  //     .to(
  //       ".icon_2",
  //       {
  //         yPercent: -100,
  //         duration: 1,
  //       },
  //       "-=1"
  //     )
  //     .to(
  //       ".icon_3",
  //       {
  //         rotate: 20,
  //         y: "-75%",
  //         x: "10%",
  //         scale: 0.7,
  //         duration: 2,
  //         zIndex: 1,
  //       },
  //       "-=1"
  //     )
  //     .fromTo(
  //       ".icon_4",
  //       {
  //         yPercent: 80,
  //         duration: 3,
  //       },
  //       {
  //         yPercent: -65,
  //         // xPercent: -50,
  //         duration: 3,
  //       },
  //       "-=1"
  //     )
  //     .fromTo(
  //       ".i_pad_img",
  //       {
  //         opacity: 0,
  //         xPercent: -50,
  //         left: "50%",
  //         scale: 3,
  //         top: "50%",
  //         yPercent: -50,
  //         duration: 3,
  //       },
  //       {
  //         opacity: 1,
  //         scale: 0.8,
  //         xPercent: -50,
  //         left: "50%",
  //         top: "50%",
  //         yPercent: -50,
  //         duration: 3,
  //       }
  //     )

  //     .to(
  //       ".hero_slide_parent",
  //       {
  //         scale: 0.8,
  //         duration: 1,
  //         delay: 1,
  //       },
  //       "-=1"
  //     )
  //     .to(
  //       ".icon_3",
  //       {
  //         scale: 0.4,
  //         top: "55%",
  //         left: "50%",
  //         zIndex: 1,
  //       },
  //       "-=1"
  //     )
  //     // .fromTo(
  //     //   ".hero_slide_2",
  //     //   { top: "200vh", position: "absolute", delay: 1, yPercent: -50 },
  //     //   {
  //     //     delay: 1,
  //     //     top: "50%",
  //     //     position: "absolute",
  //     //     duration: 1,
  //     //     yPercent: -50,
  //     //   }
  //     // )
  //     .fromTo(
  //       ".hero_slide_2",
  //       {
  //         top: "50vh",
  //         position: "absolute",
  //         delay: 1,
  //         yPercent: -50,
  //         opacity: 0,
  //         duration: 1,
  //         delay: 1,
  //       },
  //       {
  //         delay: 1,
  //         top: "50%",
  //         position: "absolute",
  //         duration: 1,
  //         yPercent: -50,
  //         opacity: 1,
  //       }
  //     )
  //     .to(
  //       ".hero_slide_1",
  //       {
  //         opacity: 0,
  //         yPercent: "-100vh",
  //       },
  //       "-=1"
  //     )
  //     .to(".hero_text_parent", {
  //       height: "100vh",
  //       duration: 0.1,
  //     })
  //     .to(".icon_4", {
  //       yPercent: -155,
  //       // xPercent: -50,
  //       duration: 3,
  //       scale: 0.8,
  //     })
  //     .to(
  //       ".hero_text_parent",
  //       {
  //         height: "50vh",
  //         duration: 1,
  //       },
  //       "-=1"
  //     )
  //     .to(".icon_4", {
  //       yPercent: -255,
  //       // xPercent: -50,
  //       duration: 5,
  //       scale: 0.5,
  //     })
  //     .to(".hero_text_parent", {
  //       height: "0vh",
  //       duration: 1,
  //     })
  //     .to(".hero_text_parent", {
  //       height: "0vh",
  //       delay: 2,
  //     });
  // }, []);

  // const buttonData = [
  //   {
  //     buttonText: "come",
  //     buttonId: "intro-image-1-btn",
  //     label: "btn-1",
  //     card_img: comeLottie,
  //     para: "Scopri",
  //   },
  //   {
  //     buttonText: "marketing conversazionale",
  //     buttonId: "intro-image-2-btn",
  //     label: "btn-2",
  //     card_img: marketingLottie,
  //     para: "usiamo il",
  //   },
  //   {
  //     buttonText: `strumenti tech<span class="ff_math">-</span>driven`,
  //     buttonId: "intro-image-3-btn",
  //     label: "btn-3",
  //     card_img: techDrivenLottie,
  //     para: "e gli ",
  //   },
  //   {
  //     buttonText: `qualifica digitale real<span class="ff_math">-</span>time`,
  //     buttonId: "intro-image-4-btn",
  //     label: "btn-4",
  //     card_img: realTimeLottie,
  //     para: "da noi sviluppati",
  //   },
  //   {
  //     buttonText: "CRM",
  //     buttonId: "intro-image-5-btn",
  //     label: "btn-5",
  //     card_img: crmLottie,
  //     para: "per ottenere una",
  //   },
  //   {
  //     buttonText: "",
  //     buttonId: "",
  //     label: "",
  //     card_img: "",
  //     para: "e trasmettere i dati sul tuo",
  //   },
  // ];

  return (
    <>
      <div className="bg_dark_gray">
        <Header />

        {/* =============================================== */}
        {/* <div className="hero_parent">
          <div className="value">
            <div className="hero_text_parent bg_dark_gray position-absolute top-0 end-0 w-100 h-100 z_negative"></div>
            <div className="hero_heading">
              <div className="hero_section_heading">
                <h2 className="ff_mundial_regular color_white_off font_6xl mb-0 position-relative letter_spacing_01">
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
                  </span>{" "}
                  digitale
                </h2>
              </div>
            </div>
            <div className="icon_1">
              <Icon1 />
            </div>
            <div className="icon_2">
              <Icon2 className="w-100" />
            </div>
            <div className="icon_3">
              <Icon3 />
            </div>
            <div className="icon_4">
              <div className="d-none d-sm-block">
                <Icon4 />
              </div>
              <div className="d-sm-none">
                <Icon4_2 />
              </div>
            </div>
            <div className="hero_slide_parent">
              <div className="i_pad_img">
                <img
                  className="w-100 d-none d-lg-block"
                  src={ipadScrollFit}
                  alt="i_pad_img"
                />
                <img
                  className="w-100 d-none d-sm-block d-lg-none"
                  src={iPadFrameimg}
                  alt="i_pad_img"
                />
                <img
                  className="ipad_image d-sm-none"
                  src={iPadSmallImg}
                  alt="i_pad_img2"
                />
              </div>
              <div className="w-100 d-flex flex-column justify-content-center hero_section_text align-items-center text-white vh-100">
                <div className="hero_slide_1">
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
                  <h3 className="font_8xl fw-bold mt-xl-5 pt-4 pt-xl-5 pb-4 text-center color_light_green">
                    200.000
                  </h3>
                  <p className="font_xl color_white_off ff_mundial_regular text-center pb-4 hero_slide_para_1">
                    Lead
                    <span className="ff_mundial_bold mx-2">Qualificati</span>
                    nel 2022
                  </p>
                  <p className="font_4xl color_white_off ff_mundial_regular text-center pt-5 pt-lg-2 pt-xl-5 pb-4 hero_slide_para_2">
                    Daicar aiuta a far
                    <span className="ff_mundial_bold mx-2">crescere</span> la
                    tua azienda, <br className="d-none d-sm-block" />
                    creando contatti e generando vendite
                  </p>
                </div>

                <div className="hero_slide_2">
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
                  <h3 className="font_8xl fw-bold mt-xl-5 pt-4 pt-xl-5 pb-4 text-center color_light_green">
                    10.000
                  </h3>
                  <p className="font_xl color_white_off ff_mundial_regular text-center pb-4 hero_slide_para_1">
                    Campagne
                    <span className="ff_mundial_bold mx-2">Generate</span>
                    nel 2022
                  </p>
                  <p className="font_4xl color_white_off ff_mundial_regular text-center pt-5 pt-lg-2 pt-xl-5 pb-4 hero_slide_para_2">
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
            </div>
          </div>
        </div> */}

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

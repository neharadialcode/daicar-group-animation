import React, { useEffect } from "react";
import { Icon1, Icon2, Icon3, Icon4, Icon4_2 } from "./Icons";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import img from "../Free_iPad_Mockup_1 1.png";
// import iPadSmallImg from "../assets/images/png/small-ipad.png";
// import iPadSmallImg from "../assets/images/png/hero-ipad-mockup-img.png";
import iPadSmallImg from "../assets/images/png/hero-ipad-mockupImg.png";
import iPadFrameimg from "../assets/images/png/hero_slide_iPad_mockup_02.png";
import Header from "./Header";

const Hero = () => {
  gsap.registerPlugin(ScrollTrigger);
  useEffect(() => {
    gsap.from("nav", { yPercent: -50, opacity: 0, duration: 1 });
    gsap.from(".heading", {
      filter: "blur(2px)",
      duration: 1.5,
    });
    gsap.from(".icon_1", {
      yPercent: 100,
      duration: 1.5,
    });
    gsap.from(".icon_2", {
      y: "50%",
      duration: 1.5,
    });
    gsap.from(".icon_3", {
      yPercent: 100,
      duration: 1.5,
      zIndex: 1,
    });
    let secondSlide = gsap.timeline({
      scrollTrigger: {
        trigger: ".main_div",
        start: "top top",
        end: "bottom top",
        scrub: 2,
        pin: true,
        // markers: true,
        pinSpacing: false,
      },
    });

    secondSlide
      .to(".second_div", {
        yPercent: -100,
        duration: 1,
      })
      .to(
        ".heading",
        {
          opacity: 0,
          duration: 1,
        },
        "-=1"
      )
      .to(
        ".icon_1",
        {
          y: "-100vh",
          duration: 1,
        },
        "-=1"
      )
      .to(
        ".icon_2",
        {
          yPercent: -100,
          duration: 1,
        },
        "-=1"
      )
      .to(
        ".icon_3",
        {
          rotate: 20,
          y: "-75%",
          x: "10%",
          scale: 0.7,
          duration: 1,
          zIndex: 1,
        },
        "-=1"
      )
      .fromTo(
        ".icon_4",
        {
          yPercent: 80,
          duration: 1,
        },
        {
          yPercent: -65,
          xPercent: -50,
          duration: 1,
        },
        "-=1"
      )
      .fromTo(
        ".i_pad_img",
        {
          opacity: 0,
          xPercent: -50,
          left: "50%",
          scale: 3,
          top: "50%",
          yPercent: -50,
          duration: 1,
        },
        {
          opacity: 1,
          scale: 0.8,
          xPercent: -50,
          left: "50%",
          top: "50%",
          yPercent: -50,
          duration: 1,
        }
      )

      .to(
        ".second_div",
        {
          scale: 0.8,
          duration: 1,
        },
        "-=1"
      )
      .to(
        ".icon_3",
        {
          scale: 0.4,
          top: "55%",
          left: "50%",
          zIndex: 1,
        },
        "-=1"
      )
      .fromTo(
        ".hero_slide_2",
        { top: "200vh", position: "absolute", delay: 1, yPercent: -50 },
        {
          delay: 1,
          top: "50%",
          position: "absolute",
          duration: 1,
          yPercent: -50,
        }
      )
      .to(
        ".hero_slide_1",
        {
          opacity: 0,
          yPercent: "-100vh",
        },
        "-=1"
      )
      .to(".bg_green", {
        height: "100vh",
        duration: 0.1,
      })
      .to(".icon_4", {
        yPercent: -155,
        xPercent: -50,
        duration: 1,
        scale: 0.8,
      })
      .to(
        ".bg_green",
        {
          height: "50vh",
          duration: 1,
        },
        "-=1"
      )
      .to(".icon_4", {
        yPercent: -255,
        xPercent: -50,
        duration: 1,
        scale: 0.5,
      })
      .to(".bg_green", {
        height: "0vh",
        duration: 1,
      })
      .to(".bg_green", {
        height: "0vh",
        delay: 2,
      })
      .to(".main_div", {
        autoAlpha: 0,
        duration: 1,
      });
  }, []);

  return (
    <>
      <div className="bg_dark_gray">
        <Header />
        <div className="main_div hero_bg ">
          <div className="value">
            <div className="bg_green"></div>
            <div className="heading">
              <div className="hero_section_heading">
                <h2 className="ff_mundial_regular color_white_off font_6xl mb-0 position-relative letter_spacing_01">
                  Il futuro delle tue
                  <span className="d-inline-block hero_heading_btn me-2 mt-3 mt-sm-0 mx-sm-3">
                    vendite
                  </span>
                  è digitale
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
            <div className="second_div">
              <div className="i_pad_img">
                <img
                  className="w-100 d-none d-lg-block"
                  src={img}
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
              <div className="w-100 d-flex flex-column justify-content-center second_section_text align-items-center text-white vh-100 ">
                <div className="hero_slide_1">
                  <h2 className="ff_mundial_regular font_4xl mb-0 text-center flex align-items-center">
                    Il futuro delle tue&nbsp;
                    <span className="d-inline-block hero_heading_btn slide_3_btn me-2 mt-3 mt-sm-0 mx-sm-2 mx-lg-3">
                      vendite
                    </span>
                    è digitale
                  </h2>
                  <h3 className="font_8xl fw-bold mt-xl-5 pt-4 pt-xl-5 pb-4 text-center color_light_green">
                    200.000
                  </h3>
                  <p className="font_xl color_white_off ff_mundial_regular text-center pb-4 slide_para_1">
                    Lead
                    <span className="ff_mundial_bold mx-2">Qualificati</span>
                    nel 2022
                  </p>
                  <p className="font_4xl color_white_off ff_mundial_regular text-center pt-5 pt-lg-2 pt-xl-5 pb-4 slide_para_2">
                    Daicar aiuta a far
                    <span className="ff_mundial_bold mx-2">crescere</span> la
                    tua azienda, <br className="d-none d-sm-block" />
                    creando contatti e generando vendite
                  </p>
                </div>

                <div className="hero_slide_2">
                  <h2 className="ff_mundial_regular font_4xl mb-0 text-center flex align-items-center">
                    Il futuro delle tue&nbsp;
                    <span className="d-inline-block hero_heading_btn slide_3_btn me-2 mt-3 mt-sm-0 mx-sm-2 mx-lg-3">
                      vendite
                    </span>
                    è digitale
                  </h2>
                  <h3 className="font_8xl fw-bold mt-xl-5 pt-4 pt-xl-5 pb-4 text-center color_light_green">
                    10.000
                  </h3>
                  <p className="font_xl color_white_off ff_mundial_regular text-center pb-4 slide_para_1">
                    Campagne
                    <span className="ff_mundial_bold mx-2">Generate</span>
                    nel 2022
                  </p>
                  <p className="font_4xl color_white_off ff_mundial_regular text-center pt-5 pt-lg-2 pt-xl-5 pb-4 slide_para_2">
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
        </div>
      </div>
    </>
  );
};

export default Hero;

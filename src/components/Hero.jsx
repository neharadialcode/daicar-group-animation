import React, { useEffect } from "react";
import { Icon1, Icon2, Icon3, Icon4 } from "./Icons";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import img from "../Free_iPad_Mockup_1 1.png";

const Hero = () => {
  // gsap.registerPlugin(ScrollTrigger);
  // useEffect(() => {
  //   gsap.from("nav", { yPercent: -50, opacity: 0, duration: 1 });
  //   gsap.from(".heading", {
  //     filter: "blur(2px)",
  //     duration: 1.5,
  //   });
  //   gsap.from(".icon_1", {
  //     yPercent: 100,
  //     duration: 1.5,
  //   });
  //   gsap.from(".icon_2", {
  //     y: "50%",
  //     duration: 1.5,
  //   });
  //   gsap.from(".icon_3", {
  //     yPercent: 100,
  //     duration: 1.5,
  //     zIndex: 1,
  //   });

  //   let secondSlide = gsap.timeline({
  //     scrollTrigger: {
  //       trigger: ".main_div",
  //       start: "top top",
  //       end: "bottom top",
  //       scrub: 1,
  //       pin: true,
  //       markers: true,
  //       pinSpacing: false,
  //     },
  //   });

  //   let newValue = gsap.timeline({
  //     scrollTrigger: {
  //       trigger: ".value",
  //       start: "top -10%",
  //       end: "bottom top",
  //       toggleActions: "play none none reverse",
  //     },
  //   });
  //   newValue
  //     .to(".second_div", {
  //       yPercent: -100,
  //       duration: 1,
  //     })
  //     .to(
  //       ".heading",
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
  //         duration: 1,
  //         zIndex: 1,
  //       },
  //       "-=1"
  //     )
  //     .fromTo(
  //       ".icon_4",
  //       {
  //         yPercent: 80,
  //         duration: 1,
  //       },
  //       {
  //         yPercent: -65,
  //         xPercent: -50,
  //         duration: 1,
  //       },
  //       "-=1"
  //     );

  //   let newValue2 = gsap.timeline({
  //     scrollTrigger: {
  //       trigger: ".second_div",
  //       start: "top center",
  //       end: "bottom top",
  //       toggleActions: "play none none reverse",
  //     },
  //   });
  //   newValue2
  //     .fromTo(
  //       ".i_pad_img",
  //       {
  //         opacity: 0,
  //         xPercent: -50,
  //         left: "50%",
  //         scale: 2,
  //         top: "50%",
  //         yPercent: -50,
  //         duration: 1,
  //       },
  //       {
  //         opacity: 1,
  //         scale: 0.8,
  //         xPercent: -50,
  //         left: "50%",
  //         top: "50%",
  //         yPercent: -50,
  //         duration: 1,
  //       }
  //     )

  //     .to(
  //       ".second_div",
  //       {
  //         scale: 0.8,
  //         duration: 1,
  //       },
  //       "-=1"
  //     )
  //     .to(
  //       ".icon_3",
  //       {
  //         scale: 0.4,
  //         left: "50%",
  //         zIndex: 1,
  //       },
  //       "-=1"
  //     )
  //     .fromTo(
  //       ".text_div2",
  //       { top: "200vh", position: "absolute", delay: 1, yPercent: -50 },
  //       {
  //         delay: 1,
  //         top: "50%",
  //         position: "absolute",
  //         duration: 1,
  //         yPercent: -50,
  //       }
  //     )
  //     .to(
  //       ".text_div",
  //       {
  //         opacity: 0,
  //         yPercent: "-100vh",
  //       },
  //       "-=1"
  //     )
  //     .to(".bg_green", {
  //       height: "100vh",
  //       duration: 0.1,
  //     })
  //     .to(".icon_4", {
  //       yPercent: -155,
  //       xPercent: -50,
  //       duration: 1,
  //       scale: 0.8,
  //     })
  //     .to(
  //       ".bg_green",
  //       {
  //         height: "50vh",
  //         duration: 1,
  //       },
  //       "-=1"
  //     )

  //     .from(".second_sectioon", {
  //       autoAlpha: 0,
  //       zIndex: 10,
  //     })
  //     .to(
  //       ".main_div",
  //       {
  //         autoAlpha: 0,
  //       },
  //       "-=.5"
  //     );
  // }, []);

  return (
    <div className="main_div hero_bg h-300 ">
      <div className="value">
        <div className="bg_green"></div>
        <div className="heading">
          <h2 className="ff_mundial_regular font_6xl mb-0">
            Il futuro dei tuoi
            <span
              className="hero_btn mx-1 d-inline-block
            "
            >
              Lead
            </span>
            è digitale
          </h2>
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
          <Icon4 />
        </div>
        <div className="second_div">
          <div className="i_pad_img">
            <img className="w-100" src={img} alt="i_pad_img" />
          </div>
          <div className="w-100 d-flex flex-column justify-content-center second_section_text align-items-center text-white vh-100 ">
            <div className="text_div">
              <h2 className="ff_mundial_regular font_6xl mb-0 text-center flex align-items-center">
                Il futuro dei tuoi&nbsp;
                <span className="hero_btn mx-2 d-inline-block">Lead</span> è
                digitale
              </h2>
              <h3 className="font_6xl fw-semibold pt-5 pb-3 text-center color_light_green ">
                200.000
              </h3>
              <p className="font_4xl color_white_off fw-normal text-center  ">
                Lead Qualificati nel 2022
              </p>
              <p className="pt-5 pb-3 font_6xl color_white_off fw-bold text-center ">
                Daicar aiuta a far crescere la tua azienda, <br /> creando
                contatti e generando vendite
              </p>
            </div>
            <div className="text_div2">
              <h2 className="ff_mundial_regular font_6xl mb-0 text-center flex align-items-center">
                Il futuro dei tuoi&nbsp;
                <span className="hero_btn mx-2 d-inline-block">Lead</span> è
                digitale xcvbnsdcv sdc third
              </h2>
              <h3 className="font_6xl fw-semibold pt-5 pb-3 text-center color_light_green ">
                200.000
              </h3>
              <p className="font_4xl color_white_off fw-normal text-center  ">
                Lead Qualificati nel 2022
              </p>
              <p className="pt-5 pb-3 font_6xl color_white_off fw-bold text-center ">
                Daicar aiuta a far crescere la tua azienda, <br /> creando
                contatti e generando vendite
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

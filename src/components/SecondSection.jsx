import React, { useEffect, useState } from "react";
import img from "../Free_iPad_Mockup_1 1.png";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Icon1, Icon2, Icon3, Icon4, Icon5 } from "./Icons";

const SecondSection = () => {
  gsap.registerPlugin(ScrollTrigger);
  const buttonData = [
    {
      buttonText: "Button 1",
      bg: "bg-danger",
    },
    {
      buttonText: "Button 2",
      bg: "bg-success",
    },
    {
      buttonText: "Button 3",
      bg: "bg-primary",
    },
    {
      buttonText: "Button 4",
      bg: "bg-warning",
    },
  ];
  useEffect(() => {
    let secondSection = gsap.timeline({
      scrollTrigger: {
        trigger: ".second_sectioon",
        start: "top top",
        end: "bottom top",
        scrub: 1,
        pin: true,
        pinSpacing: false,
      },
    });
    secondSection
      .fromTo(
        ".icon_5",
        {
          top: "100%",
        },
        {
          top: "80%",
        }
      )
      .fromTo(
        ".card_img_0",
        {
          opacity: 0,
          top: "50px",
        },
        {
          opacity: 1,
          top: "0px",
        }
      )
      .to(
        ".active_button_0",
        {
          background: "red",
        },
        "-=.5"
      )
      .to(
        ".icon_5",
        {
          top: "70%",
        },
        "-=.5"
      )
      .to(
        ".side_icon",
        {
          bottom: "10%",
        },
        "-=.5"
      )

      .fromTo(
        ".card_img_1",
        {
          opacity: 0,
          top: "50px",
        },
        {
          opacity: 1,
          top: "0px",
        }
      )
      .to(
        ".active_button_1",
        {
          background: "red",
        },
        "-=.5"
      )
      .to(
        ".icon_5",
        {
          top: "60%",
        },
        "-=.5"
      )
      .to(
        ".side_icon",
        {
          bottom: "20%",
        },
        "-=.5"
      )
      .to(
        ".active_button_0",
        {
          background: "transparent",
        },
        "-=.5"
      )
      .fromTo(
        ".card_img_2",
        {
          opacity: 0,
          top: "50px",
        },
        {
          opacity: 1,
          top: "0px",
        }
      )
      .to(
        ".active_button_2",
        {
          background: "red",
        },
        "-=.5"
      )
      .to(
        ".active_button_1",
        {
          background: "transparent",
        },
        "-=.5"
      )
      .to(
        ".icon_5",
        {
          top: "50%",
        },
        "-=.5"
      )
      .to(
        ".side_icon",
        {
          bottom: "30%",
        },
        "-=.5"
      )
      .fromTo(
        ".card_img_3",
        {
          opacity: 0,
          top: "50px",
        },
        {
          opacity: 1,
          top: "0px",
        }
      )
      .to(
        ".active_button_3",
        {
          background: "red",
        },
        "-=.5"
      )
      .to(
        ".icon_5",
        {
          top: "40%",
        },
        "-=.5"
      )
      .to(
        ".side_icon",
        {
          bottom: "40%",
        },
        "-=.5"
      )
      .to(
        ".active_button_2",
        {
          background: "transparent",
        },
        "-=.5"
      )
      .fromTo(
        ".icon_5",
        {
          top: "40%",
        },
        {
          top: "-200%",
        },
        "-=.5"
      )

      .to(".second_sectioon", {
        autoAlpha: 0,
        delay: 1,
      })
      .to(".second_sectioon", {
        autoAlpha: 0,
      });
  }, []);
  return (
    <div className="vh-100 d-flex flex-column justify-content-center second_sectioon bg_white overflow-hidden bg_white z_index2">
      <div className="side_icon position-absolute">SIDE ICON</div>
      <div className="max_width position-relative">
        <div className="icon_5 position-absolute">
          <Icon5 />
        </div>
        <img className="i_pad_img_2" src={img} alt="img" />
        <div className="text-center pt-4 ">
          <h1 className="max_width d-flex justify-content-center">
            {buttonData.map((obj, index) => (
              <div className="px-2 pt-5 ">
                <img
                  className={`${obj.bg} card_img_${index} position-absolute start-0 w-100 top-0`}
                  src={img}
                  alt="img"
                />
                <button className={`active_button_${index}`}>
                  {obj.buttonText}
                </button>
              </div>
            ))}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default SecondSection;

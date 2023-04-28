import React, { useEffect, useState } from "react";
import img from "../Free_iPad_Mockup_1 1.png";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Icon5 } from "./Icons";
import tabImg1 from "../assets/images/png/tab-1.png";
import tabImg2 from "../assets/images/png/tab-2.png";
import tabImg3 from "../assets/images/png/tab-3.png";
import tabImg4 from "../assets/images/png/tab-4.png";
import tabImg5 from "../assets/images/png/tab-5.png";
// import tab6 from "../assets/images/png/tab-6.png";
import tabImg7 from "../assets/images/png/tab-7.png";
import tabRightIcon from "../assets/images/png/tab-right-icon.png";
const SecondSection = () => {
  gsap.registerPlugin(ScrollTrigger);
  const buttonData = [
    {
      buttonText: "come",
      card_img: tabImg2,
      para: "Scopri",
    },
    {
      buttonText: "marketing conversazionale",
      card_img: tabImg3,
      para: "usiamo il",
    },
    {
      buttonText: "strumenti tech-driven",
      card_img: tabImg4,
      para: "e gli ",
    },
    {
      buttonText: "qualifica digitale real-time",
      card_img: tabImg5,
      para: "da noi sviluppati",
    },
    {
      buttonText: "CRM",
      card_img: tabImg7,
      para: "per ottenere una",
    },
    {
      buttonText: "",
      card_img: "",
      para: "e trasmettere i dati sul tuo",
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
          background: "rgba(83, 132, 153, 0.5)",
          rotate: "-3deg",
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
          background: "rgba(83, 132, 153, 0.5)",
          rotate: "-3deg",
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
          background: "rgba(126, 228, 156, 0.5)",
          rotate: 0,
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
          background: "rgba(83, 132, 153, 0.5)",
          rotate: "-3deg",
        },
        "-=.5"
      )
      .to(
        ".active_button_1",
        {
          background: "rgba(126, 228, 156, 0.5)",
          rotate: 0,
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
          background: "rgba(83, 132, 153, 0.5)",
          rotate: "-3deg",
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
          background: "rgba(126, 228, 156, 0.5)",
          rotate: 0,
        },
        "-=.5"
      )

      // .fromTo(
      //   ".icon_5",
      //   {
      //     top: "40%",
      //   },
      //   {
      //     top: "-200%",
      //   },
      //   "-=.5"
      // )
      .fromTo(
        ".card_img_4",
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
        ".active_button_4",
        {
          background: "rgba(83, 132, 153, 0.5)",
          rotate: "-3deg",
        },
        "-=.5"
      )
      // .to(
      //   ".icon_5",
      //   {
      //     top: "30%",
      //   },
      //   "-=.5"
      // )
      .fromTo(
        ".icon_5",
        {
          top: "40%",
        },
        {
          top: "-100%",
        },
        "-=.5"
      )
      .to(
        ".side_icon",
        {
          bottom: "50%",
        },
        "-=.5"
      )
      .to(
        ".active_button_3",
        {
          background: "rgba(126, 228, 156, 0.5)",
          rotate: 0,
        },
        "-=.5"
      )

      .fromTo(
        ".card_img_5",
        {
          opacity: 0,
          top: "50px",
        },
        {
          opacity: 1,
          top: "10px",
        }
      )
      .to(
        ".active_button_4",
        {
          background: "rgba(83, 132, 153, 0.5)",
          rotate: "-3deg",
        },
        "-=.5"
      )
      .to(".second_sectioon", {
        autoAlpha: 0,
        delay: 1,
      })
      // .to(".second_sectioon", {
      //   autoAlpha: 0,
      // });
  }, []);
  return (
    <div className="vh-100 d-flex flex-column justify-content-center second_sectioon bg_white overflow-hidden bg_white z_index2">
      <div className="side_icon position-absolute tab_right_icon">
        <img src={tabRightIcon} alt="tab-right-icon" />
      </div>
      <div className="max_width position-relative">
        <div className="icon_5 position-absolute">
          <Icon5 />
        </div>
        <img className="i_pad_img_2" src={tabImg1} alt="img" />
        <div className="text-center pt-4 ">
          <div className="max_width d-flex justify-content-center tabs_wrap">
            {buttonData.map((obj, index) => (
              <div className="px-2 pt-5" key={index}>
                <div className={`card_img_${index}`}>
                  {/* <img
                    className={`position-absolute start-0 w-100 top-0`}
                    src={img}
                    alt="img"
                  /> */}
                  <img
                    className="position-absolute top-0 start-0 w-100 h100"
                    src={obj.card_img}
                    alt=""
                  />
                </div>
                <div className="d-flex align-items-center">
                  <p className="font_2xl color_gray text-nowra">{obj.para}</p>
                  {obj.buttonText && (
                    <button
                      className={`active_button_${index} tabs_btn ms-3 font_2xl color_gray`}
                    >
                      {obj.buttonText}
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecondSection;

import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Icon5, TabRightIcon } from "./Icons";
import tabImg1 from "../assets/images/png/tab-1.png";
import tabImg2 from "../assets/images/png/tab-2.png";
import tabImg3 from "../assets/images/png/tab-3.png";
import tabImg4 from "../assets/images/png/tab-4.png";
import tabImg5 from "../assets/images/png/tab-5.png";
import tabImg6 from "../assets/images/png/tab-6.png";
import smallTabImg from "../assets/images/png/small-tab-img.png";
const TabsImage = () => {
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
      card_img: tabImg6,
      para: "per ottenere una",
    },
    {
      buttonText: "",
      card_img: "",
      para: "e trasmettere i dati sul tuo",
    },
  ];
  useEffect(() => {
    let tabImage = gsap.matchMedia();
    tabImage.add("(min-width:768px)", () => {
      let tabimageparent = gsap.timeline({
        scrollTrigger: {
          trigger: ".tab_parent",
          start: "top top",
          end: "bottom top",
          scrub: 1,
          pin: true,
          // pinSpacing: false,
        },
      });
      tabimageparent
        .to(".left_text_2", {
          autoAlpha: 0,
        })
        .to(".left_text_3", {
          autoAlpha: 0,
        })
        .to(".left_text_4", {
          autoAlpha: 0,
        })
        .to(".left_text_5", {
          autoAlpha: 0,
        })
        .to(
          ".active_button_0",
          {
            background: "rgba(83, 132, 153, 0.5)",
            rotate: "-3deg",
          },
          "-=.5"
        )
        .fromTo(
          ".left_text_1",
          {
            autoAlpha: 0,
          },
          {
            autoAlpha: 1,
          }
        )
        .to(
          ".side_icon",
          {
            bottom: "10%",
          },
          "-=.5"
        )
        .fromTo(
          ".arrow_tabs",
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
          ".arrow_tabs",
          {
            top: "70%",
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
          ".arrow_tabs",
          {
            top: "60%",
          },
          "-=.5"
        )
        .fromTo(
          ".left_text_1",
          {
            autoAlpha: 1,
          },
          {
            autoAlpha: 0,
          }
        )
        .fromTo(
          ".left_text_2",
          {
            autoAlpha: 0,
          },
          {
            autoAlpha: 1,
          }
        )
        .to(
          ".side_icon",
          {
            bottom: "30%",
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
          ".arrow_tabs",
          {
            top: "50%",
          },
          "-=.5"
        )
        .fromTo(
          ".left_text_2",
          {
            autoAlpha: 1,
          },
          {
            autoAlpha: 0,
          }
        )
        .fromTo(
          ".left_text_3",
          {
            autoAlpha: 0,
          },
          {
            autoAlpha: 1,
          }
        )
        .to(
          ".side_icon",
          {
            bottom: "35%",
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
          ".arrow_tabs",
          {
            top: "40%",
          },
          "-=.5"
        )
        .fromTo(
          ".left_text_3",
          {
            autoAlpha: 1,
          },
          {
            autoAlpha: 0,
          }
        )
        .fromTo(
          ".left_text_4",
          {
            autoAlpha: 0,
          },
          {
            autoAlpha: 1,
          }
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
        .fromTo(
          ".arrow_tabs",
          {
            top: "40%",
          },
          {
            top: "-40%",
          },
          "-=.5"
        )
        .fromTo(
          ".left_text_4",
          {
            autoAlpha: 1,
          },
          {
            autoAlpha: 0,
          }
        )
        .fromTo(
          ".left_text_5",
          {
            autoAlpha: 0,
          },
          {
            autoAlpha: 1,
          }
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
        );
      // .fromTo(
      //   ".tab_parent",
      //   {
      //     scale: 1,
      //     // translateY: "0%",
      //   },
      //   {
      //     scale: 0.6,
      //     // translateY: "-50%",
      //   }
      // );
    });
    tabImage.add("(max-width:767.78px)", () => {
      let tabimageparent2 = gsap.timeline({
        scrollTrigger: {
          trigger: ".tab_parent",
          start: "top top",
          end: "bottom top",
          scrub: 1,
          pin: true,
          pinSpacing: true,
        },
      });
      tabimageparent2.fromTo(
        ".small_tab",
        {
          scale: 1.5,
        },
        {
          scale: 1,
        }
      );
    });
  }, []);
  return (
    <div
      className="vh-100 d-flex flex-column justify-content-center tab_parent bg_light_white overflow-hidden z_index2"
      id="main-assets"
    >
      <div className="side_icon position-absolute tab_right_icon d-none d-xl-block">
        <div className="d-flex align-items-center tab-side-effect left_text_5">
          <p className="me-4 color_light_green mb-0">CRM lo facciamo</p>
          <TabRightIcon />
        </div>
        <div className="d-flex align-items-center tab-side-effect left_text_4">
          <p className="me-4 color_light_green mb-0">
            qualifica digitale real-time lo facciamo
          </p>
          <TabRightIcon />
        </div>
        <div className="d-flex align-items-center tab-side-effect left_text_3">
          <p className="me-4 color_light_green mb-0">
            strumenti tech-driven lo facciamo
          </p>
          <TabRightIcon />
        </div>
        <div className="d-flex align-items-center tab-side-effect left_text_2">
          <p className="me-4 color_light_green mb-0">
            marketing conversazionale lo facciamo
          </p>
          <TabRightIcon />
        </div>
        <div className="d-flex align-items-center tab-side-effect left_text_1">
          <p className="me-4 color_light_green mb-0">come lo facciamo</p>
          <TabRightIcon />
        </div>
      </div>

      <div className="max_width_tabs position-relative d-none d-md-block">
        <div className="arrow_tabs position-absolute">
          <Icon5 />
        </div>
        <img
          className="i_pad_img_2 pt-3 w-100 custom_height_tab_img"
          src={tabImg1}
          alt="img"
        />
        <div className="text-center">
          <div className="max_width_tabs d-flex justify-content-center tabs_wrap pt-5 pt-lg-0">
            {buttonData.map((obj, index) => (
              <div className="px-2 pt-2" key={index}>
                <div className={`card_img_${index}`}>
                  <img
                    className={`${
                      index === 5
                        ? "d-none "
                        : "position-absolute top-0 start-0 w-100 pt-3 custom_height_tab_img tabs_img"
                    }`}
                    src={obj.card_img}
                    alt=""
                  />
                </div>
                <div className="d-none d-md-flex align-items-center pt-3 pt-lg-0">
                  <p className="font_2xl color_gray pt-3">{obj.para}</p>
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
      <div className="d-md-none small_tab">
        <img className="w-100" src={smallTabImg} alt="small-tab-img" />
      </div>
    </div>
  );
};

export default TabsImage;

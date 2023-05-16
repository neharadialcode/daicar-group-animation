import React, { useEffect } from "react";
import { gsap } from "gsap";
import { Icon5, TabRightIcon } from "./Icons";
import tabImg1 from "../assets/images/png/tab-frame.png";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import Lottie from "react-lottie-player";
import comeLottie from "../assets/lotties/tabs-1.json";
import marketingLottie from "../assets/lotties/tabs-2.json";
import techDrivenLottie from "../assets/lotties/tabs-3.json";
import realTimeLottie from "../assets/lotties/tabs-4.json";
import crmLottie from "../assets/lotties/tabs-5.json";
const TabsImage = () => {
  let tl2;
  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

  const buttonData = [
    {
      buttonText: "come",
      buttonId: "button_0",
      card_img: comeLottie,
      para: "Scopri",
    },
    {
      buttonText: "marketing conversazionale",
      buttonId: "button_1",
      card_img: marketingLottie,
      para: "usiamo il",
    },
    {
      buttonText: `strumenti tech<span class="ff_math">-</span>driven`,
      buttonId: "button_2",
      card_img: techDrivenLottie,
      para: "e gli ",
    },
    {
      buttonText: `qualifica digitale real<span class="ff_math">-</span>time`,
      buttonId: "button_3",
      card_img: realTimeLottie,
      para: "da noi sviluppati",
    },
    {
      buttonText: "CRM",
      buttonId: "button_4",
      card_img: crmLottie,
      para: "per ottenere una",
    },
    {
      buttonText: "",
      buttonId: "",
      card_img: "",
      para: "e trasmettere i dati sul tuo",
    },
  ];

  useEffect(() => {
    tl2 = gsap.timeline({
      scrollTrigger: {
        trigger: ".tab_parent",
        start: "top top",
        end: "+=400%",
        scrub: 1,
        pin: true,
      },
    });

    tl2
      .to(
        ".active_button_0",
        {
          background: "rgba(83, 132, 153, 0.5)",
          rotate: "-3deg",
        },
        "-=.5"
      )
      .addLabel("button_0")
      //////////
      .fromTo(
        ".card_img_0",
        {
          top: "50px",
        },
        {
          opacity: 1,
          top: "0px",
        }
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
      .to(
        ".arrow_tabs",
        {
          top: "70%",
        },
        "-=.5"
      )

      .fromTo(
        ".card_img_0",
        {
          opacity: 1,
        },
        {
          opacity: 0,
        }
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

      .to(".active_button_0", {
        background: "rgba(126, 228, 156, 0.5)",
        rotate: 0,
      })
      .to(
        ".active_button_1",
        {
          background: "rgba(83, 132, 153, 0.5)",
          rotate: "-3deg",
        },
        "-=.5"
      )
      .addLabel("button_1")
      //////////
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

      .fromTo(
        ".card_img_1",
        {
          opacity: 1,
        },
        {
          opacity: 0,
        }
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

      .to(".active_button_1", {
        background: "rgba(126, 228, 156, 0.5)",
        rotate: 0,
      })
      .to(
        ".active_button_2",
        {
          background: "rgba(83, 132, 153, 0.5)",
          rotate: "-3deg",
        },
        "-=.5"
      )
      .addLabel("button_2")
      //////////
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
        ".card_img_2",
        {
          opacity: 1,
        },
        {
          opacity: 0,
        }
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

      .to(".active_button_2", {
        background: "rgba(126, 228, 156, 0.5)",
        rotate: 0,
      })
      .to(
        ".active_button_3",
        {
          background: "rgba(83, 132, 153, 0.5)",
          rotate: "-3deg",
        },
        "-=.5"
      )
      .addLabel("button_3")
      //////////
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
      .fromTo(
        ".card_img_3",
        {
          opacity: 1,
        },
        {
          opacity: 0,
        }
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

      .to(".active_button_3", {
        background: "rgba(126, 228, 156, 0.5)",
        rotate: 0,
      })
      .to(
        ".active_button_4",
        {
          background: "rgba(83, 132, 153, 0.5)",
          rotate: "-3deg",
        },
        "-=.5"
      )
      .addLabel("button_4")
      //////////
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
          bottom: "45%",
        },
        "-=.5"
      );
  }, []);

  const moveToIt = (sectionId, id) => {
    const section2 = document.querySelector(`#${sectionId}`);
    const pos2 = Math.ceil(
      section2.parentNode.scrollHeight * (tl2.labels[id] / tl2.duration()) +
        section2.parentNode.offsetTop
    );
    gsap.to(window, { duration: 0.3, scrollTo: pos2, ease: "linear" });
  };
  return (
    <div
      className="vh-100 d-flex flex-column justify-content-center tab_parent bg_light_white overflow-hidden z_2"
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
            strumenti tech<span className="ff_math">-</span>driven lo facciamo
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

      <div className="max_width_tabs position-relative">
        <div className="arrow_tabs position-absolute d-none d-md-block">
          <Icon5 />
        </div>
        <img
          className="i_pad_img_2 pt-3 w-100 custom_height_tab_img_ipad"
          src={tabImg1}
          alt="img"
        />
        <div className="text-center pb-sm-5 pb-xxl-0">
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
                      className="tabs_lottie_width"
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
                        dangerouslySetInnerHTML={{ __html: obj.buttonText }}
                        onClick={() => moveToIt("main-assets", obj.buttonId)}
                      ></button>
                    ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TabsImage;

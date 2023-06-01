import React, { useEffect } from "react";
import { Icon4 } from "./Icons";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import Header from "./Header";
import ipad from "../assets/images/png/ipad.png";
import ipadWhite from "../assets/images/png/ipad-white.png";
import arrow from "../assets/images/svg/arrow.svg";
import { TabRightIcon } from "./Icons";
import Lottie from "react-lottie-player";
import comeLottie from "../assets/lotties/tabs-1.json";
import marketingLottie from "../assets/lotties/tabs-2.json";
import techDrivenLottie from "../assets/lotties/tabs-3.json";
import realTimeLottie from "../assets/lotties/tabs-4.json";
import crmLottie from "../assets/lotties/tabs-5.json";

const Hero = () => {
  let tl;
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
    let mm = gsap.matchMedia();
    window.addEventListener("resize", gsap.matchMediaRefresh);

    mm.add("(min-width: 1600px)", () => {
      gsap.set("#hero-main-heading", {
        y: "-150px",
      });
      gsap.set(".arrow-hero-one", {
        y: "30px",
        scale: 1.1,
      });
      gsap.set(".arrow-hero-two", {
        yPercent: -9,
        xPercent: 100,
        scale: 0.4,
      });
      gsap.set(".arrow-hero-three", {
        xPercent: -90,
        yPercent: -26,
        scale: 0.2,
      });
      gsap.set("#hero-large-arrow", {
        left: "50%",
        xPercent: -50,
        top: "76%",
      });
      gsap.set("#intro-content", {
        display: "none",
      });
      gsap.from([".arrow-hero-one", ".arrow-hero-two", ".arrow-hero-three"], {
        y: 100,
        stagger: 0.1,
        duration: 1,
        delay: 2.2,
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
      gsap.set("#main-content", {
        y: "-70px",
      });

      tl = gsap.timeline({
        scrollTrigger: {
          trigger: "#hero",
          start: "top top",
          end: "+=500%",
          pin: true,
          scrub: 1,
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
            xPercent: 73,
            yPercent: -8,
            scale: 0.19,
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
          "#hero_section",
          {
            height: 0,
            duration: 2,
          },
          "<"
        )
        .set(
          "#hero-ipad-white",
          {
            scale: 0.8,
          },
          ">"
        )
        .to(
          ["#hero-ipad", ".hero_slide_2"],
          {
            scale: 0.8,
            // background: "red",
          },
          ">"
        )
        .to(
          ".arrow-hero-two",
          {
            xPercent: 58,
            yPercent: -8,
            scale: 0.13,
            rotate: "45deg",
          },
          "<"
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
        .set(
          "#main-content",
          {
            display: "none",
          },
          "<"
        )
        .set(
          "#intro-content",
          {
            display: "block",
          },
          "<"
        )
        //////////
        .addLabel("button_0")
        .to(
          ".active_button_0",
          {
            background: "rgba(83, 132, 153, 0.5)",
            rotate: "-3deg",
          },
          "-=.5"
        )
        .to("#hero-large-arrow", {
          top: "73%",
        })
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
        // .fromTo(
        //   ".arrow_tabs",
        //   {
        //     top: "100%",
        //   },
        //   {
        //     top: "80%",
        //   }
        // )
        // .to(
        //   ".arrow_tabs",
        //   {
        //     top: "70%",
        //   },
        //   "-=.5"
        // )

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
        // //////////
        // .addLabel("button_1")
        .to(".active_button_0", {
          background: "rgba(126, 228, 156, 0.5)",
          rotate: 0,
        })
        //////////
        .addLabel("button_1")
        .to(
          ".active_button_1",
          {
            background: "rgba(83, 132, 153, 0.5)",
            rotate: "-3deg",
          },
          "-=.5"
        )
        .to("#hero-large-arrow", {
          top: "70%",
        })
        // .to(
        //   ".arrow_tabs",
        //   {
        //     top: "60%",
        //   },
        //   "-=.5"
        // )
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
        // //////////
        // .addLabel("button_2")
        .to(".active_button_1", {
          background: "rgba(126, 228, 156, 0.5)",
          rotate: 0,
        })
        //////////
        .addLabel("button_2")
        .to(
          ".active_button_2",
          {
            background: "rgba(83, 132, 153, 0.5)",
            rotate: "-3deg",
          },
          "-=.5"
        )
        .to("#hero-large-arrow", {
          top: "64%",
        })
        // .to(
        //   ".arrow_tabs",
        //   {
        //     top: "50%",
        //   },
        //   "-=.5"
        // )
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
        // //////////
        // .addLabel("button_3")
        .to(".active_button_2", {
          background: "rgba(126, 228, 156, 0.5)",
          rotate: 0,
        })
        //////////
        .addLabel("button_3")
        .to(".active_button_3", {
          background: "rgba(83, 132, 153, 0.5)",
          rotate: "-3deg",
        })
        .to("#hero-large-arrow", {
          top: "58%",
        })
        // .to(
        //   ".arrow_tabs",
        //   {
        //     top: "40%",
        //   },
        //   "-=.5"
        // )
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
        // //////////
        // .addLabel("button_4")
        .to(".active_button_3", {
          background: "rgba(126, 228, 156, 0.5)",
          rotate: 0,
        })
        //////////
        .addLabel("button_4")
        .to(
          ".active_button_4",
          {
            background: "rgba(83, 132, 153, 0.5)",
            rotate: "-3deg",
          },
          "-=.5"
        )
        .to("#hero-large-arrow", {
          top: "52%",
        })
        // .fromTo(
        //   ".arrow_tabs",
        //   {
        //     top: "40%",
        //   },
        //   {
        //     top: "-40%",
        //   },
        //   "-=.5"
        // )
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
        )
        .to(["#para_text_01 button", "#para_text_01 p"], {
          color: "white",
        })
        .to("#root", {
          backgroundColor: "#29424D",
        });
    });
    // console.log(windowWidth, "windowWidth");
  }, []);

  useEffect(() => {
    let mm = gsap.matchMedia();
    mm.add("(min-width: 992px) and (max-width:1599.98px)", () => {
      gsap.set("#main-content", {
        y: "-60px",
      });
      gsap.set("#hero-main-heading", {
        y: "-150px",
      });
      gsap.set(".arrow-hero-one", {
        scale: 0.8,
      });
      gsap.set(".arrow-hero-two", {
        yPercent: -11,
        xPercent: 75,
        scale: 0.3,
      });
      gsap.set(".arrow-hero-three", {
        xPercent: -65,
        yPercent: -22,
        scale: 0.15,
      });
      gsap.set("#hero-large-arrow", {
        left: "50%",
        xPercent: -50,
        top: "70%",
      });
      gsap.from("#hero-main-heading", {
        yPercent: 100,
      });
      gsap.set("#intro-content", {
        display: "none",
      });
      gsap.from([".arrow-hero-one", ".arrow-hero-two", ".arrow-hero-three"], {
        y: 100,
        stagger: 0.1,
        duration: 1,
        delay: 2.2,
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
        top: "45%",
        left: "50%",
        xPercent: -50,
        yPercent: -50,
      });
      gsap.set("#main-content", {
        y: "-70px",
      });

      tl = gsap.timeline({
        scrollTrigger: {
          trigger: "#hero",
          start: "top top",
          end: "+=500%",
          pin: true,
          scrub: 1,
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
            xPercent: 53,
            yPercent: 3,
            scale: 0.1,
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
          "#hero_section",
          {
            height: 0,
            duration: 2,
          },
          "<"
        )
        .set(
          "#hero-ipad-white",
          {
            scale: 0.8,
          },
          ">"
        )
        .to(
          // ["#hero-ipad", ".hero_slide_2"],
          "#hero-ipad",
          {
            scale: 0.8,
          },
          ">"
        )
        .to(
          ".hero_slide_2",
          {
            scale: 0.4,
            top: "30%",
          },
          "<"
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
        .set(
          "#main-content",
          {
            display: "none",
          },
          "<"
        )
        .set(
          "#intro-content",
          {
            display: "block",
          },
          "<"
        )
        //////////
        .addLabel("button_0")
        .to(
          ".active_button_0",
          {
            background: "rgba(83, 132, 153, 0.5)",
            rotate: "-3deg",
          },
          "-=.5"
        )
        .to("#hero-large-arrow", {
          top: "68%",
        })
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
        // .fromTo(
        //   ".arrow_tabs",
        //   {
        //     top: "100%",
        //   },
        //   {
        //     top: "80%",
        //   }
        // )
        // .to(
        //   ".arrow_tabs",
        //   {
        //     top: "70%",
        //   },
        //   "-=.5"
        // )

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
        .addLabel("button_1")
        .to(".active_button_0", {
          background: "rgba(126, 228, 156, 0.5)",
          rotate: 0,
        })
        .to("#hero-large-arrow", {
          top: "63%",
        })
        .to(
          ".active_button_1",
          {
            background: "rgba(83, 132, 153, 0.5)",
            rotate: "-3deg",
          },
          "-=.5"
        )
        // .to(
        //   ".arrow_tabs",
        //   {
        //     top: "60%",
        //   },
        //   "-=.5"
        // )
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
        //////////
        .addLabel("button_2")
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
        .to("#hero-large-arrow", {
          top: "58%",
        })
        // .to(
        //   ".arrow_tabs",
        //   {
        //     top: "50%",
        //   },
        //   "-=.5"
        // )
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
        //////////
        .addLabel("button_3")
        .to(".active_button_2", {
          background: "rgba(126, 228, 156, 0.5)",
          rotate: 0,
        })
        .to(".active_button_3", {
          background: "rgba(83, 132, 153, 0.5)",
          rotate: "-3deg",
        })
        .to("#hero-large-arrow", {
          top: "53%",
        })
        // .to(
        //   ".arrow_tabs",
        //   {
        //     top: "40%",
        //   },
        //   "-=.5"
        // )
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
        //////////
        .addLabel("button_4")
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
        .to("#hero-large-arrow", {
          top: "48%",
        })
        // .fromTo(
        //   ".arrow_tabs",
        //   {
        //     top: "40%",
        //   },
        //   {
        //     top: "-40%",
        //   },
        //   "-=.5"
        // )
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
        )
        .to(["#para_text_01 button", "#para_text_01 p"], {
          color: "white",
        })
        .to("#root", {
          backgroundColor: "#29424D",
        });
    });
    // console.log(windowWidth, "windowWidth");
  }, []);

  useEffect(() => {
    let mm = gsap.matchMedia();
    mm.add("(min-width: 576px) and (max-width:991.98px)", () => {
      gsap.set("#main-content", {
        y: "-60px",
      });
      gsap.set(".arrow-hero-one", {
        scale: 0.8,
      });
      gsap.set(".arrow-hero-two", {
        xPercent: 80,
        yPercent: 48,
        scale: 0.4,
      });
      gsap.set(".arrow-hero-three", {
        xPercent: -54,
        yPercent: -15,
        scale: 0.15,
      });
      gsap.set("#hero-large-arrow", {
        left: "50%",
        xPercent: -50,
        top: "75%",
      });
      gsap.from("#hero-main-heading", {
        yPercent: 100,
      });
      gsap.from([".arrow-hero-one", ".arrow-hero-two", ".arrow-hero-three"], {
        y: 100,
        stagger: 0.1,
        duration: 1,
        delay: 2.2,
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
        top: "45%",
        left: "50%",
        xPercent: -50,
        yPercent: -50,
      });

      tl = gsap.timeline({
        scrollTrigger: {
          trigger: "#hero",
          start: "top top",
          end: "+=500%",
          pin: true,
          scrub: 1,
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
            xPercent: 53,
            yPercent: 3,
            scale: 0.1,
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
          "#hero_section",
          {
            height: 0,
            duration: 2,
          },
          "<"
        )
        .set(
          "#hero-ipad-white",
          {
            scale: 0.8,
            top: "35%",
          },
          ">"
        )
        .to(
          ["#hero-ipad", ".hero_slide_2"],
          {
            scale: 0.8,
          },
          ">"
        )
        .to(
          "#hero-ipad",
          {
            top: "35%",
          },
          "<"
        )
        .to(
          ".hero_slide_2",
          {
            top: "20%",
          },
          "<"
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
        .set(
          "#main-content",
          {
            display: "none",
          },
          "<"
        )
        .set(
          "#intro-content",
          {
            display: "block",
          },
          "<"
        )
        //////////
        .addLabel("button_0")
        .to(
          ".active_button_0",
          {
            background: "rgba(83, 132, 153, 0.5)",
            rotate: "-3deg",
          },
          "-=.5"
        )
        .to("#hero-large-arrow", {
          top: "73%",
        })
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
        // .fromTo(
        //   ".arrow_tabs",
        //   {
        //     top: "100%",
        //   },
        //   {
        //     top: "80%",
        //   }
        // )
        // .to(
        //   ".arrow_tabs",
        //   {
        //     top: "70%",
        //   },
        //   "-=.5"
        // )

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
        //////////
        .addLabel("button_1")
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
        .to("#hero-large-arrow", {
          top: "70%",
        })
        // .to(
        //   ".arrow_tabs",
        //   {
        //     top: "60%",
        //   },
        //   "-=.5"
        // )
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
        //////////
        .addLabel("button_2")
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
        .to("#hero-large-arrow", {
          top: "68%",
        })
        // .to(
        //   ".arrow_tabs",
        //   {
        //     top: "50%",
        //   },
        //   "-=.5"
        // )
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
        //////////
        .addLabel("button_3")
        .to(".active_button_2", {
          background: "rgba(126, 228, 156, 0.5)",
          rotate: 0,
        })
        .to(".active_button_3", {
          background: "rgba(83, 132, 153, 0.5)",
          rotate: "-3deg",
        })
        .to("#hero-large-arrow", {
          top: "66%",
        })
        // .to(
        //   ".arrow_tabs",
        //   {
        //     top: "40%",
        //   },
        //   "-=.5"
        // )
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
        //////////
        .addLabel("button_4")
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
        .to("#hero-large-arrow", {
          top: "64%",
        })
        // .fromTo(
        //   ".arrow_tabs",
        //   {
        //     top: "40%",
        //   },
        //   {
        //     top: "-40%",
        //   },
        //   "-=.5"
        // )
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
        )
        .to(["#para_text_01 button", "#para_text_01 p"], {
          color: "white",
        })
        .to("#root", {
          backgroundColor: "#29424D",
        });
    });
    // console.log(windowWidth, "windowWidth");
  }, []);

  useEffect(() => {
    let mm = gsap.matchMedia();
    mm.add("(max-width:575.98px)", () => {
      gsap.set("#main-content", {
        y: "-90px",
      });
      gsap.set(".arrow-hero-one", {
        scale: 0.5,
      });
      gsap.set(".arrow-hero-two", {
        xPercent: 29,
        yPercent: -31,
        scale: 0.15,
      });
      gsap.set(".arrow-hero-three", {
        xPercent: -24,
        yPercent: 36,
        scale: 0.1,
      });
      gsap.set("#hero-large-arrow", {
        left: "50%",
        xPercent: -50,
        top: "75%",
      });
      gsap.from("#hero-main-heading", {
        yPercent: 100,
      });
      gsap.from([".arrow-hero-one", ".arrow-hero-two", ".arrow-hero-three"], {
        y: 100,
        stagger: 0.1,
        duration: 1,
        delay: 2.2,
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
        top: "45%",
        left: "50%",
        xPercent: -50,
        yPercent: -44,
      });
      tl = gsap.timeline({
        scrollTrigger: {
          trigger: "#hero",
          start: "top top",
          end: "+=500%",
          pin: true,
          scrub: 1,
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
            xPercent: 53,
            yPercent: 3,
            scale: 0.1,
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
          "#hero_section",
          {
            height: 0,
            duration: 2,
          },
          "<"
        )
        .set(
          "#hero-ipad-white",
          {
            scale: 0.7,
            top: "25%",
          },
          ">"
        )
        .to(
          ["#hero-ipad", ".hero_slide_2"],
          {
            scale: 0.7,
          },
          ">"
        )
        .to(
          "#hero-ipad",
          {
            top: "25%",
          },
          "<"
        )
        .to(
          ".hero_slide_2",
          {
            top: "15%",
          },
          "<"
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
        .set(
          "#main-content",
          {
            display: "none",
          },
          "<"
        )
        .set(
          "#intro-content",
          {
            display: "block",
          },
          "<"
        )
        //////////
        .addLabel("button_0")
        .to(
          ".active_button_0",
          {
            background: "rgba(83, 132, 153, 0.5)",
            rotate: "-3deg",
          },
          "-=.5"
        )
        .to("#hero-large-arrow", {
          top: "73%",
        })
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
        // .fromTo(
        //   ".arrow_tabs",
        //   {
        //     top: "100%",
        //   },
        //   {
        //     top: "80%",
        //   }
        // )
        // .to(
        //   ".arrow_tabs",
        //   {
        //     top: "70%",
        //   },
        //   "-=.5"
        // )

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
        //////////
        .addLabel("button_1")
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
        .to("#hero-large-arrow", {
          top: "70%",
        })
        // .to(
        //   ".arrow_tabs",
        //   {
        //     top: "60%",
        //   },
        //   "-=.5"
        // )
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
        //////////
        .addLabel("button_2")
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
        .to("#hero-large-arrow", {
          top: "68%",
        })
        // .to(
        //   ".arrow_tabs",
        //   {
        //     top: "50%",
        //   },
        //   "-=.5"
        // )
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
        //////////
        .addLabel("button_3")
        .to(".active_button_2", {
          background: "rgba(126, 228, 156, 0.5)",
          rotate: 0,
        })
        .to(".active_button_3", {
          background: "rgba(83, 132, 153, 0.5)",
          rotate: "-3deg",
        })
        .to("#hero-large-arrow", {
          top: "66%",
        })
        // .to(
        //   ".arrow_tabs",
        //   {
        //     top: "40%",
        //   },
        //   "-=.5"
        // )
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
        //////////
        .addLabel("button_4")
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
        .to("#hero-large-arrow", {
          top: "64%",
        })
        // .fromTo(
        //   ".arrow_tabs",
        //   {
        //     top: "40%",
        //   },
        //   {
        //     top: "-40%",
        //   },
        //   "-=.5"
        // )
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
        )
        .to(["#para_text_01 button", "#para_text_01 p"], {
          color: "white",
        })
        .to("#root", {
          backgroundColor: "#29424D",
        });
    });
    // console.log(windowWidth, "windowWidth");
  }, []);

  const moveToIt = (sectionId, id) => {
    const section2 = document.querySelector(`#${sectionId}`);
    if (tl) {
      const pos2 = Math.ceil(
        section2.parentNode.scrollHeight * (tl.labels[id] / tl.duration()) +
          section2.parentNode.offsetTop
      );
      gsap.to(window, { duration: 0.3, scrollTo: pos2, ease: "linear" });
    }
  };

  return (
    <>
      <div className="position-relative z-10">
        <Header />
        <div id="hero" className="color_dark_gray z-10 overflow-hidden vh-100">
          <div className="container vh-100 z-0 position-relative hero_custom_container">
            <div
              id="main-content"
              className="align-items-center flex-column justify-content-center position-relative h-100"
            >
              <h1
                id="hero-main-heading"
                className="color_white_off font_6xl mb-0 position-relative letter_spacing_01 d-sm-flex align-items-center pt-xxl-5 mt-xxl-5"
              >
                Il futuro delle tue
                <a
                  className="text-decoration-none"
                  href="#hero-sub-heading-one"
                >
                  <button className="custom_tab_button_012 cursor-pointer mt-lg-1 d-flex align-items-center justify-content-center hero_heading_btn me-1 me-sm-2 mx-sm-3">
                    vendite
                  </button>
                </a>
                è digitale
              </h1>

              <div
                id="hero-sub-heading"
                className="w-100 d-flex flex-column justify-content-center hero_section_text align-items-center text-white"
              >
                <div
                  className="hero_slide_1 pt-xl-5 pt-xxl-0"
                  id="hero-sub-heading-one"
                >
                  <h2 className="d-flex align-items-center justify-content-center flex-wrap font_6xl mb-0 text-center">
                    Il futuro delle tue
                    <a
                      className="text-decoration-none mt-sm-2 mt-xxl-3"
                      href="#servizi"
                    >
                      <button className="custom_tab_button_012 cursor-pointer d-flex align-items-center justify-content-center hero_heading_btn hero_slide_3_btn me-2 mx-sm-2 mx-lg-3">
                        vendite
                      </button>
                    </a>
                    è digitale
                  </h2>
                  <h3 className="font_8xl fw-bold number_heading py-3 py-xl-4 text-center color_light_green">
                    200.000
                  </h3>
                  <p className="font_xl color_white_off text-center pb-xl-4 hero_slide_para_1">
                    Lead
                    <span className="fw-bold mx-2">Qualificati</span>
                    nel 2022
                  </p>
                  <p className="custom_lh_132 font_4xl color_white_off text-center pt-3 pt-md-5 pt-lg-2 pt-xl-0 pb-xl-4 hero_slide_para_2">
                    Daicar aiuta a far
                    <span className="fw-bold mx-1 mx-sm-2">crescere</span>
                    la tua azienda, <br className="d-none d-lg-block" /> creando
                    contatti e generando vendite
                  </p>
                </div>
                <div
                  className="hero_slide_2 pt-xl-5 pt-xxl-0"
                  id="hero-sub-heading-two"
                >
                  <h2 className="d-flex align-items-center justify-content-center flex-wrap font_6xl mb-0 text-center hero_text_2">
                    Il futuro delle tue
                    <a
                      className="text-decoration-none mt-sm-2 mt-xxl-3"
                      href="#servizi"
                    >
                      <button className="custom_tab_button_012 cursor-pointer d-flex align-items-center justify-content-center hero_heading_btn hero_slide_3_btn me-2 mx-sm-2 mx-lg-3">
                        vendite
                      </button>
                    </a>
                    è digitale
                  </h2>
                  <h3 className="font_8xl fw-bold number_heading py-3 py-xl-4 text-center color_light_green">
                    10.000
                  </h3>
                  <p className="font_xl color_white_off text-center pb-xl-4 hero_slide_para_1">
                    Campagne
                    <span className="fw-bold mx-2">Generate</span>
                    nel 2022
                  </p>
                  <p className="custom_lh_132 font_4xl color_white_off text-center pt-3 pt-md-5 pt-lg-2 pt-xl-0 pb-xl-4 hero_slide_para_2 campagne_para">
                    Campaign management
                    <span className="fw-bold mx-2">flessibile</span> e altamente
                    <br className="d-none d-lg-block" />
                    <span className="fw-bold mx-2">personalizzabile</span>
                    sulle criticità di ogni partner
                    <br />
                  </p>
                </div>
              </div>

              <div
                id="hero-outline-arrow"
                className="position-absolute z-10 pointer-events-none hero-outline-arrow"
              >
                <Icon4 />
              </div>

              <img
                className="arrow-hero-one position-absolute -z-10 pointer-events-none mt-lg-3 mt-xl-0"
                src={arrow}
                alt="arrow"
              />
              <img
                className="arrow-hero-two position-absolute -z-10 pointer-events-none"
                src={arrow}
                alt="arrow"
              />
              <img
                className="arrow-hero-three position-absolute -z-10  pointer-events-none"
                src={arrow}
                alt="arrow"
              />
            </div>

            <div id="intro-content" className="position-relative h-100 w-100">
              {/* overflow-hidden */}
              <div
                className="vh-100 d-flex flex-column justify-content-center tab_parent z_2"
                id="main-assets"
              >
                {/* ===== BREADCRUMBS STARTS ===== */}
                <div className="side_icon position-absolute tab_right_icon d-none d-lg-block me-4">
                  <div className="d-flex align-items-center tab-side-effect left_text_5">
                    <p className="me-4 color_light_green mb-0">
                      CRM lo facciamo
                    </p>
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
                      strumenti tech<span className="ff_math">-</span>driven lo
                      facciamo
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
                    <p className="me-4 color_light_green mb-0">
                      come lo facciamo
                    </p>
                    <TabRightIcon />
                  </div>
                </div>
                {/* ===== BREADCRUMBS ENDS ===== */}

                <div className="max_width_tabs position-relative">
                  <div className="text-center pb-sm-5 tabs_parent h-100 d-flex flex-column align-items-en">
                    <div className="intro_tab_frame my-4"></div>

                    <div className="d-flex">
                      <div className="max_width_tabs d-flex justify-content-center tabs_wrap pt-sm-5 pt-lg-0 tabs_content_parent">
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
                                          : "position-absolute start-0 w-100 pt-3 custom_height_tab_img tabs_img tabs_lottie pt-4 pt-sm-0"
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
                            <div
                              className="custom_content_size tab_text_position d-flex align-items-center pt-sm-3 pt-lg-0"
                              id="para_text_01"
                            >
                              <p className="font_2xl color_gray pt-lg-3 mb-1 mb-lg-3">
                                {obj.para}
                              </p>
                              {obj.buttonText &&
                                (console.log(obj.buttonId),
                                (
                                  <button
                                    className={`custom_tab_button_012 active_button_${index} tabs_btn ms-2 ms-sm-3 font_2xl color_gray`}
                                    dangerouslySetInnerHTML={{
                                      __html: obj.buttonText,
                                    }}
                                    onClick={() =>
                                      moveToIt("hero", obj.buttonId)
                                    }
                                  ></button>
                                ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <img
              id="hero-ipad"
              className="position-absolute -z-10 pointer-events-none origin-center ipad_img"
              src={ipad}
            />
            <img
              id="hero-ipad-white"
              className="position-absolute -z-10 pointer-events-none origin-center ipad_img opacity_0"
              src={ipadWhite}
            />
          </div>
          <div
            id="hero_section"
            className="bg_dark_gray position-absolute inset-0 -z-10"
          ></div>
        </div>
      </div>
    </>
  );
};

export default Hero;

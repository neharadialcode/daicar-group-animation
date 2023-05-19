import React, { useEffect } from "react";
import { Icon4 } from "./Icons";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import heroEtext from "../assets/images/svg/hero-e-text.svg";
import Header from "./Header";

import ipad from "../assets/ipad.png";
import ipadWhite from "../assets/ipad-white.png";
import ipad_mockup from "../assets/images/png/hero_slide_iPad_mockup_02.png";
import arrow from "../assets/arrow.svg";

import { TabRightIcon } from "./Icons";
import tabImg1 from "../assets/images/png/tab-frame.png";
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

    mm.add("(min-width: 1400px)", () => {
      // gsap.from("#hero-main-heading", {
      //   yPercent: 100,
      // });
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
        top: "75%",
      });
      gsap.set("#intro-content", {
        display: "none",
      });
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

        //////////////////////////
        .set(
          "#intro-content",
          {
            display: "block",
          },
          "<"
        )

        .to(
          ".active_button_0",
          {
            background: "rgba(83, 132, 153, 0.5)",
            rotate: "-3deg",
          },
          "-=.5"
        )
        .addLabel("button_0")
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
        )

        // =========================================================================================================
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
        //////////////////////////

        .to(
          "#root",
          {
            backgroundColor: "#29424D",
          },
          "+=2"
        )
        .to("#para_text_01", {
          opacity: 0,
        });
    });

    mm.add("(min-width: 992px) and (max-width:1399.98px)", () => {
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
        top: "75%",
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

        //////////////////////////
        .set(
          "#intro-content",
          {
            display: "block",
          },
          "<"
        )

        .to(
          ".active_button_0",
          {
            background: "rgba(83, 132, 153, 0.5)",
            rotate: "-3deg",
          },
          "-=.5"
        )
        .addLabel("button_0")
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
        )
        //////////////////////////

        .to(
          "#root",
          {
            backgroundColor: "#29424D",
          },
          "+=2"
        )
        .to("#para_text_01", {
          opacity: 0,
        });
    });

    mm.add("(min-width: 576px) and (max-width:991.98px)", () => {
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
        },
      });

      tl.to(".arrow-hero-one", {
        yPercent: -200,
        autoAlpha: 0,
      })
        .to(
          ".arrow-hero-two",
          {
            yPercent: -200,
            autoAlpha: 0,
          },
          "<"
        )
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

        //////////////////////////
        .set(
          "#intro-content",
          {
            display: "block",
          },
          "<"
        )

        .to(
          ".active_button_0",
          {
            background: "rgba(83, 132, 153, 0.5)",
            rotate: "-3deg",
          },
          "-=.5"
        )
        .addLabel("button_0")
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
        )
        //////////////////////////

        .to(
          "#root",
          {
            backgroundColor: "#29424D",
          },
          "+=2"
        )
        .to("#para_text_01", {
          opacity: 0,
        });
    });

    mm.add("(max-width:575.98px)", () => {
      gsap.set("#main-content", {
        y: "-60px",
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
            xPercent: 28,
            yPercent: -11,
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

        //////////////////////////
        .set(
          "#intro-content",
          {
            display: "block",
          },
          "<"
        )

        .to(
          ".active_button_0",
          {
            background: "rgba(83, 132, 153, 0.5)",
            rotate: "-3deg",
          },
          "-=.5"
        )
        .addLabel("button_0")
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

        //////////
        .addLabel("button_3")
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
        )
        //////////////////////////

        .to(
          "#root",
          {
            backgroundColor: "#29424D",
          },
          "+=2"
        )
        .to("#para_text_01", {
          opacity: 0,
        });
    });
  }, []);

  const moveToIt = (sectionId, id) => {
    const section2 = document.querySelector(`#${sectionId}`);
    const pos2 = Math.ceil(
      section2.parentNode.scrollHeight * (tl.labels[id] / tl.duration()) +
        section2.parentNode.offsetTop
    );
    gsap.to(window, { duration: 0.3, scrollTo: pos2, ease: "linear" });
  };

  return (
    <>
      <div>
        <Header />
        <div id="hero" className="color_dark_gray z-10 overflow-hidden">
          <div className="container vh-100 z-0 position-relative">
            <div
              id="main-content"
              className="align-items-center flex-column justify-content-center position-relative h-100"
            >
              <h1
                id="hero-main-heading"
                className="ff_mundial_regular color_white_off font_6xl mb-0 position-relative letter_spacing_01"
              >
                Il futuro delle tue
                <span className="d-inline-block hero_heading_btn me-2 mx-sm-3">
                  vendite
                </span>
                <span className="me-2">
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
                <div
                  className="hero_slide_1 pt-lg-5 pt-xxl-0"
                  id="hero-sub-heading-one"
                >
                  <h2 className="ff_mundial_regular font_6xl mb-0 text-center">
                    Il futuro delle tue&nbsp;
                    <span className="d-inline-block hero_heading_btn hero_slide_3_btn me-2 mx-sm-2 mx-lg-3">
                      vendite
                    </span>
                    <span className="me-2">
                      <img
                        className="hero_e_text"
                        src={heroEtext}
                        alt="hero-e-text"
                      />
                    </span>
                    digitale
                  </h2>
                  <h3 className="font_8xl fw-bold number_heading pt-4 pb-4 text-center color_light_green">
                    200.000
                  </h3>
                  <p className="font_xl color_white_off ff_mundial_regular text-center pb-xl-4 hero_slide_para_1">
                    Lead
                    <span className="ff_mundial_bold mx-2">Qualificati</span>
                    nel 2022
                  </p>
                  <p className="font_4xl color_white_off ff_mundial_regular text-center pt-5 pt-lg-2 pt-xl-0 pb-xl-4 hero_slide_para_2">
                    Daicar aiuta a far
                    <span className="ff_mundial_bold mx-1 mx-sm-2">
                      crescere
                    </span>
                    la tua azienda, <br className="d-none d-lg-block" /> creando
                    contatti e generando vendite
                  </p>
                </div>
                <div
                  className="hero_slide_2 pt-lg-5 pt-xxl-0"
                  id="hero-sub-heading-two"
                >
                  <h2 className="ff_mundial_regular font_6xl mb-0 text-center">
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
                  <p className="font_xl color_white_off ff_mundial_regular text-center pb-xl-4 hero_slide_para_1">
                    Campagne
                    <span className="ff_mundial_bold mx-2">Generate</span>
                    nel 2022
                  </p>
                  <p className="font_4xl color_white_off ff_mundial_regular text-center pt-5 pt-lg-2 pt-xl-0 pb-xl-4 hero_slide_para_2 campagne_para">
                    Campaign management
                    <span className="ff_mundial_bold mx-2">flessibile</span> e
                    altamente
                    <br className="d-none d-lg-block" />
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
                className="position-absolute z-10 pointer-events-none hero-outline-arrow"
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

            <div id="intro-content" className="position-relative h-100 w-100">
              <div
                className="vh-100 d-flex flex-column justify-content-center tab_parent overflow-hidden z_2"
                id="main-assets"
              >
                <div className="side_icon position-absolute tab_right_icon d-none d-xxl-block">
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

                <div className="max_width_tabs position-relative">
                  {/* <div className="arrow_tabs position-absolute d-none d-md-block">
                    <Icon5 />
                  </div> */}
                  <img
                    className="i_pad_img_2 pt-3 w-100 custom_height_tab_img_ipad tab-img-custom-size"
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
                            className="d-flex align-items-center pt-sm-3 pt-lg-0"
                            id="para_text_01"
                          >
                            <p className="font_2xl color_gray pt-3">
                              {obj.para}
                            </p>
                            {obj.buttonText &&
                              (console.log(obj.buttonId, "hello"),
                              (
                                <button
                                  className={`active_button_${index} tabs_btn ms-2 ms-sm-3 font_2xl color_gray`}
                                  dangerouslySetInnerHTML={{
                                    __html: obj.buttonText,
                                  }}
                                  onClick={() => moveToIt("hero", obj.buttonId)}
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

            <img
              id="hero-ipad"
              className="position-absolute -z-10 pointer-events-none origin-center ipad_img d-lg-none"
              src={ipad_mockup}
            />
            <img
              id="hero-ipad"
              className="position-absolute -z-10 pointer-events-none origin-center ipad_img d-none d-lg-block"
              src={ipad}
            />
            <img
              id="hero-ipad-white"
              className="position-absolute -z-10 pointer-events-none origin-center ipad_img opacity-0 d-none d-lg-block"
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

import React, { useEffect } from "react";
import { gsap } from "gsap";
import businessOne from "../assets/images/png/business-1.png";
import businessTwo from "../assets/images/png/business-2.png";
import businessThree from "../assets/images/png/business-3.png";
import businessFour from "../assets/images/png/business-4.png";
import businessLeftTextIcon from "../assets/images/svg/small-arrow-icon.svg";
import businessIconSmall from "../assets/images/png/business-small-arrow.png";
import businessTabImg from "../assets/images/png/arrow-tab-img.png";
import outlineArrow from "../assets/images/svg/outlineArrow.svg";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Business = () => {
  let tl;
  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);
  useEffect(() => {
    let mm = gsap.matchMedia();
    gsap.set(".business_para_1", {
      height: 0,
    });
    gsap.set(".business_para_2", {
      height: 0,
    });
    gsap.set(".business_para_3", {
      height: 0,
    });
    gsap.set(".business_para_4", {
      height: 0,
    });
    gsap.set("#solution-outlineArrow", {
      left: "50%",
      top: "50%",
      yPercent: -50,
      xPercent: -50,
    });
    mm.add("(min-width:1600px)", () => {
      const tl2 = gsap.timeline({
        scrollTrigger: {
          trigger: ".business_parent",
          start: "top bottom",
          scrub: true,
          fastScrollEnd: true,
        },
      });
      tl2
        .to("#hero-large-arrow", {
          scale: 1.8,
          top: "20%",
          immediateRender: false,
        })
        .to(
          "#solution-outlineArrow",
          {
            yPercent: -120,
            immediateRender: false,
          },
          "<"
        );
      tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".business_parent",
          start: "top top",
          end: "+=300%",
          scrub: 3,
          pin: true,
          fastScrollEnd: true,
        },
      });
      tl.fromTo(
        ".business_text",
        {
          autoAlpha: 0,
        },
        {
          autoAlpha: 1,
        }
      )
        .from(".main_text", {
          autoAlpha: 0,
          scale: 0.5,
        })
        .fromTo(
          ".business_left_icon",
          {
            bottom: "0%",
          },
          {
            bottom: "30%",
          }
        )
        .to(
          [
            ".business_heading_1",
            ".business_heading_2",
            ".business_heading_3",
            ".business_heading_4",
          ],
          {
            autoAlpha: 0.5,
          }
        )

        .to(".small_icon", {
          top: "-5px",
        })
        .from(".business_heading_1", {
          autoAlpha: 0.5,
        })
        .to(".business_para_1", {
          autoAlpha: 1,
          height: "auto",
          marginTop: "16px",
          marginBottom: "16px",
        })
        .addLabel("business_accordion_1")
        .to(
          ".business_para_1",
          {
            autoAlpha: 0,
            delay: 1,
            duration: 7,
            height: "0px",
            margin: "0",
          },
          "+=50"
        )
        .to(".business_heading_1", {
          autoAlpha: 0.5,
        })
        .to(
          ".business_img_1",
          {
            autoAlpha: 0,
          },
          "<"
        )
        .to(
          ".business_img_2",
          {
            autoAlpha: 1,
          },
          ">"
        )
        .to(".small_icon", {
          top: "60px",
        })

        ///////////
        .from(".business_heading_2", {
          autoAlpha: 0.5,
        })
        .fromTo(
          ".business_left_icon",
          {
            bottom: "30%",
          },
          {
            bottom: "40%",
          }
        )
        .to(".business_para_2", {
          autoAlpha: 1,
          height: "auto",
          marginTop: "16px",
          marginBottom: "16px",
        })
        .addLabel("business_accordion_2")
        .to(
          ".business_para_2",
          {
            autoAlpha: 0,
            delay: 1,
            duration: 7,
            height: "0px",
            margin: "0",
          },
          "+=50"
        )
        .to(".business_heading_2", {
          autoAlpha: 0.5,
        })
        .to(
          ".business_img_2",
          {
            autoAlpha: 0,
          },
          "<"
        )
        .to(
          ".business_img_3",
          {
            autoAlpha: 1,
          },
          ">"
        )
        .to(".small_icon", {
          top: "130px",
        })

        //////////
        .from(".business_heading_3", {
          autoAlpha: 0.5,
        })
        .fromTo(
          ".business_left_icon",
          {
            bottom: "40%",
          },
          {
            bottom: "50%",
          }
        )
        .to(".business_para_3", {
          autoAlpha: 1,
          height: "auto",
          marginTop: "16px",
          marginBottom: "16px",
        })
        .addLabel("business_accordion_3")
        .to(
          ".business_para_3",
          {
            autoAlpha: 0,
            delay: 1,
            duration: 7,
            height: "0px",
            margin: "0",
          },
          "+=50"
        )
        .to(".business_heading_3", {
          autoAlpha: 0.5,
        })
        .to(
          ".business_img_3",
          {
            autoAlpha: 0,
          },
          "<"
        )
        .to(
          ".business_img_4",
          {
            autoAlpha: 1,
          },
          ">"
        )
        .to(".small_icon", {
          top: "128px",
        })

        //////////
        .to(
          ".business_img_4",
          {
            autoAlpha: 1,
          },
          ">"
        )
        .to(".small_icon", {
          top: "198px",
        })
        .from(".business_heading_4", {
          autoAlpha: 0.5,
        })
        .fromTo(
          ".business_left_icon",
          {
            bottom: "50%",
          },
          {
            bottom: "60%",
          }
        )
        .to(".business_para_4", {
          autoAlpha: 1,
          height: "auto",
          marginTop: "16px",
          marginBottom: "16px",
        })
        .addLabel("business_accordion_4")
        .to(
          ".business_para_4",
          {
            autoAlpha: 0,
            delay: 1,
            duration: 7,
            height: "0px",
            margin: "0",
          },
          "+=50"
        )
        .to(".business_heading_4", {
          autoAlpha: 0.5,
        });
    });

    mm.add("(min-width:1300px) and (max-width:1599.98px)", () => {
      const tl2 = gsap.timeline({
        scrollTrigger: {
          trigger: ".business_parent",
          start: "top bottom",
          scrub: true,
          fastScrollEnd: true,
        },
      });

      tl2
        .to("#hero-large-arrow", {
          scale: 1.8,
          top: "20%",
          immediateRender: false,
        })
        .to(
          "#solution-outlineArrow",
          {
            yPercent: -150,
            immediateRender: false,
          },
          "<"
        );
      tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".business_parent",
          start: "top top",
          end: "+=400%",
          scrub: 1,
          pin: true,
          fastScrollEnd: true,
        },
      });
      tl.fromTo(
        ".business_text",
        {
          autoAlpha: 0,
        },
        {
          autoAlpha: 1,
        }
      )
        .from(".main_text", {
          autoAlpha: 0,
          scale: 0.5,
        })
        .fromTo(
          ".business_left_icon",
          {
            bottom: "0%",
          },
          {
            bottom: "30%",
          }
        )
        .to(
          [
            ".business_heading_1",
            ".business_heading_2",
            ".business_heading_3",
            ".business_heading_4",
          ],
          {
            autoAlpha: 0.5,
          }
        )
        .to(".small_icon", {
          top: "13px",
        })

        .from(".business_heading_1", {
          autoAlpha: 0.5,
        })
        .to(
          ".business_para_1",
          {
            autoAlpha: 1,
            height: "auto",
            marginTop: "16px",
            marginBottom: "16px",
          },
          ">"
        )
        .addLabel("business_accordion_1")
        .to(
          ".business_para_1",
          {
            autoAlpha: 0,
            height: "0",
            margin: "0",
          },
          "+=50"
        )
        .to(".business_heading_1", {
          autoAlpha: 0.5,
        })
        .to(
          ".business_img_1",
          {
            autoAlpha: 0,
          },
          "<"
        )
        .to(
          ".business_img_2",
          {
            autoAlpha: 1,
          },
          ">"
        )
        .to(".small_icon", {
          top: "73px",
        })
        //////////
        .from(".business_heading_2", {
          autoAlpha: 0.5,
        })
        .fromTo(
          ".business_left_icon",
          {
            bottom: "30%",
          },
          {
            bottom: "40%",
          }
        )
        .to(".business_para_2", {
          autoAlpha: 1,
          height: "auto",
          marginTop: "16px",
          marginBottom: "16px",
        })
        .addLabel("business_accordion_2")
        .to(
          ".business_para_2",
          {
            autoAlpha: 0,
            delay: 1,
            duration: 7,
            height: "0px",
            margin: "0",
          },
          "+=50"
        )
        .to(".business_heading_2", {
          autoAlpha: 0.5,
        })

        .to(
          ".business_img_2",
          {
            autoAlpha: 0,
          },
          "<"
        )
        .to(
          ".business_img_3",
          {
            autoAlpha: 1,
          },
          ">"
        )
        .to(".small_icon", {
          top: "138px",
        })
        //////////
        .from(".business_heading_3", {
          autoAlpha: 0.5,
        })
        .fromTo(
          ".business_left_icon",
          {
            bottom: "40%",
          },
          {
            bottom: "50%",
          }
        )
        .to(".business_para_3", {
          autoAlpha: 1,
          height: "auto",
          marginTop: "16px",
          marginBottom: "16px",
        })
        .addLabel("business_accordion_3")
        .to(
          ".business_para_3",
          {
            autoAlpha: 0,
            delay: 1,
            duration: 7,
            height: "0px",
            margin: "0",
          },
          "+=50"
        )
        .to(".business_heading_3", {
          autoAlpha: 0.5,
        })
        .to(
          ".business_img_3",
          {
            autoAlpha: 0,
          },
          "<"
        )
        .to(
          ".business_img_4",
          {
            autoAlpha: 1,
          },
          ">"
        )
        .to(".small_icon", {
          top: "200px",
        })
        //////////
        .addLabel("business_accordion_4")
        .from(".business_heading_4", {
          autoAlpha: 0.5,
        })
        .fromTo(
          ".business_left_icon",
          {
            bottom: "50%",
          },
          {
            bottom: "60%",
          }
        )
        .to(".business_para_4", {
          autoAlpha: 1,
          height: "auto",
          marginTop: "16px",
          marginBottom: "16px",
        })
        .addLabel("business_accordion_4")
        .to(
          ".business_para_4",
          {
            autoAlpha: 0,
            delay: 1,
            duration: 7,
            height: "0px",
            margin: "0",
          },
          "+=50"
        )
        .to(".business_heading_4", {
          autoAlpha: 0.5,
        })
        .to(".business_heading", {
          autoAlpha: 0,
        });
    });

    mm.add("(min-width:1100px) and (max-width:1299.98px)", () => {
      const tl2 = gsap.timeline({
        scrollTrigger: {
          trigger: ".business_parent",
          start: "top bottom",
          scrub: true,
          fastScrollEnd: true,
        },
      });

      tl2
        .to("#hero-large-arrow", {
          scale: 1.8,
          top: "20%",
          immediateRender: false,
        })
        .to(
          "#solution-outlineArrow",
          {
            yPercent: -150,
            immediateRender: false,
          },
          "<"
        );
      tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".business_parent",
          start: "top top",
          end: "+=400%",
          scrub: 1,
          pin: true,
          fastScrollEnd: true,
        },
      });
      tl.fromTo(
        ".business_text",
        {
          autoAlpha: 0,
        },
        {
          autoAlpha: 1,
        }
      )
        .from(".main_text", {
          autoAlpha: 0,
          scale: 0.5,
        })
        .fromTo(
          ".business_left_icon",
          {
            bottom: "0%",
          },
          {
            bottom: "30%",
          }
        )
        .to(
          [
            ".business_heading_1",
            ".business_heading_2",
            ".business_heading_3",
            ".business_heading_4",
          ],
          {
            autoAlpha: 0.5,
          }
        )
        .to(".small_icon", {
          top: "0px",
        })

        .from(".business_heading_1", {
          autoAlpha: 0.5,
        })
        .to(
          ".business_para_1",
          {
            autoAlpha: 1,
            height: "auto",
            marginTop: "16px",
            marginBottom: "16px",
          },
          ">"
        )
        .addLabel("business_accordion_1")
        .to(
          ".business_para_1",
          {
            autoAlpha: 0,
            height: "0",
            margin: "0",
          },
          "+=50"
        )
        .to(".business_heading_1", {
          autoAlpha: 0.5,
        })
        .to(
          ".business_img_1",
          {
            autoAlpha: 0,
          },
          "<"
        )
        .to(
          ".business_img_2",
          {
            autoAlpha: 1,
          },
          ">"
        )
        .to(".small_icon", {
          top: "50px",
        })
        //////////
        .from(".business_heading_2", {
          autoAlpha: 0.5,
        })
        .fromTo(
          ".business_left_icon",
          {
            bottom: "30%",
          },
          {
            bottom: "40%",
          }
        )
        .to(".business_para_2", {
          autoAlpha: 1,
          height: "auto",
          marginTop: "16px",
          marginBottom: "16px",
        })
        .addLabel("business_accordion_2")
        .to(
          ".business_para_2",
          {
            autoAlpha: 0,
            delay: 1,
            duration: 7,
            height: "0px",
            margin: "0",
          },
          "+=50"
        )
        .to(".business_heading_2", {
          autoAlpha: 0.5,
        })

        .to(
          ".business_img_2",
          {
            autoAlpha: 0,
          },
          "<"
        )
        .to(
          ".business_img_3",
          {
            autoAlpha: 1,
          },
          ">"
        )
        .to(".small_icon", {
          top: "100px",
        })
        //////////
        .from(".business_heading_3", {
          autoAlpha: 0.5,
        })
        .fromTo(
          ".business_left_icon",
          {
            bottom: "40%",
          },
          {
            bottom: "50%",
          }
        )
        .to(".business_para_3", {
          autoAlpha: 1,
          height: "auto",
          marginTop: "16px",
          marginBottom: "16px",
        })
        .addLabel("business_accordion_3")
        .to(
          ".business_para_3",
          {
            autoAlpha: 0,
            delay: 1,
            duration: 7,
            height: "0px",
            margin: "0",
          },
          "+=50"
        )
        .to(".business_heading_3", {
          autoAlpha: 0.5,
        })
        .to(
          ".business_img_3",
          {
            autoAlpha: 0,
          },
          "<"
        )
        .to(
          ".business_img_4",
          {
            autoAlpha: 1,
          },
          ">"
        )
        .to(".small_icon", {
          top: "150px",
        })
        //////////
        .addLabel("business_accordion_4")
        .from(".business_heading_4", {
          autoAlpha: 0.5,
        })
        .fromTo(
          ".business_left_icon",
          {
            bottom: "50%",
          },
          {
            bottom: "60%",
          }
        )
        .to(".business_para_4", {
          autoAlpha: 1,
          height: "auto",
          marginTop: "16px",
          marginBottom: "16px",
        })
        .addLabel("business_accordion_4")
        .to(
          ".business_para_4",
          {
            autoAlpha: 0,
            delay: 1,
            duration: 7,
            height: "0px",
            margin: "0",
          },
          "+=50"
        )
        .to(".business_heading_4", {
          autoAlpha: 0.5,
        })
        .to(".business_heading", {
          autoAlpha: 0,
        });
    });

    mm.add("(min-width:992px) and (max-width:1099.98px)", () => {
      const tl2 = gsap.timeline({
        scrollTrigger: {
          trigger: ".business_parent",
          start: "top bottom",
          scrub: true,
          fastScrollEnd: true,
        },
      });

      tl2
        .to("#hero-large-arrow", {
          scale: 1.8,
          top: "20%",
          immediateRender: false,
        })
        .to(
          "#solution-outlineArrow",
          {
            yPercent: -150,
            immediateRender: false,
          },
          "<"
        );
      tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".business_parent",
          start: "top top",
          end: "+=400%",
          scrub: 1,
          pin: true,
          fastScrollEnd: true,
        },
      });
      tl.fromTo(
        ".business_text",
        {
          autoAlpha: 0,
        },
        {
          autoAlpha: 1,
        }
      )
        .from(".main_text", {
          autoAlpha: 0,
          scale: 0.5,
        })
        .fromTo(
          ".business_left_icon",
          {
            bottom: "0%",
          },
          {
            bottom: "30%",
          }
        )
        .to(
          [
            ".business_heading_1",
            ".business_heading_2",
            ".business_heading_3",
            ".business_heading_4",
          ],
          {
            autoAlpha: 0.5,
          }
        )
        .to(".small_icon", {
          top: "0px",
        })

        .from(".business_heading_1", {
          autoAlpha: 0.5,
        })
        .to(
          ".business_para_1",
          {
            autoAlpha: 1,
            height: "auto",
            marginTop: "16px",
            marginBottom: "16px",
          },
          ">"
        )
        .addLabel("business_accordion_1")
        .to(
          ".business_para_1",
          {
            autoAlpha: 0,
            height: "0",
            margin: "0",
          },
          "+=50"
        )
        .to(".business_heading_1", {
          autoAlpha: 0.5,
        })
        .to(
          ".business_img_1",
          {
            autoAlpha: 0,
          },
          "<"
        )
        .to(
          ".business_img_2",
          {
            autoAlpha: 1,
          },
          ">"
        )
        .to(".small_icon", {
          top: "45px",
        })
        //////////
        .from(".business_heading_2", {
          autoAlpha: 0.5,
        })
        .fromTo(
          ".business_left_icon",
          {
            bottom: "30%",
          },
          {
            bottom: "40%",
          }
        )
        .to(".business_para_2", {
          autoAlpha: 1,
          height: "auto",
          marginTop: "16px",
          marginBottom: "16px",
        })
        .addLabel("business_accordion_2")
        .to(
          ".business_para_2",
          {
            autoAlpha: 0,
            delay: 1,
            duration: 7,
            height: "0px",
            margin: "0",
          },
          "+=50"
        )
        .to(".business_heading_2", {
          autoAlpha: 0.5,
        })

        .to(
          ".business_img_2",
          {
            autoAlpha: 0,
          },
          "<"
        )
        .to(
          ".business_img_3",
          {
            autoAlpha: 1,
          },
          ">"
        )
        .to(".small_icon", {
          top: "92px",
        })
        //////////
        .from(".business_heading_3", {
          autoAlpha: 0.5,
        })
        .fromTo(
          ".business_left_icon",
          {
            bottom: "40%",
          },
          {
            bottom: "50%",
          }
        )
        .to(".business_para_3", {
          autoAlpha: 1,
          height: "auto",
          marginTop: "16px",
          marginBottom: "16px",
        })
        .addLabel("business_accordion_3")
        .to(
          ".business_para_3",
          {
            autoAlpha: 0,
            delay: 1,
            duration: 7,
            height: "0px",
            margin: "0",
          },
          "+=50"
        )
        .to(".business_heading_3", {
          autoAlpha: 0.5,
        })
        .to(
          ".business_img_3",
          {
            autoAlpha: 0,
          },
          "<"
        )
        .to(
          ".business_img_4",
          {
            autoAlpha: 1,
          },
          ">"
        )
        .to(".small_icon", {
          top: "140px",
        })
        //////////
        .addLabel("business_accordion_4")
        .from(".business_heading_4", {
          autoAlpha: 0.5,
        })
        .fromTo(
          ".business_left_icon",
          {
            bottom: "50%",
          },
          {
            bottom: "60%",
          }
        )
        .to(".business_para_4", {
          autoAlpha: 1,
          height: "auto",
          marginTop: "16px",
          marginBottom: "16px",
        })
        .addLabel("business_accordion_4")
        .to(
          ".business_para_4",
          {
            autoAlpha: 0,
            delay: 1,
            duration: 7,
            height: "0px",
            margin: "0",
          },
          "+=50"
        )
        .to(".business_heading_4", {
          autoAlpha: 0.5,
        })
        .to(".business_heading", {
          autoAlpha: 0,
        });
    });

    mm.add("(min-width:576px) and (max-width:991.98px)", () => {
      tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".business_parent",
          start: "top 80%",
          end: "bottom center",
          scrub: true,
          fastScrollEnd: true,
        },
      });
      tl.from(".business_tab_1", {
        xPercent: "-150",
        stagger: 0.3,
      })
        .from(".business_tab_2", {
          xPercent: "150",
          stagger: 0.3,
        })
        .from(".business_tab_3", {
          xPercent: "-150",
          stagger: 0.3,
        })
        .from(".business_tab_4", {
          xPercent: "150",
          stagger: 0.3,
        });
    });

    mm.add("(max-width:575.98px)", () => {
      tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".business_parent",
          start: "top 30%",
          end: "bottom 70%",
          scrub: true,
          fastScrollEnd: true,
        },
      });
      tl.from(".business_small_img_1", {
        autoAlpha: 0,
      })
        .from(".business_small_heading_1", {
          yPercent: "50",
          autoAlpha: 0,
        })
        .from(".business_small_para_1", {
          yPercent: "100",
          autoAlpha: 0,
        })
        .from(".business_small_img_2", {
          autoAlpha: 0,
        })
        .from(".business_small_heading_2", {
          yPercent: "50",
          autoAlpha: 0,
        })
        .from(".business_small_para_2", {
          yPercent: "100",
          autoAlpha: 0,
        })
        .from(".business_small_img_3", {
          autoAlpha: 0,
        })
        .from(".business_small_heading_3", {
          yPercent: "50",
          autoAlpha: 0,
        })
        .from(".business_small_para_3", {
          yPercent: "100",
          autoAlpha: 0,
        })
        .from(".business_small_img_4", {
          autoAlpha: 0,
        })
        .from(".business_small_heading_4", {
          yPercent: "50",
          autoAlpha: 0,
        })
        .from(".business_small_para_4", {
          yPercent: "100",
          autoAlpha: 0,
        });
    });
  }, []);

  const moveTo1 = () => {
    if (window.innerWidth > 2000) {
      gsap.to(window, { duration: 0.3, scrollTo: 9000, ease: "linear" });
    }
    if (window.innerWidth > 1600 && window.innerHeight <= 1090) {
      gsap.to(window, { duration: 0.3, scrollTo: 7000, ease: "linear" });
    }
    if (window.innerWidth > 1600 && window.innerHeight <= 1025) {
      gsap.to(window, { duration: 0.3, scrollTo: 6000, ease: "linear" });
    }
    if (window.innerWidth < 1599) {
      gsap.to(window, { duration: 0.3, scrollTo: 5000, ease: "linear" });
    }
    if (window.innerWidth < 1100) {
      gsap.to(window, { duration: 0.3, scrollTo: 4000, ease: "linear" });
    }
  };
  const moveTo2 = () => {
    if (window.innerWidth > 2000) {
      gsap.to(window, { duration: 0.3, scrollTo: 10700, ease: "linear" });
    }
    if (window.innerWidth > 1600 && window.innerHeight <= 1090) {
      gsap.to(window, { duration: 0.3, scrollTo: 8000, ease: "linear" });
    }
    if (window.innerWidth > 1600 && window.innerHeight <= 1025) {
      gsap.to(window, { duration: 0.3, scrollTo: 7000, ease: "linear" });
    }
    if (window.innerWidth < 1599) {
      gsap.to(window, { duration: 0.3, scrollTo: 5700, ease: "linear" });
    }
    if (window.innerWidth < 1100) {
      gsap.to(window, { duration: 0.3, scrollTo: 4600, ease: "linear" });
    }
  };
  const moveTo3 = () => {
    if (window.innerWidth > 2000) {
      gsap.to(window, { duration: 0.3, scrollTo: 11700, ease: "linear" });
    }
    if (window.innerWidth > 1600 && window.innerHeight <= 1090) {
      gsap.to(window, { duration: 0.3, scrollTo: 8800, ease: "linear" });
    }
    if (window.innerWidth > 1600 && window.innerHeight <= 1025) {
      gsap.to(window, { duration: 0.3, scrollTo: 8000, ease: "linear" });
    }
    if (window.innerWidth < 1599) {
      gsap.to(window, { duration: 0.3, scrollTo: 6700, ease: "linear" });
    }
    if (window.innerWidth < 1300) {
      gsap.to(window, { duration: 0.3, scrollTo: 7500, ease: "linear" });
    }
    if (window.innerWidth < 1100) {
      gsap.to(window, { duration: 0.3, scrollTo: 5000, ease: "linear" });
    }
  };
  const moveTo4 = () => {
    if (window.innerWidth > 2000) {
      gsap.to(window, { duration: 0.3, scrollTo: 12800, ease: "linear" });
    }
    if (window.innerWidth > 1600 && window.innerHeight <= 1090) {
      gsap.to(window, { duration: 0.3, scrollTo: 9500, ease: "linear" });
    }
    if (window.innerWidth > 1600 && window.innerHeight <= 1025) {
      gsap.to(window, { duration: 0.3, scrollTo: 9000, ease: "linear" });
    }
    if (window.innerWidth < 1599) {
      gsap.to(window, { duration: 0.3, scrollTo: 7500, ease: "linear" });
    }
    if (window.innerWidth < 1100) {
      gsap.to(window, { duration: 0.3, scrollTo: 6000, ease: "linear" });
    }
  };
  return (
    <>
      <div
        className="business_parent z_1 pb-5 pb-sm-0 pt-5 pt-sm-0 min-vh-100"
        id="servizi"
      >
        <div className="d-flex flex-column justify-content-center">
          <div className="position-absolute d-none d-sm-block d-lg-none w-100">
            <img
              className="w-100 small_tab_arrow_img"
              src={businessTabImg}
              alt="arrow-tab-img"
            />
          </div>
          <div className="text-center z_1 business_heading">
            <p className="font_6xl color_white_off pt-lg-5 pt-lg-0 px-md-5 px-lg-0 mb-0 custom_business_heading d-flex align-items-center justify-content-center flex-wrap business_text">
              Progettiamo soluzioni
              <a href="#about_section">
                <button className="custom_tab_button_012 cursor-pointer align-middle d-flex align-items-center justify-content-center business_btn hero_heading_btn color_dark_gray bg_light_green my-2 mb-sm-0 mt-sm-2 mx-3">
                  personalizzate
                </button>
              </a>
              per il tuo business
            </p>
          </div>
          <div className="position-absolute end-0 business_left_icon text_left_rotate d-none d-lg-flex align-items-center pt-4 pe-xl-3">
            <p className="color_white_off font_sm mb-0">Esperienza su misura</p>
            <div className="ps-4">
              <img src={businessLeftTextIcon} alt="business-small-arrow" />
            </div>
          </div>
          <div className="container pb-lg-5 min-vh-100 d-lg-flex flex-column justify-content-center z-10">
            <div className="main_text d-none d-lg-block pb-5">
              <div className="row justify-content-evenly divide_space_text">
                <div className="col-4 col-xxl-5 position-relative custom_business_img_height d-flex align-items-center ">
                  <img
                    className="w-100 business_img_1 position-absolute"
                    src={businessOne}
                    alt="business-big-arrow"
                  />
                  <img
                    className="w-100 business_img_2 opacity_0 position-absolute"
                    src={businessTwo}
                    alt="business-big-arrow2"
                  />
                  <img
                    className="w-100 business_img_3 opacity_0 position-absolute"
                    src={businessThree}
                    alt="business-big-arrow3"
                  />
                  <img
                    className="w-100 business_img_4 opacity_0 position-absolute"
                    src={businessFour}
                    alt="business-big-arrow4"
                  />
                </div>
                <div className="col-6 col-xl-5 position-relative business-content">
                  <img
                    className="small_icon d-none d-lg-block"
                    src={businessIconSmall}
                    alt="small-arrow-icon"
                  />
                  <div className="ps-5 ps-xxl-0">
                    <h3
                      className="font_5xl color_dark_gray business_heading_1 cursor-pointer"
                      onClick={() => moveTo1()}
                    >
                      GENERAZIONE TRAFFICO
                    </h3>
                    <p className="overflow-hidden fw_light ff_mundial_light font_2xl business_para_1 color_dark_gray pe-xl-5">
                      Strategie di marketing costruite ad hoc per generare
                      traffico qualificato da veicolare sui social media, Google
                      e native advertising
                    </p>
                  </div>
                  <div className="ps-5 ps-xxl-0 mt-3 mt-xxl-4">
                    <h3
                      className="font_5xl color_dark_gray business_heading_2 cursor-pointer"
                      onClick={() => moveTo2()}
                    >
                      LANDING CONVERSAZIONALE
                    </h3>
                    <p className="overflow-hidden fw_light ff_mundial_light font_2xl business_para_2 color_dark_gray pe-xl-5">
                      Landingpage su misura per i nostri partner e conformi
                      al&nbsp;
                      <span className="fw-bold">regolamento GDPR</span>
                      &nbsp; per l’acquisizione di contatti qualificati.
                    </p>
                  </div>
                  <div className="ps-5 ps-xxl-0 mt-3 mt-xxl-4">
                    <h3
                      className="font_5xl color_dark_gray business_heading_3 cursor-pointer"
                      onClick={() => moveTo3()}
                    >
                      VALIDAZIONE AUTOMATICA DEI DATI
                    </h3>
                    <p className="overflow-hidden fw_light ff_mundial_light font_2xl business_para_3 color_dark_gray pe-xl-5">
                      Meno tempo e maggiore conversione grazie al nostro&nbsp;
                      <span className="fw-bold">software di I.A.</span>
                      &nbsp; per la validazione real
                      <span className="ff_math">-</span>time dei dati degli
                      utenti
                    </p>
                  </div>
                  <div className="ps-5 ps-xxl-0 mt-3 mt-xxl-4">
                    <h3
                      className="font_5xl color_dark_gray business_heading_4 cursor-pointer"
                      onClick={() => moveTo4()}
                    >
                      TRASMISSIONE LEAD
                    </h3>
                    <p className="overflow-hidden fw_light ff_mundial_light font_2xl business_para_4 color_dark_gray pe-xl-5">
                      I lead generati vengono sottoposti ad un attento processo
                      di filtraggio e controllo tramite API o integrazione con
                      il <span className="fw-semibold">CRM</span> del partner
                      prima di essere inviati
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="d-lg-none">
              <div className="business_tab_1">
                <div className="row justify-content-evenly pt-4 pt-sm-5">
                  <div className="col-8 col-sm-4">
                    <img
                      className="w-100 business_small_img_1"
                      src={businessOne}
                      alt="business-big-arrow"
                    />
                  </div>
                  <div className="col-sm-8 col-lg-6 d-sm-flex justify-content-center justify-content-lg-end flex-column pt-3 pt-sm-0">
                    <div className="d-flex align-items-center business_small_heading_1">
                      <img
                        className="smallicon d-sm-none"
                        src={businessIconSmall}
                        alt="small-arrow-icon"
                      />
                      <h3 className="font_5xl color_dark_gray fw-semibold ps-3 mb-0">
                        GENERAZIONE TRAFFICO
                      </h3>
                    </div>
                    <p className="font_2xl color_dark_gray pe-xl-5 pt-2 ff_mundial_light fw-light business_small_para_1">
                      Generiamo traffico tramite{" "}
                      <span className="fw-semibold ff_mundial">campagne</span>{" "}
                      ideate dal nostro team marketing e veicolate sui canali
                      social, Google e native.
                    </p>
                  </div>
                </div>
              </div>
              <div className="business_tab_2">
                <div className="row justify-content-evenly pt-4 pt-sm-5 mt-sm-3">
                  <div className="col-8 col-sm-4">
                    <img
                      className="w-100 business_small_img_2"
                      src={businessTwo}
                      alt="business-big-arrow"
                    />
                  </div>
                  <div className="col-sm-8 col-lg-6 d-sm-flex justify-content-center justify-content-lg-end flex-column pt-4 pt-sm-0">
                    <div className="d-flex align-items-center business_small_heading_2">
                      <img
                        className="smallicon d-sm-none"
                        src={businessIconSmall}
                        alt="small-arrow-icon"
                      />
                      <h3 className="font_5xl color_dark_gray fw-semibold ps-3 mb-0">
                        LANDING CONVERSAZIONALE
                      </h3>
                    </div>
                    <p className="font_2xl color_dark_gray pe-xl-5 pt-2 ff_mundial_light fw-light business_small_para_2">
                      Progettiamo e sviluppiamo landing page personalizzate per
                      i nostri partner con lo scopo di generare lead di contatti
                      altamente ingaggianti e conformi al{" "}
                      <span className="fw-semibold ff_mundial">
                        regolamento GDPR.
                      </span>
                    </p>
                  </div>
                </div>
              </div>
              <div className="business_tab_3">
                <div className="row justify-content-evenly pt-4 pt-sm-5 mt-sm-3">
                  <div className="col-8 col-sm-4">
                    <img
                      className="w-100 business_small_img_3"
                      src={businessThree}
                      alt="business-big-arrow"
                    />
                  </div>
                  <div className="col-sm-8 col-lg-6 d-sm-flex justify-content-center justify-content-lg-end flex-column pt-4 pt-sm-0">
                    <div className="d-flex align-items-center business_small_heading_3">
                      <img
                        className="smallicon d-sm-none"
                        src={businessIconSmall}
                        alt="small-arrow-icon"
                      />
                      <h3 className="font_5xl color_dark_gray fw-semibold ps-3 mb-0">
                        VALIDAZIONE AUTOMATICA DEI DATI
                      </h3>
                    </div>
                    <p className="font_2xl color_dark_gray pe-xl-5 pt-2 ff_mundial_light fw-light business_small_para_3">
                      Qualifichiamo e validiamo in tempo reale i dati degli
                      utenti grazie alla nostra piattaforma proprietaria
                      connessa al nostro{" "}
                      <span className="fw-semibold ff_mundial">
                        software di I.A.
                      </span>
                    </p>
                  </div>
                </div>
              </div>
              <div className="business_tab_4">
                <div className="row justify-content-evenly pt-4 pt-sm-5 mt-sm-3">
                  <div className="col-sm-4 d-flex align-items-center">
                    <img
                      className="w-100 business_small_img_4"
                      src={businessFour}
                      alt="business-big-arrow"
                    />
                  </div>
                  <div className="col-sm-8 col-lg-6 d-sm-flex justify-content-center justify-content-lg-end flex-column">
                    <div className="d-flex align-items-center business_small_heading_4">
                      <img
                        className="smallicon d-sm-none"
                        src={businessIconSmall}
                        alt="small-arrow-icon"
                      />
                      <h3 className="font_5xl color_dark_gray fw-semibold ps-3 mb-0">
                        TRASMISSIONE LEAD
                      </h3>
                    </div>
                    <p className="font_2xl color_dark_gray pe-xl-5 pt-2 mb-0 ff_mundial_light fw-light business_small_para_4">
                      Inviamo i lead generati tramite API o integrazione con il{" "}
                      <span className="fw-semibold ff_mundial">CRM</span> del
                      partner solamente una volta filtrati e controllati.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <img
            id="solution-outlineArrow"
            className="position-absolute pointer-events-none origin-center w-100 business_outline_img"
            src={outlineArrow}
            alt="outline-img"
          />
        </div>
      </div>
    </>
  );
};

export default Business;

import React, { useEffect } from "react";
import { gsap } from "gsap";
import businessOne from "../assets/images/png/business-1.png";
import businessTwo from "../assets/images/png/business-2.png";
import businessThree from "../assets/images/png/business-3.png";
import businessFour from "../assets/images/png/business-4.png";
import businessLeftTextIcon from "../assets/images/png/business-left-icon-text.png";
import businessIconSmall from "../assets/images/png/business-small-arrow.png";
import businessTabImg from "../assets/images/png/arrow-tab-img.png";
import outlineArrow from "../assets/outlineArrow.svg";
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
      top: "80%",
      yPercent: -50,
      xPercent: -50,
    });

    mm.add("(min-width:1600px)", () => {
      tl = gsap
        .timeline({
          scrollTrigger: {
            trigger: ".business_parent",
            start: "top top",
            end: "+=400%",
            scrub: 3,
            pin: true,
          },
        })
        .to("#hero-large-arrow", {
          scale: 1.5,
          top: "20%",
          immediateRender: false,
        })
        .to(
          "#solution-outlineArrow",
          {
            yPercent: -80,
            immediateRender: false,
          },
          "<"
        );
      tl.fromTo(
        ".main_text",
        {
          scale: 0.5,
          autoAlpha: 0,
        },
        {
          scale: 1,
          duration: 1,
          autoAlpha: 1,
        }
      )
        .to(".business_heading_1", {
          autoAlpha: 0.5,
        })
        .to(".business_heading_2", {
          autoAlpha: 0.5,
        })
        .to(".business_heading_3", {
          autoAlpha: 0.5,
        })
        .to(".business_heading_4", {
          autoAlpha: 0.5,
        })
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

        .from(".business_heading_2", {
          autoAlpha: 0.5,
        })
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

        .addLabel("business_accordion_3")
        .from(".business_heading_3", {
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
          top: "128px",
        })
        .to(".business_heading_3", {
          autoAlpha: 0.5,
        })
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
          top: "198px",
        })

        .addLabel("business_accordion_4")
        .from(".business_heading_4", {
          autoAlpha: 0.5,
        })
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
        .to(
          ".business_left_icon",
          {
            autoAlpha: 0,
          },
          ">"
        );
    });

    mm.add("(min-width:992px) and (max-width:1599.98px)", () => {
      tl = gsap
        .timeline({
          scrollTrigger: {
            trigger: ".business_parent",
            start: "top top",
            end: "+=600%",
            scrub: 1,
            pin: true,
          },
        })
        .to("#hero-large-arrow", {
          scale: 1.5,
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
      tl.fromTo(
        ".main_text",
        {
          scale: 0.5,
          autoAlpha: 0,
        },
        {
          scale: 1,
          autoAlpha: 1,
        }
      )
        .to(".business_heading_1", {
          autoAlpha: 0.5,
        })
        .to(".business_heading_2", {
          autoAlpha: 0.5,
        })
        .to(".business_heading_3", {
          autoAlpha: 0.5,
        })
        .to(".business_heading_4", {
          autoAlpha: 0.5,
        })
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
        .to(
          ".business_left_icon",
          {
            autoAlpha: 0,
          },
          "+=.5"
        )
        .to(".third_heading", {
          autoAlpha: 0,
        });
    });

    mm.add("(max-width:991.98px)", () => {
      tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".business_parent",
          start: "top top",
          end: "bottom top",
        },
      });

      tl.addLabel("business_accordion_1")
        .from(".business_tab_1", {
          xPercent: "-150",
          stagger: 0.3,
          duration: 1,
        })
        .addLabel("business_accordion_2")
        .from(".business_tab_2", {
          xPercent: "150",
          stagger: 0.3,
          duration: 1,
        })
        .addLabel("business_accordion_3")
        .from(".business_tab_3", {
          xPercent: "-150",
          stagger: 0.3,
          duration: 1,
        })
        .addLabel("business_accordion_4")
        .from(".business_tab_4", {
          xPercent: "150",
          stagger: 0.3,
          duration: 1,
        });
    });
  }, []);

  const moveTo = (sectionId, id) => {
    const section = document.querySelector(`#${sectionId}`);
    const pos1 = Math.ceil(
      section.parentNode.scrollHeight * (tl.labels[id] / tl.duration()) +
        section.parentNode.offsetTop
    );
    console.log(pos1);
    gsap.to(window, { duration: 0.3, scrollTo: pos1, ease: "linear" });
  };
  return (
    <>
      <div
        className="business_parent overflow-hidden third_sec_height z_1 pt-5 min-vh-100"
        id="servizi"
      >
        <div className="d-flex flex-column justify-content-center">
          <div className="position-absolute d-none d-sm-block d-lg-none">
            <img
              className="w-100 small_tab_arrow_img"
              src={businessTabImg}
              alt="arrow-tab-img"
            />
          </div>
          <div className="text-center px-4 px-lg-0 z_1 third_heading">
            <p className="font_6xl color_white_off pt-sm-5 pt-lg-0 px-3 px-sm-5 px-lg-0 mx-sm-5 mx-lg-0 mb-0 custom_business_heading d-flex align-items-center justify-content-center flex-wrap">
              Progettiamo soluzioni
              <button className="custom_tab_button_012 cursor-pointer align-middle d-flex align-items-center justify-content-center business_btn hero_heading_btn color_dark_gray bg_light_green my-2 mb-sm-0 mt-sm-2 mx-3">
                personalizzate
              </button>
              per il tuo business
            </p>
          </div>
          <div className="position-absolute z-1 end-0 business_icon_img_2 d-none d-lg-block pe-5 me-5 business_left_icon">
            <img src={businessLeftTextIcon} alt="business-small-arrow-2" />
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
                      className="font_5xl color_dark_gray business_heading_1 cursor_pointer"
                      onClick={() => moveTo("servizi", "business_accordion_1")}
                    >
                      GENERAZIONE TRAFFICO
                    </h3>
                    <p className="overflow-hidden fw_light font_2xl business_para_1 color_dark_gray pe-xl-5 m_w_business_text">
                      Strategie di marketing costruite ad hoc per generare
                      traffico qualificato da veicolare sui social media, Google
                      e native advertising
                    </p>
                  </div>
                  <div className="ps-5 ps-xxl-0 mt-3 mt-xxl-4">
                    <h3
                      className="font_5xl color_dark_gray business_heading_2 cursor_pointer"
                      onClick={() => moveTo("servizi", "business_accordion_2")}
                    >
                      LANDING CONVERSAZIONALE
                    </h3>
                    <p className="overflow-hidden fw_light font_2xl business_para_2 color_dark_gray pe-xl-5 m_w_business_text">
                      Landingpage su misura per i nostri partner e conformi
                      al&nbsp;
                      <span className="fw-bold">regolamento GDPR</span>
                      &nbsp; per l’acquisizione di contatti qualificati.
                    </p>
                  </div>
                  <div className="ps-5 ps-xxl-0 mt-3 mt-xxl-4">
                    <h3
                      className="font_5xl color_dark_gray business_heading_3 cursor_pointer"
                      onClick={() => moveTo("servizi", "business_accordion_3")}
                    >
                      VALIDAZIONE AUTOMATICA DEI DATI
                    </h3>
                    <p className="overflow-hidden fw_light font_2xl business_para_3 color_dark_gray pe-xl-5 m_w_business_text">
                      Meno tempo e maggiore conversione grazie al nostro&nbsp;
                      <span className="fw-bold">software di I.A.</span>
                      &nbsp; per la validazione real
                      <span className="ff_math">-</span>time dei dati degli
                      utenti
                    </p>
                  </div>
                  <div className="ps-5 ps-xxl-0 mt-3 mt-xxl-4">
                    <h3
                      className="font_5xl color_dark_gray business_heading_4 cursor_pointer"
                      onClick={() => moveTo("servizi", "business_accordion_4")}
                    >
                      TRASMISSIONE LEAD
                    </h3>
                    <p className="overflow-hidden fw_light font_2xl business_para_4 color_dark_gray pe-xl-5 m_w_business_text">
                      I lead generati vengono sottoposti ad un attento processo
                      di filtraggio e controllo tramite API o integrazione con
                      il CRM del partner prima di essere inviati
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="d-lg-none">
              <div className="business_tab_1">
                <div className="row justify-content-evenly pt-5">
                  <div className="col-8 col-sm-4">
                    <img
                      className="w-100"
                      src={businessOne}
                      alt="business-big-arrow"
                    />
                  </div>
                  <div className="col-sm-8 col-lg-6 d-sm-flex justify-content-center justify-content-lg-end flex-column pt-3 pt-sm-0">
                    <h3 className="font_5xl text-white">
                      GENERAZIONE TRAFFICO
                    </h3>
                    <p className="font_2xl text-white pe-xl-5 pt-2">
                      Strategie di marketing costruite ad hoc per generare
                      traffico qualificato da veicolare sui social media, Google
                      e native advertising
                    </p>
                  </div>
                </div>
              </div>
              <div className="business_tab_2">
                <div className="row justify-content-evenly pt-5 mt-sm-3">
                  <div className="col-8 col-sm-4">
                    <img
                      className="w-100"
                      src={businessTwo}
                      alt="business-big-arrow"
                    />
                  </div>
                  <div className="col-sm-8 col-lg-6 d-sm-flex justify-content-center justify-content-lg-end flex-column pt-4 pt-sm-0">
                    <h3 className="font_5xl text-white">
                      LANDING CONVERSAZIONALE
                    </h3>
                    <p className="font_2xl text-white pe-xl-5 pt-2">
                      Landingpage su misura per i nostri partner e conformi al
                      <span className="fw-bold">regolamento GDPR</span>
                      &nbsp; per l’acquisizione di contatti qualificati.
                    </p>
                  </div>
                </div>
              </div>
              <div className="business_tab_3">
                <div className="row justify-content-evenly pt-5 mt-sm-3">
                  <div className="col-8 col-sm-4">
                    <img
                      className="w-100"
                      src={businessThree}
                      alt="business-big-arrow"
                    />
                  </div>
                  <div className="col-sm-8 col-lg-6 d-sm-flex justify-content-center justify-content-lg-end flex-column pt-4 pt-sm-0">
                    <h3 className="font_5xl text-white">
                      VALIDAZIONE AUTOMATICA DEI DATI
                    </h3>
                    <p className="font_2xl text-white pe-xl-5 pt-2">
                      Meno tempo e maggiore conversione grazie al nostro&nbsp;
                      <span className="fw-bold">software di I.A.</span>
                      &nbsp; per la validazione real-time dei dati degli utenti
                    </p>
                  </div>
                </div>
              </div>
              <div className="business_tab_4">
                <div className="row justify-content-evenly pt-5 mt-sm-3">
                  <div className="col-sm-4 d-flex align-items-center">
                    <img
                      className="w-100"
                      src={businessFour}
                      alt="business-big-arrow"
                    />
                  </div>
                  <div className="col-sm-8 col-lg-6 d-sm-flex justify-content-center justify-content-lg-end flex-column">
                    <h3 className="font_5xl text-white">TRASMISSIONE LEAD</h3>
                    <p className="font_2xl text-white pe-xl-5 pt-2">
                      I lead generati vengono sottoposti ad un attento processo
                      di filtraggio e controllo tramite API o integrazione con
                      il CRM del partner prima di essere inviati”
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
            className="position-absolute pointer-events-none origin-center h-[70vh] w-100"
            src={outlineArrow}
            alt="outline-img"
          />
        </div>
      </div>
    </>
  );
};

export default Business;

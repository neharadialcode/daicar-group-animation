import React, { useEffect } from "react";
import iconImg from "../assets/images/svg/big-icon.svg";
import { gsap } from "gsap";
import businessOne from "../assets/images/png/business-1.png";
import businessTwo from "../assets/images/png/business-2.png";
import businessThree from "../assets/images/png/business-3.png";
import businessFour from "../assets/images/png/business-4.png";
import businessLeftTextIcon from "../assets/images/png/business-left-icon-text.png";
import businessIconSmall from "../assets/images/png/business-small-arrow.png";
import businessTabImg from "../assets/images/png/arrow-tab-img.png";
const Business = () => {
  useEffect(() => {
    let busniessValue = gsap.matchMedia();
    busniessValue.add("(min-width:1600px)", () => {
      let busniessParentt = gsap.timeline({
        scrollTrigger: {
          trigger: ".business_parent",
          start: "top top",
          end: "bottom top",
          scrub: 3,
          pin: true,
          pinSpacing: false,
        },
      });
      busniessParentt
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
        .to(".big_icon", {
          top: "-12%",
        })
        .to(".small_icon", {
          top: "5px",
        })
        .to(".heading_1", {
          height: "200px",
          duration: 7,
        })
        .fromTo(
          ".business_heading_1",
          {
            autoAlpha: 0.5,
          },
          {
            autoAlpha: 1,
          }
        )
        .to(".business_para_1", {
          autoAlpha: 1,
          rotate: 0,
          delay: 1,
          duration: 7,
        })
        .to(".business_para_1", {
          autoAlpha: 0,
          delay: 1,
          duration: 7,
        })
        .to(
          ".heading_1",
          {
            height: "40px",
            duration: 7,
          },
          "-=.5"
        )
        .fromTo(
          ".business_heading_1",
          {
            autoAlpha: 1,
          },
          {
            autoAlpha: 0.5,
          }
        )

        .to(
          ".business_img_1",
          {
            autoAlpha: 0,
          },
          "-=.5"
        )
        .to(
          ".business_img_2",
          {
            autoAlpha: 1,
          },
          "-=.5"
        )

        .to(".small_icon", {
          top: "45px",
        })
        .to(".heading_2", {
          height: "200px",
          duration: 7,
        })
        .fromTo(
          ".business_heading_2",
          {
            autoAlpha: 0.5,
          },
          {
            autoAlpha: 1,
          }
        )
        .to(".business_para_2", {
          autoAlpha: 1,
          delay: 1,
          rotate: 0,
          duration: 7,
        })
        .to(".business_para_2", {
          autoAlpha: 0,
          delay: 1,
          duration: 7,
        })
        .to(
          ".heading_2",
          {
            height: "40px",
            duration: 7,
          },
          "-=.5"
        )
        .fromTo(
          ".business_heading_2",
          {
            autoAlpha: 1,
          },
          {
            autoAlpha: 0.5,
          }
        )

        .to(
          ".business_img_2",
          {
            autoAlpha: 0,
          },
          "-=.5"
        )
        .to(
          ".business_img_3",
          {
            autoAlpha: 1,
          },
          "-=.5"
        )
        .to(".small_icon", {
          top: "85px",
        })
        .to(".heading_3", {
          height: "200px",
          duration: 7,
        })
        .fromTo(
          ".business_heading_3",
          {
            autoAlpha: 0.5,
          },
          {
            autoAlpha: 1,
          }
        )
        .to(".business_para_3", {
          autoAlpha: 1,
          delay: 1,
          rotate: 0,
          duration: 7,
        })
        .to(".business_para_3", {
          delay: 1,
          autoAlpha: 0,
          duration: 7,
        })
        .to(
          ".heading_3",
          {
            height: "40px",
            duration: 7,
          },
          "-=.5"
        )
        .fromTo(
          ".business_heading_3",
          {
            autoAlpha: 1,
          },
          {
            autoAlpha: 0.5,
          }
        )

        .to(
          ".business_img_3",
          {
            autoAlpha: 0,
          },
          "-=.5"
        )
        .to(
          ".business_img_4",
          {
            autoAlpha: 1,
          },
          "-=.5"
        )
        .to(".small_icon", {
          top: "125px",
        })
        .to(".heading_4", {
          height: "200px",
          duration: 7,
        })
        .fromTo(
          ".business_heading_4",
          {
            autoAlpha: 0.5,
          },
          {
            autoAlpha: 1,
          }
        )
        .to(".business_para_4", {
          autoAlpha: 1,
          delay: 1,
          rotate: 0,
          duration: 7,
        })
        .to(".business_para_4", {
          delay: 1,
          autoAlpha: 0,
          duration: 7,
        })
        .to(
          ".heading_4",
          {
            height: "40px",
            duration: 7,
          },
          "-=.5"
        )
        .fromTo(
          ".business_heading_4",
          {
            autoAlpha: 1,
          },
          {
            autoAlpha: 0.5,
          }
        )

        .to(
          ".main_text",
          {
            autoAlpha: 0,
          },
          "+=.5"
        )
        .to(
          ".business_left_icon",
          {
            autoAlpha: 0,
          },
          "+=.5"
        )
        .to(".big_icon", {
          top: "-20%",
          scale: "1",
        });
    });
    busniessValue.add("(min-width:992px) and (max-width:1599.98px)", () => {
      let busniessParentt = gsap.timeline({
        scrollTrigger: {
          trigger: ".business_parent",
          start: "top top",
          end: "bottom top",
          scrub: 1,
          pin: true,
          pinSpacing: false,
        },
      });
      busniessParentt
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
        .to(".big_icon", {
          top: "-12%",
        })
        .to(".small_icon", {
          top: "5px",
        })
        .to(".heading_1", {
          height: "150px",
          duration: 7,
        })
        .fromTo(
          ".business_heading_1",
          {
            autoAlpha: 0.5,
          },
          {
            autoAlpha: 1,
          }
        )
        .to(".business_para_1", {
          autoAlpha: 1,
          rotate: 0,
          delay: 1,
          duration: 7,
        })
        .to(".business_para_1", {
          autoAlpha: 0,
          delay: 1,
          duration: 7,
        })
        .to(".heading_1", {
          height: "40px",
          duration: 7,
        })
        .fromTo(
          ".business_heading_1",
          {
            autoAlpha: 1,
          },
          {
            autoAlpha: 0.5,
          }
        )

        .to(
          ".business_img_1",
          {
            autoAlpha: 0,
          },
          "-=.5"
        )
        .to(
          ".business_img_2",
          {
            autoAlpha: 1,
          },
          "-=.5"
        )

        .to(".small_icon", {
          top: "60px",
        })
        .to(".heading_2", {
          height: "150px",
          duration: 7,
        })
        .fromTo(
          ".business_heading_2",
          {
            autoAlpha: 0.5,
          },
          {
            autoAlpha: 1,
          }
        )
        .to(".business_para_2", {
          autoAlpha: 1,
          delay: 1,
          rotate: 0,
          duration: 7,
        })
        .to(".business_para_2", {
          autoAlpha: 0,
          delay: 1,
          duration: 7,
        })

        .to(
          ".heading_2",
          {
            height: "40px",
            duration: 7,
          },
          "-=.5"
        )
        .fromTo(
          ".business_heading_2",
          {
            autoAlpha: 1,
          },
          {
            autoAlpha: 0.5,
          }
        )

        .to(
          ".business_img_2",
          {
            autoAlpha: 0,
          },
          "-=.5"
        )
        .to(
          ".business_img_3",
          {
            autoAlpha: 1,
          },
          "-=.5"
        )
        .to(".small_icon", {
          top: "100px",
        })
        .to(".heading_3", {
          height: "150px",
          duration: 7,
        })
        .fromTo(
          ".business_heading_3",
          {
            autoAlpha: 0.5,
          },
          {
            autoAlpha: 1,
          }
        )
        .to(".business_para_3", {
          autoAlpha: 1,
          delay: 1,
          rotate: 0,
          duration: 7,
        })
        .to(".business_para_3", {
          delay: 1,
          autoAlpha: 0,
          duration: 7,
        })
        .to(".heading_3", {
          height: "40px",
          duration: 7,
        })
        .fromTo(
          ".business_heading_3",
          {
            autoAlpha: 1,
          },
          {
            autoAlpha: 0.5,
          }
        )

        .to(
          ".business_img_3",
          {
            autoAlpha: 0,
          },
          "-=.5"
        )
        .to(
          ".business_img_4",
          {
            autoAlpha: 1,
          },
          "-=.5"
        )
        .to(".small_icon", {
          top: "140px",
        })
        .to(".heading_4", {
          height: "40px",
          duration: 7,
        })
        .fromTo(
          ".business_heading_4",
          {
            autoAlpha: 0.5,
          },
          {
            autoAlpha: 1,
          }
        )
        .to(".business_para_4", {
          autoAlpha: 1,
          delay: 1,
          rotate: 0,
          duration: 7,
        })
        .to(".business_para_4", {
          delay: 1,
          autoAlpha: 0,
          duration: 7,
        })
        .to(".heading_4", {
          height: "40px",
          duration: 7,
        })
        .fromTo(
          ".business_heading_4",
          {
            autoAlpha: 1,
          },
          {
            autoAlpha: 0.5,
          }
        )

        .to(
          ".main_text",
          {
            autoAlpha: 0,
          },
          "+=.5"
        )
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
    busniessValue.add("(max-width:991.98px)", () => {
      let busniessParentt = gsap.timeline({
        scrollTrigger: {
          trigger: ".business_parent",
          start: "top top",
          end: "bottom top",
        },
      });
      busniessParentt
        .from(".business_tab_1", {
          xPercent: "-150",
          stagger: 0.3,
          duration: 1,
        })
        .from(".business_tab_2", {
          xPercent: "150",
          stagger: 0.3,
          duration: 1,
        })
        .from(".business_tab_3", {
          xPercent: "-150",
          stagger: 0.3,
          duration: 1,
        })
        .from(".business_tab_4", {
          xPercent: "150",
          stagger: 0.3,
          duration: 1,
        });
    });
  }, []);
  return (
    <div
      className="business_parent overflow-hidden third_sec_height z_1 pt-5"
      id="servizi"
    >
      <div className="d-flex flex-column justify-content-center">
        <img
          className="w-100 position-absolute big_icon d-none d-lg-block"
          src={iconImg}
          alt="iconImg"
        />
        <div className="position-absolute d-none d-sm-block d-lg-none">
          <img
            className="w-100 small_tab_arrow_img"
            src={businessTabImg}
            alt="arrow-tab-img"
          />
        </div>
        <div className="text-center px-4 px-lg-0 z_1 third_heading">
          <p className="font_6xl color_white_off pt-sm-5 pt-lg-0 px-3 px-sm-5 px-lg-0 mx-sm-5 mx-lg-0 custom_business_heading">
            Progettiamo soluzioni &nbsp;
            <span className="business_btn hero_heading_btn color_dark_gray bg_light_green">
              personalizzate
            </span>
            &nbsp; per il tuo business
          </p>
        </div>
        <div className="position-absolute z-1 end-0 business_icon_img_2 d-none d-lg-block pe-5 business_left_icon">
          <img src={businessLeftTextIcon} alt="business-small-arrow-2" />
        </div>
        <div className="container pb-5 min-vh-100 d-lg-flex flex-column justify-content-center">
          <div className="main_text d-none d-lg-block pb-5">
            <div className="row justify-content-evenly divide_space_text pt5">
              <div className="col-4 col-xxl-5 position-relative custom_business_img_height d-flex align-items-center">
                <img
                  className="w-100 business_img_1 position-absolute"
                  src={businessOne}
                  alt="business-big-arrow"
                />
                <img
                  className="w-100 business_img_2 opacity_0 position-absolute"
                  src={businessTwo}
                  alt="business-big-arrow"
                />
                <img
                  className="w-100 business_img_3 opacity_0 position-absolute"
                  src={businessThree}
                  alt="business-big-arrow"
                />
                <img
                  className="w-100 business_img_4 opacity_0 position-absolute"
                  src={businessFour}
                  alt="business-big-arrow"
                />
              </div>
              <div className="col-7 col-xl-5 position-relative business-content">
                <img
                  className="small_icon d-none d-lg-block"
                  src={businessIconSmall}
                  alt="small-arrow-icon"
                />
                <div className="heading_1 ps-5 ps-xxl-0">
                  <h3 className="font_5xl color_dark_gray business_heading_1">
                    GENERAZIONE TRAFFICO
                  </h3>
                  <p className="ff_mundial_light mt-2 pt-5 font_2xl position-absolute business_para_1 color_dark_gray pe-xl-5 pt-2 m_w_business_text">
                    Strategie di marketing costruite ad hoc per generare
                    traffico qualificato da veicolare sui social media, Google e
                    native advertising
                  </p>
                </div>
                <div className="heading_2 ps-5 ps-xxl-0 pt-3">
                  <h3 className="font_5xl color_dark_gray business_heading_2">
                    LANDING CONVERSAZIONALE
                  </h3>
                  <p className="ff_mundial_light mt-3 pt-5 font_2xl position-absolute business_para_2 color_dark_gray pe-xl-5 pt-2 m_w_business_text">
                    Landingpage su misura per i nostri partner e conformi
                    al&nbsp;
                    <span className="ff_mundial_bold">regolamento GDPR</span>
                    &nbsp; per l’acquisizione di contatti qualificati.
                  </p>
                </div>
                <div className="heading_3 ps-5 ps-xxl-0 pt-3">
                  <h3 className="font_5xl color_dark_gray business_heading_3">
                    VALIDAZIONE AUTOMATICA DEI DATI
                  </h3>
                  <p className="ff_mundial_light mt-3 pt-5 font_2xl position-absolute business_para_3 color_dark_gray pe-xl-5 pt-2 m_w_business_text">
                    Meno tempo e maggiore conversione grazie al nostro&nbsp;
                    <span className="ff_mundial_bold">software di I.A.</span>
                    &nbsp; per la validazione real-time dei dati degli utenti
                  </p>
                </div>
                <div className="heading_4 ps-5 ps-xxl-0 pt-3">
                  <h3 className="font_5xl color_dark_gray business_heading_4">
                    TRASMISSIONE LEAD
                  </h3>
                  <p className="ff_mundial_light mt-3 pt-5 font_2xl position-absolute business_para_4 color_dark_gray pe-xl-5 pt-2 m_w_business_text">
                    I lead generati vengono sottoposti ad un attento processo di
                    filtraggio e controllo tramite API o integrazione con il CRM
                    del partner prima di essere inviati
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
                <div className="col-sm-6 d-sm-flex justify-content-center justify-content-lg-end flex-column pt-3 pt-sm-0">
                  <h3 className="font_5xl text-white">GENERAZIONE TRAFFICO</h3>
                  <p className="font_2xl text-white pe-xl-5 pt-2">
                    Strategie di marketing costruite ad hoc per generare
                    traffico qualificato da veicolare sui social media, Google e
                    native advertising
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
                <div className="col-sm-6 d-sm-flex justify-content-center justify-content-lg-end flex-column pt-4 pt-sm-0">
                  <h3 className="font_5xl text-white">
                    LANDING CONVERSAZIONALE
                  </h3>
                  <p className="font_2xl text-white pe-xl-5 pt-2">
                    Landingpage su misura per i nostri partner e conformi al
                    <span className="ff_mundial_bold">regolamento GDPR</span>
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
                <div className="col-sm-6 d-sm-flex justify-content-center justify-content-lg-end flex-column pt-4 pt-sm-0">
                  <h3 className="font_5xl text-white">
                    VALIDAZIONE AUTOMATICA DEI DATI
                  </h3>
                  <p className="font_2xl text-white pe-xl-5 pt-2">
                    Meno tempo e maggiore conversione grazie al nostro&nbsp;
                    <span className="ff_mundial_bold">software di I.A.</span>
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
                <div className="col-sm-6 d-sm-flex justify-content-center justify-content-lg-end flex-column">
                  <h3 className="font_5xl text-white">TRASMISSIONE LEAD</h3>
                  <p className="font_2xl text-white pe-xl-5 pt-2">
                    I lead generati vengono sottoposti ad un attento processo di
                    filtraggio e controllo tramite API o integrazione con il CRM
                    del partner prima di essere inviati”
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Business;

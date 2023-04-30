import React, { useEffect } from "react";
import iconImg from "../assets/images/svg/big-icon.svg";
import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
import businessFour from "../assets/images/png/business-4.png";
import businessThree from "../assets/images/png/business-3.png";
import businessOne from "../assets/images/png/business-1.png";
import businessLeftTextIcon from "../assets/images/png/business-left-icon-text.png";
import businessIconSmall from "../assets/images/png/business-small-arrow.png";
const ThirdSection = () => {
  useEffect(() => {
    let third = gsap.matchMedia();
    third.add("(min-width:992px)", () => {
      let secondSection2 = gsap.timeline({
        scrollTrigger: {
          trigger: ".third_section",
          start: "top top",
          end: "bottom top",
          scrub: 1,
          pin: true,
          pinSpacing: false,
        },
      });
      secondSection2
        .to(".business_img_2", {
          autoAlpha: 0,
        })
        .to(".business_img_3", {
          autoAlpha: 0,
        })
        .to(".big_icon", {
          top: "-12%",
        })
        .to(".small_icon", {
          top: "5px",
        })
        .to(".heading_1", {
          height: "200px",
        })
        .to(".text_1", {
          autoAlpha: 1,
          rotate: 0,
        })
        .to(".business_img_1", {
          autoAlpha: 0,
          delay: 1,
        })
        .to(".business_img_2", {
          autoAlpha: 1,
        })

        .to(".heading_1", {
          height: "40px",
        })
        .to(
          ".text_1",
          {
            autoAlpha: 0,
          },
          "-=.5"
        )
        .to(".small_icon", {
          top: "45px",
        })
        .to(".heading_2", {
          height: "200px",
        })
        .to(".text_2", {
          autoAlpha: 1,
          delay: 1,
          rotate: 0,
        })
        .to(".business_img_2", {
          autoAlpha: 0,
          delay: 1,
        })
        .to(".business_img_3", {
          autoAlpha: 1,
        })

        .to(".heading_2", {
          height: "40px",
        })
        .to(
          ".text_2",
          {
            autoAlpha: 0,
          },
          "-=.5"
        )
        .to(".small_icon", {
          top: "85px",
        })
        .to(".heading_3", {
          height: "200px",
        })
        .to(".text_3", {
          autoAlpha: 1,
          delay: 1,
          rotate: 0,
        })
        .to(".business_img_3", {
          autoAlpha: 0,
          delay: 1,
        })
        .to(".business_img_2", {
          autoAlpha: 1,
        })

        .to(".heading_3", {
          height: "40px",
        })
        .to(
          ".text_3",
          {
            autoAlpha: 0,
          },
          "-=.5"
        )
        .to(".small_icon", {
          top: "125px",
        })
        .to(".heading_4", {
          height: "200px",
        })
        .to(".text_4", {
          autoAlpha: 1,
          delay: 1,
          rotate: 0,
        })
        .to(".heading_4", {
          height: "40px",
        })
        .to(
          ".text_4",
          {
            autoAlpha: 0,
          },
          "-=.5"
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
        );
    });
  }, []);
  return (
    <div className="third_section overflow-hidden third_sec_height bg_white z_1 bg_gray pt-5">
      <div className="d-flex flex-column justify-content-center vh-100">
        <img
          className="w-100 position-absolute big_icon d-none d-lg-block"
          src={iconImg}
          alt="iconImg"
        />
        <div className="top_space_business_text text-center pt-5 mt-5 mt-lg-0 px-4 px-lg-0">
          <p className="font_6xl text-white pt-5 pt-lg-0 px-5 px-lg-0 mx-5 mx-lg-0">
            Progettiamo soluzioni{" "}
            <span className="hero_btn bg_light_green">personalizzate</span> per
            il tuo business
          </p>
        </div>
        <div className="position-absolute z-1 end-0 business_icon_img_2 d-none d-lg-block pe-5 business_left_icon">
          <img src={businessLeftTextIcon} alt="business-small-arrow-2" />
        </div>
        <div className="container pb-5 min-vh-100 d-lg-flex flex-column justify-content-center">
          <div className="main_text d-none d-lg-block">
            <div className="row justify-content-between pt-5">
              <div className="col-4 position-relative custom_business_img_height">
                <div className="position-absolute">
                  <img
                    className="w-100 business_img_1"
                    src={businessOne}
                    alt="business-big-arrow"
                  />
                </div>
                <div className="position-absolute">
                  <img
                    className="w-100 business_img_3"
                    src={businessThree}
                    alt="business-big-arrow"
                  />
                </div>
                <div className="position-absolute">
                  <img
                    className="w-100 business_img_2"
                    src={businessFour}
                    alt="business-big-arrow"
                  />
                </div>
              </div>
              <div className="col-6 position-relative">
                {/* <span className="small_icon">Small Icon</span> */}
                <img
                  className="small_icon d-none d-lg-block"
                  src={businessIconSmall}
                  alt="small-arrow-icon"
                />
                <div className="heading_1">
                  <h3 className="font_5xl text-white">GENERAZIONE TRAFFICO</h3>
                  <p className=" pt-5 font_2xl position-absolute text_1 text-white pe-xl-5 pt-2">
                    Strategie di marketing costruite ad hoc per generare
                    traffico qualificato da veicolare sui social media, Google e
                    native advertising
                  </p>
                </div>
                <div className="heading_2 pt-3">
                  <h3 className="font_5xl text-white">
                    LANDING CONVERSAZIONALE
                  </h3>
                  <p className="pt-5 font_2xl position-absolute text_2 text-white pe-xl-5 pt-2">
                    Landingpage su misura per i nostri partner e conformi al
                    <span className="ff_mundial_bold">
                      regolamento GDPR
                    </span>{" "}
                    per l’acquisizione di contatti qualificati.
                  </p>
                </div>
                <div className="heading_3 pt-3">
                  <h3 className="font_5xl text-white">
                    VALIDAZIONE AUTOMATICA DEI DATI
                  </h3>
                  <p className=" pt-5 font_2xl position-absolute text_3 text-white pe-xl-5 pt-2">
                    Meno tempo e maggiore conversione grazie al nostro{" "}
                    <span className="ff_mundial_bold">software di I.A.</span>{" "}
                    per la validazione real-time dei dati degli utenti
                  </p>
                </div>
                <div className="heading_4 pt-3">
                  <h3 className="font_5xl text-white">TRASMISSIONE LEAD</h3>
                  <p className=" pt-5 font_2xl position-absolute text_4 text-white pe-xl-5 pt-2">
                    I lead generati vengono sottoposti ad un attento processo di
                    filtraggio e controllo tramite API o integrazione con il CRM
                    del partner prima di essere inviati”
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="row d-lg-none justify-content-evenly pt-5 mt-5">
            <div className="col-4">
              <img
                className="w-100 business_img_1"
                src={businessOne}
                alt="business-big-arrow"
              />
            </div>
            <div className="col-6 d-flex justify-content-end flex-column">
              <h3 className="font_5xl text-white">GENERAZIONE TRAFFICO</h3>
              <p className="font_2xl text-white pe-xl-5 pt-2">
                Strategie di marketing costruite ad hoc per generare traffico
                qualificato da veicolare sui social media, Google e native
                advertising
              </p>
            </div>
          </div>
          <div className="row d-lg-none justify-content-evenly pt-5 mt-3">
            <div className="col-4">
              <img
                className="w-100 business_img_1"
                src={businessFour}
                alt="business-big-arrow"
              />
            </div>
            <div className="col-6 d-flex justify-content-end flex-column">
              <h3 className="font_5xl text-white">GENERAZIONE TRAFFICO</h3>
              <p className="font_2xl text-white pe-xl-5 pt-2">
                Strategie di marketing costruite ad hoc per generare traffico
                qualificato da veicolare sui social media, Google e native
                advertising
              </p>
            </div>
          </div>
          <div className="row d-lg-none justify-content-evenly pt-5 mt-3">
            <div className="col-4">
              <img
                className="w-100 business_img_1"
                src={businessThree}
                alt="business-big-arrow"
              />
            </div>
            <div className="col-6 d-flex justify-content-end flex-column">
              <h3 className="font_5xl text-white">GENERAZIONE TRAFFICO</h3>
              <p className="font_2xl text-white pe-xl-5 pt-2">
                Strategie di marketing costruite ad hoc per generare traffico
                qualificato da veicolare sui social media, Google e native
                advertising
              </p>
            </div>
          </div>
          <div className="row d-lg-none justify-content-evenly pt-5 mt-3">
            <div className="col-4">
              <img
                className="w-100 business_img_1"
                src={businessFour}
                alt="business-big-arrow"
              />
            </div>
            <div className="col-6 d-flex justify-content-end flex-column">
              <h3 className="font_5xl text-white">GENERAZIONE TRAFFICO</h3>
              <p className="font_2xl text-white pe-xl-5 pt-2">
                Strategie di marketing costruite ad hoc per generare traffico
                qualificato da veicolare sui social media, Google e native
                advertising
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThirdSection;

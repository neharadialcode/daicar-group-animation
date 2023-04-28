import React, { useEffect } from "react";
import iconImg from "../assets/images/svg/big-icon.svg";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import businessBigArrow from "../assets/images/png/business-big-arrow.png";
import businessLeftTextIcon from "../assets/images/png/business-left-icon-text.png";
// import businessIconSmall from "../assets/images/png/business-small-arrow.png";
const ThirdSection = () => {
  useEffect(() => {
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
      .to(".big_icon", {
        top: "-30%",
      })
      .to(".text_1", {
        autoAlpha: 1,
        rotate: 0,
      })
      .to(".text_2", {
        autoAlpha: 1,
        delay: 1,
        rotate: 0,
      })
      .to(
        ".text_1",
        {
          autoAlpha: 0,
          rotate: 50,
        },
        "-=.8"
      )
      .to(".text_3", {
        autoAlpha: 1,
        delay: 1,
        rotate: 0,
      })
      .to(
        ".text_2",
        {
          autoAlpha: 0,
          rotate: 50,
        },
        "-=.8"
      )
      .to(".text_4", {
        autoAlpha: 1,
        delay: 1,
        rotate: 0,
      })
      .to(
        ".text_3",
        {
          autoAlpha: 0,
          rotate: 50,
        },
        "-=.8"
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
  }, []);
  return (
    <div className="third_section overflow-hidden vh-200 bg_white z_1 bg_gray pt-5">
      <div className="d-flex flex-column justify-content-center vh-100 ">
        <img
          className="w-100 position-absolute big_icon"
          src={iconImg}
          alt="iconImg"
        />
        <div className="top_space_business_text text-center pt-5">
          <p className="font_6xl text-white">
            Progettiamo soluzioni{" "}
            <span className="hero_btn bg_light_green">personalizzate</span> per
            il tuo business{" "}
          </p>
        </div>
        <div className="position-absolute z-1 end-0 business_icon_img_2 d-none d-lg-block pe-5 business_left_icon">
          <img src={businessLeftTextIcon} alt="business-small-arrow-2" />
        </div>
        <div className="container pb-5 min-vh-100 d-flex flex-column justify-content-center">
          <div className="main_text">
            <div className="row justify-content-between">
              <div className="col-4">
                <img
                  className="w-100"
                  src={businessBigArrow}
                  alt="business-big-arrow"
                />
              </div>
              <div className="col-6 position-relative">
                {/* <div className="position-absolute business_icon_small_img">
                  <img
                    className="small_icon_arrow"
                    src={businessIconSmall}
                    alt="business-small-arrow"
                  />
                </div> */}
                <div className="text_1 position-absolute ">
                  <h3 className="font_5xl color_dark_gray">
                    GENERAZIONE TRAFFICO
                  </h3>
                  <p className="font_2xl ff_mundial_light color_dark_gray pe-xl-5">
                    Generiamo traffico tramite campagne marketing ideate e
                    create dal nostro team marketing e  veicolate sui canali
                    social, Google e native.
                  </p>
                </div>
                <div className="text_2 position-absolute ">
                  <h3 className="font_5xl color_dark_gray">
                    LANDING CONVERSAZIONALE
                  </h3>
                  <p className="font_2xl ff_mundial_light color_dark_gray pe-xl-5">
                    Progettiamo e sviluppiamo landingpage personalizzate per i
                    nostri partner con lo scopo di generare lead di contatti
                    altamente ingaggianti e conformi al regolamento GDPR.
                  </p>
                </div>
                <div className="text_3 position-absolute ">
                  <h3 className="font_5xl color_dark_gray">
                    VALIDAZIONE AUTOMATICA DEI DATI
                  </h3>
                  <p className="font_2xl ff_mundial_light color_dark_gray pe-xl-5">
                    Qualifichiamo e validiamo in tempo reale i dati degli utenti
                    grazie alla nostra piattaforma proprietaria connessa al
                    nostro software di I.A.
                  </p>
                </div>
                <div className="text_4 position-absolute ">
                  <h3 className="font_5xl color_dark_gray">
                    TRASMISSIONE LEAD
                  </h3>
                  <p className="font_2xl ff_mundial_light color_dark_gray pe-xl-5">
                    Inviamo i lead generati tramite API o integrazione con il
                    CRM del partner solamente una volta filtrati e controllati.
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

export default ThirdSection;

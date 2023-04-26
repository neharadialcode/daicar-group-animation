import React, { useEffect } from "react";
import man from "../assets/images/png/man-img.png";
import gsap from "gsap";

function About() {
  useEffect(() => {
    let about = gsap.matchMedia();
    about.add("(min-width: 992px)", () => {
      let about_value = gsap.timeline({
        scrollTrigger: {
          trigger: ".about_parent",
          start: "top top",
          end: "bottom top",
        },
      });
      about_value.from(".about_text", {
        yPercent: 100,
        autoAlpha: 0,
        ease: "back(2)",
        stagger: 0.02,
      });
    });
  }, []);
  return (
    <>
      <section className=" bg_light_white padding_y163 about_parent min-vh-100 overflow-hidden">
        <div className="custom_container container about_text">
          <p className="mb-0 text-center fw-normal font_5xl color_gray ff_mundial_normal">
            Ora che hai compreso che futuro dei tuoi
            <span className="common_button mx-1 font_2xl mx-2">Lead</span> è
            digitale,
            <br className="d-md-block d-none"></br> e hai scoperto
            <span className="common_button mx-1 font_2xl mx-2 margin_top">
              come
            </span>{" "}
            usiamo il
            <span className="common_button mx-1 font_2xl mx-2 margin_top">
              comeMarketing Converazionale
            </span>
            e gli
            <span className="common_button mx-1 font_2xl mx-2 margin_top">
              Strumenti tech<span className="ff_roboto">-</span>driven
            </span>
            da noi sviluppati,
            <br className="d-md-block d-none"></br> per ottenere una
            <span className="common_button mx-1 font_2xl mx-2 margin_top">
              Qualifica digitale real<span className="ff_roboto">-</span>
              time
            </span>
            e trasmetterti così i dati<br className="d-md-block d-none"></br>{" "}
            Vogliamo utilizzare l’esperienza acquisita nel
            <span className="common_button mx-1 font_2xl mx-2 margin_top">
              tempo
            </span>
            per ideare il tuo percorso su
            <span className="common_button mx-1 font_2xl mx-2 margin_top">
              misura
            </span>
            <br className="d-md-block d-none"></br>
            proprio come se fossimo il tuo
            <span className="common_button mx-1 font_2xl mx-2 margin_top">
              partner
            </span>{" "}
            integrato nel tuo team e nel tuo{" "}
            <span className="common_button mx-1 font_2xl mx-2 margin_top">
              CRM
            </span>
          </p>
          <div className="d-flex justify-content-center margin position-relative z_index2">
            <div>
              <button className="Calendly_button fw-normal mx-auto d-flex ff_mundial_normal font_2xl color_gray">
                Parliamone meglio su Calendly
              </button>
              <div className="d-flex justify-content-center gap-1 gap-sm-3 mt-sm-4 mt-2 align-items-center">
                <img className="image_hight" src={man} alt="man" />
                <p className="mb-0 font_md color_white_off d-none d-xl-block ">
                  <span className="fw_light">Matteo,</span> Business Development
                  Manager
                </p>
                <p className="mb-0 font_md color_gray  d-xl-none ">
                  <span className="fw_light">Matteo,</span> Business Development
                  Manager
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;

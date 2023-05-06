import React, { useEffect } from "react";
import man from "../assets/images/png/man-img.png";
import gsap from "gsap";

function About() {
  useEffect(() => {
    let sixth = gsap.timeline({
      scrollTrigger: {
        trigger: ".about_parent",
        pin: true,
        pinSpacing: false,
      },
    });
  }, []);
  // useEffect(() => {
  //   let about = gsap.matchMedia();
  //   about.add("(min-width: 992px)", () => {
  //     let about_value = gsap.timeline({
  //       scrollTrigger: {
  //         trigger: ".about_parent",
  //         start: "top top",
  //         end: "bottom top",
  //       },
  //     });
  //     about_value.from(".about_text", {
  //       yPercent: 100,
  //       autoAlpha: 0,
  //       ease: "back(2)",
  //       stagger: 0.02,
  //     });
  //   });
  // }, []);
  return (
    <>
      <section className="bg_light_white padding_y163 about_parent min-vh-100 overflow-hidden">
        <div className="custom_container container about_text pt-xl-5">
          <p className="mb-0 fw-normal font_5xl color_dark_gray ff_mundial_normal custom_letter_spacing meeting_para mx-auto">
            Ora hai compreso che il futuro delle tue
            <span className="common_button mx-1 font_2xl mx-sm-3">vendite</span>
            è digitale e hai scoperto
            <br className="d-md-block d-none"></br>
            <span className="common_button mx-1 font_2xl ms-sm-0 me-sm-3 margin_top">
              come
            </span>
            usiamo il
            <span className="common_button mx-1 font_2xl mx-sm-3 margin_top">
              marketing converazionale
            </span>
            e gli
            <span className="common_button mx-1 font_2xl mx-sm-3 margin_top">
              strumenti tech-driven
            </span>
            da noi sviluppati
            <br className="d-md-block d-none"></br> per ottenere una
            <span className="common_button mx-1 font_2xl mx-sm-3 margin_top">
              qualifica digitale real-time
            </span>
            e trasmetterti così i dati.<br className="d-md-block d-none"></br>
            Vogliamo utilizzare l’esperienza acquisita nel
            <span className="common_button mx-1 font_2xl mx-sm-3 margin_top">
              tempo
            </span>
            per ideare una strategia
            <span className="common_button mx-1 font_2xl me-sm-0 ms-sm-3 margin_top">
              personalizzata
            </span>
            <br className="d-md-block d-none"></br>
            proprio come se fossimo il tuo
            <span className="common_button mx-1 font_2xl mx-sm-3 margin_top">
              partner
            </span>
            integrato nel tuo team e nel tuo
            <span className="common_button mx-1 font_2xl me-sm-0 ms-sm-3 margin_top">
              CRM
            </span>
          </p>
          <div className="d-flex justify-content-center pt-5 mt-5 position-relative z_index2">
            <div>
              <div className="d-flex align-items-center">
                <button className="Calendly_button fw-normal mx-auto d-flex ff_mundial_normal font_2xl color_gray">
                  fissa un meeting
                </button>
                <button className="Calendly_button fw-normal mx-auto d-flex ff_mundial_normal font_2xl color_gray parliamone">
                  chat
                </button>
              </div>
              <div className="d-flex justify-content-center gap-1 gap-sm-3 mt-sm-4 mt-2 align-items-center">
                <img className="image_hight" src={man} alt="man" />
                <p className="mb-0 font_md color_gray d-none d-xl-block">
                  <span className="fw_light">Matteo,</span> Business Development
                  Manager
                </p>
                <p className="mb-0 font_md color_gray d-xl-none">
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

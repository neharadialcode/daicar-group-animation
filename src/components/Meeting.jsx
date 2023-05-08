import React, { useEffect } from "react";
import meetingManImg from "../assets/images/svg/meeting_man_img.svg";
import gsap from "gsap";

function About() {
  useEffect(() => {
    let third = gsap.matchMedia();
    third.add("(min-width:576px)", () => {
      let sixth = gsap.timeline({
        scrollTrigger: {
          trigger: ".about_parent",
          pin: true,
          pinSpacing: false,
        },
      });
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
      <section className="bg_light_white custom_content_padding about_parent min-vh-100 overflow-hidden">
        <div className="custom_container container about_text pt-xl-5">
          <p className="mb-0 fw-normal font_5xl color_dark_gray ff_mundial_regular custom_letter_spacing meeting_para mx-auto px-2 px-sm-0">
            Ora hai compreso che il futuro delle tue
            <span className="common_button mx-2 font_2xl mx-sm-3">vendite</span>
            è digitale e hai scoperto
            <br className="d-none d-lg-block"></br>
            <span className="common_button mx-2 font_2xl ms-sm-3 ms-lg-0 me-sm-3 margin_top">
              come
            </span>
            usiamo il
            <span className="common_button me-2 font_2xl mx-sm-3 margin_top">
              marketing converazionale
            </span>
            e gli
            <span className="common_button font_2xl mx-2 ms-lg-3 me-sm-3 margin_top">
              strumenti tech-driven
            </span>
            da noi sviluppati&nbsp;
            <br className="d-none d-xl-block"></br>per ottenere una
            <span className="common_button font_2xl me-2 ms-lg-3 me-sm-3 margin_top">
              qualifica digitale real-time
            </span>
            e trasmetterti così i dati.<br className="d-md-block d-none"></br>
            Vogliamo utilizzare l’esperienza acquisita nel
            <span className="common_button mx-2 font_2xl mx-sm-3 margin_top">
              tempo
            </span>
            per ideare una strategia
            <span className="common_button mx-2 font_2xl ms-xl-3 me-sm-3 me-xl-0 margin_top">
              personalizzata
            </span>
            <br className="d-none d-xl-block"></br>
            proprio come se fossimo il tuo
            <span className="common_button me-2 font_2xl mx-sm-3 margin_top">
              partner
            </span>
            integrato nel tuo team e nel tuo
            <span className="common_button mx-2 font_2xl me-sm-0 ms-sm-3 margin_top">
              CRM
            </span>
          </p>

          <div className="pt-4 pt-lg-5 mt-sm-5 position-relative z_index2">
            <div className="d-flex align-items-center justify-content-center meeting_btn_parent">
              <button className="ff_mundial_regular hero_btn me-4 me-lg-5 mt-5 mt-sm-0">
                <span className="d-sm-none">F</span>
                <span className="d-none d-sm-inline-block">f</span>issa un
                meeting
              </button>
              <button className="ff_mundial_regular hero_btn meeting_border_line parliamone ms-3 d-none d-sm-block">
                chat
              </button>
            </div>
            <div className="d-flex justify-content-center gap-1 gap-sm-3 mt-sm-4 mt-2 align-items-center fissa-meeting-content-parent">
              <img
                className="meeting_man_img me-2"
                src={meetingManImg}
                alt="meetingManImg"
              />
              <p className="mb-0 ff_mundial_regular font_md color_gray d-none d-xl-block">
                <span className="fw_light">Matteo,</span> Business Development
                Manager
              </p>
              <p className="mb-0 ff_mundial_regular font_md color_gray d-xl-none">
                <span className="fw_light">Matteo,</span>
                <br className="d-sm-none" />
                <span className="ff_mundial_light">
                  Business Development Manager
                </span>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;

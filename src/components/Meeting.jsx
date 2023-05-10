import React, { useEffect } from "react";
import meetingManImg from "../assets/images/svg/meeting_man_img.svg";
import gsap from "gsap";

function Meeting() {
  useEffect(() => {
    let meetingValue = gsap.matchMedia();
    meetingValue.add("(min-width:1600px)", () => {
      let meeting = gsap.timeline({
        scrollTrigger: {
          trigger: ".meeting_parent",
          start: "top top",
          end: "bottom center",
          scrub: 1,
        },
      });
      meeting.fromTo(
        ".meeting_parent",
        {
          yPercent: 0,
        },
        {
          yPercent: -20,
        }
      );
    });
    meetingValue.add("(min-width:992px) and (max-width:1599.98px)", () => {
      let meeting = gsap.timeline({
        scrollTrigger: {
          trigger: ".meeting_parent",
          markers: true,
          start: "top top",
          end: "bottom center",
          scrub: 1,
        },
      });
      meeting.fromTo(
        ".meeting_parent",
        {
          yPercent: 0,
        },
        {
          yPercent: -40,
        }
      );
    });
  }, []);
  return (
    <>
      <div
        className="bg_light_white custom_content_padding meeting_parent min-vh-100 overflow-hidden"
        id="contatti"
      >
        <div className="custom_container container about_text pt-xxl-5">
          <p className="mb-0 font_5xl color_dark_gray custom_letter_spacing meeting_para mx-auto px-2 px-sm-0">
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

          <div className="pt-xl-4 pt-xxl-5 mt-xl-5 position-relative z_index2">
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
      </div>
    </>
  );
}

export default Meeting;

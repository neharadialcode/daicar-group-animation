import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Footer from "./Footer";
gsap.registerPlugin(ScrollTrigger);

function Meeting() {
  useEffect(() => {
    let mm = gsap.matchMedia();
    mm.add("(min-width: 1200px)", () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: "#contatti",
          start: "top 50%",
          end: "bottom 30%",
        },
      });
      tl.from([".meeting_first_line"], {
        x: -100,
        autoAlpha: 0,
        stagger: 1,
        ease: "back(3)",
        duration: 0.8,
      }).from([".meeting_second_line"], {
        x: -100,
        autoAlpha: 0,
        stagger: 1,
        ease: "back(3)",
        duration: 0.8,
      });

      const tl2 = gsap.timeline({
        scrollTrigger: {
          trigger: "#contatti",
          start: "top 10%",
          pin: true,
        },
      });

      tl2
        .from([".meeting_third_line"], {
          x: -100,
          autoAlpha: 0,
          stagger: 1,
          ease: "back(3)",
          duration: 0.8,
        })
        .from([".meeting_fourth_line"], {
          x: -100,
          autoAlpha: 0,
          stagger: 1,
          ease: "back(3)",
          duration: 0.8,
        })
        .from([".meeting_fifth_line"], {
          x: -100,
          autoAlpha: 0,
          stagger: 1,
          ease: "back(3)",
          duration: 0.8,
        });
    });
    mm.add("(max-width: 1199px)", () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: "#contatti",
          start: "top 30%",
          end: "bottom top",
        },
      });
      tl.from(["#meeting-paragraph"], {
        y: 100,
        autoAlpha: 0,
        stagger: 1,
        ease: "back(3)",
        duration: 0.8,
      });
    });
  }, []);
  const meetingBtn = () => {
    if (window.innerHeight) {
      gsap.to(window, { duration: 1, scrollTo: 30000, ease: "linear" });
    }
  };
  return (
    <>
        <div
          className="bg_light_white custom_content_padding overflow-hidden"
          id="contatti"
        >
          <div className="custom_container container">
            <div
              id="meeting-paragraph-container"
              className="mb-0 font_5xl color_dark_gray custom_letter_spacing meeting_para mx-auto px-2 px-sm-0 text-center d-none d-xl-block"
            >
              <div>
                <p className="meeting_first_line">
                  Ora hai compreso che il futuro delle tue
                  <a href="#footer" onClick={() => meetingBtn()}>
                    <span className="custom_tab_button_012 cursor-pointer common_button color_dark_gray mx-2 font_2xl mx-sm-3">
                      vendite
                    </span>
                  </a>
                  è digitale e hai scoperto
                </p>
                <p className="meeting_second_line">
                  <a href="#footer" onClick={() => meetingBtn()}>
                    <span className="custom_tab_button_012 cursor-pointer common_button color_dark_gray mx-2 font_2xl ms-sm-3 ms-lg-0 me-sm-3 meeting_custom_top_space">
                      come
                    </span>
                  </a>
                  usiamo il
                  <a href="#footer" onClick={() => meetingBtn()}>
                    <span className="custom_tab_button_012 cursor-pointer common_button color_dark_gray me-2 font_2xl mx-sm-3 meeting_custom_top_space">
                      marketing converazionale
                    </span>
                  </a>
                  e gli
                  <a href="#footer" onClick={() => meetingBtn()}>
                    <span className="custom_tab_button_012 cursor-pointer common_button color_dark_gray font_2xl mx-2 ms-lg-3 me-sm-3 meeting_custom_top_space">
                      strumenti tech<span className="ff_math">-</span>driven
                    </span>
                  </a>
                  da noi sviluppati
                </p>
              </div>
              <div className="meeting_two_block">
                <p className="meeting_third_line">
                  per ottenere una
                  <a href="#footer" onClick={() => meetingBtn()}>
                    <span className="custom_tab_button_012 cursor-pointer common_button color_dark_gray font_2xl me-2 ms-lg-3 me-sm-3 meeting_custom_top_space">
                      qualifica digitale real<span className="ff_math">-</span>
                      time
                    </span>
                  </a>
                  e trasmetterti così i dati.
                </p>
                <p className="meeting_fourth_line">
                  Vogliamo utilizzare l’esperienza acquisita nel
                  <a href="#footer" onClick={() => meetingBtn()}>
                    <span className="custom_tab_button_012 cursor-pointer common_button color_dark_gray mx-2 font_2xl mx-sm-3 meeting_custom_top_space">
                      tempo
                    </span>
                  </a>
                  per ideare una strategia
                  <a href="#footer" onClick={() => meetingBtn()}>
                    <span className="custom_tab_button_012 cursor-pointer common_button color_dark_gray mx-2 font_2xl ms-xl-3 me-sm-3 me-xl-0 meeting_custom_top_space">
                      personalizzata
                    </span>
                  </a>
                </p>
                <p className="meeting_fifth_line">
                  proprio come se fossimo il tuo
                  <a href="#footer" onClick={() => meetingBtn()}>
                    <span className="custom_tab_button_012 cursor-pointer common_button color_dark_gray me-2 font_2xl mx-sm-3 meeting_custom_top_space">
                      partner
                    </span>
                  </a>
                  integrato nel tuo team e nel tuo
                  <a href="#footer" onClick={() => meetingBtn()}>
                    <span className="custom_tab_button_012 cursor-pointer common_button color_dark_gray mx-2 font_2xl me-sm-0 ms-sm-3 meeting_custom_top_space">
                      CRM
                    </span>
                  </a>
                </p>
              </div>
            </div>

            <div
              id="meeting-paragraph"
              className="mb-0 font_5xl color_dark_gray custom_letter_spacing meeting_para mx-auto text-center d-xl-none"
            >
              Ora hai compreso che il futuro delle tue
              <a href="#footer" onClick={() => meetingBtn()}>
                <span className="custom_tab_button_012 cursor-pointer common_button color_dark_gray mx-2 font_2xl mx-sm-3">
                  vendite
                </span>
              </a>
              è digitale e hai scoperto
              <a href="#footer" onClick={() => meetingBtn()}>
                <span className="custom_tab_button_012 cursor-pointer common_button color_dark_gray mx-2 font_2xl ms-sm-3 ms-lg-0 me-sm-3 meeting_custom_top_space">
                  come
                </span>
              </a>
              usiamo il
              <a href="#footer" onClick={() => meetingBtn()}>
                <span className="custom_tab_button_012 cursor-pointer common_button color_dark_gray me-2 font_2xl mx-sm-3 meeting_custom_top_space">
                  marketing converazionale
                </span>
              </a>
              e gli
              <a href="#footer" onClick={() => meetingBtn()}>
                <span className="custom_tab_button_012 cursor-pointer common_button color_dark_gray font_2xl mx-2 ms-lg-3 me-sm-3 meeting_custom_top_space">
                  strumenti tech<span className="ff_math">-</span>driven
                </span>
              </a>
              da noi sviluppati&nbsp; per ottenere una
              <a href="#footer" onClick={() => meetingBtn()}>
                <span className="custom_tab_button_012 cursor-pointer common_button color_dark_gray font_2xl me-2 ms-lg-3 me-sm-3 meeting_custom_top_space">
                  qualifica digitale real<span className="ff_math">-</span>time
                </span>
              </a>
              e trasmetterti così i dati.<br className="d-md-block d-none"></br>
              Vogliamo utilizzare l’esperienza acquisita nel
              <a href="#footer" onClick={() => meetingBtn()}>
                <span className="custom_tab_button_012 cursor-pointer common_button color_dark_gray mx-2 font_2xl mx-sm-3 meeting_custom_top_space">
                  tempo
                </span>
              </a>
              per ideare una strategia
              <a href="#footer" onClick={() => meetingBtn()}>
                <span className="custom_tab_button_012 cursor-pointer common_button color_dark_gray mx-2 font_2xl ms-xl-3 me-sm-3 me-xl-0 meeting_custom_top_space">
                  personalizzata
                </span>
              </a>
              proprio come se fossimo il tuo
              <a href="#footer" onClick={() => meetingBtn()}>
                <span className="custom_tab_button_012 cursor-pointer common_button color_dark_gray me-2 font_2xl mx-sm-3 meeting_custom_top_space">
                  partner
                </span>
              </a>
              integrato nel tuo team e nel tuo
              <a href="#footer" onClick={() => meetingBtn()}>
                <span className="custom_tab_button_012 cursor-pointer common_button color_dark_gray mx-2 font_2xl me-sm-0 ms-sm-3 meeting_custom_top_space">
                  CRM
                </span>
              </a>
            </div>
          </div>
          <Footer />
        </div>
    </>
  );
}

export default Meeting;

import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

function Meeting() {
  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#contatti",
        start: "top top",
        pin: true,
      },
    });

    tl.from(["#meeting-paragraph-container p", "#meeting-paragraph"], {
      y: -20,
      autoAlpha: 0,
      stagger: 0.07,
    });
  }, []);

  return (
    <>
      <div
        className="contatti_section bg_light_white custom_content_padding meeting_parent min-vh-100 overflow-hidden"
        id="contatti"
      >
        <div className="custom_container container about_text pt-xxl-5">
          <div
            id="meeting-paragraph-container"
            className="mb-0 font_5xl color_dark_gray custom_letter_spacing meeting_para mx-auto px-2 px-sm-0 text-center d-none d-xl-block"
          >
            <p>
              Ora hai compreso che il futuro delle tue
              <a href="#footer">
                <span className="custom_tab_button_012 cursor-pointer common_button color_dark_gray mx-2 font_2xl mx-sm-3">
                  vendite
                </span>
              </a>
              è digitale e hai scoperto
            </p>
            <p>
              <a href="#footer">
                <span className="custom_tab_button_012 cursor-pointer common_button color_dark_gray mx-2 font_2xl ms-sm-3 ms-lg-0 me-sm-3 meeting_custom_top_space">
                  come
                </span>
              </a>
              usiamo il
              <a href="#footer">
                <span className="custom_tab_button_012 cursor-pointer common_button color_dark_gray me-2 font_2xl mx-sm-3 meeting_custom_top_space">
                  marketing converazionale
                </span>
              </a>
              e gli
              <a href="#footer">
                <span className="custom_tab_button_012 cursor-pointer common_button color_dark_gray font_2xl mx-2 ms-lg-3 me-sm-3 meeting_custom_top_space">
                  strumenti tech<span className="ff_math">-</span>driven
                </span>
              </a>
              da noi sviluppati
            </p>
            <p>
              per ottenere una
              <a href="#footer">
                <span className="custom_tab_button_012 cursor-pointer common_button color_dark_gray font_2xl me-2 ms-lg-3 me-sm-3 meeting_custom_top_space">
                  qualifica digitale real<span className="ff_math">-</span>time
                </span>
              </a>
              e trasmetterti così i dati.
            </p>
            <p>
              Vogliamo utilizzare l’esperienza acquisita nel
              <a href="#footer">
                <span className="custom_tab_button_012 cursor-pointer common_button color_dark_gray mx-2 font_2xl mx-sm-3 meeting_custom_top_space">
                  tempo
                </span>
              </a>
              per ideare una strategia
              <a href="#footer">
                <span className="custom_tab_button_012 cursor-pointer common_button color_dark_gray mx-2 font_2xl ms-xl-3 me-sm-3 me-xl-0 meeting_custom_top_space">
                  personalizzata
                </span>
              </a>
            </p>
            <p>
              proprio come se fossimo il tuo
              <a href="#footer">
                <span className="custom_tab_button_012 cursor-pointer common_button color_dark_gray me-2 font_2xl mx-sm-3 meeting_custom_top_space">
                  partner
                </span>
              </a>
              integrato nel tuo team e nel tuo
              <a href="#footer">
                <span className="custom_tab_button_012 cursor-pointer common_button color_dark_gray mx-2 font_2xl me-sm-0 ms-sm-3 meeting_custom_top_space">
                  CRM
                </span>
              </a>
            </p>
          </div>

          <div
            id="meeting-paragraph"
            className="mb-0 font_5xl color_dark_gray custom_letter_spacing meeting_para mx-auto px-2 px-sm-0 text-center d-xl-none"
          >
            Ora hai compreso che il futuro delle tue
            <a href="#footer">
              <span className="custom_tab_button_012 cursor-pointer common_button color_dark_gray mx-2 font_2xl mx-sm-3">
                vendite
              </span>
            </a>
            è digitale e hai scoperto
            <a href="#footer">
              <span className="custom_tab_button_012 cursor-pointer common_button color_dark_gray mx-2 font_2xl ms-sm-3 ms-lg-0 me-sm-3 meeting_custom_top_space">
                come
              </span>
            </a>
            usiamo il
            <a href="#footer">
              <span className="custom_tab_button_012 cursor-pointer common_button color_dark_gray me-2 font_2xl mx-sm-3 meeting_custom_top_space">
                marketing converazionale
              </span>
            </a>
            e gli
            <a href="#footer">
              <span className="custom_tab_button_012 cursor-pointer common_button color_dark_gray font_2xl mx-2 ms-lg-3 me-sm-3 meeting_custom_top_space">
                strumenti tech<span className="ff_math">-</span>driven
              </span>
            </a>
            da noi sviluppati&nbsp; per ottenere una
            <a href="#footer">
              <span className="custom_tab_button_012 cursor-pointer common_button color_dark_gray font_2xl me-2 ms-lg-3 me-sm-3 meeting_custom_top_space">
                qualifica digitale real<span className="ff_math">-</span>time
              </span>
            </a>
            e trasmetterti così i dati.<br className="d-md-block d-none"></br>
            Vogliamo utilizzare l’esperienza acquisita nel
            <a href="#footer">
              <span className="custom_tab_button_012 cursor-pointer common_button color_dark_gray mx-2 font_2xl mx-sm-3 meeting_custom_top_space">
                tempo
              </span>
            </a>
            per ideare una strategia
            <a href="#footer">
              <span className="custom_tab_button_012 cursor-pointer common_button color_dark_gray mx-2 font_2xl ms-xl-3 me-sm-3 me-xl-0 meeting_custom_top_space">
                personalizzata
              </span>
            </a>
            proprio come se fossimo il tuo
            <a href="#footer">
              <span className="custom_tab_button_012 cursor-pointer common_button color_dark_gray me-2 font_2xl mx-sm-3 meeting_custom_top_space">
                partner
              </span>
            </a>
            integrato nel tuo team e nel tuo
            <a href="#footer">
              <span className="custom_tab_button_012 cursor-pointer common_button color_dark_gray mx-2 font_2xl me-sm-0 ms-sm-3 meeting_custom_top_space">
                CRM
              </span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Meeting;

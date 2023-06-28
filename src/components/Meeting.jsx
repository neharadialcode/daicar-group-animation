import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Footer from "./Footer";
gsap.registerPlugin(ScrollTrigger);

function Meeting() {
  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#contatti",
        start: "top 70%",
        end: "bottom 80%",
        scrub: true,
        fastScrollEnd: true,
      },
    });
    tl.from([".meeting_first_line"], {
      x: -100,
      autoAlpha: 0,
      stagger: 1,
    })
      .from([".meeting_second_line"], {
        x: 100,
        autoAlpha: 0,
        stagger: 1,
      })
      .from([".meeting_third_line"], {
        x: -100,
        autoAlpha: 0,
        stagger: 1,
      })
      .from([".meeting_fourth_line"], {
        x: 100,
        autoAlpha: 0,
        stagger: 1,
      })
      .from([".meeting_fifth_line"], {
        x: -100,
        autoAlpha: 0,
        stagger: 1,
      });
  }, []);
  const meetingBtnLine1 = () => {
    if (window.innerWidth > 2000) {
      gsap.to(window, { duration: 1, scrollTo: 32600, ease: "linear" });
    }
    if (window.innerWidth > 1600 && window.innerHeight <= 1090) {
      gsap.to(window, { duration: 1, scrollTo: 24550, ease: "linear" });
    }
    if (window.innerWidth < 1599) {
      gsap.to(window, { duration: 0.3, scrollTo: 18000, ease: "linear" });
    }
    if (window.innerWidth < 1499) {
      gsap.to(window, { duration: 0.3, scrollTo: 18300, ease: "linear" });
    }
    if (window.innerWidth < 1300) {
      gsap.to(window, { duration: 0.3, scrollTo: 19000, ease: "linear" });
    }
    if (window.innerWidth < 1100) {
      gsap.to(window, { duration: 0.3, scrollTo: 14360, ease: "linear" });
    }
    if (window.innerWidth < 992) {
      gsap.to(window, { duration: 0.3, scrollTo: 19900, ease: "linear" });
    }
    if (window.innerWidth < 769) {
      gsap.to(window, { duration: 0.3, scrollTo: 17550, ease: "linear" });
    }
    if (window.innerWidth < 576) {
      gsap.to(window, { duration: 0.3, scrollTo: 10800, ease: "linear" });
    }
  };
  const meetingBtnLine2 = () => {
    if (window.innerWidth > 2000) {
      gsap.to(window, { duration: 1, scrollTo: 32650, ease: "linear" });
    }
    if (window.innerWidth > 1600 && window.innerHeight <= 1090) {
      gsap.to(window, { duration: 1, scrollTo: 24650, ease: "linear" });
    }
    if (window.innerWidth < 1599) {
      gsap.to(window, { duration: 1, scrollTo: 18100, ease: "linear" });
    }
    if (window.innerWidth < 1499) {
      gsap.to(window, { duration: 1, scrollTo: 18400, ease: "linear" });
    }
    if (window.innerWidth < 1300) {
      gsap.to(window, { duration: 1, scrollTo: 19080, ease: "linear" });
    }
    if (window.innerWidth < 1100) {
      gsap.to(window, { duration: 1, scrollTo: 14460, ease: "linear" });
    }
    if (window.innerWidth < 992) {
      gsap.to(window, { duration: 1, scrollTo: 20000, ease: "linear" });
    }
    if (window.innerWidth < 769) {
      gsap.to(window, { duration: 1, scrollTo: 17680, ease: "linear" });
    }
    if (window.innerWidth < 576) {
      gsap.to(window, { duration: 1, scrollTo: 11000, ease: "linear" });
    }
  };
  const meetingBtnLine3 = () => {
    if (window.innerWidth > 2000) {
      gsap.to(window, { duration: 1, scrollTo: 32720, ease: "linear" });
    }
    if (window.innerWidth > 1600 && window.innerHeight <= 1090) {
      gsap.to(window, { duration: 1, scrollTo: 24720, ease: "linear" });
    }
    if (window.innerWidth < 1599) {
      gsap.to(window, { duration: 1, scrollTo: 18200, ease: "linear" });
    }
    if (window.innerWidth < 1499) {
      gsap.to(window, { duration: 1, scrollTo: 18500, ease: "linear" });
    }
    if (window.innerWidth < 1300) {
      gsap.to(window, { duration: 1, scrollTo: 19150, ease: "linear" });
    }
    if (window.innerWidth < 1100) {
      gsap.to(window, { duration: 1, scrollTo: 14560, ease: "linear" });
    }
    if (window.innerWidth < 992) {
      gsap.to(window, { duration: 1, scrollTo: 20100, ease: "linear" });
    }
    if (window.innerWidth < 769) {
      gsap.to(window, { duration: 1, scrollTo: 17780, ease: "linear" });
    }
    if (window.innerWidth < 576) {
      gsap.to(window, { duration: 1, scrollTo: 11100, ease: "linear" });
    }
  };
  const meetingBtnLine4 = () => {
    if (window.innerWidth > 2000) {
      gsap.to(window, { duration: 1, scrollTo: 32800, ease: "linear" });
    }
    if (window.innerWidth > 1600 && window.innerHeight <= 1090) {
      gsap.to(window, { duration: 1, scrollTo: 24850, ease: "linear" });
    }
    if (window.innerWidth < 1599) {
      gsap.to(window, { duration: 1, scrollTo: 18300, ease: "linear" });
    }
    if (window.innerWidth < 1499) {
      gsap.to(window, { duration: 1, scrollTo: 18600, ease: "linear" });
    }
    if (window.innerWidth < 1300) {
      gsap.to(window, { duration: 1, scrollTo: 19800, ease: "linear" });
    }
    if (window.innerWidth < 1100) {
      gsap.to(window, { duration: 1, scrollTo: 14660, ease: "linear" });
    }
    if (window.innerWidth < 992) {
      gsap.to(window, { duration: 1, scrollTo: 20300, ease: "linear" });
    }
    if (window.innerWidth < 769) {
      gsap.to(window, { duration: 1, scrollTo: 17900, ease: "linear" });
    }
    if (window.innerWidth < 576) {
      gsap.to(window, { duration: 1, scrollTo: 11400, ease: "linear" });
    }
  };
  const meetingBtnLine5 = () => {
    if (window.innerWidth > 2000) {
      gsap.to(window, { duration: 1, scrollTo: 33400, ease: "linear" });
    }
    if (window.innerWidth > 1600 && window.innerHeight <= 1090) {
      gsap.to(window, { duration: 1, scrollTo: 25000, ease: "linear" });
    }
    if (window.innerWidth < 1599) {
      gsap.to(window, { duration: 1, scrollTo: 19000, ease: "linear" });
    }
    if (window.innerWidth < 1300) {
      gsap.to(window, { duration: 1, scrollTo: 20000, ease: "linear" });
    }
    if (window.innerWidth < 1100) {
      gsap.to(window, { duration: 1, scrollTo: 15200, ease: "linear" });
    }
    if (window.innerWidth < 992) {
      gsap.to(window, { duration: 1, scrollTo: 20500, ease: "linear" });
    }
    if (window.innerWidth < 769) {
      gsap.to(window, { duration: 1, scrollTo: 20000, ease: "linear" });
    }
    if (window.innerWidth < 576) {
      gsap.to(window, { duration: 1, scrollTo: 16800, ease: "linear" });
    }
  };
  return (
    <>
      <div className="bg_light_white custom_content_padding overflow-hidden">
        <div className="custom_container container" id="contatti">
          <div
            id="meeting-paragraph-container"
            className="mb-0 font_5xl color_dark_gray custom_letter_spacing meeting_para mx-auto px-2 px-sm-0 text-center d-noned-xl-block meeting_stanza"
          >
            <p className="meeting_first_line mb-0 mb-xl-3">
              Ora hai compreso che il futuro delle tue
              <a href="#line_2" onClick={() => meetingBtnLine1()}>
                <span className="custom_tab_button_012 cursor-pointer common_button color_dark_gray mx-2 font_2xl mx-sm-3">
                  vendite
                </span>
              </a>
              è digitale e hai scoperto
            </p>
            <p className="meeting_second_line mb-0 mb-xl-3" id="line_2">
              <a href="#line_3" onClick={() => meetingBtnLine2()}>
                <span className="custom_tab_button_012 cursor-pointer common_button color_dark_gray mx-2 font_2xl ms-sm-3 ms-lg-0 me-sm-3 meeting_custom_top_space">
                  come
                </span>
              </a>
              usiamo il
              <a href="#line_3" onClick={() => meetingBtnLine2()}>
                <span className="custom_tab_button_012 cursor-pointer common_button color_dark_gray me-2 font_2xl mx-sm-3 meeting_custom_top_space">
                  marketing converazionale
                </span>
              </a>
              e gli
              <a href="#line_3" onClick={() => meetingBtnLine2()}>
                <span className="custom_tab_button_012 cursor-pointer common_button color_dark_gray font_2xl mx-2 ms-lg-3 me-sm-3 meeting_custom_top_space">
                  strumenti tech<span className="ff_math">-</span>driven
                </span>
              </a>
              da noi sviluppati
            </p>
            <p className="meeting_third_line mb-0 mb-xl-3" id="line_3">
              per ottenere una
              <a href="#line_4" onClick={() => meetingBtnLine3()}>
                <span className="custom_tab_button_012 cursor-pointer common_button color_dark_gray font_2xl me-2 ms-lg-3 me-sm-3 meeting_custom_top_space">
                  qualifica digitale real<span className="ff_math">-</span>
                  time
                </span>
              </a>
              e trasmetterti così i dati.
            </p>
            <p className="meeting_fourth_line mb-0 mb-xl-3" id="line_4">
              Vogliamo utilizzare l’esperienza acquisita nel
              <a href="#line_5" onClick={() => meetingBtnLine4()}>
                <span className="custom_tab_button_012 cursor-pointer common_button color_dark_gray mx-2 font_2xl mx-sm-3 meeting_custom_top_space">
                  tempo
                </span>
              </a>
              per ideare una strategia
              <a href="#line_5" onClick={() => meetingBtnLine4()}>
                <span className="custom_tab_button_012 cursor-pointer common_button color_dark_gray mx-2 font_2xl ms-xl-3 me-sm-3 me-xl-0 meeting_custom_top_space">
                  personalizzata
                </span>
              </a>
            </p>
            <p className="meeting_fifth_line mb-0 mb-xl-3" id="line_5">
              proprio come se fossimo il tuo
              <a href="#line_6" onClick={() => meetingBtnLine5()}>
                <span className="custom_tab_button_012 cursor-pointer common_button color_dark_gray me-2 font_2xl mx-sm-3 meeting_custom_top_space">
                  partner
                </span>
              </a>
              integrato nel tuo team e nel tuo
              <a href="#line_6" onClick={() => meetingBtnLine5()}>
                <span className="custom_tab_button_012 cursor-pointer common_button color_dark_gray mx-2 font_2xl me-sm-0 ms-sm-3 meeting_custom_top_space">
                  CRM
                </span>
              </a>
            </p>
          </div>
        </div>
        <div id="line_6">
          <Footer />
        </div>
      </div>
    </>
  );
}

export default Meeting;

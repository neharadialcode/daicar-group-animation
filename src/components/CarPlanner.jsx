import React from "react";
import carplannerImg from "../assets/images/svg/carplanner-img.svg";
import linkdinIcon from "../assets/images/svg/linkdin-icon.svg";
import carImg from "../assets/images/svg/btn-car.svg";
import diacararrow from "../assets/images/svg/diacar-arrow.svg";
import roadmapline from "../assets/images/svg/roadmap-line.svg";
import roadmaparrow from "../assets/images/svg/roapmap-arrow.svg";
import { useLayoutEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { gsap } from "gsap";
import { CarIcon } from "./Icons";
const CarPlanner = () => {
  gsap.registerPlugin(ScrollTrigger);
  useLayoutEffect(() => {
    let car = gsap.matchMedia();
    car.add("(min-width:992px)", () => {
      let planner = gsap.timeline({
        scrollTrigger: {
          trigger: ".carplanner_parent",
          start: "top top",
          end: "bottom top",
          scrub: 1,
          pin: true,
          pinSpacing: false,
          markers: true,
        },
      });
      planner
        .fromTo(
          ".car_text",
          {
            xPercent: 0,
          },
          {
            xPercent: -150,
          }
        )
        .fromTo(
          ".car_text_2",
          {
            xPercent: 150,
          },
          {
            xPercent: 0,
          }
        );
      let planner2 = gsap.timeline({
        scrollTrigger: {
          trigger: ".carplanner_parent2",
          start: "top top",
          end: "bottom top",
        },
      });
      planner2
        .fromTo(
          ".arrow_icon_one",
          {
            width: "4%",
          },
          {
            width: "8%",
          }
        )
        .fromTo(
          ".arrow_icon_one",
          {
            width: "8%",
          },
          {
            width: "4%",
          }
        )
        .fromTo(
          ".arrow_icon_two",
          {
            width: "4%",
          },
          {
            width: "8%",
          }
        )
        .from(".planner_text_2", {
          opacity: 1,
        });
    });
  }, []);
  return (
    <>
      <div className="carplanner_bg min-vh-100 d-flex align-items-center justify-content-between position-relative carplanner_parent overflow-hidden">
        <div className="container carplanner_parent2">
          <div className=" d-none d-lg-block">
            <div className="mt-lg-5 pt-lg-5 d-flex align-items-center gap-4 justify-content-end position-absolute daicar_arrow_set">
              <p className="mb-0 font_md font_md lh_125 color_white_off white_space">
                Daicar Group
              </p>
              <img src={diacararrow} alt="diacararrow" />
            </div>
          </div>
          <div className="row align-items-end justify-content-between car_text">
            <div className="carplanner_cards">
              <a
                href="#"
                className="d-flex justify-content-between align-items-center mb-4 pb-lg-5"
              >
                <div className="carplanner_logo">
                  <img
                    className="w-100"
                    src={carplannerImg}
                    alt="carplanner-image"
                  />
                </div>
                <a target="blanck" href="https://in.linkedin.com/">
                  <img src={linkdinIcon} alt="linkdin-icon" />
                </a>
              </a>
              <p className="fw-normal color_white_off font_2xl ff_mundial_regular mb-4 pb-lg-4 pe-xl-5">
                Carplanner.com nasce nel 2015 posizionandosi nel settore
                automotive, specializzata nella lead generation innovativa.
              </p>
              <button className="carplanner_btn font_xl text-white fw-normal border-0 d-flex gap-4 align-items-center ff_mundial_regular mb-4">
                <CarIcon />
                Automotive
              </button>
              <p className="mb-0 ff_mundial_light font_2xl color_white_off mt-5 ps-3">
                2015
              </p>
            </div>
            <div className="carplanner_cards">
              <p className="fw-normal color_white_off font_lg ff_mundial_regular mb-4 planner_text_2 opacity-25">
                Sviluppiamo la nostra piattaforma proprietaria tramite
                tecnologia A.I. <br className="d-none d-xl-block" />
                Nello stesso anno entriamo a far parte di Facebook Success Case
                per lo sviluppo di chatbot sulla piattaforma Messenger
              </p>
              <p className="mb-0 ff_mundial_light font_2xl color_white_off mt-5">
                2018
              </p>
            </div>
          </div>
          <div className="position-relative mt-4">
            <img
              className="position-absolute roadmaparrow_left arrow_icon_one"
              src={roadmaparrow}
              alt="roadmaparrow"
            />
            <img
              className="position-absolute roadmaparrow_center arrow_icon_two"
              src={roadmaparrow}
              alt="roadmaparrow"
            />
            <img src={roadmapline} alt="roadmapline" />
          </div>
        </div>
      </div>
    </>
  );
};

export default CarPlanner;

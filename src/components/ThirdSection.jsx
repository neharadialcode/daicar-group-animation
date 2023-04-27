import React, { useEffect } from "react";
import iconImg from "../assets/images/svg/big-icon.svg";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

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
      );
  }, []);
  return (
    <div className="third_section overflow-hidden vh-200 bg_white z_1">
      <div className="d-flex flex-column justify-content-center vh-100 ">
        <img
          className="w-100 position-absolute big_icon"
          src={iconImg}
          alt="iconImg"
        />
        <div className="main_text">
          <div className="row">
            <div className="col-6">
              <h1>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
                animi qui fugiat ipsa delectus, saepe reprehenderit dignissimos
                distinctio omnis temporibus itaque aspernatur et consectetur
                soluta eaque sint suscipit nostrum hic?
              </h1>
            </div>
            <div className="col-6 position-relative">
              <h1 className="text_1 position-absolute ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
                animi qui fugiat ipsa delectus, saepe reprehenderit dignissimos
                distinctio omnis temporibus itaque aspernatur et consectetur
                soluta eaque sint suscipit nostrum hic?
              </h1>
              <h1 className="text_2 position-absolute ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
                animi qui fugiat ipsa delectus, saepe reprehenderit dignissimos
                distinctio omnis temporibus itaque aspernatur et consectetur
                soluta eaque sint suscipit nostrum hic?
              </h1>
              <h1 className="text_3 position-absolute ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
                animi qui fugiat ipsa delectus, saepe reprehenderit dignissimos
                distinctio omnis temporibus itaque aspernatur et consectetur
                soluta eaque sint suscipit nostrum hic?
              </h1>
              <h1 className="text_4 position-absolute ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
                animi qui fugiat ipsa delectus, saepe reprehenderit dignissimos
                distinctio omnis temporibus itaque aspernatur et consectetur
                soluta eaque sint suscipit nostrum hic?
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThirdSection;

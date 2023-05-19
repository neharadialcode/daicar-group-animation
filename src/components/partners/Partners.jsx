import React, { useEffect, useState } from "react";

import leftTextImg from "../../assets/images/png/partner-left-text-img.png";
import Slider from "react-slick";

import Image from "./Image";
import ParentLogoPara from "./ParentLogoPara";
import data from "./data";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

gsap.registerPlugin(ScrollTrigger);

const Partners = () => {
  const [partnerNname, setPartnerNname] = useState("");
  const [isMobileDevice, setIsMobileDevice] = useState(false);

  const handleMouseEnter = (name) => {
    setPartnerNname(name);
  };
  const handleMouseLeave = () => {
    setPartnerNname("");
  };

  var settings = {
    dots: false,
    infinite: true,
    arrows: false,
    autoplay: true,
    centerMode: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  useEffect(() => {
    window.innerWidth < 576.99 && setIsMobileDevice(true);
    window.innerWidth > 576.99 && setIsMobileDevice(false);
    window.addEventListener("resize", () => {
      window.innerWidth < 576.99 && setIsMobileDevice(true);
      window.innerWidth > 576.99 && setIsMobileDevice(false);
    });
    let mm = gsap.matchMedia();
    mm.add("(min-width: 1200px)", () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: "#partners",
          start: "top bottom",
          end: "top 10%",
          scrub: 1,
          fastScrollEnd: true,
        },
      });
      tl.to("#timeline-content", {
        autoAlpha: 0,
        xPercent: 20,
      })
        .to(
          "#hero-large-arrow-2",
          {
            right: "-150%",
            duration: 4,
          },
          "<"
        )
        .to(
          "#root",
          {
            backgroundColor: "#EDFAFB",
          },
          "-=3"
        );
    });
    mm.add("()min-width:576px) and (max-width: 1199.98px)", () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: "#partners",
          start: "top bottom",
          end: "top 10%",
          scrub: 1,
          fastScrollEnd: true,
        },
      });
      tl.to("#timeline-content", {
        autoAlpha: 0,
        xPercent: 20,
      })
        .to(
          "#hero-large-arrow-2",
          {
            right: "-250%",
            duration: 4,
          },
          "<"
        )
        .to(
          "#root",
          {
            backgroundColor: "#EDFAFB",
          },
          "-=3"
        );
    });
    mm.add("(max-width: 575.98px)", () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: "#partners",
          start: "top 50%",
          end: "top 10%",
          scrub: 1,
          fastScrollEnd: true,
        },
      });
      tl
        //   .to("#timeline-content", {
        //   autoAlpha: 0,
        //   xPercent: 0,
        // })
        //   .to(
        //     ".timeline_arrow_icon",
        //     {
        //       right: "-550%",
        //       duration: 4,
        //     },
        //     "<"
        //   )
        .to(
          "#root",
          {
            backgroundColor: "#EDFAFB",
          },
          "-=3"
        );
    });

    const ctx = gsap.context(() => {
      const tl2 = gsap.timeline({
        scrollTrigger: {
          trigger: "#partners",
          start: "top top",
          scrub: 1,
          pin: true,
        },
      });
      tl2
        .from("#partners-content-heading", {
          y: -20,
          autoAlpha: 0,
        })
        .from("#partner-img-container img", {
          x: -50,
          autoAlpha: 0,
          stagger: 0.07,
        });
    });

    return () => ctx.revert();
  }, []);
  return (
    <div
      id="partners"
      className="partner_parent d-flex justify-content-center align-items-center overflow-hidden min-vh-100"
    >
      <div className="container">
        <div className="position-absolute arrowbtn_set">
          <img src={leftTextImg} alt="partner-left-text-img" />
        </div>
        <div className="partner_text">
          <div className="my-3 my-lg-4 my-xxl-5">
            <div
              id="partners-content-heading"
              className="d-flex align-items-center gap-2 justify-content-center "
            >
              <p className="ff_mundial_regular font_5xl color_dark_gray mb-0 partner_para custom_letter_spacing">
                Non cerchiamo clienti ma
              </p>
              <button className="ff_mundial_regular font_2xl color_dark_gray common_button d-flex mt-2 mt-xxl-1 common_btn">
                partner
              </button>
              <span className="font_lg">.</span>
            </div>
          </div>
          {!isMobileDevice && (
            <>
              {data.map((d, index) => (
                <div
                  id="partner-img-container"
                  key={index}
                  className={`d-none ${
                    index === 1
                      ? "justify-content-around"
                      : "justify-content-between"
                  } align-items-center d-lg-flex py-lg-4 py-xxl-5`}
                >
                  {d.map((item, _i) => (
                    <Image
                      key={_i}
                      src={item.src}
                      alt={item.alt}
                      height={item.height}
                      width={item.width}
                      onMouseEnter={() => handleMouseEnter(item.alt)}
                      onMouseLeave={() => handleMouseLeave()}
                    />
                  ))}
                </div>
              ))}

              {/* for less than 992 */}
              <div
                id="partner-img-container"
                className="d-none d-sm-flex justify-content-center gap-4 align-items-center d-lg-none flex-wrap  py-5"
              >
                {data.map((d) =>
                  d.map((item, _i) => (
                    <Image
                      key={_i}
                      src={item.src}
                      alt={item.alt}
                      height={item.height}
                      width={item.width}
                      onMouseEnter={() => handleMouseEnter(item.alt)}
                      onMouseLeave={() => handleMouseLeave()}
                    />
                  ))
                )}
              </div>
            </>
          )}

          {/* for less than 576 */}
          {isMobileDevice && (
            <div className="py-5 d-sm-none">
              <Slider {...settings}>
                {data.map((d) =>
                  d.map((item, _i) => (
                    <Image
                      key={_i}
                      src={item.src}
                      alt={item.alt}
                      height={item.height}
                      width={item.width}
                    />
                  ))
                )}
              </Slider>
            </div>
          )}

          <div
            style={{ opacity: partnerNname ? "1" : "0" }}
            className="d-none d-sm-block"
          >
            <ParentLogoPara partnerNname={partnerNname} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Partners;

import React, { useEffect, useState } from "react";
import businessLeftTextIcon2 from "../../assets/images/svg/small-arrow-icon-2.svg";
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
    mm.add("(min-width:576px) and (max-width: 1199.98px)", () => {
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
      tl.to(
        "#root",
        {
          backgroundColor: "#EDFAFB",
        },
        "-=3"
      );
    });

    mm.add("(min-width: 992px)", () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: "#partners",
          start: "top 50%",
        },
      });
      tl.from([".partners_logos_one"], {
        x: -50,
        autoAlpha: 0,
        stagger: 0.07,
      });

      const tl2 = gsap.timeline({
        scrollTrigger: {
          trigger: "#partners",
          start: "top top",
          pin: true,
        },
      });
      tl2

        .fromTo(
          ".left_text_partner",
          {
            bottom: "0%",
          },
          {
            bottom: "80%",
          }
        )
        .from([".partners_logos_two"], {
          x: -50,
          autoAlpha: 0,
          stagger: 0.07,
        });
    });
    mm.add("(max-width: 991.98px)", () => {
      const tl2 = gsap.timeline({
        scrollTrigger: {
          trigger: "#partners",
          start: "top top",
          pin: true,
        },
      });
      tl2.from("#partner-img-container2 img", {
        x: -50,
        autoAlpha: 0,
        stagger: 0.07,
      });
    });
  }, []);
  return (
    <div
      id="partners"
      className="d-flex justify-content-center align-items-center overflow-hidden min-vh-100"
    >
      <div className="position-absolute end-0 text_left_rotate d-none d-xl-flex align-items-center left_text_partner pt-4 pe-xl-5">
        <p className="color_light_green font_sm mb-0">Chi ci ha scelto</p>
        <div className="ps-4">
          <img src={businessLeftTextIcon2} alt="partner-small-arrow" />
        </div>
      </div>
      <div className="container">
        <div className="partner_text">
          <div className="my-3 my-lg-4 my-xxl-5">
            <div
              id="partners-content-heading"
              className="d-flex align-items-center gap-2 justify-content-center "
            >
              <p className="font_5xl color_dark_gray mb-0 partner_para custom_letter_spacing">
                Non cerchiamo clienti ma
              </p>
              <a href="#CRM">
                <button className="custom_tab_button_012 cursor-pointer font_2xl color_dark_gray common_button d-flex mt-2 mt-xxl-1 custome_size">
                  partner
                </button>
              </a>
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
                    index === 0
                      ? "justify-content-between partners_logos_one"
                      : "justify-content-around partners_logos_two"
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
                id="partner-img-container2"
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

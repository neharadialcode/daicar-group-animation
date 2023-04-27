import React, { useEffect } from "react";
import roadmapImg1 from "../assets/images/svg/roadmap_img1.png";
import roadmapImg2 from "../assets/images/svg/roadmap_img2.png";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
const ForthSection = () => {
  useEffect(() => {
    let secondSection2 = gsap.timeline({
      scrollTrigger: {
        trigger: ".forth_section",
        start: "top top",
        end: "bottom top",
        scrub: 1,
        pin: true,
        pinSpacing: false,
        markers: true,
      },
    });
    secondSection2
      .fromTo(
        ".roadmap_icon_1",
        {
          left: "-100%",
        },
        {
          left: "0%",
        }
      )
      .fromTo(
        ".roadmap_icon_2",
        {
          left: "-100%",
        },
        {
          left: "10%",
        },
        "-=.5"
      )
      .fromTo(
        ".roadmap_text_1",
        {
          autoAlpha: 0,
        },
        {
          autoAlpha: 1,
        },
        "-=.5"
      )
      .fromTo(
        ".roadmap_icon_1",
        {
          left: "0%",
        },
        {
          left: "10%",
        }
      )
      .fromTo(
        ".roadmap_icon_2",
        {
          left: "10%",
        },
        {
          left: "20%",
        },
        "-=.5"
      )
      .fromTo(
        ".roadmap_text_2",
        {
          autoAlpha: 0,
        },
        {
          autoAlpha: 1,
        },
        "-=.5"
      )
      .to(
        ".roadmap_text_1",
        {
          autoAlpha: 0,
        },

        "-=.5"
      )
      .fromTo(
        ".roadmap_icon_1",
        {
          left: "10%",
        },
        {
          left: "20%",
        }
      )
      .fromTo(
        ".roadmap_icon_2",
        {
          left: "20%",
        },
        {
          left: "30%",
        },
        "-=.5"
      )
      .fromTo(
        ".roadmap_text_3",
        {
          autoAlpha: 0,
        },
        {
          autoAlpha: 1,
        },
        "-=.5"
      )
      .to(
        ".roadmap_text_2",
        {
          autoAlpha: 0,
        },

        "-=.5"
      );
  }, []);
  return (
    <div className="vh-100 overflow-hidden forth_section ">
      <div className="position-relative h-100">
        <img className="roadmap_icon_1" src={roadmapImg1} alt="roadmapImg1" />
        <img className="roadmap_icon_2" src={roadmapImg2} alt="roadmapImg1" />
        <div className="container h-100">
          <div className="row justify-content-end align-items-center ">
            <div className="col-6">
              <h2 className="roadmap_text_1">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
                ullam, atque nostrum quo voluptatum quibusdam placeat distinctio
                culpa pariatur est natus harum itaque consequuntur incidunt
                iusto. Iusto quibusdam aut reiciendis?
              </h2>
              <h2 className="roadmap_text_2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
                ullam, atque nostrum quo voluptatum quibusdam placeat distinctio
                culpa pariatur est natus harum itaque consequuntur incidunt
                iusto. Iusto quibusdam aut reiciendis?
              </h2>
              <h2 className="roadmap_text_3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
                ullam, atque nostrum quo voluptatum quibusdam placeat distinctio
                culpa pariatur est natus harum itaque consequuntur incidunt
                iusto. Iusto quibusdam aut reiciendis?
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForthSection;

import React, { useEffect } from "react";
import { gsap } from "gsap";

const EightSection = () => {
  useEffect(() => {
    let sixth = gsap.timeline({
      scrollTrigger: {
        trigger: ".eight_section",
        pin: true,
        pinSpacing: false,
      },
    });
  }, []);
  return (
    <div className="vh-100 d-flex flex-column justify-content-center align-items-center bg-info eight_section">
      <h1>EIGHT SECTION</h1>
    </div>
  );
};

export default EightSection;

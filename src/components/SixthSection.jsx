import React, { useEffect } from "react";
import { gsap } from "gsap";

const SixthSection = () => {
  useEffect(() => {
    let sixth = gsap.timeline({
      scrollTrigger: {
        trigger: ".sixth_section",
        pin: true,
        pinSpacing: false,
      },
    });
  }, []);
  return (
    <div className="vh-100 d-flex flex-column justify-content-center align-items-center bg-primary sixth_section">
      <h1>SixthSection</h1>
    </div>
  );
};

export default SixthSection;

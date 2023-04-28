import React, { useEffect } from "react";
import { gsap } from "gsap";

const SeventhSection = () => {
  useEffect(() => {
    let seventh = gsap.timeline({
      scrollTrigger: {
        trigger: ".seventh_section",
        pin: true,
        pinSpacing: false,
      },
    });
  }, []);
  return (
    <div>
      <div className="vh-100 d-flex flex-column justify-content-center align-items-center bg-warning seventh_section">
        <h1> SeventhSection </h1>
      </div>
    </div>
  );
};

export default SeventhSection;

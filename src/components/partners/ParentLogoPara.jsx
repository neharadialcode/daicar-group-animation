import React from "react";

const ParentLogoPara = ({ partnerNname }) => {
  return (
    <>
      <p
        id="partner-description"
        className="ff_mundial_light font_5xl color_light_gray my-4 my-xxl-5 partner_para custom_letter_spacing text-center"
      >
        <span className="ff_math mb-1">&gt;</span>Title
        <span className="ff_math mb-1">_</span>
        <span className="color_light_green ff_mundial_regular">
          Lead Generation <span className="text-uppercase">{partnerNname}</span>
        </span>
        &nbsp;KPI<span className="ff_math mb-1">_</span>
        <span className="color_light_green ff_mundial_regular">
          Validazione numero di Telfono
        </span>
        &nbsp;Year<span className="ff_math mb-1">_</span>
        <span className="color_light_green ff_mundial_regular">2022</span>
      </p>
    </>
  );
};

export default ParentLogoPara;
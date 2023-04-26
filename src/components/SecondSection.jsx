import React from "react";
import img from "../Free_iPad_Mockup_1 1.png";

const SecondSection = () => {
  const buttonData = [
    {
      buttonText: "Button 1",
    },
    {
      buttonText: "Button 2",
    },
    {
      buttonText: "Button 3",
    },
    {
      buttonText: "Button 4",
    },
  ];
  return (
    <div className="vh-100 d-flex flex-column justify-content-center">
      <img className="i_pad_img_2" src={img} alt="img" />
      <div className="text-center pt-4">
        <h1 className="max_width d-flex justify-content-center">
          {buttonData.map((obj, index) => (
            <div className="px-2 ">
              <button>{obj.buttonText}</button>{" "}
            </div>
          ))}
        </h1>
      </div>
    </div>
  );
};

export default SecondSection;

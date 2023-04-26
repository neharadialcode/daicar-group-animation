import { useState, useEffect } from "react";
import { UpArrowIcon } from "./Icons";

const BackToTop = () => {
  const [showButton, setShowButton] = useState(false);
  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    });
  }, []);
  return (
    <div>
      {showButton && (
        <div
          className="topscroll d-flex justify-content-center align-items-center cursor-pointer"
          onClick={() => scrollToTop()}
        >
          <UpArrowIcon />
        </div>
      )}
    </div>
  );
};
export default BackToTop;

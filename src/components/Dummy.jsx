import React, { useEffect, useState } from "react";

const Dummy = () => {
  const [count, setCount] = useState(200);
  const [isScrollingDown, setIsScrollingDown] = useState(false);

  useEffect(() => {
    let previousScrollPos =
      window.pageYOffset || document.documentElement.scrollTop;

    const handleScroll = () => {
      const currentScrollPos =
        window.pageYOffset || document.documentElement.scrollTop;

      if (currentScrollPos > previousScrollPos) {
        // Scrolling down
        if (!isScrollingDown) {
          setIsScrollingDown(true);
          const interval = setInterval(() => {
            setCount((prevCount) => {
              if (prevCount <= 10) {
                clearInterval(interval);
                return prevCount;
              } else {
                return prevCount - 1;
              }
            });
          }, 100);
        }
      } else {
        // Scrolling up
        if (isScrollingDown) {
          setIsScrollingDown(false);
          const interval = setInterval(() => {
            setCount((prevCount) => {
              if (prevCount >= 200) {
                clearInterval(interval);
                return prevCount;
              } else {
                return prevCount + 1;
              }
            });
          }, 100);
        }
      }

      previousScrollPos = currentScrollPos;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isScrollingDown]);

  return (
    <div>
      <div className="vh-100"></div>
      <p>Counter: {count}</p>
      <div className="vh-100"></div>
    </div>
  );
};

export default Dummy;

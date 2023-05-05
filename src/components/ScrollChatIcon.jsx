import React, { useState, useEffect } from "react";
import { ChatIcon } from "./Icons";

const ScrollChatIcon = () => {
  const [showContent, setShowContent] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 300) {
        // change 500 to your target value
        setShowContent(true);
      } else {
        setShowContent(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div>
        {showContent && (
          <>
            <div className="bg-danger chat_icon d-flex justify-content-center align-items-center cursor-pointer">
              <ChatIcon />
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default ScrollChatIcon;

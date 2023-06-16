import React, { useState, useEffect } from "react";
import { ChatIcon } from "./Icons";
import Landbot from "https://cdn.landbot.io/landbot-3/landbot-3.0.0.js";

const ScrollChatIcon = () => {
  // const [showContent, setShowContent] = useState(false);
  // useEffect(() => {
  //   const handleScroll = () => {
  //     if (window.pageYOffset > 300) {
  //       // change 500 to your target value
  //       setShowContent(true);
  //     } else {
  //       setShowContent(false);
  //     }
  //   };
  //   window.addEventListener("scroll", handleScroll);
  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);

  // window.addEventListener("mouseover", initLandbot, { once: true });
  // window.addEventListener("touchstart", initLandbot, { once: true });
  // var myLandbot;
  // function initLandbot() {
  //   if (!myLandbot) {
  //     var s = document.createElement("script");
  //     s.type = "text/javascript";
  //     s.async = true;
  //     s.addEventListener("load", function () {
  //       var myLandbot = new Landbot.Livechat({
  //         configUrl:
  //           "https://storage.googleapis.com/landbot.pro/v3/H-1628206-9L7CAIMRB2KEUJS5/index.json",
  //       });
  //     });
  //     s.src = "https://cdn.landbot.io/landbot-3/landbot-3.0.0.js";
  //     var x = document.getElementsByTagName("script")[0];
  //     x.parentNode.insertBefore(s, x);
  //   }
  // }

  // const [Livechat, Livechat] = useState(false);
  // const Livechat = document.getElementsByClassName("show_chat_icon");

  // useEffect(() => {
  //   const initLandbot = () => {
  //     if (!window.myLandbot) {
  //       const script = document.createElement("script");
  //       script.type = "text/javascript";
  //       script.async = true;
  //       script.addEventListener("load", () => {
  //         window.myLandbot = new Landbot.Livechat({
  //           configUrl:
  //             "https://storage.googleapis.com/landbot.pro/v3/H-1628206-9L7CAIMRB2KEUJS5/index.json",
  //         });
  //       });
  //       script.src = "https://cdn.landbot.io/landbot-3/landbot-3.0.0.js";
  //       const x = document.getElementsByTagName("script")[0];
  //       x.parentNode.insertBefore(script, x);
  //     }
  //   };
  //   window.addEventListener("mouseover", initLandbot, { once: true });
  //   window.addEventListener("touchstart", initLandbot, { once: true });
  // }, []);

  return (
    <>
      {/* <div> */}
      {/* {showContent && ( */}
      <>
        <div className="show_chat_icon d-flex justify-content-center align-items-center cursor-pointer">
          <a
            className="text-decoration-none chat_icon"
            href="https://www.instagram.com/alfatauristudio/"
            target="_blank"
            rel="noreferrer"
          >
            <ChatIcon />
          </a>
        </div>
      </>
      {/* )} */}
      {/* </div> */}
    </>
  );
};

export default ScrollChatIcon;

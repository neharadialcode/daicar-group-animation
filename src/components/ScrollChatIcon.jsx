import React, { useEffect } from "react";
import { ChatIcon } from "./Icons";
// import Landbot from "https://cdn.landbot.io/landbot-3/landbot-3.0.0.js";

const ScrollChatIcon = () => {
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
    </>
  );
};

export default ScrollChatIcon;

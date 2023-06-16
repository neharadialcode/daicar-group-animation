import React from "react";
import { ChatIcon } from "./Icons";

const ScrollChatIcon = () => {
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

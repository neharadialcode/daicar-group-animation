import { createContext, useContext, useState } from "react";

const LayoutProviderContext = createContext();
export function useLayoutProvider() {
  return useContext(LayoutProviderContext);
}
export default function LayoutProvider({ children }) {
  const [isChatShow, setChatShow] = useState(false);

  function handleChatShow() {
    if (!window.myLandbot) {
      var s = document.createElement("script");
      s.type = "text/javascript";
      s.async = true;
      s.addEventListener("load", function () {
        window.myLandbot = new window.Landbot.Livechat({
          configUrl:
            "https://storage.googleapis.com/landbot.pro/v3/H-1628206-9L7CAIMRB2KEUJS5/index.json",
        });
      });
      s.src = "https://cdn.landbot.io/landbot-3/landbot-3.0.0.js";
      var x = document.getElementsByTagName("script")[0];
      x.parentNode.insertBefore(s, x);
    }
  }
  const value = {
    isChatShow,
    setChatShow,
    handleChatShow,
  };
  return (
    <LayoutProviderContext.Provider value={value}>
      {children}
    </LayoutProviderContext.Provider>
  );
}

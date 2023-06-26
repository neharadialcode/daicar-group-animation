import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect } from "react";
import Main from "./Main";
import { useLayoutProvider } from "./contexts/LayoutProvider";

function App() {
  const { handleChatShow } = useLayoutProvider();

  useEffect(() => {
    function initLandbot() {
      
    }

    // window.addEventListener("mouseover", initLandbot, { once: true });
    // window.addEventListener("touchstart", initLandbot, { once: true });

    // return () => {
    //   // Clean up by removing the event listeners
    //   window.removeEventListener("mouseover", initLandbot);
    //   window.removeEventListener("touchstart", initLandbot);
    // };
  }, []); // Empty dependency array ensures this effect only runs once

  return (
    <>
      <Main />
    </>
  );
}

export default App;

import "bootstrap/dist/css/bootstrap.min.css";
import Hero from "./components/Hero";
import TabsImage from "./components/TabsImage";
import Business from "./components/Business";
import AboutUs from "./components/AboutUs";
import Timeline from "./components/Timeline";
import Partners from "./components/partners/Partners";
import Crm from "./components/Crm";
import Meeting from "./components/Meeting";
import Footer from "./components/Footer";
import ScrollChatIcon from "./components/ScrollChatIcon";

import largeArrow from "./assets/largeArrow.svg";
import largeArrow2 from "./assets/arrow-large-2.svg";

function App() {
  return (
    <>
      <Hero />
      {/* <TabsImage /> */}
      <Business />
      <AboutUs />
      <Timeline />
      <Partners />
      <Crm />
      <Meeting />
      <Footer />
      {/* <img
        src={largeArrow}
        id="hero-large-arrow"
        className="fixed z-0 pointer-events-none"
      />
      <img
        src={largeArrow2}
        id="hero-large-arrow-2"
        className="fixed z-0 pointer-events-none hidden"
      /> */}
      {/* <ScrollChatIcon /> */}
    </>
  );
}

export default App;

import "bootstrap/dist/css/bootstrap.min.css";
import Hero from "./components/Hero";
import Business from "./components/Business";
import AboutUs from "./components/AboutUs";
import Timeline from "./components/Timeline";
import Partners from "./components/partners/Partners";
import Crm from "./components/Crm";
import Meeting from "./components/Meeting";
import Footer from "./components/Footer";
import ScrollChatIcon from "./components/ScrollChatIcon";
import largeArrow from "./assets/images/svg/largeArrow.svg";
import largeArrow2 from "./assets/images/svg/arrow-large-2.svg";

function App() {
  return (
    <>
      <Hero />
      <Business />
      <AboutUs />
      <Timeline />
      <Partners />
      <Crm />
      <Meeting />
      <Footer />
      <div className="w-100 overflow-hidden">
        <img
          alt="largeArrow"
          src={largeArrow}
          id="hero-large-arrow"
          className="position-fixed z-0 pointer-events-none d-none d-lg-block"
        />
        <img
          alt="largeArrow2"
          src={largeArrow2}
          id="hero-large-arrow-2"
          className="position-fixed z-0 pointer-events-none timeline_arrow_img d-none d-sm-block"
        />
      </div>
      <ScrollChatIcon />
    </>
  );
}

export default App;
// .to(["#para_text_01 button", "#para_text_01 p"], {
//   color: "white",
// });

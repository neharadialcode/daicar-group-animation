import "bootstrap/dist/css/bootstrap.min.css";
import Hero from "./components/Hero";
// import SixthSection from "./components/SixthSection";
// import SeventhSection from "./components/SeventhSection";
// import EightSection from "./components/EightSection";
import TabsImage from "./components/TabsImage";
import Business from "./components/Business";
import AboutUs from "./components/AboutUs";
import Timeline from "./components/Timeline";
import Partner from "./components/Partner";
import Crm from "./components/Crm";
import Meeting from "./components/Meeting";
import Footer from "./components/Footer";
import ScrollChatIcon from "./components/ScrollChatIcon";

function App() {
  return (
    <>
      <Hero />
      <TabsImage />
      <Business />
      <AboutUs />
      {/* <Timeline /> */}
      {/* <SixthSection /> */}
      <div className="bg_light_white">
        <Partner />
        <Crm />
        <Meeting />
      </div>
      <Footer />
      {/* <SeventhSection /> */}
      {/* <EightSection /> */}
      <ScrollChatIcon />
    </>
  );
}

export default App;

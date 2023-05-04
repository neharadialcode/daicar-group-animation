import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import SecondSection from "./components/SecondSection";
import ThirdSection from "./components/ThirdSection";
import ForthSection from "./components/ForthSection";
import FifthSection from "./components/FifthSection";
import SixthSection from "./components/SixthSection";
import SeventhSection from "./components/SeventhSection";
import EightSection from "./components/EightSection";
import BackToTop from "./components/BackToTopButton";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <SecondSection />
      <ThirdSection />
      <ForthSection />
      <FifthSection />
      <SixthSection />
      <SeventhSection />
      <EightSection />
      {/* <CarPlanner />
      <Tiguido />
      <Partner />
      <Crm />
      <About />
      <Footer /> */}
      <BackToTop />
    </>
  );
}

export default App;

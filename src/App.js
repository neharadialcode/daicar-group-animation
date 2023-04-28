import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import "./master.css";
import SecondSection from "./components/SecondSection";
import ThirdSection from "./components/ThirdSection";
import Hero2 from "./components/Hero2";
import ForthSection from "./components/ForthSection";
import FifthSection from "./components/FifthSection";

function App() {
  return (
    <>
      <Header />
      <Hero2 />
      {/* <Hero /> */}
      <SecondSection />
      <ThirdSection />
      <ForthSection />
      <FifthSection />
      {/* <CarPlanner />
      <Tiguido />
      <Partner />
      <Crm />
      <About />
      <Footer />
      <BackToTop /> */}
    </>
  );
}

export default App;

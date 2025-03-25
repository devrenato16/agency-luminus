import AboutComponent from "../modules/AboutComponent";
import ContactComponent from "../modules/ContactComponent";
import FooterComponent from "../modules/FooterComponent";
import HeroComponent from "../modules/HeroComponent";
import NavbarComponent from "../modules/NavbarComponent";
import PortfolioSection from "../modules/PortfolioSection";
import ServiceSection from "../modules/ServiceSection";

import "./index.module.css";

const Home = () => {
  return (
    <>
      <NavbarComponent />
      <HeroComponent />
      <ServiceSection />
      <AboutComponent />
      <PortfolioSection />
      <ContactComponent />
      <FooterComponent />
    </>
  );
};

export default Home;

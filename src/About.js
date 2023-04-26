import HeroSection from "./components/HeroSection";
import { useProductContext } from "./context/productcontex";
import {AboutHerosection} from "./components/AboutHerosection"
const About = () => {
  const { myName } = useProductContext();

  const data = {
    name: "Thapa Ecommerce",
  };

  return (
    <>
     <AboutHerosection />

     
    </>
  );
};

export default About;

import { useEffect } from "react";
import AboutPage from "../components/about-page-componenets/about";

const About = () => {
  useEffect(() => {
    document.title = "About Us - gent consulting engineers";
  }, []);
  return (
    <div className="overflow-hidden">
      <AboutPage />
    </div>
  );
};

export default About;

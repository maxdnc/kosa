//component imports
import Dropdown from "../components/Dropdown";
import Banner from "../components/Banner";

// image
import Mountain from "../assets/images/Mountain.jpg";

// style
import "./About.css";

const About = () => {
  return (
    <>
      <Banner image={Mountain} bannerSize={"banner-about"} />
      <Dropdown />
    </>
  );
};
export default About;

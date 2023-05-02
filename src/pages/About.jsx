//component imports
import Dropdown from "../components/Dropdown";
import Banner from "../components/Banner";

// image
import Mountain from "../assets/images/Mountain.jpg";

// style
import "./About.css";

// import data
import dropdown from "../assets/dropdown.json";

const About = () => {
  return (
    <>
      <Banner
        image={Mountain}
        bannerSize={"banner-about"}
        alt={"Landscape of mountain"}
      />
      <section className="about-dropdown">
        <Dropdown data={dropdown} boxOpen={[0]} />
      </section>
    </>
  );
};
export default About;

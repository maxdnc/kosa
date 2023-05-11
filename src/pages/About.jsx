//component imports
import Dropdown from "../components/Dropdown";
import Banner from "../components/Banner";

// image
import Mountain from "../assets/images/Mountain.jpg";

// style
import "./About.css";

// import data
import data from "../assets/dropdown.json";

const About = () => {
  return (
    <>
      <Banner
        image={Mountain}
        bannerSize={"banner-about"}
        alt={"Landscape of mountain"}
      />
      <section className="about-dropdown">
        {data.map((item, index) => {
          return (
            <Dropdown
              key={index}
              index={index}
              title={item.title}
              content={item.content}
              boxOpen={[-1]}
            />
          );
        })}
      </section>
    </>
  );
};
export default About;

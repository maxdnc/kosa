// react router
import { useLoaderData } from "react-router-dom";

// component

import Dropdown from "../components/Dropdown";
import Slideshow from "../components/Slideshow";
import Tags from "../components/Tags";
import Stars from "../components/Stars";
import Host from "../components/Host";

// style

import "./Accodomation.css";

const Accodomation = () => {
  const data = useLoaderData();

  // json to update dropdown component
  const collapseData = [
    {
      title: "Description",
      content: data.description,
    },
    {
      title: "Equipements",
      content: data.equipments.map((item, index) => <p key={index}>{item}</p>),
    },
  ];

  return (
    <div className="accodomation">
      <Slideshow slides={data.pictures} />

      <div className="accodomation-wrapper-flex-ls">
        <div className="accodomation-wrapper-ls">
          <div className="accodomation-wrapper-text">
            <h1 className="accodomation-title">{data.title}</h1>
            <h2 className="accodomation-location">{data.location}</h2>
          </div>
          <Tags tags={data.tags} />
        </div>
        <div className="accodomation-rating-host">
          <Stars rating={data.rating} />
          <Host host={data.host} />
        </div>
      </div>

      <section className="accodomation-dropdown">
        <Dropdown data={collapseData} boxOpen={[-1]} />
      </section>
    </div>
  );
};
export default Accodomation;

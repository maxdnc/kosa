import { useLoaderData } from "react-router-dom";
// component

import Dropdown from "../components/Dropdown";

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
      <div className="slide">
        futur component slide
        {data.pictures.map((item, index) => {
          return <img key={index} src={item} alt="room's pictures" />;
        })}
      </div>
      <h1>{data.title}</h1>
      <h2>{data.location}</h2>

      <div className="button-tags">
        futur component tags
        {data.tags.map((item, index) => {
          return <button key={index}>{item}</button>;
        })}
      </div>

      <div className="stars-rate">
        futur component stars
        {data.rating}
      </div>

      <Dropdown data={collapseData} />
    </div>
  );
};
export default Accodomation;

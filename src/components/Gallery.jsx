// import react router dom

import { Link } from "react-router-dom";

import { useEffect, useState } from "react";
import data from "../assets/data.json";

const Gallery = () => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    setCards(data);
  }, []);

  return (
    <section className="gallery">
      {cards.map((card, index) => {
        return (
          <Link
            to={`/kosa/accodomation/${card.id}`}
            className="gallery-item"
            key={index}
          >
            <img
              src={card.cover}
              alt={card.title}
              className="gallery-item-image"
            />
            <h2 className="gallery-item-title">{card.title}</h2>
          </Link>
        );
      })}
    </section>
  );
};
export default Gallery;

// import react router dom

import { Link } from "react-router-dom";
import { useLoaderData } from "react-router-dom";

const Gallery = () => {
  const gallery = useLoaderData();

  return (
    <section className="gallery">
      {gallery.map((image, index) => {
        return (
          <Link
            to={`/accodomation/${image.id}`}
            className="gallery-item"
            key={index}
          >
            <img
              src={image.cover}
              alt={image.title}
              className="gallery-item-image"
            />
            <h2 className="gallery-item-title">{image.title}</h2>
          </Link>
        );
      })}
    </section>
  );
};
export default Gallery;

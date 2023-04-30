// component
import Gallery from "../components/Gallery";
import Banner from "../components/Banner";

// images
import Coast from "../assets/images/Coast.jpg";

//style

import "./Acceuil.css";

const Acceuil = () => {
  return (
    <>
      <Banner
        image={Coast}
        bannerSize={"banner-acceuil"}
        title={"Chez vous, partout et ailleurs"}
        alt={"Landscape of fogy coast "}
      />
      <Gallery />
    </>
  );
};
export default Acceuil;

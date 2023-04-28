//style
import "./Banner.css";

const Banner = (props) => {
  return (
    <div className={props.bannerSize}>
      <img className="banner-img" src={props.image} alt={props.alt} />
      {props.title && <h1 className="banner-title">{props.title}</h1>}
    </div>
  );
};
export default Banner;

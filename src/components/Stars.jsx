// import style
import "./Stars.css";

// image

import starFilled from "../assets/images/star-filled.svg";
import starEmpty from "../assets/images/star-empty.svg";

const Stars = ({ rating }) => {
  const stars = [];

  for (let i = 1; i <= 5; i++) {
    const filled = i <= rating;
    const isFilled = filled
      ? stars.push(
          <img className="stars" key={i} src={starFilled} alt="star-filled" />
        )
      : stars.push(
          <img className="stars" key={i} src={starEmpty} alt="star-empty" />
        );
  }

  return <div className="stars-rate">{stars}</div>;
};
export default Stars;

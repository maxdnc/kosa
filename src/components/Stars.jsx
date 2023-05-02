// import style
import "./Stars.css";

// image

import starFilled from "../assets/images/star-filled.svg";
import starEmpty from "../assets/images/star-empty.svg";

const Stars = ({ rating }) => {
  const stars = [];

  for (let i = 1; i <= 5; i++) {
    const filled = i <= rating;
    stars.push(
      <img
        className="stars"
        key={i}
        src={filled ? starFilled : starEmpty}
        alt={filled ? "star-filled" : "star-empty"}
      />
    );
  }

  return <div className="stars-rate">{stars}</div>;
};
export default Stars;

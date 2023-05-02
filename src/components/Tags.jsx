//import
import "./Tags.css";

const Tags = ({ tags }) => {
  return (
    <div className="tags-contenair">
      {tags.map((item, index) => {
        return (
          <button className="tags-btn" key={index}>
            {item}
          </button>
        );
      })}
    </div>
  );
};
export default Tags;

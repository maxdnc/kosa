// import react

import { useState } from "react";

// import style
import "./Dropdown.css";

const Dropdown = ({ data, boxOpen }) => {
  const [isActive, setIsActive] = useState(boxOpen);

  const handleToggle = (index) => {
    const currentIndex = isActive.indexOf(index);
    const updateIsActive = [...isActive];

    if (currentIndex === -1) {
      updateIsActive.push(index);
    } else {
      updateIsActive.splice(currentIndex, 1);
    }

    setIsActive(updateIsActive);
  };

  return (
    <>
      {data.map((item, index) => {
        return (
          <div className="dropdown-item" key={index}>
            <button
              className="dropdown-title-button"
              onClick={() => handleToggle(index)}
            >
              <span>{item.title}</span>
              <svg
                className={`dropdown-arrow ${
                  isActive.includes(index) ? "active" : ""
                }`}
                width="19"
                height="19"
                viewBox="0 0 19 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_142304_755)">
                  <path
                    d="M8.19313 14.1096C8.63941 14.5559 9.36416 14.5559 9.81044 14.1096L16.6653 7.25476C17.1116 6.80848 17.1116 6.08372 16.6653 5.63744C16.219 5.19116 15.4943 5.19116 15.048 5.63744L9 11.6854L2.95202 5.64101C2.50575 5.19473 1.78099 5.19473 1.33471 5.64101C0.88843 6.08729 0.88843 6.81205 1.33471 7.25833L8.18956 14.1132L8.19313 14.1096Z"
                    fill="white"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_142304_755">
                    <rect
                      width="18.42"
                      height="18.42"
                      fill="white"
                      transform="translate(18.4199) rotate(90)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </button>
            <div
              className={`dropdown-content ${
                isActive.includes(index) ? "active" : ""
              }`}
            >
              {item.content}
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Dropdown;

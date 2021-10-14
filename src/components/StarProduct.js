import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { far } from "@fortawesome/free-regular-svg-icons";
import { faStar, faStarHalfAlt } from "@fortawesome/free-solid-svg-icons";
library.add(faStar, faStarHalfAlt, far);

function StarProduct({ star, color = "text-red-500" }) {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    if (i <= star) {
      stars.push(<FontAwesomeIcon icon={faStar} key={i} />);
    } else if (i === Math.floor(star) + 1) {
      stars.push(<FontAwesomeIcon icon={faStarHalfAlt} key={i} />);
    } else {
      stars.push(<FontAwesomeIcon icon={["far", "star"]} key={i} />);
    }
  }
  return (
    <ul>
      {stars.map((star, index) => (
        <li className={`inline-block text-lg ${color}`} key={index}>
          {star}
        </li>
      ))}
    </ul>
  );
}

export default StarProduct;

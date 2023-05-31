import React from "react";
import "../Characters/Info.css"
const Info = ({ name, image, description, comics }) => {
  return (
    <>
      <div className="info-container">
        <p className="info-title">{name ? name : "Marvel Characters"}</p>
        <img src={image} alt="" className="info-image" />
        <p className="info-description">
          {description
            ? description
            : "Marvel Comics is an American comic book publisher and the property of The Walt Disney Company since December 31, 2009. Evolving from Timely Comics in 1939, Magazine Management/Atlas Comics in 1951 and its predecessor, Marvel Mystery Comics, the Marvel Comics title/name/brand was first used in June 1961."}
        </p>
      </div>
    </>
  );
};

export default Info;

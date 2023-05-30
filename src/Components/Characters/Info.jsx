import React from "react";

const Info = ({ name, image, description, comics }) => {
  return (
    <>
      <h3 className="title">{name}</h3>
      <img src={image} alt="" />
      <h6>
        {description
          ? description
          : "Marvel Comics is an American comic book publisher and the property of The Walt Disney Company since December 31, 2009. Evolving from Timely Comics in 1939, Magazine Management/Atlas Comics in 1951 and its predecessor, Marvel Mystery Comics, the Marvel Comics title/name/brand was first used in June 1961."}
      </h6>
    </>
  );
};

export default Info;

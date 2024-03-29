import React, { useEffect, useState, useContext, createContext } from "react";
import "../Characters/Character.css";

import { Link } from "react-router-dom";
import Info from "./Info";
const MyContext = createContext();
const Character = ({}) => {
  const [character, setCharacter] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedComic, setSelectedComic] = useState(true);
  const ts = new Date().getTime();
  const apiKey = "068706157405403f21bbbe69a756f4fd";
  const privateKey = "1f20b361a1970c692ac90aeacc2672a4b838f2a5";
  const hash = CryptoJS.MD5(ts + privateKey + apiKey).toString();
  const URL = `https://gateway.marvel.com/v1/public/characters?ts=${ts}&apikey=${apiKey}&hash=${hash}&limit=80`;
  const contextValue = useContext(MyContext);
  useEffect(() => {
    fetch(URL)
      .then((res) => res.json())
      .then((data) => {
        const characterData = data.data.results.map((item) => ({
          id: item.id,
          name: item.name,
          description: item.description,
          image: `${item.thumbnail.path}.${item.thumbnail.extension}`,
          details: item.urls[0].url,
        }));
        setCharacter(characterData);
        setLoading(false);
      });
  }, []);

  const getInfo = (item) => setSelectedComic(item);

  return (
    <>
      <MyContext.Provider value={contextValue}>
        {selectedComic ? (
          <div className="description">
            <Info
              name={selectedComic.name}
              image={selectedComic.image}
              description={selectedComic.description}
              details={selectedComic.details}
            />
          </div>
        ) : (
          false
        )}
        {loading ? (
          <>
            <h1 className="loading">Loading....</h1>
          </>
        ) : (
          <>
            <div className="comic-posts">
              {character.map((comic, id) => (
                <div
                  key={comic.id}
                  className="comic-post"
                  onClick={() => getInfo(comic)}
                >
                  <img
                    src={comic.image ? comic.image : ""}
                    key={id}
                    alt=""
                    className="comic-image"
                  />
                  <h4>{comic.name}</h4>
                  <Link
                    to={comic.details}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Details
                  </Link>
                </div>
              ))}
            </div>
          </>
        )}
      </MyContext.Provider>
    </>
  );
};

export default Character;

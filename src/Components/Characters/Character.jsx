import React, { useEffect, useState, useContext, createContext } from "react";
import "../Characters/Character.css";
import Info from "./Info";
const MyContext = createContext();
const Character = ({ section }) => {
  const [character, setCharacter] = useState([]);
  const [selectedComic, setSelectedComic] = useState(null);
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
        }));
        setCharacter(characterData);
      });
  }, []);

  const getInfo = (item) => {
    setSelectedComic(item);
  };

  return (
    <MyContext.Provider value={contextValue}>
      {selectedComic ? (
        <div className="description">
          <Info
            name={selectedComic.name}
            image={selectedComic.image}
            description={selectedComic.description}
          />
        </div>
      ) : (
        false
      )}

      <div className="comic-posts">
        {character.map((comic, id) => (
          <div key={comic.id} className="comic-post">
            <img
              onClick={() => getInfo(comic)}
              src={comic.image ? comic.image : ""}
              key={id}
              alt=""
              className="comic-image"
            />
            <h4>{comic.name}</h4>
          </div>
        ))}
      </div>
    </MyContext.Provider>
  );
};

export default Character;

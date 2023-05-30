import React from "react";
import "../Characters/Character.css";
import { useEffect, useState } from "react";
const Character = () => {
  const [comics, setComics] = useState([]);
  const ts = new Date().getTime();
  const apiKey = "068706157405403f21bbbe69a756f4fd";
  const privateKey = "1f20b361a1970c692ac90aeacc2672a4b838f2a5";
  const hash = CryptoJS.MD5(ts + privateKey + apiKey).toString();
  const URL = `https://gateway.marvel.com/v1/public/characters?ts=${ts}&apikey=${apiKey}&hash=${hash}&limit=100`;
  useEffect(() => {
    fetch(URL)
      .then((res) => res.json())
      .then((data) => {
        const comicData = data.data.results.map((item) => ({
          name: item.name,
          image: `${item.thumbnail.path}.${item.thumbnail.extension}`,
        }));
        setComics(comicData);
      });
  }, []);
  return (
    <>
      <div className="comic-posts">
        {comics.map((comic, id) => (
          <div key={comic.id} className="comic-post">
            <img
              src={comic.image ? comic.image : { imageUrl }}
              key={id}
              alt=""
              className="comic-image"
            />
            <h4>{comic.name}</h4>
          </div>
        ))}
      </div>
    </>
  );
};

export default Character;

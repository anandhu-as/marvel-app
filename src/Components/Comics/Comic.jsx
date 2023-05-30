import React, { useEffect, useState } from "react";
import "../Comics/Comic.css";
const Comic = () => {
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
  const imageUrl = `https://image.api.playstation.com/vulcan/ap/rnd/202009/3021/B2aUYFC0qUAkNnjbTHRyhrg3.png`;
  return (
    <>

      
    </>
  );
};

export default Comic;

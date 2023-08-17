import { Card } from "../card";
import { useParams } from "react-router-dom";
import "./movies.css";
import axios from "axios";
import { useState, useEffect } from "react";

export const MovieList = () => {
  const [movieList, setMovieList] = useState([]);
  const { type } = useParams();
  async function getData() {
    try {
      const res = await axios.get(
        `https://api.themoviedb.org/3/movie/${
          type ? type : "popular"
        }?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`
      );
      if (res) {
        setMovieList(res.data.results);
        console.log(movieList);
      }
    } catch (error) {
      console.error("Error fetching popular movies:", error);
    }
  }
  useEffect(() => {
    getData();
  }, [type]);
  return (
    <>
      <h2 className="list__title">{(type ? type : "popular").toUpperCase()}</h2>
      <div className="parent">
        {movieList.map((movie) => (
          <Card movie={movie} />
        ))}
      </div>
    </>
  );
};

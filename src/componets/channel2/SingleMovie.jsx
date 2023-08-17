import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import "./moviesPage.css";
export const SingleMovie = () => {
  const { id } = useParams();
  const [movieDetails, setMovieDetails] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  async function getMovies() {
    try {
      const res = await axios.get(
        `http://omdbapi.com/?apikey=c4c63ae4&i=${id}`
      );

      console.log(res);
      if (res.data.Response === "True") {
        setMovieDetails(res.data);
        setIsLoading(false);
      }
    } catch (error) {
      console.error("Error fetching popular movies:", error);
    }
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      getMovies();
    }, 800);
    return () => clearTimeout(timer);
  }, [id]);
  if (isLoading) {
    return <p className="listing_card">Loading....</p>;
  }
  return (
    <section className="movies_details">
      <div className="img_section">
        <img src={movieDetails.Poster} alt="" />
      </div>
      <div className="movie___details">
        <p className="listing_card">
          Movie : <strong> {movieDetails?.Title}</strong>
        </p>
        <p className="listing_card">
          Plot : <span className="plot_ls"> {movieDetails?.Plot}</span>
        </p>
        <p className="listing_card">
          Actors : <strong> {movieDetails?.Actors}</strong>
        </p>
        <p className="listing_card">
          Awards : <strong> {movieDetails?.Awards}</strong>
        </p>
        <p className="listing_card">
          Country : <strong> {movieDetails?.Country}</strong>
        </p>
        <p className="listing_card">
          Director : <strong> {movieDetails?.Director}</strong>
        </p>
        <p className="listing_card">
          Genre : <strong> {movieDetails?.Genre}</strong>
        </p>
        <p className="listing_card">
          Language : <strong> {movieDetails?.Language}</strong>
        </p>
        <p className="listing_card">
          Production : <strong> {movieDetails?.Production}</strong>
        </p>
        <p className="listing_card">
          Rated : <strong> {movieDetails?.Rated}</strong>
        </p>
        <p className="listing_card">
          Released : <strong> {movieDetails?.Released}</strong>
        </p>
        <p className="listing_card">
          Writer : <strong> {movieDetails?.Writer}</strong>
        </p>
        <p className="listing_card">
          imdbRating :{" "}
          <strong>
            {" "}
            {movieDetails?.imdbRating} <i className="fas fa-star"></i>
          </strong>
        </p>
        <p className="listing_card">
          imdbVotes : <strong> {movieDetails?.imdbVotes}</strong>
        </p>
      </div>
    </section>
  );
};

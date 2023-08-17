import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import "../card/card.css";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const Card = ({ movie }) => {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);
  return (
    <>
      {isLoading ? (
        <div className="child child2_container" key={movie.imdbID}>
          <SkeletonTheme color="#202020" highlightColor="#444">
            <Skeleton height={300} duration={2} />
          </SkeletonTheme>
        </div>
      ) : (
        <div className="child child2_container" key={movie.imdbID}>
          <Link
            to={`/moviePage/${movie.imdbID}`}
            style={{ textDecoration: "none", color: "white" }}
          >
            <img className="cards__img" src={movie.Poster} />
            <div className="cards__overlay">
              <div className="cards__title">{movie ? movie.Title : ""}</div>
              <div className="cards__runtime">{movie ? movie.Year : ""}</div>
            </div>
          </Link>
        </div>
      )}
    </>
  );
};

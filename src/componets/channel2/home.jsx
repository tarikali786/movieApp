import { MoviePage } from "./moviePage";
import "./moviesPage.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { Link } from "react-router-dom";
import { useGlobleContext } from "./context";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
export const HomePage = () => {
  const { movieList, isLoading } = useGlobleContext();

  return (
    <>
      {/* <Search /> */}
      <div className="poster">
        <Carousel
          showThumbs={false}
          autoPlay={true}
          transitionTime={3}
          infiniteLoop={true}
          showStatus={false}
        >
          {movieList.map((movie) => (
            <Link
              key={movie.imdbID}
              style={{ textDecoration: "none", color: "white" }}
              to={`/moviePage/${movie.imdbID}`}
            >
              {isLoading ? (
                <div className="posterImage" key={movie.imdbID}>
                  <SkeletonTheme color="#202020" highlightColor="#444">
                    <Skeleton height={300} duration={2} />
                  </SkeletonTheme>
                </div>
              ) : (
                <div className="posterImage">
                  {movie.Poster && <img src={movie?.Poster} />}
                </div>
              )}

              <div className="posterImage__overlay">
                <div className="posterImage__title">
                  {movie ? movie.Title : ""}
                </div>
                <div className="posterImage__runtime">
                  {movie ? movie.Year : ""}
                </div>
              </div>
            </Link>
          ))}
        </Carousel>
      </div>

      <div className="moviePageConatiner">
        <MoviePage />
      </div>
    </>
  );
};

import { useParams } from "react-router-dom";
import "./movieDetail.css";
import { useState, useEffect } from "react";
import axios from "axios";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { useMediaQuery } from "../../componets/Hook/useMediaQuery";
export const MovieDetail = () => {
  const { id } = useParams();
  const isAboveSmallScreens = useMediaQuery("(min-width:768px)");
  const [movieDetails, setMovieDetails] = useState();

  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  async function getData() {
    try {
      const res = await axios.get(
        `https://api.themoviedb.org/3/movie/${id}?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`
      );
      if (res) {
        setMovieDetails(res.data);
        console.log(res.data);
      }
    } catch (error) {
      console.error("Error fetching popular movies:", error);
    }
  }
  useEffect(() => {
    getData();
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      {isAboveSmallScreens ? (
        <div className="movie" key={Math.random(0, 1000)}>
          {isLoading ? (
            <div className="movie__intro">
              <SkeletonTheme color="#202020" highlightColor="#444">
                <Skeleton height={300} duration={2} />
              </SkeletonTheme>
            </div>
          ) : (
            <div className="movie__intro">
              <img
                className="movie__backdrop"
                src={`https://image.tmdb.org/t/p/original${
                  movieDetails ? movieDetails.backdrop_path : ""
                }`}
              />
            </div>
          )}

          <div className="movie__detail">
            <div className="movie__detailLeft">
              {isLoading ? (
                <div className="movie__posterBox">
                  <SkeletonTheme color="#202020" highlightColor="#444">
                    <Skeleton height={300} duration={2} />
                  </SkeletonTheme>
                </div>
              ) : (
                <div className="movie__posterBox">
                  <img
                    className="movie__poster"
                    src={`https://image.tmdb.org/t/p/original${
                      movieDetails ? movieDetails.poster_path : ""
                    }`}
                  />
                </div>
              )}
            </div>

            <div className="movie__detailRight">
              <div className="movie__detailRightTop">
                <div className="movie__name">
                  {movieDetails ? movieDetails.original_title : ""}
                </div>
                <div className="movie__tagline">
                  {movieDetails ? movieDetails.tagline : ""}
                </div>
                <div className="movie__tagline">
                  {movieDetails ? movieDetails.tagline : ""}
                </div>

                <div className="movie__rating">
                  {movieDetails ? movieDetails.vote_average : ""}{" "}
                  <i class="fas fa-star" />
                  <span className="movie__voteCount">
                    {movieDetails
                      ? "(" + movieDetails.vote_count + ") votes"
                      : ""}
                  </span>
                </div>

                <div className="movie__runtime">
                  {movieDetails ? movieDetails.runtime + " mins" : ""}
                </div>

                <div className="movie__releaseDate">
                  {movieDetails
                    ? "Release date: " + movieDetails.release_date
                    : ""}
                </div>
                <div className="movie__genres" key={id}>
                  {movieDetails && movieDetails.genres
                    ? movieDetails.genres.map((genre) => (
                        <>
                          <span className="movie__genre" id={genre.id}>
                            {genre.name}
                          </span>
                        </>
                      ))
                    : ""}
                </div>
              </div>
              <div className="movie__detailRightBottom">
                <div className="synopsisText">Synopsis</div>
                <div>{movieDetails ? movieDetails.overview : ""}</div>
              </div>
            </div>
          </div>
          <div className="movie__links">
            <div className="movie__heading">Useful Links</div>
            {movieDetails && movieDetails.homepage && (
              <a
                href={movieDetails.homepage}
                target="_blank"
                style={{ textDecoration: "none" }}
              >
                <p>
                  <span className="movie__homeButton movie__Button">
                    Homepage <i className="newTab fas fa-external-link-alt"></i>
                  </span>
                </p>
              </a>
            )}
            {movieDetails && movieDetails.imdb_id && (
              <a
                href={"https://www.imdb.com/title/" + movieDetails.imdb_id}
                target="_blank"
                style={{ textDecoration: "none" }}
              >
                <p>
                  <span className="movie__imdbButton movie__Button">
                    IMDb<i className="newTab fas fa-external-link-alt"></i>
                  </span>
                </p>
              </a>
            )}
          </div>
          <div className="movie__heading">Production companies</div>
          <div className="movie__production">
            {movieDetails &&
              movieDetails.production_companies &&
              movieDetails.production_companies.map((company) => (
                <>
                  {company.logo_path && (
                    <span className="productionCompanyImage">
                      <img
                        className="movie__productionComapany"
                        src={
                          "https://image.tmdb.org/t/p/original" +
                          company.logo_path
                        }
                      />
                      <span>{company.name}</span>
                    </span>
                  )}
                </>
              ))}
          </div>
        </div>
      ) : (
        <div className="movie2" key={Math.random(0, 1000)}>
          <div className="movie__intro2">
            <img
              className="movie__backdrop2"
              src={`https://image.tmdb.org/t/p/original${
                movieDetails ? movieDetails.backdrop_path : ""
              }`}
            />
          </div>
          <div className="movie__detaill">
            <div className="movie__posterBoxx">
              <img
                className="movie__posterr"
                src={`https://image.tmdb.org/t/p/original${
                  movieDetails ? movieDetails.poster_path : ""
                }`}
              />
            </div>
          </div>

          <div className="movie__detailRight">
            <div className="movie__detailRightTop">
              <div className="movie__name">
                {movieDetails ? movieDetails.original_title : ""}
              </div>
              <div className="movie__tagline">
                {movieDetails ? movieDetails.tagline : ""}
              </div>

              <div className="movie__rating">
                {movieDetails ? movieDetails.vote_average : ""}{" "}
                <i class="fas fa-star" />
                <span className="movie__voteCount">
                  {movieDetails
                    ? "(" + movieDetails.vote_count + ") votes"
                    : ""}
                </span>
              </div>

              <div className="movie__runtime">
                {movieDetails ? movieDetails.runtime + " mins" : ""}
              </div>

              <div className="movie__releaseDate">
                {movieDetails
                  ? "Release date: " + movieDetails.release_date
                  : ""}
              </div>
              <div className="movie__genres" key={id}>
                {movieDetails && movieDetails.genres
                  ? movieDetails.genres.map((genre) => (
                      <>
                        <p className="movie__genre" id={genre.id}>
                          {genre.name}
                        </p>
                      </>
                    ))
                  : ""}
              </div>
            </div>
            <div className="movie__detailRightBottom">
              <div className="synopsisText">Synopsis</div>
              <div>{movieDetails ? movieDetails.overview : ""}</div>
              <div className="movie__links">
                <p className="movie__heading">Useful Links</p>
                <div className="useFull__link">
                  {movieDetails && movieDetails.homepage && (
                    <a
                      href={movieDetails.homepage}
                      target="_blank"
                      style={{ textDecoration: "none" }}
                    >
                      <p>
                        <span className="movie__homeButton movie__Button">
                          Homepage{" "}
                          <i className="newTab fas fa-external-link-alt"></i>
                        </span>
                      </p>
                    </a>
                  )}
                  {movieDetails && movieDetails.imdb_id && (
                    <a
                      href={
                        "https://www.imdb.com/title/" + movieDetails.imdb_id
                      }
                      target="_blank"
                      style={{ textDecoration: "none" }}
                    >
                      <p>
                        <span className="movie__imdbButton movie__Button">
                          IMDb
                          <i className="newTab fas fa-external-link-alt"></i>
                        </span>
                      </p>
                    </a>
                  )}
                </div>
              </div>
            </div>

            <div className="movie__heading__conatiner">
              <p className="movie__heading2">Production companies</p>
              <div className="movie__production">
                {movieDetails &&
                  movieDetails.production_companies &&
                  movieDetails.production_companies.map((company) => (
                    <>
                      {company.logo_path && (
                        <span className="productionCompanyImage">
                          <img
                            className="movie__productionComapany"
                            src={
                              "https://image.tmdb.org/t/p/original" +
                              company.logo_path
                            }
                          />
                          <p className="campany__name">
                            <span>{company.name}</span>
                          </p>
                        </span>
                      )}
                    </>
                  ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

import { Card } from "./card";
import { useGlobleContext } from "./context";
import "./moviesPage.css";
export const MoviePage = () => {
  const { movieList } = useGlobleContext();

  return (
    <>
      {movieList.map((movie) => {
        return (
          <>
            <Card movie={movie} />
          </>
        );
      })}
    </>
  );
};

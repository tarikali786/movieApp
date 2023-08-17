import axios from "axios";

import { createContext, useContext, useEffect, useState } from "react";
export const AppContext = createContext();
export const AppProvider = ({ children }) => {
  const [movieList, setMovieList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState({ show: "false", message: "" });
  const [query, setQuery] = useState("titanic");

  async function getMovies() {
    try {
      const res = await axios.get(
        `http://omdbapi.com/?apikey=c4c63ae4&s=${query}`
      );

      // console.log(res);
      if (res.data.Response === "True") {
        setMovieList(res.data.Search);
        setQuery("");
        setIsLoading(false);
      } else {
        setIsError({
          show: true,
          message: res.Error,
        });
      }
    } catch (error) {
      console.error("Error fetching popular movies:", error);
    }
  }
  // console.log(movieList);
  useEffect(() => {
    const timer = setTimeout(() => {
      getMovies();
    }, 800);
    return () => clearTimeout(timer);
  }, [query]);

  return (
    <AppContext.Provider
      value={{ query, setQuery, isLoading, isError, movieList }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobleContext = () => {
  return useContext(AppContext);
};

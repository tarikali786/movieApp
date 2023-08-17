import { useGlobleContext } from "./context";
import "./moviesPage.css";

export const Search = () => {
  const { query, setQuery, isError, isLoading } = useGlobleContext();
  return (
    <>
      <section className="search_Movie">
        <form
          className="search_form"
          onSubmit={(e) => {
            /* Add a box shadow when focused (optional) */
            e.defaultPrevented();
            e.stopPropagation();
          }}
        >
          <input
            className="search_input"
            type="text"
            // name="search"
            onChange={(e) => setQuery(e.target.value)}
            value={query}
            placeholder="Search movies..."
          />
          <button type="submit" className="search_button">
            <i className="fa fa-search" aria-hidden="true"></i>
          </button>
        </form>
        {/* <div className="errorPage">
          <p>{isError.show && isError.message}</p>
        </div> */}
      </section>
    </>
  );
};

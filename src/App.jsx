import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Header } from "./componets/header/header";
import { Home } from "./pages/home";
import { MovieList } from "./componets";
import { MovieDetail } from "./pages";
import { HomePage } from "./componets/channel2/home";
import { SingleMovie } from "./componets/channel2/SingleMovie";
function App() {
  return (
    <>
      <div className="App">
        <Header />
        <Routes>
          <Route index element={<Home />} />
          <Route path="movie/:id" element={<MovieDetail />} />
          <Route path="movies/:type" element={<MovieList />} />

          {/* channel2 routes  */}
          <Route path="homePage" element={<HomePage />} />
          <Route path="moviePage/:id" element={<SingleMovie />} />

          <Route path="/*" element={<h1> Error Page</h1>} />
        </Routes>
      </div>
    </>
  );
}

export default App;

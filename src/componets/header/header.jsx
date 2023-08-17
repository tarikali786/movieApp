import "./header.css";
import { useMediaQuery } from "../Hook/useMediaQuery";
import { Link } from "react-router-dom";
import Movie from "./movie.png";
import CloseIcon from "./close-icon.svg";
import MenuIcon from "./menu-icon.svg";
import { useState } from "react";
import { Search } from "../channel2/search";
import { AiFillHome, AiFillCrown } from "react-icons/ai";
import { DiHtml5Connectivity } from "react-icons/di";
import { TbWorldUpload } from "react-icons/tb";

export const Header = () => {
  const [isMenuToggled, setIsMenuToggled] = useState(true);
  const isAboveSmallScreens = useMediaQuery("(min-width:768px)");

  return (
    <>
      {isAboveSmallScreens ? (
        <div className="header">
          <div className="headerLeft">
            <Link to="/">
              {" "}
              <img className="headerIcon" src={Movie} alt="" />
            </Link>
            <Link to="/movies/popular" style={{ textDecoration: "none" }}>
              <span>Popular</span>
            </Link>
            <Link to="/movies/top_rated" style={{ textDecoration: "none" }}>
              <span>Top Rated</span>
            </Link>
            <Link to="/movies/upcoming" style={{ textDecoration: "none" }}>
              <span>Upcoming</span>
            </Link>

            <Link to="homePage" style={{ textDecoration: "none" }}>
              <Search />
            </Link>
          </div>
        </div>
      ) : (
        <div className="menu__header">
          <div className="menu__right">
            <Link to="/">
              <img className="headerIcon2" src={Movie} alt="" />
            </Link>
          </div>
          <Link to="homePage" style={{ textDecoration: "none" }}>
            <Search />
          </Link>
          <div className="menu__container">
            <button
              className="menu__icon"
              onClick={() => setIsMenuToggled(!isMenuToggled)}
            >
              {isMenuToggled ? (
                <img alt="menu-icon" src={MenuIcon} />
              ) : (
                <div className="navbar__title">
                  <div className="close__menu__bar">
                    <img alt="menu-icon" src={CloseIcon} />
                  </div>

                  <Link to="/" style={{ textDecoration: "none" }}>
                    <p className="menu__title">
                      {" "}
                      <span className="icon__bar">
                        <AiFillHome />
                      </span>
                      Home
                    </p>
                  </Link>
                  <Link to="/movies/popular" style={{ textDecoration: "none" }}>
                    <p className="menu__title">
                      <span className="icon__bar">
                        <TbWorldUpload />
                      </span>
                      Popular
                    </p>
                  </Link>
                  <Link
                    to="/movies/top_rated"
                    style={{ textDecoration: "none" }}
                  >
                    <p className="menu__title">
                      {" "}
                      <span className="icon__bar">
                        <AiFillCrown />
                      </span>
                      Top Rated
                    </p>
                  </Link>
                  <Link
                    to="/movies/upcoming"
                    style={{ textDecoration: "none" }}
                  >
                    <p className="menu__title">
                      <span className="icon__bar">
                        <DiHtml5Connectivity />
                      </span>
                      Upcoming
                    </p>
                  </Link>
                </div>
              )}
            </button>
          </div>
        </div>
      )}
    </>
  );
};

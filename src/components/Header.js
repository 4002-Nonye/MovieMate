import React, { useState, useRef } from "react";
import searchIcon from "../images/search.svg";
import notifyIcon from "../images/notify.svg";
import nathan from "../images/nathan.webp";
import homeIcon from "../images/home.svg";

const Header = ({ fetchMovie }) => {
  const ref = useRef();
  const [term, setTerm] = useState("");

  const onTermChange = (e) => {
    setTerm(e.target.value);
  };

  //SEARCH MOVIE
  const onFormSubmit = (e) => {
    e.preventDefault();
    fetchMovie(term);
  };

  //MAKE INPUT BOX FOCUS WHEN THE FORM/SEARCHICON IS CLICKED
  const autoFocus = () => {
    ref.current.focus();
  };

  return (
    <>
      <header className="flex justify-center items-center flex-col ">
        <nav className="flex justify-between w-11/12 md:px-3 h-20 items-center ">
          {/* LOGO */}
          <div className="font-extrabold text-2xl md:text-3xl tracking-wide text-white">
            Movie<span className="text-red-600">M</span>ate
          </div>
          {/* LOGO END */}

          {/* NOTIFICATION */}
          <div className=" relative flex">
            <img src={homeIcon} alt="search" className="w-6 ml-6 " />

            <img src={notifyIcon} alt="search" className="w-6 ml-6 " />
            <span className=" bg-red-600 w-3 h-3 rounded-full right-right absolute  top-1"></span>

            <img
              src={nathan}
              alt="search"
              className="w-8 ml-5 border-2 rounded-full border-red-500"
            />
          </div>
          {/* NOTIFICATION END*/}
        </nav>

        {/* SEARCHBAR */}
        <form
          className="flex w-12/12 lg:w-4/12 p-3 mt-5 justify-between bg-black border-2 cursor-pointer rounded-md border-red-600"
          onSubmit={onFormSubmit}
          onClick={autoFocus}
        >
          <input
            ref={ref}
            placeholder="movies, genres, title..."
            className="outline-none bg-black  text-left text-gray-300 w-12/12   "
            onChange={onTermChange}
            value={term}
          />
          <img
            src={searchIcon}
            alt="search"
            className="w-6 cursor-pointer"
            onClick={onFormSubmit}
          />
        </form>
          {/* SEARCHBAR END */}
      </header>
    </>
  );
};

export default Header;

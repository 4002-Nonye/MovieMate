import React, { useState } from "react";
import searchIcon from "../images/search.svg";
import filterIcon from "../images/filter.svg";
import notifyIcon from "../images/notify.svg";
import nathan from "../images/nathan.webp";
import homeIcon from "../images/home.svg";
import Filter from "./Filter";


const Header = ({ fetchMovie }) => {
  const [term, setTerm] = useState("");
 
  const [filter,setFilter] =useState(false)

  const onTermChange = (e) => {
    setTerm(e.target.value);
  };

  const onFormSubmit = (e) => {
    e.preventDefault();    
    fetchMovie(term);
    
  };
  const onFilterClick =()=>{
    setFilter(!filter)
   

  }
  return (
    <>
      <header className="flex justify-center items-center">
        <nav className="flex justify-between w-11/12 px-3 h-20 items-center">
          {/* LOGO */}
          <div className="font-extrabold text-3xl tracking-wide text-white">
            Movie<span className="text-red-600">M</span>ate
          </div>

          {/* SEARCH BAR */}
          <div className="w-4/12 mt-3 relative">
            <form
              className="bg-black px-4 py-3 rounded-lg w-full flex justify-between"
              onSubmit={onFormSubmit}
            >
              <div className="flex ">
                <img src={searchIcon} alt="search" className="w-6" />
                <input
            
                  placeholder="Search everything "
                  className="outline-none bg-black ml-5 text-left text-gray-300 w-full"
                  onChange={onTermChange}
                  value={term}
                />
              </div>
              <img src={filterIcon} alt="filter" className="w-6 cursor-pointer " onClick={onFilterClick}/>
           { filter?<Filter/>:''}
            </form>
          </div>

          {/* NOTIFICATION */}
          <div className="flex relative ">
            <img src={homeIcon} alt="search" className="w-6 " />

            <img src={notifyIcon} alt="search" className="w-6 ml-5 " />
            <span className="bg-red-500 w-3 rounded-full h-3 absolute left-14 top-1"></span>
            <img
              src={nathan}
              alt="search"
              className="w-10 ml-5 border-2 rounded-full border-red-500"
            />
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;

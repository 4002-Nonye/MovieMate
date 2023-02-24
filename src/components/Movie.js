import React, { useState } from "react";
import Modal from "./Modal";

const Movie = ({ movie }) => {
  const [modal, setShowModal] = useState(false);

  // OPEN MOVIE DETAILS
  const showModal = () => {
    setShowModal(true);
    document.body.classList.add('visible')
   
  };
  // CLOSE MOVIE DETAILS
  const closeModal=(e)=>{
    setShowModal(false)
    document.body.classList.remove('visible')
  }
  // CLOSE MOVIE DETAILS IF ESC IS PRESSED
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && modal) {
    setShowModal(false)
    document.body.classList.remove('visible')
    }
  });

  // IF MOVIE ARRAY IS EMPTY
  if (!movie || movie.length === 0) {
    return (
      <div className="text-red-400 text-xl flex justify-center items-center m-auto text-center h-56">
        oops! Nothing Found😐
      </div>
    );
  }

  return (
    <main className="grid sm:grid-cols-2 xl:grid-cols-4 gap-4 justify-center items-center w-full px-9 lg:px-20 mt-16">
     {modal?<Modal closeModal={closeModal} showModal={showModal} movie={movie}/>:null} 
      {movie.map((movieReq) => {
        if (!movieReq.poster_path) return;
        return (
          <div key={movieReq.id} className="h-full">
            <div className="mb-3 h-full ">
              <div className="bg-black p-4 rounded-md h-full">
                <img
                  src={`https://image.tmdb.org/t/p/w500/${movieReq.poster_path}`}
                  className="h-80 object-fill w-full rounded-sm"
                />
                <div className="mt-3">
                  <div className="flex flex-col h-full justify-center">
                    <p className="text-slate-300">
                      <span className="text-lg text-red-400 font-bold">
                        Movie Title:
                      </span>{" "}
                      {movieReq.title}
                    </p>
                    <p className="text-slate-300 mt-2">
                      <span className="text-lg text-red-400 font-bold">
                        Release Date:
                      </span>{" "}
                      {/* IF NO RELEASE DATA, DO NOT RENDER */}
                      {movieReq.release_date
                        ? movieReq.release_date.slice(0, 4)
                        : "unknown"}
                    </p>
                  </div>
                </div>
                <button
                  className="bg-slate-900 p-2 rounded-md mt-3 text-white hover:text-red-400 transition duration-700 ease-in-out"
                  onClick={showModal}
                >
                  View more
                </button>
              </div>
            </div>
            {/* MODAL SECTION */}
          </div>
        );
      })}
    </main>
  );
};

export default Movie;

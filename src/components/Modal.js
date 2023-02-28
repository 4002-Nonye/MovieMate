import React from "react";

const Modal = ({ closeModal, movieDetails }) => {
  const { overview, poster_path, popularity } = movieDetails;
  if (!movieDetails) return;

  return (
    <>
      <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 z-50">
        <div className="bg-white w-10/12 md:w-5/12 p-4 p-8 rounded shadow-md h-96 md:h-5/6 overflow-y-scroll relative z-50">
          <img
            src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
            alt=""
            className="w-8/12 lg:w-5/12"
          />
          <div className=" pb-6">
          <h2 className="text-2xl font-bold pt-7">Overview</h2>
            <p className="text-sm pt-3">{overview}</p>
          </div>

          <hr />
          <button
            className="text-md bg-gray-500 text-black px-3 py-2 rounded-md mt-5"
            onClick={closeModal}
          >
            Close
          </button>
        </div>
        <div className="overlay" onClick={closeModal}></div>
      </div>
    </>
  );
};

export default Modal;

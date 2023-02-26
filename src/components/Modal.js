import React from "react";

const Modal = ({ closeModal, movie }) => {
  if (!movie) return;
//   console.log(movie.title);
  return (
    <>
      <div className="modal ">
        <p className="text-black">
     {movie.title}
        </p>
        <p className="text-xl" onClick={closeModal}>
          x
        </p>
      </div>
      <div className="overlay" onClick={closeModal}></div>
    </>
  );
};

export default Modal;

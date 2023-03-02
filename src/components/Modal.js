import React, { useState } from "react";
import defaultImg from "../images/default.jpg";
import { motion, AnimatePresence } from "framer-motion";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

//FOR SKELETON TAGS...
// IF MOVIEDETAILS IS STILL LOADING, RENDER SKELETON

//FRAMER MOTION
const backdrop = {
  visible: { opacity: 1 },
  hidden: { opacity: 0 },
};

const popUp = {
  hidden: {
    y: "-100vh",
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: { delay: 0.5 },
  },
};
//FRAMER MOTION END

const Modal = ({ closeModal, movieDetails, modal, isLoading }) => {
  if (!movieDetails) return;

  //DESTRUCTURE MOVIEDETAILS
  const { overview, poster_path, vote_average, spoken_languages } =
    movieDetails;

  let rate;

  //DETERMINE RATING COLOR
  if (vote_average <= 3) {
    rate = "red";
  }
  if (vote_average > 3 && vote_average <= 7) {
    rate = "orange";
  } else if (vote_average > 7) {
    rate = "green";
  }
  return (
    <AnimatePresence mode="wait">
      {modal && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 z-50">
          {/* ANIMATE OVERLAY */}
          <motion.div
            variants={backdrop}
            initial="hidden"
            animate="visible"
            className="overlay"
            onClick={closeModal}
          ></motion.div>

          {/* ANIMATE MODAL */}
          <motion.div
            variants={popUp}
            initial="hidden"
            animate="visible"
            className="bg-white w-10/12 md:w-5/12  p-8 rounded h-96 md:h-5/6 overflow-y-scroll relative z-50"
          >
            {/* IF MOVIES DOES NOT HAVE AN IMAGE, USE DEFAULT IMAGE */}
            {isLoading ? (
              <Skeleton height={300} width={250} className="mt-4" />
            ) : (
              <img
                src={
                  poster_path
                    ? `https://image.tmdb.org/t/p/w500/${poster_path}`
                    : defaultImg
                }
                alt=""
                className="w-8/12 lg:w-5/12 border-2 border-black rounded-md "
              />
            )}

            {/* IF MOVIES HAS AN OVERVIEW, DISPLAY.... OTHERWISE? DON'T DISPLAY */}

            <div className=" pb-6 ">
              {isLoading ? (
                <Skeleton height={"30px"} width={150} className="mb-9 mt-9" />
              ) : (
                <h2 className="text-2xl font-bold pt-7 ">Overview</h2>
              )}
              {isLoading ? (
                <Skeleton height={"6rem"} />
              ) : overview ? (
                <p className="text-sm pt-3 ">{overview}</p>
              ) : (
                <p className="text-sm pt-3">
                  <span className="text-red-500">OOPS!</span> This movie has no
                  overview 😐, try checking another movie
                </p>
              )}
            </div>

            {/* MOVIE RATING */}
            <div className="flex items-center mb-3">
              {isLoading ? (
                <Skeleton height={"30px"} width={150}  />
              ) : (
                <h2 className="text-lg ">Ratings:</h2>
              )}

              {isLoading ? (
                <Skeleton height={"30px"} width={70} className="ml-3" />
              ) : (
                <p
                  className={`bg-slate-900  font-bold text-md text-center ml-3 pt-1  w-10 rounded-sm ${rate}`}
                >
                  {vote_average?.toFixed(1) ?? null}
                </p>
              )}
            </div>
            {/* MOVIE RATING END */}

            {/* MOVIE LANGUAGE */}

            <div className="flex items-center mb-3">
              {isLoading ? (
                <Skeleton height={"30px"} width={150}  />
              ) : (
                <h2 className="text-lg ">Language:</h2>
              )}

              {spoken_languages?.map((lang, index) => {
                return (
                  <>
                    {isLoading ? (
                      <Skeleton
                        height={"30px"}
                        width={100}
                        className="  ml-3"
                      />
                    ) : (
                      <p key={index} className="  text-sm  ml-3 ">
                        {lang.name ? lang.name : "unknown"}
                      </p>
                    )}
                  </>
                );
              })}
            </div>
            {/* MOVIE LANGUAGE END*/}

            <hr />
            <div className="text-right">
            {isLoading ? (
              <Skeleton height={"35px"} width={80} className='mt-5'/>
            ) : (
            
                <button
                  className="text-md bg-gray-500 text-black px-3 py-2 rounded-md mt-5 "
                  onClick={closeModal}
                >
                  Close
                </button>
              
            )}</div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default Modal;

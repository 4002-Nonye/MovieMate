import React from "react";
import defaultImg from "../images/default.jpg";

const Modal = ({ closeModal, movieDetails }) => {
  if (!movieDetails) return;
 

  const { overview, poster_path, vote_average, spoken_languages } =
    movieDetails;

   let rate;
   
//DETERMINE RATING COLOR
if(vote_average<=3) {
  rate='red'
  
} if(vote_average>3 && vote_average<=7){
  rate='orange'
}else if(vote_average>7){
  rate='green'
}
  return (
    <>
      <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 z-50">
        <div className="bg-white w-10/12 md:w-5/12  p-8 rounded h-96 md:h-5/6 overflow-y-scroll relative z-50">
          <img
            src={
              poster_path
                ? `https://image.tmdb.org/t/p/w500/${poster_path}`
                : defaultImg
            }
            alt=""
            className="w-8/12 lg:w-5/12 border-2 border-black rounded-md"
          />
          <div className=" pb-6">
            {overview ? (
              <>
                {" "}
                <h2 className="text-2xl font-bold pt-7">Overview</h2>
                <p className="text-sm pt-3">{overview}</p>
              </>
            ) : (
              ""
            )}
          </div>
          <div className="flex items-center mb-3">
            <h2 className="text-lg ">Ratings:</h2>

            <p className={`bg-slate-900  font-bold text-md text-center ml-3 pt-1  w-10 rounded-sm ${rate}`}>
              {vote_average?.toFixed(1) ?? null}
            </p>
          </div>
          <div className="flex items-center mb-3">
            <h2 className="text-lg ">Language:</h2>

            {spoken_languages?.map((lang) => {
              return <p key={lang} className="  text-sm  ml-3 ">{lang.name?lang.name:'unknown'}</p>;
            })}
          </div>

          <hr />
          <div className="text-right">  <button
            className="text-md bg-gray-500 text-black px-3 py-2 rounded-md mt-5 "
            onClick={closeModal}
          >
            Close
          </button></div>
        
        </div>
        <div className="overlay" onClick={closeModal}></div>
      </div>
    </>
  );
};

export default Modal;

import React, { useState ,useEffect} from "react";
import Modal from "./Modal";
import defaultImg from "../images/default.jpg";
import Database from "../api/Database";


const Movie = ({ movie }) => {
  const [modal, setShowModal] = useState(false);
  const [movieId, setMovieId] = useState(1);
  const [details, setDetails] = useState("");

  useEffect(() => {
    getMovieDetails();
  }, [movieId]);
  const getMovieDetails = async () => {
   
    const data = await Database.get(`/movie/${movieId}`, {
      params: {
        api_key: "93d1c08a41d789c260da15dfa118819a",
      },
    });
    setDetails(data.data);
    console.log(data.data);
  };

  // OPEN MOVIE DETAILS
  const showModal = () => {
    setShowModal(true);
    document.body.classList.add("visible");
  };
  // CLOSE MOVIE DETAILS
  const closeModal = (e) => {
    setShowModal(false);
    document.body.classList.remove("visible");
  };
  // CLOSE MOVIE DETAILS IF ESC IS PRESSED
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && modal) {
      setShowModal(false);
      document.body.classList.remove("visible");
    }
  });
 

  // IF MOVIE ARRAY IS EMPTY
  if (!movie || movie.length === 0) {
    return (
      <div className="text-red-500 text-xl flex justify-center items-center m-auto text-center h-screen">
        oops! Nothing Found😐
      </div>
    );
  }

  return (
    <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-4 justify-center items-center w-full px-9 lg:px-20 mt-16">
      {modal ? (
        <Modal closeModal={closeModal} showModal={showModal} movieDetails={details}/>
      ) : null}
      {movie.map((movieReq) => {
        //RENDER MOVIES ON SCREEN
       
        return (
          <div key={movieReq.id} className="h-full">
            <div className="mb-3 h-full ">
              <div className="bg-black p-4 rounded-md h-full">
                {/* IF MOVIES DOES NOT HAVE AN IMAGE, USE DEFAULT IMAGE */}
                <img
                  src={
                    movieReq.poster_path
                      ? `https://image.tmdb.org/t/p/w500/${movieReq.poster_path}`
                      : defaultImg
                  }
                  className="h-80 object-fill w-full rounded-sm"
                  alt="movie"
                />
                <div className="mt-3 flex h-1/6 m-auto">
                  <div className="flex flex-col h-full">
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
                      {/* IF NO RELEASE DATE, REPLACE WITH UNKNOWN */}
                      {movieReq.release_date
                        ? movieReq.release_date.slice(0, 4)
                        : "unknown"}
                    </p>
                  </div>
                </div>
                {/* BUTTON TO CONTROL MODAL (MORE DETAILS ON MOVIE) */}
                <button
                  className="bg-slate-900 p-2 rounded-md mt-3 text-white hover:text-red-400 transition duration-700 ease-in-out"
                  onClick={()=>{   
                  
                    setMovieId(movieReq.id)
              
                 setTimeout(()=>{
showModal()
                 },200)
                   
                  }}
                >
                  View more
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Movie;

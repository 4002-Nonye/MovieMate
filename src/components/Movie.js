import React from "react";


const Movie = ({ movie }) => {
  if (!movie) {
    return (
      <div className="text-white text-xl flex justify-center items-center m-auto text-center h-56">
        oops! Nothing Found😐
      </div>
    );
  }

  return (
    <main className="grid sm:grid-cols-3 md:grid-cols-4 gap-4 justify-center items-center w-full px-10 md:px-20 mt-16">
   
      {movie.map((movieReq) => {
        if (!movieReq.poster_path) return;
        return (
          <div key={movieReq.id}>
            <div className="mb-3">
              <div className="bg-black p-4 rounded-md">
                <img
                  src={`https://image.tmdb.org/t/p/w500/${movieReq.poster_path}`}
                  className="h-96 object-cover w-full rounded-sm"
                />
                <div className="mt-3">
                  {" "}
                  <p className="text-slate-300">
                    Movie Title- {movieReq.title}
                  </p>
                  <p className="text-slate-300 mt-2">
                    Release Date: {/* IF NO RELEASE DATA, DO NOT RENDER */}
                    {movieReq.release_date
                      ? movieReq.release_date.slice(0, 4)
                      : "unknown"}
                  </p>
                </div>
                <button className="bg-slate-900 p-2 rounded-md mt-2 text-white hover:text-red-400">
                  View more
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </main>
  );
};

export default Movie;

import React from "react";

const Movie = ({ res }) => {
  if (!res) {
    return <div className="text-white">Loading...</div>;
  }

  return (
    <main className="grid grid-cols-4 justify-center items-center w-full px-20 mt-10">
      {res.map((r) => {
        return (
          <div key={r.id}>
            <div className="mb-3 " >
            
              <p className="text-white">Movie Title- {r.title}</p>
              <p className="text-white">Release Date: {r.release_date?r.release_date: 'unknown'}</p>
            </div>
          </div>
        );
      })}
    </main>
  );
};

export default Movie;

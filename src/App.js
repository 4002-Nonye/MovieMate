import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Movie from "./components/Movie";
import Database from "./api/Database";

const App = () => {
  //   const [term, setTerm] = useState();
  const [movie, setMovies] = useState([]);

  //FETCH DATA FROM API
  useEffect(() => {
    fetchMovie("action");
  }, []);

  const fetchMovie = async (term) => {
    try {
      const response = await Database.get("./search/movie", {
        params: {
          api_key: "93d1c08a41d789c260da15dfa118819a",
          query: term,
        },
      });
      
      setMovies(response.data.results);
      console.log(response.data);
   
    } catch (error) {
      alert(error);
    }
  };

  return (
    <div>
      <Header fetchMovie={fetchMovie} />

      <Movie movie={movie} />
    </div>
  );
};

export default App;

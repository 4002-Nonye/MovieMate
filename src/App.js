import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Movie from "./components/Movie";
import Database from "./api/Database";

const App = () => {
//   const [term, setTerm] = useState();
  const [res, setRes] = useState([]);

  //FETCH DATA FROM API
  useEffect(() => {
    fetchMovie("Far from home");
  }, []);


  const fetchMovie = async (term) => {
    const response = await Database.get("./search/movie", {
      params: {
        api_key: "93d1c08a41d789c260da15dfa118819a",
        query: term,
      },
    });
    setRes(response.data.results);
    console.log(response.data.results);
  };

  return (
    <div>
      <Header fetchMovie={fetchMovie} />
      <Movie res={res} />
    </div>
  );
};

export default App;

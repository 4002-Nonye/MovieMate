import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Movie from "./components/Movie";
import Database from "./api/Database";
import { HashLoader } from "react-spinners";

const App = () => {
  //   const [term, setTerm] = useState();
  const [movie, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  //FETCH DATA FROM API
  useEffect(() => {
    fetchMovie("toy story");
  }, []);

  const fetchMovie = async (term) => {
   
    if(!term) return
    setLoading(true);

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
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <Header fetchMovie={fetchMovie} />
      {loading ? (
        <div className="flex justify-center items-center h-screen ">
          <HashLoader color="red" cssOverride={null} loading />
        </div>
      ) : (
        <Movie movie={movie} />
      )}
    </div>
  );
};

export default App;

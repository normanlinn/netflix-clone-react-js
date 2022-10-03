import axios from "axios";
import Movie from "./Movie.jsx";
import { useEffect, useState } from "react";

const Row = ({ title, fetchURL }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios
      .get(fetchURL)
      .then((response) => {
        setMovies(response.data.results);
      })
      .catch((err) => console.log("Error in Axios:", err));
  }, [fetchURL]);

  return (
    <>
      <h2 className="text-white font-bold md:text-3xl p-4 capitalize">
        {title} movies
      </h2>
      <div className="relative flex items-cener">
        <div
          id={"slider"}
          className="w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative"
        >
          {movies.map((item) => (
            <Movie item={item} key={item.id} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Row;

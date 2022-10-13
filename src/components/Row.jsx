import axios from "axios";
import Movie from "./Movie.jsx";
import { useEffect, useState } from "react";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

const Row = ({ title, fetchURL, rowId }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios
      .get(fetchURL)
      .then((response) => {
        setMovies(response.data.results);
      })
      .catch((err) => console.log("Error in Axios:", err));
  }, [fetchURL]);

  const slideLeft = () => {
    const sliderTag = document.getElementById("slider" + rowId);
    sliderTag.scrollLeft = sliderTag.scrollLeft - 500;
  };

  const slideRight = () => {
    const sliderTag = document.getElementById("slider" + rowId);
    sliderTag.scrollLeft = sliderTag.scrollLeft + 500;
  };

  return (
    <>
      <h2 className="text-white font-bold md:text-3xl p-4 capitalize">
        {title} movies
      </h2>
      <div className="relative flex items-center group select-none">
        <MdChevronLeft
          className="bg-white left-0 rounded-full absolute opacity-20 hover:opacity-75 cursor-pointer z-10 hidden group-hover:block transition-all"
          size={40}
          onClick={slideLeft}
        />
        <div
          id={"slider" + rowId}
          className="w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide"
        >
          {movies.map((item) => (
            <Movie item={item} key={item.id} />
          ))}
        </div>
        <MdChevronRight
          className="bg-white right-0 rounded-full absolute opacity-20 hover:opacity-75 cursor-pointer z-10 hidden group-hover:block transition-all"
          size={40}
          onClick={slideRight}
        />
      </div>
    </>
  );
};

export default Row;

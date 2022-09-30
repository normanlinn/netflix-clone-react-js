import axios from "axios";
import { useEffect, useState } from "react";
import requests from "../Requests";

const Main = () => {
  const [movies, setMovies] = useState([]);

  const movie = movies[Math.floor(Math.random() * movies.length)]; // one random movie per one time refresh

  useEffect(() => {
    window.scroll(0, 0);
    axios.get(requests.requestPopular).then((response) => {
      setMovies(response.data.results);
    });
  }, []);

  // console.log(movie);

  // cut off the text string
  const truncateString = (str, num) =>
    str?.length > num ? str.slice(0, num) + " ..." : str;

  return (
    <div className="w-full h-[550px] text-white">
      <div className="w-full h-full">
        {/* gradient shape */}
        <div className="absolute w-full h-[550px] bg-gradient-to-r from-black"></div>
        {/* add image */}
        <img
          className="w-full h-full object-cover"
          src={
            movie?.backdrop_path
              ? `https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`
              : ""
          }
          alt={movie?.title}
        />

        <div className="absolute w-full top-[20%] p-4 md:p-8 select-none">
          <h1 className="text-3xl md:text-5xl font-bold">{movie?.title}</h1>
          {/* buttons container*/}
          <div className="text-lg my-4 ">
            <button className="border bg-gray-300 border-gray-300 text-black py-2 px-5">
              Play
            </button>
            <button className="border border-gray-300 text-white py-2 px-5 ml-4">
              Watch Later
            </button>
          </div>
          <p className="text-gray-400 text-sm capitalize">
            released: {movie?.release_date}
          </p>
          <p className="w-full md:max-w-[70%] lg:max-w-[50%] xl:,max-w-[35%] text-gray-200 text-lg">
            {truncateString(movie?.overview, 150)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;

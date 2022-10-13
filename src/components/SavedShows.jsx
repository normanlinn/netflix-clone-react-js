import { useState, useEffect } from "react";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import { UserAuth } from "../context/AuthContext";
import { db } from "../firebase";
import { doc, onSnapshot, updateDoc } from "firebase/firestore";
import { AiOutlineClose } from "react-icons/ai";

const SavedShows = () => {
  const [movies, setMovies] = useState([]);
  const { user } = UserAuth();

  const slideLeft = () => {
    const sliderTag = document.getElementById("slider");
    sliderTag.scrollLeft = sliderTag.scrollLeft - 500;
  };

  const slideRight = () => {
    const sliderTag = document.getElementById("slider");
    sliderTag.scrollLeft = sliderTag.scrollLeft + 500;
  };

  const movieRef = doc(db, "users", `${user?.email}`);
  const deleteShow = async (passedId) => {
    try {
      const result = movies.filter((item) => item.id !== passedId);
      await updateDoc(movieRef, {
        savedShows: result,
      });
    } catch (err) {
      console.log("Error while unselecting a movie:", err);
    }
  };

  useEffect(() => {
    onSnapshot(doc(db, "users", `${user?.email}`), (doc) => {
      setMovies(doc.data()?.savedShows);
    });
  }, [user?.email]);

  return (
    <>
      <h2 className="text-white font-bold md:text-3xl p-4 capitalize">
        favourite movies
      </h2>
      <div className="relative flex items-center group select-none">
        <MdChevronLeft
          className="bg-white left-0 rounded-full absolute opacity-20 hover:opacity-75 cursor-pointer z-10 hidden group-hover:block transition-all"
          size={40}
          onClick={slideLeft}
        />
        <div
          id={"slider"}
          className="w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide"
        >
          {movies.map((item, id) => (
            <div
              key={id}
              className="w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer select-none relative p-2"
            >
              <img
                src={
                  item.img ? `https://image.tmdb.org/t/p/w500/${item?.img}` : ""
                }
                alt={item?.title}
              />
              <div className="absolute top-0 left-0 w-full h-full hover:bg-black/80 opacity-0 hover:opacity-100 text-white transition-opacity ease-in">
                <p className="text-sm font-bold flex justify-center items-center h-full text-center">
                  {item?.title}
                </p>
                <p
                  onClick={() => deleteShow(item.id)}
                  className="absolute text-gray-300 top-4 right-4"
                >
                  <AiOutlineClose />
                </p>
              </div>
            </div>
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

export default SavedShows;

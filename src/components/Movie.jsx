import { useState } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { UserAuth } from "../context/AuthContext";
import { db } from "../firebase";
import { arrayUnion, doc, updateDoc } from "firebase/firestore";

const Movie = ({ item }) => {
  const [like, setLike] = useState(false);
  const [saved, setSaved] = useState(false);
  const { user } = UserAuth();

  const movieId = doc(db, "users", `${user?.email}`);

  const saveShow = async () => {
    if (user?.email) {
      setLike(!like);
      setSaved(true);
      await updateDoc(movieId, {
        savedShows: arrayUnion({
          id: item.id,
          title: item.title,
          img: item.backdrop_path,
        }),
      });
    } else {
      alert("Please log in to save a movie...");
    }
  };

  const setLikeNull = () => {
    console.alert("you pressed the heart button");
    return setLike(!like);
  };
  return (
    <div className="w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer select-none relative p-2">
      <img
        src={
          item.backdrop_path
            ? `https://image.tmdb.org/t/p/w500/${item?.backdrop_path}`
            : ""
        }
        alt={item?.title}
      />
      <div className="absolute top-0 left-0 w-full h-full hover:bg-black/80 opacity-0 hover:opacity-100 text-white transition-opacity ease-in">
        <p className="text-sm font-bold flex justify-center items-center h-full text-center">
          {item?.title}
        </p>
        <p
          onClick={saveShow}
          className="absolute top-4 left-4 text-gray-300 text-xl p-2"
        >
          {like ? <FaHeart /> : <FaRegHeart onClick={setLikeNull} />}
        </p>
      </div>
    </div>
  );
};

export default Movie;

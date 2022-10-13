import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";

const Navbar = () => {
  const { user, LogOut } = UserAuth();
  const navigate = useNavigate();

  const handleLogOut = async () => {
    try {
      await LogOut();
      navigate("/");
    } catch (err) {
      console.log("Error while logging out:", err);
    }
  };

  return (
    <>
      <div className="flex items-center justify-between p-4 z-[100] w-full absolute antialiased select-none ">
        <Link to="/">
          <h1 className="uppercase text-red-600 text-5xl font-extrabold cursor-default">
            netflix
          </h1>
        </Link>
        {user?.email ? (
          <div className="font-semibold text-lg cursor-pointer">
            <Link to="/account">
              <button className="text-white pr-4 hover:opacity-75 hover:transition-opacity capitalize">
                account
              </button>
            </Link>
            <button
              onClick={handleLogOut}
              className="bg-red-600 px-6 py-2 rounded text-white hover:opacity-75 hover:transition-opacity capitalize"
            >
              log out
            </button>
          </div>
        ) : (
          <div className="font-semibold text-lg cursor-pointer">
            <Link to="/login">
              <button className="text-white pr-4 hover:opacity-75 hover:transition-opacity capitalize">
                login
              </button>
            </Link>
            <Link to="/signup">
              <button className="bg-red-600 px-6 py-2 rounded text-white hover:opacity-75 hover:transition-opacity capitalize">
                sign up
              </button>
            </Link>
          </div>
        )}
      </div>
    </>
  );
};

export default Navbar;

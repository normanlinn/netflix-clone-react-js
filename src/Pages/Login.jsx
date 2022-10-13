import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { LogIn } = UserAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await LogIn(email, password);
      navigate("/");
    } catch (err) {
      // console.log("Error while signing up:", err);
      setError(err.message);
    }
  };

  return (
    <>
      <div className="w-full h-screen">
        <img
          className="hidden sm:block w-full h-full object-cover"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/28b69a57-cadf-43d9-8a95-e5f2e11199de/f59978b9-e227-40ed-a774-c4d2a79f8cef/SG-en-20221010-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="/"
        />
        <div className="bg-black/60 fixed top-0 left-0 w-full h-screen">
          <div className="fixed w-full px-4 py-24 z-50">
            <div className="max-w-[450px] h-[600px] mx-auto bg-black/75 text-white">
              <div className="max-w-[320px] mx-auto py-16">
                <h1 className="text-3xl font-bold capitalize">sign in</h1>
                {error ? (
                  <p className="p-3 bg-red-400 my-2 capitalize">
                    {error.slice(9, 183)}
                  </p>
                ) : null}
                <form
                  onSubmit={handleSubmit}
                  className="w-full flex flex-col py-4"
                >
                  <input
                    onChange={(e) => setEmail(e.target.value)}
                    className="p-3 my-2 bg-gray-700 rounded outline-none"
                    type="email"
                    placeholder="Email"
                    autoComplete="email"
                  />
                  <input
                    onChange={(e) => setPassword(e.target.value)}
                    className="p-3 my-2 bg-gray-700 rounded outline-none"
                    type="password"
                    placeholder="Password"
                    autoComplete="current-password"
                  />
                  <button className="capitalize bg-red-600 py-3 my-6 rounded font-bold">
                    log in
                  </button>
                  <div className="flex justify-between items-center font-semibold text-gray-600 ">
                    <p>
                      <input className="mr-2 cursor-pointer" type="checkbox" />
                      Remember me
                    </p>
                    <a
                      className="capitalize cursor-pointer"
                      href="https://www.netflix.com/LoginHelp"
                    >
                      need help?
                    </a>
                  </div>
                  <p className="py-8">
                    <span className="text-gray-600 mr-1">New to Netflix?</span>
                    <Link to="/signup" className="capitalize">
                      Sign up now.
                    </Link>
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;

const Navbar = () => {
  return (
    <>
      <div className="flex items-center justify-between p-4 z-[100] w-full absolute antialiased select-none ">
        <h1 className="uppercase text-red-600 text-5xl font-extrabold cursor-default">
          netflix
        </h1>
        <div className="font-semibold text-lg cursor-pointer">
          <button className="text-white pr-4 hover:opacity-75 hover:transition-opacity capitalize">
            login
          </button>
          <button className="bg-red-600 px-6 py-2 rounded text-white hover:opacity-75 hover:transition-opacity capitalize">
            sign up
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;

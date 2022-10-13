import SavedShows from "../components/SavedShows";

const Account = () => {
  return (
    <>
      <div className="w-full text-white">
        <img
          className="w-full h-[400px] object-cover"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/28b69a57-cadf-43d9-8a95-e5f2e11199de/f59978b9-e227-40ed-a774-c4d2a79f8cef/SG-en-20221010-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="/"
        />
        <div className="bg-black/60 fixed top-0 left-0 w-full h-[500px]"></div>
        <div className="absolute top-[20%] p-4 md:p-8">
          <h1 className="capitalize text-4xl md:text-6xl font-bold">
            my favourites
          </h1>
        </div>
      </div>
      <SavedShows />
    </>
  );
};

export default Account;

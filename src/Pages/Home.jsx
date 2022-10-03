import Main from "../components/Main";
import Row from "../components/Row";
import requests from "../Requests";

const Home = () => {
  return (
    <>
      <Main />
      <Row title="upcoming" fetchURL={requests.requestUpcoming} />
      <Row title="popular" fetchURL={requests.requestPopular} />
      <Row title="trending" fetchURL={requests.requestTrending} />
      <Row title="top rated" fetchURL={requests.requestTopRated} />
      <Row title="horror" fetchURL={requests.requestHorror} />
    </>
  );
};

export default Home;

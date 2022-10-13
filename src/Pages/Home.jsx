import Main from "../components/Main";
import Row from "../components/Row";
import requests from "../Requests";

const Home = () => {
  return (
    <>
      <Main />
      <Row rowId="1" title="upcoming" fetchURL={requests.requestUpcoming} />
      <Row rowId="2" title="popular" fetchURL={requests.requestPopular} />
      <Row rowId="3" title="trending" fetchURL={requests.requestTrending} />
      <Row rowId="4" title="top rated" fetchURL={requests.requestTopRated} />
      <Row rowId="5" title="horror" fetchURL={requests.requestHorror} />
    </>
  );
};

export default Home;

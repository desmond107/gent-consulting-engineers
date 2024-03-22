import HomePage from "../components/home-page-components/homePage";

const Home = () => {
  useEffect(() => {
    document.title = "gents-consulting-engineers";
  }, []);
  return <HomePage />;
};

export default Home;

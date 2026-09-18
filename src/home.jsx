import HomePage from "../components/home-page-components/homePage";

const Home = () => {
  useEffect(() => {
    document.title = "Gent Consulting Engineers | Civil & Structural Engineering, Kenya";
  }, []);
  return <HomePage />;
};

export default Home;

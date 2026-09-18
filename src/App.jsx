import Footer from "../components/footer/footer";
import ShowCase1 from "./showcase1";
import NavBar from "../components/navbar-component/navbar";
import Services from "./services";
import ShowCase2 from "./showcase2";
import Error404 from "./error404";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AboutProject from "../components/project-page-components/aboutProject";
import About from "./about";
import Service from "./service";
import HomePage from "../components/home-page-components/homePage";
import Contact from "./contact";
import WhatsAppButton from "../components/whatsapp-button/whatsappButton";
import { Analytics } from "@vercel/analytics/react";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <NavBar />
        <HomePage />
        <Footer />
      </>
    ),
  },
  {
    path: "/services",
    element: (
      <>
        <NavBar />
        <Services />
        <Footer />
      </>
    ),
  },
  {
    path: "/services/:id",
    element: (
      <>
        <NavBar />
        <Service />
        <Footer />
      </>
    ),
  },
  {
    path: "/showcases/showcase1",
    element: (
      <>
        <NavBar showCase1Page={true} />

        <ShowCase1 />
        <Footer />
      </>
    ),
  },
  {
    path: "/showcases/showcase2",
    element: (
      <>
        <NavBar />
        <ShowCase2 />
        <Footer />
      </>
    ),
  },
  {
    path: "/projects/:id",
    element: (
      <>
        <NavBar />
        <AboutProject />
        <Footer />
      </>
    ),
  },
  {
    path: "/about",
    element: (
      <>
        <NavBar />
        <About />
        <Footer />
      </>
    ),
  },
  {
    path: "/contact",
    element: (
      <>
        <NavBar />
        <Contact />
        <Footer />
      </>
    ),
  },
  {
    path: "*",
    element: <Error404 />,
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
      <WhatsAppButton />
      <Analytics />
    </>
  );
}

export default App;

import ShowCase1 from "./showcase1";
import Services from "./services";
import ShowCase2 from "./showcase2";
import Error404 from "./error404";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AboutProject from "../components/project-page-components/aboutProject";
import About from "./about";
import Service from "./service";
import HomePage from "../components/home-page-components/homePage";
import Contact from "./contact";
import Layout from "../components/layout/layout";
import WhatsAppButton from "../components/whatsapp-button/whatsappButton";
import { Analytics } from "@vercel/analytics/react";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/services", element: <Services /> },
      { path: "/services/:id", element: <Service /> },
      { path: "/showcases/showcase2", element: <ShowCase2 /> },
      { path: "/projects/:id", element: <AboutProject /> },
      { path: "/about", element: <About /> },
      { path: "/contact", element: <Contact /> },
    ],
  },
  {
    // Showcase 1 has its own full-bleed hero, so the navbar sits over it.
    element: <Layout navProps={{ showCase1Page: true }} />,
    children: [{ path: "/showcases/showcase1", element: <ShowCase1 /> }],
  },
  { path: "*", element: <Error404 /> },
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

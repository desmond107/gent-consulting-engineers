import Logo from "../components/brand/logo";
import { Link } from "react-router-dom";
import Button from "../components/buttons-component/solidbutton";
import Seo from "../components/seo/seo";

const Error404 = () => {
  return (
    <>
      <Seo />
      <nav aria-label="Site" className="fixed bg-card top-0 py-8 left-0 right-0 flex justify-center items-center">
        <Link to="/">
          <Logo tone="dark" size="md" />
        </Link>
      </nav>
      <main id="main" className="flex justify-center items-center min-h-screen text-center">
        <div className="error-container px-5 text-2xl flex flex-col justify-center items-center gap-5">
          <h1 className="text-9xl font-semibold text-brand-600">404</h1>
          <h2 className="title-font text-4xl font-medium">
            Something's not right.
          </h2>
          <p>We can't find the page you are looking for.</p>
          <Link to={"/"}>
            <Button as="span" content={"Back to homepage"} padding={"px-5 py-2"} />
          </Link>
        </div>
      </main>
    </>
  );
};

export default Error404;

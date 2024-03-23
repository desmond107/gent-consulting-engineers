import { useEffect } from "react";
import ServicesComponent from "../components/services-page-components/services";

const Services = () => {
  useEffect(() => {
    document.title = "Servics - gent consulting engineers";
  }, []);
  return (
    <div className="overflow-hidden">
      <ServicesComponent />
    </div>
  );
};

export default Services;

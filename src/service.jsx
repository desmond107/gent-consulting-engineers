import { useEffect } from "react";
import { Navigate, useParams } from "react-router-dom";
import ServicePage from "../components/service-component/service";
import { servicesData } from "../constants/servicesData";

const Service = () => {
  const params = useParams();
  const service = servicesData.find((e) => String(e.id) === String(params.id));

  useEffect(() => {
    if (service) {
      document.title = `${service.title} | Gents Consulting Engineers`;
    }
  }, [service]);

  if (!service) return <Navigate to="/services" replace />;
  return <ServicePage service={service} />;
};

export default Service;

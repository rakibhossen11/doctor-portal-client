import { Link } from "react-router-dom";

const ServiceCard = ({ service }) => {
  const { _id, serviceName, doctorName, price, image } = service;
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <img src={image} alt="" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">Service Name: {serviceName}</h2>
        <p>Doctor Name: {doctorName}</p>
        <p>Visit: {price}</p>
        <div className="card-actions justify-end">
        <Link to={`/book/${_id}`}>
        <button className="btn btn-warning">Book Now</button></Link>
        </div>

      </div>
    </div>
  );
};

export default ServiceCard;

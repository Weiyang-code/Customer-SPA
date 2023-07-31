import React from "react";
import { Link, useParams, Outlet, useNavigate } from "react-router-dom";

const CustomerDetails = ({ customers, deleteCustomer }) => {
  const navigate = useNavigate();
  const { id } = useParams();
  const customer = customers.find((c) => c.id === parseInt(id));

  if (!customer) {
    return <p>Loading...</p>;
  }

  const handleDelete = () => {
    deleteCustomer(customer.id);
    navigate("/");
  };

  return (
    <div className="alert alert-primary">
      <h1 className="text-center">Customer Management System</h1>
      <h2 className="text-uppercase">Registered Customer</h2>
      <p>
        <strong>Name:</strong> {customer.name}
      </p>
      <p>
        <strong>Email:</strong> {customer.email}
      </p>
      <p>
        <strong>Phone:</strong> {customer.phone}
      </p>
      <button className="btn btn-danger me-md-2 mt-2" onClick={handleDelete}>
        Delete
      </button>
      <Link className="btn btn-primary mt-2" to="/">
        Back to Customer List
      </Link>
      <Outlet />
    </div>
  );
};

export default CustomerDetails;

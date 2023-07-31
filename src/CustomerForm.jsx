import React, { useState } from "react";
import { Link } from "react-router-dom";

const CustomerForm = ({ addCustomer }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newCustomer = {
      id: Date.now(),
      name,
      email,
      phone,
    };
    addCustomer(newCustomer);
    setName("");
    setEmail("");
    setPhone("");
  };

  return (
    <div className="alert alert-primary">
      <h1 className="text-center">Customer Management System</h1>
      <h2 className="text-uppercase">Register New Customer</h2>
      <form onSubmit={handleSubmit}>
        <label>
          <strong>Name:</strong>
        </label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <label className="ms-2">
          <strong>Email:</strong>
        </label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <label className="ms-2">
          <strong>Phone:</strong>
        </label>
        <input
          type="text"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
        />
        <button type="submit" className="btn btn-success ms-2">
          Register
        </button>
      </form>
      <Link className="btn btn-primary mt-2" to="/">
        Back to Customer List
      </Link>
    </div>
  );
};

export default CustomerForm;

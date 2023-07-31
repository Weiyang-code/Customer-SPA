import React from 'react';
import { Link } from 'react-router-dom';

const CustomerList = ({ customers, deleteCustomer }) => {
  return (
    <div className="alert alert-primary"> 
    <h1 className="text-center">Customer Management System</h1>
      <h2 className="text-uppercase">Registered Customers</h2>
      <ul className ="list-group d-grid gap-2">
        {customers.map((customer) => (
          <li className ="list-group-item d-flex justify-content-between " key={customer.id}>
            <Link className="display-6 link-opacity-50-hover link-offset-1" to={`/customer/${customer.id}`}>{customer.name}</Link>
            <button type="button" class="btn btn-danger btn-lg" onClick={() => deleteCustomer(customer.id)}>Delete</button>
          </li>
        ))}
      </ul>
      <Link class="btn btn-primary btn-lg mt-2" to="/new-customer"><strong>Register New Customer</strong></Link>
    </div>
  );
};

export default CustomerList;
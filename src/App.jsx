import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CustomerList from "./CustomerList";
import CustomerDetails from "./CustomerDetails";
import CustomerForm from "./CustomerForm";


function App() {
  const [customers, setCustomers] = useState([]);

  const addCustomer = (newCustomer) => {
    setCustomers([...customers, newCustomer]);
  };

  const deleteCustomer = (id) => {
    setCustomers(customers.filter((customer) => customer.id !== id));
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<CustomerList customers={customers} deleteCustomer={deleteCustomer} />} />
        <Route path="/customer/:id" element={<CustomerDetails customers={customers} deleteCustomer={deleteCustomer} />} />
        <Route path="/new-customer" element={<CustomerForm addCustomer={addCustomer} />} />
      </Routes>
    </Router>
  );
}

export default App;
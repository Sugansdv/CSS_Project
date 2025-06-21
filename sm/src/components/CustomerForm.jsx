import React, { useState, useEffect } from "react";
import { BsPencilSquare, BsTrash } from "react-icons/bs";

const CustomerForm = () => {
  const [customer, setCustomer] = useState({
    name: "",
    contact: "",
    address: "",
    date: "",
  });

  const [isEditable, setIsEditable] = useState(true);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("customerDetails"));
    if (stored) {
      setCustomer(stored);
      setIsEditable(false);
    }
  }, []);

  const handleChange = (e) => {
    setCustomer({ ...customer, [e.target.name]: e.target.value });
  };

  const validateFields = () => {
    const { name, contact, address, date } = customer;

    if (!name.trim() || !contact.trim() || !address.trim() || !date.trim()) {
      alert("All fields are required.");
      return false;
    }

    const phoneRegex = /^[0-9]{10}$/;
    if (!phoneRegex.test(contact)) {
      alert("Contact number must be a valid 10-digit number.");
      return false;
    }

    return true;
  };

  const handleSave = () => {
    if (!validateFields()) return;

    localStorage.setItem("customerDetails", JSON.stringify(customer));
    setIsEditable(false);
  };

  const handleEdit = () => setIsEditable(true);

  const handleDelete = () => {
    localStorage.removeItem("customerDetails");
    setCustomer({ name: "", contact: "", address: "", date: "" });
    setIsEditable(true);
  };

  return (
    <div className="border-bottom pb-3 px-2" style={{ maxWidth: "700px" }}>
      <h5>Customer Details</h5>

      <div className="row gx-2 gy-3">
        <div className="col-lg-5 col-md-6 col-sm-12">
          <label>CUSTOMER NAME:</label>
          <input
            name="name"
            value={customer.name}
            onChange={handleChange}
            disabled={!isEditable}
            className="form-control bg-transparent border-0 rounded-0"
          />
        </div>

        <div className="col-lg-5 col-md-6 col-sm-12">
          <label>CONTACT NO:</label>
          <input
            name="contact"
            value={customer.contact}
            onChange={handleChange}
            disabled={!isEditable}
            className="form-control bg-transparent border-0 rounded-0"
            maxLength={10}
          />
        </div>

        <div className="col-lg-2 col-md-12 d-flex justify-content-end align-items-end">
          {!isEditable ? (
            <button
              onClick={handleEdit}
              className="btn btn-outline-secondary rounded-circle p-2 d-flex align-items-center justify-content-center"
              style={{ width: "40px", height: "40px" }}
            >
              <BsPencilSquare />
            </button>
          ) : (
            <button onClick={handleSave} className="btn btn-success w-100">
              Save
            </button>
          )}
        </div>
      </div>

      <hr className="my-3" />

      <div className="row gx-2 gy-3">
        <div className="col-lg-5 col-md-6 col-sm-12">
          <label>ADDRESS:</label>
          <input
            name="address"
            value={customer.address}
            onChange={handleChange}
            disabled={!isEditable}
            className="form-control bg-transparent border-0 rounded-0"
          />
        </div>

        <div className="col-lg-5 col-md-6 col-sm-12">
          <label>DATE:</label>
          <input
            type="date"
            name="date"
            value={customer.date}
            onChange={handleChange}
            disabled={!isEditable}
            className="form-control bg-transparent border-0 rounded-0"
          />
        </div>

        <div className="col-lg-2 col-md-12 d-flex justify-content-end align-items-end">
          <button
            onClick={handleDelete}
            className="btn btn-outline-secondary rounded-circle p-2 d-flex align-items-center justify-content-center"
            style={{ width: "40px", height: "40px" }}
          >
            <BsTrash />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CustomerForm;

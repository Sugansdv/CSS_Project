import React, { useEffect, useState } from 'react';
import CustomerForm from '../components/CustomerForm';
import SearchBar from '../components/SearchBar';
import ItemList from '../components/ItemList';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const navigate = useNavigate();
  const [items, setItems] = useState([]);

  useEffect(() => {
    document.title = 'Home | Vetri_SuperMarket';
  }, []);

  useEffect(() => {
    const storedItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    setItems(storedItems);
  }, []);

  const handleNext = () => {
    const customer = JSON.parse(localStorage.getItem('customerDetails'));

    if (!customer || !customer.name || !customer.contact || !customer.address || !customer.date) {
      alert('Please fill in all customer details before proceeding.');
      return;
    }

    navigate('/payment');
  };

  return (
    <div className="container ms-md-5 home" style={{ paddingLeft: '25%' }}>
      <CustomerForm />

      <div className="d-flex align-items-center mt-4">
        <SearchBar />
      </div>

      <ItemList items={items} />

      <div className="mt-4" style={{ maxWidth: '600px', marginLeft: '30%' }}>
        <button className="btn btn-primary px-4 py-2 fw-bold" onClick={handleNext}>
          Next
        </button>
      </div>
    </div>
  );
};

export default HomePage;

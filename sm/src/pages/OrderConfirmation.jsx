import React, { useEffect, useState } from 'react';
import orderImage from '../assets/completed.png';
import { useNavigate, useLocation} from 'react-router-dom';
import '../App.css'
import { Helmet } from 'react-helmet';

const OrderConfirmation = () => {
  const [customer, setCustomer] = useState({});
  const [orderId, setOrderId] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const details = JSON.parse(localStorage.getItem('customerDetails')) || {};
    setCustomer(details);

    let id = localStorage.getItem('orderId');
    if (!id) {
      id = Math.floor(100 + Math.random() * 900);
      localStorage.setItem('orderId', id);
    }
    setOrderId(id);
  }, []);

  const handleDownloadInvoice = () => {
    navigate('/invoice');
  };

  return (
    <div className="container text-center mt-5 order-container ps-md-5">
            <Helmet>
              <title>OrderConfirmation | Vetri_SuperMarket</title>
              <meta name="description" content="Welcome to Vetri SuperMarket homepage." />
            </Helmet>
      <img
        src={orderImage}
        alt="Order Confirmation"
        style={{ width: '180px', marginBottom: '30px' }}
      />

      <h2 className="fw-bold">Your Order Completed</h2>
      <p className="text-muted">Thank you. Your order has been received</p>

      <div
        className="d-flex flex-wrap justify-content-between align-items-start mt-4 p-3 px-4 rounded"
        style={{ backgroundColor: '#d9f6dc', maxWidth: '900px', margin: '30px auto' }}
      >
        <div className="info-box" style={{ flex: '1 1 150px', marginBottom: '15px' }}>
          <div className="fw-bold text-start">Order ID</div>
          <div className="fw-normal text-start">{orderId}</div>
        </div>
        <div className="info-box" style={{ flex: '1 1 150px', marginBottom: '15px' }}>
          <div className="fw-bold text-start">Name</div>
          <div className="fw-normal text-start">{customer.name}</div>
        </div>
        <div className="info-box" style={{ flex: '1 1 150px', marginBottom: '15px' }}>
          <div className="fw-bold text-start">Phone Number</div>
          <div className="fw-normal text-start">{customer.contact}</div>
        </div>
        <div className="info-box" style={{ flex: '1 1 200px', marginBottom: '15px' }}>
          <div className="fw-bold text-start">Email Id</div>
          <div className="fw-normal text-start">
            {customer.email || 'mail id not found'}
          </div>
        </div>
        <div className="info-box text-end" style={{ flex: '1 1 200px', marginBottom: '15px' }}>
          <button
            className="btn"
            style={{
              backgroundColor: '#f77c3e',
              color: '#fff',
              fontWeight: 'bold',
              padding: '6px 14px',
              borderRadius: '6px',
            }}
            onClick={handleDownloadInvoice}
          >
            Download Invoice
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderConfirmation;

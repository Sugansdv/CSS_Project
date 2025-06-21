import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import cashImg from '../assets/cash.png';
import cardImg from '../assets/card.png';
import draftImg from '../assets/draft.png';
import { Helmet } from 'react-helmet-async';

const PaymentPage = () => {
  const navigate = useNavigate();
 


  const [customer, setCustomer] = useState({});
  const [orderId, setOrderId] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [totalAmount, setTotalAmount] = useState(0);
  const [paymentType, setPaymentType] = useState('');
  const [receivedAmount, setReceivedAmount] = useState('');
  const [balance, setBalance] = useState(0);

  useEffect(() => {
    const customerData = JSON.parse(localStorage.getItem('customerDetails')) || {};
    const orderID = localStorage.getItem('orderId') || '';
    const items = JSON.parse(localStorage.getItem('cartItems')) || [];
    const total = items.reduce((acc, item) => acc + (item.amount || 0), 0);

    setCustomer(customerData);
    setOrderId(orderID);
    setDate(customerData.date || new Date().toISOString().slice(0, 10));

    const now = new Date();
    const formattedTime = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    setTime(formattedTime);

    setTotalAmount(total);
  }, []);

  useEffect(() => {
    const balanceValue = receivedAmount ? receivedAmount - totalAmount : 0;
    setBalance(balanceValue.toFixed(2));
  }, [receivedAmount, totalAmount]);

  const handlePayment = () => {
    if (!paymentType) {
      alert('Please select a payment method (Cash or Card).');
      return;
    }

    if (!receivedAmount || receivedAmount < totalAmount) {
      alert('Please enter a valid received amount that covers the total.');
      return;
    }

    navigate('/order-complete');
  };

  const handleDraft = () => {
    const draft = {
      customer,
      orderId,
      date,
      time,
      paymentType,
      receivedAmount,
      balance,
      totalAmount,
    };
    console.log('Draft Saved:', draft);
    alert('Draft Saved Successfully!');
  };

  const handleSave = () => {
    const savedData = {
      customer,
      orderId,
      date,
      time,
      paymentType,
      receivedAmount,
      balance,
      totalAmount,
    };

    localStorage.setItem('savedPayment', JSON.stringify(savedData));
    alert('Payment data saved to localStorage!');
  };

  return (
    <div className="container payment-container mt-4 p-4 border rounded shadow" style={{ maxWidth: '500px', background: '#fff' }}>
      <Helmet>
        <title>Payment | Vetri SuperMarket</title>
        <meta name="description" content="Browse our wide selection of grocery products at Vetri SuperMarket." />
        <meta name="keywords" content="products, grocery, Vetri SuperMarket, shop online" />
      </Helmet>
      <div className="d-flex justify-content-between align-items-center mb-3">
        <div>
          <p className="mb-1"><strong>DATE:</strong> {date}</p>
          <p className="mb-1"><strong>TIME:</strong> {time}</p>
          <p className="mb-1"><strong>BILL NO:</strong> {orderId}</p>
        </div>
        <button className="btn btn-sm btn-light fw-bold d-flex align-items-center gap-2" onClick={handleDraft}>
          <img src={draftImg} alt="Draft" width="20" height="20" />
          Draft
        </button>
      </div>

      <div className="row text-center mb-4">
        <div className="col">
          <div className="p-2 text-white rounded" style={{ backgroundColor: "#f77c3e" }}>
            <div className="fw-bold">Collected Amount</div>
            <div>{totalAmount}</div>
          </div>
        </div>
        <div className="col">
          <div className="p-2 border rounded text-dark" style={{ backgroundColor: "#ec9fff" }}>
            <div className="fw-bold">Balance</div>
            <div>{balance}</div>
          </div>
        </div>
      </div>

      <div className="d-flex justify-content-between align-items-center mt-3 mb-4" style={{ maxWidth: '100%' }}>
        <div className="d-flex flex-column me-3" style={{ flex: 1 }}>
          <button
            className={`btn mb-2 d-flex align-items-center justify-content-center gap-2 ${
              paymentType === 'CASH' ? 'btn-warning text-white fw-bold' : 'btn-outline-secondary'
            }`}
            onClick={() => setPaymentType('CASH')}
          >
            <img src={cashImg} alt="Cash" width="24" height="24" />
            CASH
          </button>
          <button
            className={`btn d-flex align-items-center justify-content-center gap-2 ${
              paymentType === 'CARD' ? 'btn-warning text-white fw-bold' : 'btn-outline-secondary'
            }`}
            onClick={() => setPaymentType('CARD')}
          >
            <img src={cardImg} alt="Card" width="24" height="24" />
            CARD
          </button>
        </div>

        <div style={{ flex: 1 }}>
          <label htmlFor="receivedAmount" className="form-label fw-bold">Received Amount</label>
          <input
            type="number"
            id="receivedAmount"
            className="form-control"
            value={receivedAmount}
            onChange={(e) => setReceivedAmount(parseFloat(e.target.value) || '')}
          />
        </div>
      </div>

      <div className="border-top pt-3">
        <div className="d-flex justify-content-between">
          <span>Sub Total</span>
          <span>{totalAmount - 30}</span>
        </div>
        <div className="d-flex justify-content-between">
          <span>Tax</span>
          <span>30</span>
        </div>
        <div className="d-flex justify-content-between">
          <span>Round Off</span>
          <span>00</span>
        </div>
        <hr />
        <div className="d-flex justify-content-between fw-bold">
          <span>Total</span>
          <span>{totalAmount}</span>
        </div>
      </div>

      <div className="d-flex justify-content-between mt-4">
        <button className="btn btn-outline-warning bg-orange fw-bold" onClick={handleSave}>Save</button>
        <button
  className="btn btn-primary fw-bold text-dark"
  onClick={handlePayment}
>
  Payment
</button>
      </div>
    </div>
  );
};

export default PaymentPage;

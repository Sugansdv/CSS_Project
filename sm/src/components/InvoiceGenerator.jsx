import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

const InvoiceGenerator = () => {
  const invoiceRef = useRef();
  const navigate = useNavigate();
  const [customer, setCustomer] = useState({});
  const [items, setItems] = useState([]);
  const [orderId, setOrderId] = useState('');
  const [orderDate, setOrderDate] = useState('');

  useEffect(() => {
    const storedCustomer = JSON.parse(localStorage.getItem('customerDetails')) || {};
    const storedItems = JSON.parse(localStorage.getItem('cartItems')) || [];

    const storedOrderId = localStorage.getItem('orderId') || 'ORD' + Date.now().toString().slice(-6);
    const storedDate = localStorage.getItem('orderDate') || new Date().toISOString().slice(0, 10);

    setCustomer(storedCustomer);
    setItems(storedItems);
    setOrderId(storedOrderId);
    setOrderDate(storedDate);

    localStorage.setItem('orderId', storedOrderId);
    localStorage.setItem('orderDate', storedDate);
  }, []);

  const handleDownload = () => {
    html2canvas(invoiceRef.current).then((canvas) => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('p', 'mm', 'a4');
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (canvas.height * pdfWidth) / canvas.width;

      pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
      pdf.save('invoice.pdf');

      setTimeout(() => {
        navigate('/thankyou');
      }, 500);
    });
  };

  const totalAmount = items.reduce((acc, item) => acc + (item.amount || 0), 0);

  return (
    <div className="invoice-container container mt-4 text-dark px-2 px-md-4">
      <div
        ref={invoiceRef}
        className="p-3 p-md-4 border bg-white mx-auto"
        style={{ maxWidth: '900px' }}
      >
        <h3 className="text-center fw-bold mb-4">Tax Invoice</h3>

        <div className="row">
          <div className="col-12 col-md-6 mb-3">
            <p><b>Sold By:</b> <span style={{ color: '#f77c3e' }}>Vetri Market</span></p>
            <p><b>Ship-From Address:</b><br />
              Vetri market<br />
              65, Old Market, Sivagurunathapuram, Surandai,<br />
              Tamil Nadu 627-859
            </p>
          </div>
          <div className="col-12 col-md-6 d-flex align-items-start justify-content-md-end">
            <p className="border p-2 rounded text-center w-100 w-md-auto">
              Invoice Number # <b>HY{orderId.toString().slice(-8)}</b>
            </p>
          </div>
        </div>

        <hr />

        <div className="row">
          <div className="col-12 col-md-6">
            <p><b>Order ID:</b> {orderId}</p>
            <p><b>Order Date:</b> {orderDate}</p>
          </div>
          <div className="col-12 col-md-6">
            <p><b>Billing Address</b></p>
            <p>{customer.name}</p>
            <p>{customer.address || 'Address not available'}</p>
            <p>Phone - {customer.contact}</p>
            <p>{customer.email ? `Email - ${customer.email}` : 'Mail ID not found'}</p>
          </div>
        </div>

        <div className="table-responsive mt-4">
          <table className="table table-bordered text-center align-middle">
            <thead className="table-light">
              <tr>
                <th>Description</th>
                <th>Quantity</th>
                <th>Rate</th>
                <th>Total Amount</th>
              </tr>
            </thead>
            <tbody>
              {items.map((item, idx) => (
                <tr key={idx}>
                  <td>{item.name}</td>
                  <td>{item.quantity}</td>
                  <td>{item.rate}</td>
                  <td>{item.amount}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h5 className="text-end mt-4"><b>Total</b>: ₹ {totalAmount.toFixed(2)}</h5>
      </div>

      <div className="text-center mt-4 mb-5">
        <button
          className="btn text-white fw-bold"
          style={{ backgroundColor: '#f77c3e' }}
          onClick={handleDownload}
        >
          Download Invoice
        </button>
      </div>
    </div>
  );
};

export default InvoiceGenerator;

import React, { useEffect, useState } from 'react';
import { FaPlus, FaMinus, FaTrash } from 'react-icons/fa';
import '../App.css';

const ItemList = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    loadItems();
    window.addEventListener('storage', loadItems);
    const interval = setInterval(loadItems, 500);
    return () => {
      window.removeEventListener('storage', loadItems);
      clearInterval(interval);
    };
  }, []);

  const loadItems = () => {
    const stored = JSON.parse(localStorage.getItem('cartItems')) || [];
    setItems(stored);
  };

  const updateQuantity = (index, type) => {
    const updated = [...items];
    if (type === 'inc') {
      updated[index].quantity += 1;
    } else if (type === 'dec' && updated[index].quantity > 1) {
      updated[index].quantity -= 1;
    }
    updated[index].amount = updated[index].quantity * updated[index].rate + updated[index].tax;
    setItems(updated);
    localStorage.setItem('cartItems', JSON.stringify(updated));
  };

  const deleteItem = (index) => {
    const updated = items.filter((_, i) => i !== index);
    setItems(updated);
    localStorage.setItem('cartItems', JSON.stringify(updated));
  };

  const headers = ['Item', 'Qty', 'Rate', 'Tax', 'Amount', ''];

  return (
    <div className="mt-4 px-0" style={{ maxWidth: '700px' }}>
      {/* Header Row - visible on md and up */}
      <div className="row bg-light fw-bold text-primary text-center d-none d-md-flex border border-dark rounded py-2 mx-0 gx-0" >
        <div className="col">Item</div>
        <div className="col">Quantity</div>
        <div className="col">Rate</div>
        <div className="col">Tax</div>
        <div className="col">Amount</div>
        <div className="col">Action</div>
      </div>

      {items.length === 0 ? (
        <p className="text-muted mt-3 p-4">No items in cart.</p>
      ) : (
        items.map((item, index) => (
          <div key={index} className="row text-center align-items-center mt-3 bg-white shadow-sm rounded py-2 mx-0 gx-0">
            <div className="col-12 col-md d-flex justify-content-center justify-content-md-start px-1">
             <strong className="d-md-none me-2">Item:</strong>
             {item.name}
            </div>

            <div className="col-12 col-md d-flex justify-content-center align-items-center gap-3 mt-2 mt-md-0">
              <button
                className="btn btn-outline-primary rounded-circle d-flex align-items-center justify-content-center"
                style={{ width: '32px', height: '32px' }}
                onClick={() => updateQuantity(index, 'dec')}
              >
                <FaMinus size={12} />
              </button>
              <span>
                <strong className="d-md-none me-2">quantity:</strong>{item.quantity}</span>
              <button
                className="btn btn-outline-primary rounded-circle d-flex align-items-center justify-content-center"
                style={{ width: '32px', height: '32px' }}
                onClick={() => updateQuantity(index, 'inc')}
              >
                <FaPlus size={12} />
              </button>
            </div>

            <div className="col-12 col-md mt-2 mt-md-0">
              <strong className="d-md-none me-2">Rate:</strong>
              {item.rate}

            </div>

            <div className="col-12 col-md mt-2 mt-md-0">
              <strong className="d-md-none me-2">Tax:</strong>
              {item.tax}

            </div>

            <div className="col-12 col-md mt-2 mt-md-0">
               <strong className="d-md-none me-2">Amount:</strong>
              {item.amount}
              </div>

            <div className="col-12 col-md mt-2 mt-md-0">
              <FaTrash
                onClick={() => deleteItem(index)}
                style={{ cursor: 'pointer', color: 'red' }}
              />
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default ItemList;

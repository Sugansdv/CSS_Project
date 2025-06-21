import React, { useState } from 'react';
import { FaPlus, FaMinus, FaShoppingCart } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import '../App.css'
import { Helmet } from 'react-helmet-async';

const initialProducts = [
  { name: "Dairy Milk", quantity: 2, rate: 100, tax: 20 },
  { name: "Millet Noodles", quantity: 1, rate: 30, tax: 10 },
  { name: "Wheat Flour", quantity: 2, rate: 100, tax: 20 },
  { name: "Maida", quantity: 1, rate: 30, tax: 10 },
  { name: "Chili Powder", quantity: 2, rate: 100, tax: 20 },
  { name: "Biryani Masala", quantity: 1, rate: 30, tax: 10 },
];

const ProductsPage = () => {       
  const [products, setProducts] = useState(initialProducts);
  const navigate = useNavigate();

  const handleNext = () => {
    navigate('/');
  };

  const updateQuantity = (index, type) => {
    const updated = [...products];
    if (type === 'inc') updated[index].quantity += 1;
    if (type === 'dec' && updated[index].quantity > 1) updated[index].quantity -= 1;
    setProducts(updated);
  };

  const handleAddToCart = (product) => {
    const cart = JSON.parse(localStorage.getItem('cartItems')) || [];

    const index = cart.findIndex(item =>
      item.name.toLowerCase() === product.name.toLowerCase()
    );

    if (index !== -1) {
      cart[index].quantity += product.quantity;
      cart[index].amount = cart[index].quantity * cart[index].rate + cart[index].tax;
    } else {
      const newItem = {
        ...product,
        amount: product.quantity * product.rate + product.tax,
      };
      cart.push(newItem);
    }

    localStorage.setItem('cartItems', JSON.stringify(cart));
    alert(`${product.name} added to item list.`);
  };

  return (
    <div className="container px-2 mx-auto product-container" style={{ maxWidth: "700px" }}>
       <Helmet>
        <title>Products | Vetri SuperMarket</title>
        <meta name="description" content="Browse our wide selection of grocery products at Vetri SuperMarket." />
        <meta name="keywords" content="products, grocery, Vetri SuperMarket, shop online" />
      </Helmet>
      <h4 className="fw-bold mt-3 product-title">Products</h4>

      <div className="row bg-light text-primary fw-bold d-none d-md-flex border border-dark rounded text-center mt-4 py-2 ">
        <div className="col">Item</div>
        <div className="col">Qty</div>
        <div className="col">Rate</div>
        <div className="col">Tax</div>
        <div className="col">Amount</div>
        <div className="col">Action</div>
      </div>

      {products.map((product, index) => {
        const amount = product.quantity * product.rate + product.tax;

        return (
          
          <div key={index} className="row bg-white shadow-sm rounded mt-3 py-2 text-center gx-1">
            <div className="col-12 col-md d-flex justify-content-center justify-content-md-start ms-2">
              <strong className="d-md-none me-2">Item:</strong>
              {product.name}
            </div>

            <div className="col-12 col-md d-flex justify-content-center align-items-center gap-3 mt-2 mt-md-0">
                          <button
                            className="btn btn-outline-primary rounded-circle d-flex align-items-center justify-content-center"
                            style={{ width: '32px', height: '32px' }}
                            onClick={() => updateQuantity(index, 'dec')}
                          >
                            <FaMinus size={12} />
                          </button>
                          <span>{product.quantity}</span>
                          <button
                            className="btn btn-outline-primary rounded-circle d-flex align-items-center justify-content-center"
                            style={{ width: '32px', height: '32px' }}
                            onClick={() => updateQuantity(index, 'inc')}
                          >
                            <FaPlus size={12} />
                          </button>
                        </div>

            {/* RATE */}
            <div className="col-12 col-md mt-2 mt-md-0">
              <strong className="d-md-none me-2">Rate:</strong>
              {product.rate}
            </div>

            {/* TAX */}
            <div className="col-12 col-md mt-2 mt-md-0">
              <strong className="d-md-none me-2">Tax:</strong>
              {product.tax}
            </div>

            {/* AMOUNT */}
            <div className="col-12 col-md mt-2 mt-md-0">
              <strong className="d-md-none me-2">Amount:</strong>
              {amount}
            </div>

            <div className="col-12 col-md mt-2 mt-md-0">
              <button
                className="btn btn-sm bg-orange text-white rounded-circle"
                onClick={() => handleAddToCart(product)}
              >
                <FaShoppingCart />
              </button>
            </div>
          </div>
        );
      })}

      <div className="mt-4 text-center">
        <button className="btn bg-orange fw-bold px-4" onClick={handleNext}>
          Next
        </button>
      </div>
    </div>
  );
};

export default ProductsPage;

import React, { useState } from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import SearchIcon from '../assets/search.png';
import BarCode from '../assets/bar code.png';
import Mic from '../assets/mic.png';
import '../App.css'; 
import { useNavigate } from 'react-router-dom';

const productsList = [
  { name: "Dairy Milk", quantity: 1, rate: 100, tax: 20 },
  { name: "Millet Noodles", quantity: 1, rate: 30, tax: 10 },
  { name: "Wheat Flour", quantity: 1, rate: 100, tax: 20 },
  { name: "Maida", quantity: 1, rate: 30, tax: 10 },
  { name: "Chili Powder", quantity: 1, rate: 100, tax: 20 },
  { name: "Biryani Masala", quantity: 1, rate: 30, tax: 10 },
];

const SearchBar = () => {
  const navigate = useNavigate();
    const goToProductsPage = () => {
    navigate('/products');
  };
  const [search, setSearch] = useState('');

  const handleAddItem = () => {
    const searchText = search.trim().toLowerCase();
    const found = productsList.find(
      (p) => p.name.trim().toLowerCase() === searchText
    );

    if (!found) {
      alert('Item not found in product list.');
      return;
    }

    const cart = JSON.parse(localStorage.getItem('cartItems')) || [];
    const existingIndex = cart.findIndex(
      (item) => item.name.trim().toLowerCase() === found.name.trim().toLowerCase()
    );

    if (existingIndex !== -1) {
      cart[existingIndex].quantity += 1;
      cart[existingIndex].amount =
        cart[existingIndex].quantity * cart[existingIndex].rate + cart[existingIndex].tax;
    } else {
      const newItem = {
        ...found,
        amount: found.quantity * found.rate + found.tax,
      };
      cart.push(newItem);
    }

    localStorage.setItem('cartItems', JSON.stringify(cart));
    alert(`${found.name} added to item list.`);
    setSearch('');
  };

  return (
    <div className="w-75 px-2">
  {/* Input Group Row */}
  <div className="input-group flex-nowrap" style={{ maxWidth: '100%' }}>
    <span className="input-group-text bg-white border-end-0">
      <img src={SearchIcon} alt="search" width="18" height="18" />
    </span>

    <input
      type="text"
      className="form-control border-start-0 border-end-0 p-2"
      placeholder="Search"
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      style={{ minWidth: 0 }}
    />

    <span className="input-group-text bg-white border-start-0 border-end-0">
      <img src={BarCode} alt="barcode" width="35" height="15" />
    </span>

    <span className="input-group-text bg-white border-start-0">
      <img src={Mic} alt="mic" width="18" height="18" />
    </span>

    <button
      className="btn"
      style={{ backgroundColor: '#f88e55', color: '#fff' }}
      onClick={handleAddItem}
    >
      <FaShoppingCart />
    </button>

    <div className="d-none d-sm-block ms-3">
      <button className="btn btn-warning" style={{ backgroundColor: "#f77c3e" }} onClick={goToProductsPage}>
        + Add Item
      </button>
    </div>
  </div>

  <div className="mt-2 d-block d-sm-none text-end">
    <button className="btn btn-warning" style={{ backgroundColor: "#f77c3e" }} onClick={goToProductsPage}>
      + Add Item
    </button>
  </div>
</div>

  );
};

export default SearchBar;

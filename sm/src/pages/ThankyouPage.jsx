import React from 'react';
import ThankyouImage from '../assets/thank you.png';
import { useNavigate } from 'react-router-dom';
import '../App.css'
import { Helmet } from 'react-helmet';

const ThankYouPage = () => {
  const navigate = useNavigate();
   useEffect(() => {
  if (!sessionStorage.getItem('reloadedOnce')) {
    sessionStorage.setItem('reloadedOnce', 'true');
    window.location.reload();
  }
}, []);

  return (
    <div className="container ms-md-5 t-container d-flex flex-column align-items-center justify-content-center text-center mt-5 px-3" style={{ minHeight: '80vh' }}>
      `     <Helmet>
              <title>Payment | Vetri_SuperMarket</title>
              <meta name="description" content="Welcome to Vetri SuperMarket homepage." />
            </Helmet>
      <img
        src={ThankyouImage}
        alt="Thank You"
        className="img-fluid ms-md-5"
        style={{ maxWidth: '400px', width: '100%' }}
      />

      <h2 className="mt-4 text-success ms-md-5">Thank you for your purchase!</h2>
      <p className="text-muted ms-md-5">Your order has been placed successfully.</p>

      <button className="btn btn-primary mt-3" onClick={() => navigate('/')}>
        Back to Home
      </button>
    </div>
  );
};

export default ThankYouPage;

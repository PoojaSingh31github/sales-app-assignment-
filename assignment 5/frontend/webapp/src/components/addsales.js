import React, { useState } from 'react';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Addsales = () => {
  const [user, setUser] = useState({ product: '', quantity: '', amount: '' });

  const config = {
    headers: {
      "Content-type": "application/json",
      "authorization": "bearer " + localStorage.getItem("token")
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:4000/addsales', {
        product: user.product,
        quantity: user.quantity,
        amount: user.amount,
      }, config);
      setUser({ product: '', quantity: '', amount: '' });

      // Show success toast
      toast.success(response.data.message);
      
    } catch (error) {
      console.error('There was an error in adding the sale:', error.message);
    }
  };
  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card shadow p-3 mb-5 bg-body rounded">
            <div className="card-header shadow-sm">
              <h3 className='text-center'>Add Sale entry</h3>
            </div>
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="Product" className="form-label">Product</label>
                  <input type="text" className="input-bg form-control" value={user.product} onChange={(e) => setUser({ ...user, product: e.target.value })} placeholder='Product' />
                </div>
                <div className="mb-3">
                  <label htmlFor="Quantity" className="form-label">Quantity</label>
                  <input type="text" className="input-bg form-control" value={user.quantity} onChange={(e) => setUser({ ...user, quantity: e.target.value })} placeholder='Quantity' />
                </div>
                <div className="mb-3">
                  <label htmlFor="Amount" className="form-label">Amount</label>
                  <input type="text" className="input-bg form-control" value={user.amount} onChange={(e) => setUser({ ...user, amount: e.target.value })} placeholder='Amount'/>
                </div>
                <button type="submit" className="btn btn-primary ">submit</button>
              <ToastContainer />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Addsales;

// The e.preventDefault() function is often used in event handlers to prevent the default behavior of an event. For instance, in React, when you handle a form submission or a link click, using e.preventDefault() prevents the default action associated with that event.
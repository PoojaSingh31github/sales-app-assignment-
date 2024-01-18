import axios from 'axios';
import React, { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Register() {
  const [user, setUser] = useState({ firstname: '', lastname: '', email: '', password: '' });
  const subminHandler = async (e) => {
      e.preventDefault();
      try {
        const resp = await axios.post('http://localhost:4000/register', user);
          if (resp.status === 201) {
              toast.success(resp.data.message);
              setUser({ firstname: '', lastname: '', email: '', password: '' });
          }
      } catch (error) {
          console.log(error);
          toast.error(error.response.data.message);
      }
  }
  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card shadow p-3 mb-5 bg-body rounded">
            <div className="card-header shadow-sm">
              <h3 className='text-center'><i class="fa-regular fa-registered"></i> Registration From</h3>
            </div>
            <div className="card-body">
              <form onSubmit={subminHandler}>
                <div className="mb-3">
                  <label htmlFor="fullname" className="form-label">first Name</label>
                  <input type="text" className="input-bg form-control" value={user.firstname} onChange={(e) => setUser({ ...user, firstname: e.target.value })} placeholder='Full Name' />
                </div>
                <div className="mb-3">
                  <label htmlFor="userName" className="form-label">Last Name</label>
                  <input type="text" className="input-bg form-control" value={user.lastname} onChange={(e) => setUser({ ...user, lastname: e.target.value })} placeholder='User Name' />
                </div>
                <div className="mb-3">
                  <label htmlFor="Email" className="form-label">E-mail</label>
                  <input type="text" className="input-bg form-control" value={user.email} onChange={(e) => setUser({ ...user, email: e.target.value })} placeholder='Email' />
                </div>
                
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">Password</label>
                  <input type="password" className="input-bg form-control"value={user.password} onChange={(e) => setUser({ ...user, password: e.target.value })} placeholder='**********' />
                </div>
                <button type="submit" className="btn btn-primary ">submit</button>
              </form>
            </div>
            <ToastContainer />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Register;
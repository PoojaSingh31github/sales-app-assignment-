import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';

const Login=()=> {
  const [user, setUser] = useState({ email: '', password: '' });
    const navigate= useNavigate();
    const subminHandler = async (e) => {
        e.preventDefault();
        //console.log(user);
        try {
            const resp = await axios.post('http://localhost:4000/login', user);
            //console.log(resp);
            if (resp.status === 200) {
                console.log(resp);
                toast.success(resp.data.result.message);
                localStorage.setItem('token',resp.data.result.token);
                navigate('/addsales');
            }
        } catch (error) {
            console.log(error);
            toast.error("error");
        }
    }
  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card shadow p-3 mb-5 bg-body rounded">
            <div className="card-header shadow-sm">
              <h3><i class="fa-solid fa-right-to-bracket"></i> Login</h3>
            </div>
            <div className="card-body">
              <form onSubmit={subminHandler}>
                <div className="mb-3">
                  <label htmlFor="username" className="form-label">Username</label>
                  <input type="text" className="input-bg form-control" value={user.email} onChange={(e) => setUser({ ...user, email: e.target.value })} placeholder='email' />
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">Password</label>
                  <input type="password" className="input-bg form-control" value={user.password} onChange={(e) => setUser({ ...user, password: e.target.value })} placeholder='**********' />
                </div>
                <button type="submit" className="btn btn-primary ">submit</button>
              <ToastContainer/>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    
  );
}

export default Login;

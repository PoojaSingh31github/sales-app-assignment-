import React from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';

const Nav = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem('token');
    toast.success('Logout successful!');
    navigate('/login'); 
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light shadow">
      <div className="container-fluid">
        <a className="navbar-brand" href="/addsales">Sales App </a>
        <button
          className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
          aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            {localStorage.getItem('token') ? (
              <>
                <li className="nav-item">
                  <a className="nav-link active" href="/addsales"> Add sales </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" href="/revenue"> Revenue </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" href="/topfive"> Top Sales </a>
                </li>
                <li className="nav-item">
                  <button className="btn" onClick={handleLogout}> Logout </button>
                </li>
              </>
            ) : (
              <>
                <li className="nav-item">
                  <a className="nav-link active" href="/login"> Login </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" href="/register"> Register </a>
                </li>
              </>
            )}
          </ul>
        </div>
        <ToastContainer />
      </div>
    </nav>
  );
};

export default Nav;

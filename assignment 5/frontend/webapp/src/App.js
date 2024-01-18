import { ToastContainer, } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import Addsales from './components/addsales';
import Login from './components/login';
import Nav from './components/nav';
import Register from './components/register';
import Revenue from './components/revenue';
import Topfive from './components/top5';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';

function App() {

  return (
    <div>
      <Router>
        <ToastContainer />
      <Nav />
        <Routes>
          <Route exact path="/login" element={<Login />}></Route>
          <Route exact path="/addsales" element={<Addsales />}></Route>
          <Route exact path="/register" element={<Register />}></Route>
          <Route exact path="/revenue" element={<Revenue />}></Route>
          <Route exact path="/topfive" element={<Topfive />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;

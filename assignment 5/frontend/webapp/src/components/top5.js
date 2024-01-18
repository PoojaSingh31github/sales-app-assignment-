import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Topfive() {
  const [topSales, setTopSales] = useState([]);
  const config = {
    headers: {
      "Content-type" : "application/json",
      "authorization" : "bearer " + localStorage.getItem("token")
    }
  }
// it's fetching data from an API endpoint:- use-effect
  useEffect(() => {
    const fetchTopSales = async () => {
      try {
        const response = await axios.get('http://localhost:4000/topfive', config); 
        // console.log(response.data);
        setTopSales(response.data); 
      } catch (error) {
        console.error('Error fetching top 5 sales:', error);
        // Handle error or display error message to the user
      }
    };

    fetchTopSales();
  }, []); // Run this effect only once on component mount

  return (
    <div className='container m-8'>
      <h3 className='text-center mt-5'><i class="fa-solid fa-arrow-up"></i> Top 5 Sales</h3>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Sales Id</th>
            <th scope="col">Product Name</th>
            <th scope="col">Quantity</th>
            <th scope="col">Sale Amount</th>
          </tr>
        </thead>
        <tbody>
          {topSales.map((sale, index) => (
            <tr key={sale._id}>
              <th scope="row">{index + 1}</th>
              <td>{sale._id}</td>
              <td>{sale.product}</td>
              <td>{sale.quantity}</td>
              <td>{sale.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Topfive;

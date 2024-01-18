import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Revenue() {
  const [totalRevenue, setTotalRevenue] = useState(null);
  const config = {
    headers: {
      "Content-type" : "application/json",
      "authorization" : "bearer " + localStorage.getItem("token")
    }
  }
  useEffect(() => {
    const fetchtotalRevenue = async () => {
      try {
        const response = await axios.get('http://localhost:4000/revenue', config); 
        setTotalRevenue(response.data[0].amount)
      } catch (error) {
        console.error('Error fetching revenue', error);
      }
    };
    fetchtotalRevenue();
  }, []);
  return (
    <h1 className='text-center mt-5'>
      TOTAL REVENUE IS <i className="fa-solid fa-dollar-sign"></i> {totalRevenue}
    </h1>
  );
}
export default Revenue;

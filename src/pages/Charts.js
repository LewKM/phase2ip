import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "../css/Charts.css"


const FeaturedCharts = () => {
  const [products, setProducts] = useState([]);
useEffect(() => {
  fetchProducts();
}, []);
const fetchProducts = () => {
  axios
    .get('http://localhost:3000/chartdetails')
    .then((res) => {
      console.log(res);
      setProducts(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
};
return (
    <div id="main-page">
      <h1>Featured Charts</h1>
      <div className='item-container'>
        {products.map((product) => (
          <div className='card'>
            <div className='imgcard'>
              <img src={product.image} alt='chart-not-found' />
            </div>
            <div className='detailcard'>
              <h1>{product.title}</h1>
              <h3>{product.pairname}</h3>
              <p>{product.comment}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default FeaturedCharts;
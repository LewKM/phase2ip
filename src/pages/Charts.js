import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "../css/Charts.css"


const FeaturedCharts = () => {
  const [products, setProducts] = useState([]);
    useEffect(() => {
    fetchProducts();
  }, []);

  const [isMarked, setIsMarked] = useState(false)

  const handleMarkBtn = () => {
    setIsMarked(!isMarked)
  }

const fetchProducts = () => {
  axios
    .get('https://forex-talks-app.herokuapp.com/chartdetails')
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
      <center>
      <div className='chart-container'>
        {products.map((product) => (
          <div className='card'>
            <div className='img-card'>
              <img src={product.image} alt='chart-not-found' />
            </div>
            <br></br>
            <div className='detail-card'>
              <h1>{product.title}</h1>
              <h3>{product.pairname}</h3>
              <p>{product.comment}</p>
              <button onClick={handleMarkBtn}>{isMarked ? "Mark as unread" : "Mark as read" }</button>
            </div>
          </div>
        ))}
      </div>
      </center>
    </div>
  );
};
export default FeaturedCharts;
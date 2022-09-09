import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "../css/Charts.css"


const FeaturedCharts = () => {
  const [reviews, setProducts] = useState([]);
    useEffect(() => {
    fetchProducts();
  }, []);

  const [isMarked, setIsMarked] = useState(false)
  

  const handleMarkBtn = () => {
    setIsMarked(!isMarked)
  }

  const fetchProducts = () => {
    axios
      .get('http://localhost:9292/reviews')
      .then((res) => {
        console.log(res);
        setProducts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

// write a function that will delete a review
  const deleteReview = (id) => {
    axios
      .delete(`http://localhost:9292/reviews/${id}`)
      .then((res) => {
        console.log(res);
        fetchProducts();
      })
      .catch((err) => {
      });
  };

// write a function that will update a review

  return (
      <div id="main-page">
        <h1>Featured Charts</h1>
        <center>
        <div className='chart-container'>
          {reviews.map((review) => (
            <div className='card'>
              <div className='img-card'>
                <img src={review.image_url} alt='chart-not-found' />
              </div>
              <br></br>
              <div className='detail-card'>
                <h1>{review.user_id}</h1>
                <h3>{review.trading_pair}</h3>
                <p>{review.comment}</p>
                <button onClick={handleMarkBtn}>{isMarked ? "Mark as unread" : "Mark as read" }</button>
                <br></br>
                <button onClick={deleteReview}>
                  <span role="img" aria-label="delete">
                    🗑
                  </span>
                </button>
              </div>
            </div>
          ))}
        </div>
        
        </center>
      </div>
    );
  };
export default FeaturedCharts;

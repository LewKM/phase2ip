import React from 'react';
import "../css/Blog.css"

export default function BlogPart() {

  return (
    <div id="home">
      <div className="home">
        <div className="home__container">
          <h1>Trending Blogs</h1>
          <div className="home__row">
            <p>
              Below are some of the most trending blogs on the market.
            </p>
            <div>
              <h2>Trending Blog 1</h2>
              <p></p>
              <button>Read More</button>
            </div>
            <div>
              <h2>Trending Blog 2</h2>
              <p></p>
              <button>Read More</button>
            </div>
            <div>
              <h2>Trending Blog 3</h2>
              <p></p>
              <button>Read More</button>
            </div>
            <div>
              <h2>Trending Blog 4</h2>
              <p></p>
              <button>Read More</button>
            </div>
            <div>
              <h2>Trending Blog 5</h2>
              <p></p>
              <button>Read More</button>
            </div>
            <div>
              <h2>Trending Blog 6</h2>
              <p></p>
              <button>Read More</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


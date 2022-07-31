import React from 'react';
import "../css/Blog.css"

export default function BlogPart() {
  const openInNewTab = url => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div id="home">
      <div className="home">
        <div className="home__container">
          <h1 id="head">Trending Blogs</h1>
          <div className="home__row">
            <h2>
              Below are some of the most trending blogs on the market.
            </h2>
            <div>
              <h3>Trading Different Time-Zones</h3>
              <p>Different time zones can be tricky to trade in, but with a little bit of planning, it's definitely doable! Make sure to take into account the different opening and closing times of markets, and be aware of any major news announcements that could impact the markets you're trading in. By doing your research and being prepared, you can trade in different time zones successfully!</p>
              <button onClick={() => openInNewTab('https://lewkm.github.io/phase1project/')}>
                Read More
              </button> 
            </div>
            <div>
              <h3>Trading Different Time-Frames</h3>
              <p>The MetaTrader 4 (MT4) trading terminal is probably one of the most versatile trading and charting platforms combined. The MT4 platform offers a good amount of customization which traders can use to their benefit.

While the MT4 platform offers a good selection of custom time frames, starting from 1-minute and up to 1-month, traders often find themselves in need of using custom time frames such as 2-hour, 6-hour, 8-hour or 12-hour charts.</p>
              <button onClick={() => openInNewTab('https://www.orbex.com/blog/en/2017/08/use-custom-time-frame-charts-mt4-platform')}>
                Read More
              </button> 
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


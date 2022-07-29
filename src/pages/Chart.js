import React, {useState} from "react";
import "../css/Charts.css";

function Chart({chart1}) {

  const {id, title, comment, pairname, image} = chart1
  const [isMarked, setIsMarked] = useState(false)
  const handleMarkBtn = () => {
    setIsMarked(!isMarked)
  }



  return (
    <div className="chartinit">
      <div>
        <p>{id}</p>
        <p>
          <strong>-  {pairname}</strong>
        </p>
      </div>
      <div className="chartinit2">
        <h3>{title}</h3>
        <img id="imagechart"src={image} alt="chart" />
        <p>{comment}</p>
        <button onClick={handleMarkBtn}>{isMarked ? "Mark as unread" : "Mark as read" }</button>
      </div>
    </div>
  );
}

export default Chart;
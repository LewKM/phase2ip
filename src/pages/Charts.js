import React, {useEffect, useState} from "react";
// import "../css/Charts.css";
import ChartsContainer from "./ChartsContainer";


function Charts() {
  const [chartdetails, setCharts] = useState([])
  

  useEffect(() => {
    (
      async () => {
        let req = await  fetch('http://localhost:3000/chartdetails',{
          method: "GET",
          headers: {
            'Content-Type': 'application/json'
          }
        })
        let res = await req.json()
        setCharts(res)
      }
    )()
  },[])

  
  return (
    <div className="chartdisplay">
      <div>
        <ChartsContainer chartdetails={chartdetails}/>
      </div>
    </div>
  );
};

export default Charts;
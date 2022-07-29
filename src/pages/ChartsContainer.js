// import React from "react";
// import Chart from "./Chart";

// function ChartsContainer({chartdetails}) {


//   return (
//     <div className="poems-container">
//       {
//         chartdetails.map((res) => {
//           return(
//             <Chart key={res.id} chart1={res}/>
//           )
//         })
//       }
//     </div>
//   );
// }

// export default ChartsContainer;

import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";

const Data = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get("../db.json");
      setData(result.data);
    };
    fetchData();
  }, []);

  return (
    <div>
      {data.map(chartdetails => (
        <div key={chartdetails.id}>
          <h1>{chartdetails.title}</h1>
          <p>{chartdetails.pairname}</p>
          <p>{chartdetails.image}</p>
          <p>{chartdetails.comment}</p>
        </div>
      ))}
    </div>
  );
};

export default Data;
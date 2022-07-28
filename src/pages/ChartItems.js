import { useState, useEffect } from "react";
import axios from "axios";
import Charts from "./Charts";

export default function ChartItem() {
  const [chart, setCharts] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    const response = await axios.get(
      "db.json"
    );
    setCharts(response.data);
  };
  useEffect(() => {
    (async () => {
      setLoading(true);
      fetchData();
      setLoading(false);
    })();
  }, []);
  return (
    <div>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div>
          {chart.map((chartdetails) => (
            <Charts key={chartdetails.id} chartdetails={chartdetails} />
          ))}
        </div>
      )}
    </div>
  );
}
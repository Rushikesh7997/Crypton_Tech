import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [data, setData] = useState([{}]);

  const OrderStatsApp = async () => {
    try {
      const res = await fetch("http://localhost:3500/data");
      const data = await res.json();
      console.log(data);
      setData(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    OrderStatsApp();
  }, []);

  return (
    <div className="container">
      {data.map((data) => {
        return <div>
          <p></p>
        </div>;
      })}
    </div>
  );
}

export default App;

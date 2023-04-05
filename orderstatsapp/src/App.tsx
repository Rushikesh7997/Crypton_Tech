import { useEffect, useState } from 'react';
import './App.css';

function App() {

  const OrderStatsApp = async () => {
    try {
      const res = await fetch("http://localhost:3500/data");
      const data = await res.json();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    OrderStatsApp();
  }, []);

  return (
    <div className="App">
      <h1>hello</h1>
    </div>
  );
}

export default App;

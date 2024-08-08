import { useState } from 'react';
import './App.css';
import Graficas from './components/Graficas';
import LineChar from './components/LineChart';
import { Chart as ChartJs, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler } from 'chart.js';

ChartJs.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
);

let misoptions = {
  scales: {
    y: {
      min: 0
    },
    x: {
      ticks: { color: 'rgb(255,99,132)' } // Corregido 'Ticks' a 'ticks'
    }
  }
}

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Graficas />
      <LineChar misoptions={misoptions} /> {/* Pasar 'misoptions' como prop */}
    </>
  )
}

export default App;
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Graficas from './components/Graficas'
import { Chart as ChartJs,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
 } from 'chart.js'


 ChartJs.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
 )

 let misoptions = {
  scales : {
    y : {
      min : 0
    },
    x: {
      Ticks : {color: 'rgb(255,99,132)'}
  }
 }
}

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
  <Graficas/>
    </>
  )
}

export default App

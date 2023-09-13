import React, { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import WeatherAppComponents from './components/WeatherAppComponents/WeatherAppComponents'

function App() {
  const [count, setCount] = useState(0)

  return (
    <React.Fragment>
      <div className='App'>
      <WeatherAppComponents/>
      </div>
    </React.Fragment>
  )
}

export default App

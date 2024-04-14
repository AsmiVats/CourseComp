import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Compare from './pages/Compare'
import ChatBot from './pages/ChatBot'
import Home from './pages/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
    <Navbar/>
    <Home/>
    </div>
  )
}

export default App

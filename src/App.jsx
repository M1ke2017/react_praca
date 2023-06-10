import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <div class="wrap">
  <p class="text">blade</p>
  <p class="text">blade</p>
  <p class="text">blade</p>
  <p class="crack"></p>
      </div>
     <br/>
      
      <p className="read-the-docs">
       Michał Łuczak 113801
      </p>
    </>
  )
}

export default App

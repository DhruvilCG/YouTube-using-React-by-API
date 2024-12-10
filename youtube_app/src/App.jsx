import { useState } from 'react'
import Sidebar from './components/Sidebar.jsx'
import Maincontent from './components/MainContent'
import './components/Main.css'

function App() {

  return (
    <>
      <div className="flex">
        <Sidebar />
        <Maincontent />
      </div>
    </>
  )
}

export default App

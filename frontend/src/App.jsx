import React from 'react'
import './index.css'
import{ Routes, Route} from 'react-router-dom'
import Hero from './Pages/Hero'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Hero />} />
      </Routes>
    </>
  )
}

export default App

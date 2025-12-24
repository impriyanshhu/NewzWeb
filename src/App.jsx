import React, { useState } from 'react'
import Navbar from './Components/Navbar'
import NewzContainer from './Components/NewzContainer.jsx'
import { Route, Routes } from 'react-router-dom';

const App = () => {

  const [category, setCategory] = useState('general');

  return (
    <>
      <Navbar setCategory={setCategory} />
      <Routes>
        <Route path='/' element={<NewzContainer category={category} />} />
        <Route path='/:category' element={<NewzContainer category={category} />} />
      </Routes>
    </>
  )
}

export default App

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Header from './header';

function App() {

  return (
    <Routes>
      <Route path='/' element={<Header />}>

      </Route>
    </Routes>
  )
}

export default App

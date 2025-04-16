import React from 'react'
import {BrowserRouter, Route, Routes } from 'react-router-dom'
import UserLayout from './components/Layout/UserLayout'
import Home from './pages/Home'

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<UserLayout />}>
        <Route index element={<Home/>} />
        </Route>
        <Route>{/*Admin Layout*/}</Route>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App

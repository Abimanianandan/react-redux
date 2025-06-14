import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import DisplayUsers from './components/DisplayUsers'
import AddUser from './components/AddUser'
import EditUser from './components/EditUser'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<DisplayUsers />}/>
        <Route path='/add' element={<AddUser />}/>
        <Route path='/:id' element={<EditUser />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
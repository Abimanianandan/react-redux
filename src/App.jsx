import React, { useEffect, useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import DisplayUsers from './components/DisplayUsers'
import AddUser from './components/AddUser'
import EditUser from './components/EditUser'
import LoadingImage from '../src/preloader.gif'

const App = () => {
  const [loading,setLoading] = useState(true)
 useEffect(()=>{
   const timer = setTimeout(()=>{
    setLoading(false)
    return ()=> clearTimeout(timer)
   },1000)
 },[])
  return (
   <>
   {loading ? <div className='d-flex justify-content-center' style={{marginTop:"100px"}}>
      <img src={LoadingImage} alt="loading..." />
   </div> : <BrowserRouter>
      <Routes>
          <Route path='/' element={<DisplayUsers />}/>
          <Route path='/add' element={<AddUser />}/>
          <Route path='/:id' element={<EditUser />}/>
      </Routes>
    </BrowserRouter>}
   </>
  )
}

export default App
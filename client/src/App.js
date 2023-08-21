import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Signup from './Signup'
import Login from './Login'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const App = () => {
  return (
    <div>
      <ToastContainer />
     <BrowserRouter>
     <Routes>
      <Route path='/signup' element={<Signup/>}></Route>
      <Route path='/login' element={<Login/>}></Route>
     </Routes>
</BrowserRouter> 
    </div>
  )
}

export default App

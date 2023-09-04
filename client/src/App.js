import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Signup from './Signup'
import Login from './Login'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Home from './Home';
import AddTodo from './AddTodo';
import EditTodo from './EditTodo';
const token = localStorage.getItem('token')
const App = () => {
  return (
    <div>
      <ToastContainer />
     <BrowserRouter>
     <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/addtodo' element={token?<AddTodo/>:<Login/>}></Route>
      <Route path='/updatetodo/:id' element={token?<EditTodo/>:<Login/>}></Route>
      <Route path='/signup' element={<Signup/>}></Route>
      <Route path='/login' element={token?<AddTodo/>:<Login/>}></Route>
     </Routes>
</BrowserRouter>
    </div>
  )
}

export default App

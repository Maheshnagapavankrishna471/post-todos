import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Nav from './Nav'
// import { useNavigate } from 'react-router-dom'

const AddTodo = () => {
  // const navigate = useNavigate()
  const id = localStorage.getItem('id')
  const token = localStorage.getItem('token')
  const [todo, SetTodo] = useState([])
  const [list, setList] = useState({
    todo: "",
    data: id,
  })
  const handleChange = (e) => {
    setList({ ...list, [e.target.name]: e.target.value })
  }

  const Api = async () => {
    try {
      await axios.post(`http://localhost:7171/addtodo`, list)
      console.log("data sent")
    }
    catch (err) {
      console.log(err)
    }
  }
  const apiOne = async () => {
    try {
      const data = await axios.get(`http://localhost:7171/one/${id}`, {
        headers: {
          "x-token": token
        }
      })
      console.log(data.data.td)
      SetTodo(data.data.td)
    }
    catch (err) {
      console.log(err)
    }
  }



const deleteTodo = async (x) => {
  const confirmDelete = window.confirm("Are you sure you want to delete this item?") 
  if (confirmDelete) {
    try {
      await axios.delete(`http://localhost:7171/deletetodo/${x}`) 
      apiOne() 
    } catch (err) {
      console.log(err)
    }
  }
}
  useEffect(() => {
    apiOne()
  }, [])
  return (
    <>
      <Nav isLoggedIn={true} isAddTodoPage={true} />
      {/* <button className='btn btn-warning'><Link to="/">back</Link></button> */}
     
       <div  className='container'>
       <div className='main1 '>
        <form className="main">
          <div style={{ width: "300px", border: "2px solid grey", padding: "15px", borderRadius: '10px', boxShadow: '2px 2px black' }}>
            <h1 className='text-red-800 text-2xl m-2'><span className='text-primary'>T</span>ODO'S</h1>
            <input type="text" className='form-control' onChange={handleChange} name='todo' placeholder='enter todo here' />
            <br />
            <input type="submit" className='text-blue-800  btn btn-info' onClick={Api} value={"submit"} />
          </div>
        </form>
       </div>
        
     
  
    <div className='d-flex justify-content-center row'>
  {
        todo.map((val) => {
          return (
          
             <div className='col-lg-6 ca bg-transparent'>
             <div className='cah1'>
             <h1 className='font-bold'>{val.todo}</h1>
             </div>
             <div className='forbtns'>
             <button className='btn btn-outline-danger' onClick={() => deleteTodo(val._id)}><i class="fa-solid fa-trash"></i></button> 
             <Link to={`/updatetodo/${val._id}`} className="btn btn-primary"><i class="fa-regular fa-pen-to-square"></i></Link> 
             </div>
              </div>
          
          )
        })
      }


    </div>
    

    </div>
   
    </>

      )
}

export default AddTodo

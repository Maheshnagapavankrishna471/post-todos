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
    try {
      await axios.delete(`http://localhost:7171/deletetodo/${x}`)
      alert("Are u sure want to delete this item !!!!")
      apiOne()
    } catch (err) {
      console.log(err)
    }
  }


  useEffect(() => {
    apiOne()
  }, [])
  return (
    <>
      <Nav isLoggedIn={true} isAddTodoPage={true} />
      <button className='btn btn-warning'><Link to="/">back</Link></button>
      <div className='head1'>
        <div className='main1 container'>
          <form className="main">
            <div style={{ width: "300px", border: "2px solid grey", padding: "15px", borderRadius: '10px', boxShadow: '2px 2px black' }}>
              <h1 className='text-red-800 text-2xl m-2'><span className='text-primary'>T</span>ODO'S</h1>
              <input type="text" className='form-control' onChange={handleChange} name='todo' placeholder='enter todo here' />
              <br />
              <input type="submit" className='text-blue-800  btn btn-info' onClick={Api} value={"submit"} />
            </div>
          </form>
        </div>


        <div>
          {
            todo.map((val) => {
              return (
                <>
                  {/* <li>{val.todo} <span><button onClick={() => deleteTodo(val._id)}>delete</button></span> <Link to={`/updatetodo/${val._id}`} className="btn btn-primary">Edit</Link>  </li> */}

                  <div className="card" style={{ width: 18 + "rem" }}>
                    <div className="card-body">
                      <h5 className="card-title">{val.todo}</h5>
                      {/* <p className="card-text"><Link to={`/updatetodo/${val._id}`} className="btn btn-primary">Edit</Link></p> */}
                      <a href="#" class="btn btn-danger"><span><button onClick={() => deleteTodo(val._id)}>delete</button></span></a>
                      <p class="btn btn-success"><Link to={`/updatetodo/${val._id}`}>Edit</Link></p>

                    </div>
                  </div>
                </>
              )
            })
          }
        </div>
      </div>

    </>

  )
}

export default AddTodo

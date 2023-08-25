import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
// import { useNavigate } from 'react-router-dom'

const AddTodo = () => {
  // const navigate = useNavigate()
  const id=localStorage.getItem('id')
  const token=localStorage.getItem('token')
  const [todo,SetTodo]=useState([])
    const [list, setList] = useState({
        todo:"",
        data:id,
    })
    const handleChange = (e) =>{
        setList({...list,[e.target.name]:e.target.value})
    }
   
    const Api = async()=>{
        try{
            await axios.post(`http://localhost:7171/addtodo`,list)
            console.log("data sent")
        }
        catch (err) {
            console.log(err)
        }
    }
    const apiOne=async()=>{
      try{
      const data=  await axios.get(`http://localhost:7171/one/${id}`,{
          headers:{
            "x-token":token
          }
        })
        console.log(data.data.td)
        SetTodo(data.data.td)
    }
    catch (err) {
        console.log(err)
    }}
  
  const deleteTodo = async(x) =>{
    try{
      await axios.delete(`http://localhost:7171/deletetodo/${x}`)
      alert("Are u sure want to delete this item !!!!")
      apiOne()
    }catch (err){
      console.log(err)
    }
  } 


    useEffect(()=>{
apiOne()
    },[])
  return (
    <div>
        <button className='btn btn-warning'><Link to ="/">back</Link></button>
       <div>

       <h1>ADD TODO'S HERE</h1>
        <form className="main">
        <div style={{width:"300px",border:"2px solid red", padding:"15px"}}>
        <label for="fname">TODO'S:</label> 
        <input type="text" className='form-control' onChange={handleChange} name='todo' placeholder='enter todo here'/>
        <br/>
        <input type="submit"  onClick={Api}  value={"submit"}/>
        </div>
      </form>
       </div>
       <div>
        {/* api call get  */}

       </div>
        {
          todo.map((val)=>{
            return(
              <li>{val.todo} <span><button onClick={()=>deleteTodo(val._id)}>delete</button></span> <Link to={`/updatetodo/${val._id}`} className="btn btn-primary">Edit</Link>  </li>
            )
          })
        }
      
    </div>
  )
}

export default AddTodo

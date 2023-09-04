import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { toast } from 'react-toastify'
// import { Link } from 'react-router-dom'


const EditTodo = () => {
    const {id} = useParams()
    const navigate = useNavigate()
    const [list, setList] = useState({
        todo:"",
        data:id,
        
    })
    console.log(id,"these is id")
    const Api = async()=>{
        try {
          const response = await axios.get(`https://todos-zsu4.onrender.com/updatetodo/${id}`)
          console.log(response.data);
            const values = response.data
            console.log(values)
            setList(values)
          } catch(err) {
            console.log("inside err", err)
          }}
      
      useEffect(() => {
        Api()
      }, [])
      const handleChange = (e) => {
        const obj = { ...list, [e.target.name]: e.target.value }
        setList(obj)
      }
      const handleSubmit = async (e) => {
        e.preventDefault()
        await axios.patch(`https://todos-zsu4.onrender.com/updatetodo/${id}`, list)
        setList({todo:"",data:id})
        navigate("/addtodo")
        toast("edited successfully📝")
      
    }
  return (
    <div>
      {/* <button className='btn btn-warning'><Link to ="/">back</Link></button> */}
        <div className='main1 container'>
        <form className="main">
        <div style={{width:"300px",border:"2px solid grey", padding:"15px",borderRadius:'10px',boxShadow:'2px 2px black'}}>
        <h1 className='text-red-800 text-2xl m-2'><span className='text-primary'>EDIT</span> TODO</h1>
        <input type="text" className='form-control' onChange={handleChange} name='todo' placeholder='edit todo here' value={list.todo}/>
        <br/>
        <input type="submit" className='text-blue-800  btn btn-info'  onClick={handleSubmit}  value={"submit"}/>
        </div>
      </form>
      </div>
      
    </div>
  )
}

export default EditTodo

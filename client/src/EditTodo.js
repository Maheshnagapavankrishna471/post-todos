import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'

const EditTodo = () => {
    const {id} = useParams()
    const [list, setList] = useState({
        todo:"",
        data:id,
        
    })
    console.log(id,"these is id")
    const Api = async()=>{
        try {
          const response = await axios.get(`http://localhost:7171/updatetodo/${id}`)
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
        await axios.patch(`http://localhost:7171/updatetodo/${id}`, list)
        setList({todo:"",data:id})
        // navigate('/')
    }
  return (
    <div>
      <button className='btn btn-warning'><Link to ="/">back</Link></button>
        <h1>edit todo's here</h1>
        <form className="main">
        <div style={{width:"300px",border:"2px solid red", padding:"15px"}}>
        <label for="fname">TODO'S:</label> 
        <input type="text" className='form-control' onChange={handleChange} name='todo' placeholder='edit todo here' value={list.todo}/>
        <br/>
        <input type="submit"  onClick={handleSubmit}  value={"submit"}/>
        </div>
      </form>
      
    </div>
  )
}

export default EditTodo

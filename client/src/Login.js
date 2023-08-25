import axios from 'axios'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Login = () => {
    const[log,setLog] = useState({email:"",password:""})
    const navigate=useNavigate()
    const handleChange = (e)=>{
        setLog({...log,[e.target.name]: e.target.value})
    }
    let handleSubmit = async(e)=>{
      e.preventDefault()
        try{
       const response= await axios.post('http://localhost:7171/login',log)
            console.log(response.data)
            localStorage.setItem('token',response.data.token)
            localStorage.setItem('id',response.data.id)
            navigate('/addtodo')
        }
        catch(err){
            console.log(err)
        }
    }
  return (
    <>
    <button className='btn btn-warning'><Link to ="/">back</Link></button>
    <div className=' main1 container' >
    <form className="main">
      <div style={{width:"300px",border:"2px solid red", padding:"15px"}}>

      <input type="email" className='form-control'  onChange={handleChange} name='email'  placeholder='email'/>
      <br />
      <input type="password" className='form-control'  onChange={handleChange} name='password' placeholder='password' />
      <br />
      <input type="submit"  onClick={handleSubmit}  value={"submit"}/>
      </div>
    </form>
  </div>
  </>
  )
}

export default Login

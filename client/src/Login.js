import axios from 'axios'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Nav from './Nav'

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
    <Nav isLoggedIn={false} isLoginPage={true} />
    <button className='btn btn-warning'><Link to ="/">back</Link></button>
    <div className=' main1 container'  >
    <form className="main" style={{}}>
      <div style={{width:"300px",border:"2px solid grey", padding:"15px",borderRadius:'10px',boxShadow:'2px 2px black'}}>
      <h1 className='text-red-800 text-4xl m-2'><span className='text-primary'>L</span>ogin</h1>

      <input type="email" className='form-control '  onChange={handleChange} name='email'  placeholder='email'/>
      <br />
      <input type="password" className='form-control'  onChange={handleChange} name='password' placeholder='password' />
      <br />
      <input type="submit" className='text-blue-800  btn btn-info'  onClick={handleSubmit}  value={"submit"}/>
      </div>
    </form>
  </div>
  </>
  )
}

export default Login


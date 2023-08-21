import axios from 'axios'
import React, { useState } from 'react'

const Login = () => {
    const[log,setLog] = useState({email:"",password:""})
    const handleChange = (e)=>{
        setLog({...log,[e.target.name]: e.target.value})
    }
    let handleSubmit = async()=>{
        try{
            await axios.post('http://localhost:7171/login',log)
            console.log('data sent')
        }
        catch(err){
            console.log(err)
        }
    }
  return (
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
  )
}

export default Login

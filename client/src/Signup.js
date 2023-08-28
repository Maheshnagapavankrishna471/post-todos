import React, { useState } from 'react'
import axios from 'axios'
import { toast } from 'react-toastify';
import { Link, useNavigate } from 'react-router-dom';
import Nav from './Nav';
const Signup = () => {
  const navigate = useNavigate()
    const[form,setForm]=useState({name:'',email:'',password:'',conformpassword:''})
    const handleChange=(e)=>{
        setForm({...form,[e.target.name]:e.target.value})
        // console.log(form)
    }
    let Api=async()=>{
       try{
         await axios.post('http://localhost:7171/register',form)
        console.log('data sent')
        navigate('/login');
        toast("SignUp Successfully👌");
       }
       catch(err){
        console.log(err)
       }
    }
   
  return (
    <>
      <Nav isLoggedIn={false} isRegisterPage={true} />
    <button className='btn btn-warning'><Link to ="/">back</Link></button>
    <div className=' main1 container' >
       
      <form className="main" >
        <div style={{width:"300px",border:"2px solid grey", padding:"15px",borderRadius:'10px',boxShadow:'2px 2px black'}}>
        <h1 className='text-red-800 text-4xl m-2'><span className='text-primary'>R</span>egister</h1>

        <input type="text" className='form-control' onChange={handleChange} name='name'  placeholder='name' required/>
        <br/>
        <input type="email" className='form-control'  onChange={handleChange} name='email'  placeholder='email' required/>
        <br />
        <input type="password" className='form-control'  onChange={handleChange} name='password' placeholder='password' required />
        <br />
        <input type="password" className='form-control'  onChange={handleChange} name='conformpassword' placeholder='conformpassword' required />
        <br />
        <input type="submit" className='text-blue-800  btn btn-info'  onClick={Api}  value={"submit"}/>

        </div>
      </form>
    </div>
    </>
  )
}

export default Signup

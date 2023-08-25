import React, { useState } from 'react'
import axios from 'axios'
// import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';
const Signup = () => {
    // const navigate = useNavigate()
    // var x='http://localhost:7171/register'
    const[form,setForm]=useState({name:'',email:'',password:'',conformpassword:''})
    const handleChange=(e)=>{
        setForm({...form,[e.target.name]:e.target.value})
        // console.log(form)
    }
    let Api=async()=>{
       try{
        await axios.post('http://localhost:7171/register',form)
        console.log('data sent')
        // navigate('/') 
        toast("SignUp Successfully👌");
       }
       catch(err){
        console.log(err)
       }
    }
   
  return (
    <>
    {/* <h1>these is signup page</h1> */}
    <button className='btn btn-warning'><Link to ="/">back</Link></button>
    <div className=' main1 container' >
       
      <form className="main">
        <div style={{width:"300px",border:"2px solid red", padding:"15px"}}>
        
        <input type="text" className='form-control' onChange={handleChange} name='name'  placeholder='name'/>
        <br/>
        <input type="email" className='form-control'  onChange={handleChange} name='email'  placeholder='email'/>
        <br />
        <input type="password" className='form-control'  onChange={handleChange} name='password' placeholder='password' />
        <br />
        <input type="password" className='form-control'  onChange={handleChange} name='conformpassword' placeholder='conformpassword' />
        <br />
        <input type="submit"  onClick={Api}  value={"submit"}/>
        </div>
      </form>
    </div>
    </>
  )
}

export default Signup

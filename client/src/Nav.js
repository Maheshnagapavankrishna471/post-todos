import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Nav = ({ isLoggedIn, isLoginPage, isRegisterPage,isAddTodoPage  }) => {
    const navigate=useNavigate()
    const logout=()=>{
        localStorage.removeItem('id')
        localStorage.removeItem('token')
        navigate('/')
      }
    return (
        <div className='bg-gray-800'style={{height:"60px"}}>
            <ul>
            <li><Link to="/" className='text-light text-2xl'>TODO APP 📝</Link></li>
                {!isLoggedIn && !isLoginPage && (
                  <>
                    <li className='text-light text-2xl'>
                        <Link to="/login">Login</Link>
                    </li>
                   
                  </>
                )}
                {!isLoggedIn && !isRegisterPage && (
                    <>
                    <li className='text-light text-2xl'>
                        <Link to="/signup">Register</Link>
                    </li>
                    
                    </>
                    
                )}
                {isLoggedIn && <li className='text-light text-2xl' onClick={logout}>logout</li>}
                {/* {isAddTodoPage && isLoggedIn && <li className='text-light text-2xl'><Link to="/addtodo">AddTodo</Link></li>} */}
            </ul>
        </div>
    );
};

export default Nav;

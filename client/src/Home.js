import React from 'react'
import { Link } from 'react-router-dom'
// import DisplayTodo from './DisplayTodo'

const Home = () => {
    return (
        <>  
            <div className='navbar'>
                <nav class="navbar bg-body-tertiary">
                    <form class="container-fluid justify-content-start">
                         <a class="navbar-brand"><Link to='/'>TODO APP</Link></a>
                        <button class="btn btn-outline-warning me-2" type="button" color='white'><Link to="/signup">Register</Link></button>
                        <button class="btn btn-sm btn-outline-secondary" type="button"><Link to="/login">Login</Link></button>
                    </form>
                </nav>

                <ul>
                    <li>
                        <Link to='/'>Home</Link>
                    </li>
                    <li>
                        <button className='btn btn-info'><Link to="/signup">Register</Link></button>
                    </li>
                    <li>
                        <button className='btn btn-dark'><Link to="/login">login</Link></button>
                    </li>
                    <li>
                        <button className='btn btn-warning'><Link to="/addtodo">AddTodo</Link></button>
                    </li>
                    <li>
                        <button className='btn btn-secondary'><Link to="/updatetodo/:id">EditTodo</Link></button>
                    </li>
                </ul>
            </div>

            <div>
                {/* <DisplayTodo/> */}
                {/* <Home/> */}
            </div>
        </>
    )
}

export default Home

import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Nav from './Nav'
// import DisplayTodo from './DisplayTodo'

const Home = () => {
    const [nav,setNav]=useState(true)

    return (
        <>  
            {/* <div className='navbar'>
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
                        <button className='btn btn-info'></button>
                    </li>
                    <li>
                        <button className='btn btn-dark'><Link to="/login">login</Link></button>
                    </li>
                    <li>
                        <button className='btn btn-warning'></button>
                    </li>
                    <li>
                        <button className='btn btn-secondary'><Link to="/updatetodo/:id">EditTodo</Link></button>
                    </li>
                </ul>
            </div> */}

        <Nav log={true}/>

        <div className='home'>
            <p className='hover-word'>
                <p>W</p>
                <h1>E</h1>
                <h1>L</h1>
                <h1>C</h1>
                <h1>O</h1>
                <h1>M</h1>
                <h1>E</h1>
                <br></br>
                {/* <p>T</p>
                <h1>O</h1>
                <br></br> */}
                <p>T</p>
                <h1>O</h1>
                <h1>D</h1>
                <h1>O</h1>
                <p>A</p>
                <h1>P</h1>
                <h1>P</h1>
            </p>
        </div>
        </>
    )
}

export default Home

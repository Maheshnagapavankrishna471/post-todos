// import axios from 'axios'
// import React, { useEffect, useState } from 'react'
// import { Link } from 'react-router-dom';

// const DisplayTodo = () => {
//     const [displays,setDisPlay] = useState([])

//     const getTodo =() =>{
//         axios.get('http://localhost:7171/one/:id')
//         .then((response) =>{
//             console.log(response);
//             setDisPlay(response.data)
//         })
//         .catch((err)=>{
//             console.log(err)
//         })
//     }

//     // const deleteTodo = async (id) =>{
//     //     await axios.delete(`http://localhost:7171/deletetodo/${id}`)
//     //     .then((response)=>{
//     //         console.log(response);
//     //     })
//     //     .catch((err)=>{
//     //         console.log(err)
//     //     })
//     //     getTodo()
//     // }
//     // useEffect(()=>{
//     //     getTodo()
//     // },[])
//   return (
//     <div>
//         <h1>hello buddies </h1>

//         <table class="table">
//                 <thead>
//                     <tr>
//                         <th scope="col">S.No</th>
//                         <th scope="col">Todo's</th>
//                         {/* <th scope="col">Email</th> */}
//                         {/* <th scope="col">Password</th> */}
//                         {/* <th scope="col">Batch No</th> */}
                        
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {
//                         displays && displays.map((display, i) => {
//                             return (
//                                 <tr key={i}>
//                                     <td class="table-primary">{i+1}</td>
//                                     <td class="table-secondary">{display.todo}</td>
//                                     {/* <td class="table-success">{student.email}</td>
//                                     <td class="table-danger">{student.batch}</td> */}
//                                     <td class="table-warning">
//                                             <Link to={`/updatetodo/${display._id}`} className="btn btn-primary">Edit</Link>
//                                 </td>
//                                     <td class="table-info">
//                                         {/* <button onClick={() => deleteTodo(display._id)} className="btn btn-danger" bsStyle="danger" >Delete</button> */}
//                                     </td>
//                                 </tr>
//                             )
//                         })
//                     }
//                 </tbody>
//             </table>
      
//     </div>
//   )
// }

// export default DisplayTodo

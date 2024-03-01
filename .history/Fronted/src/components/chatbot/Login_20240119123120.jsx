// import { useState } from 'react'
// import './App.css'
// import 'bootstrap/dist/css/bootstrap.min.css'
// import axios from 'axios'
// // 

// function Login() {

//   const [email,setEmail] = useState('')
//   const [password, setPassword] = useState()
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     axios.post('http://localhost:3001/login', {email,password})
//     .then(result => console.log(result))
//     .catch(err => console.log(err))
//   }

//   return (
//     <div className='d-flex justify-content-center align-items-center bg-primary vh-100'>
//       <div className='bg-white p-3 rounded w-25'>
//         <h2>
//           Sign-In
//         </h2>
//       <form onSubmit={handleSubmit}>
//           <div className='mb-3'>
//             <label htmlFor="email"><strong>Email</strong></label>
          
//             <input type="email" placeholder='Enter Email' autoComplete='off' name='email' className='form-control rounded-0' 
//             onChange={(e) => setEmail(e.target.value)}/>
//           </div>

//           <div className='mb-3'>
//             <label htmlFor="password"><strong>Password</strong></label>
//             <input type="password" placeholder='Enter Password'  name='password' className='form-control'
//             onChange={(e) => setPassword(e.target.value)}/>
//           </div>

//           <button type='submit' className='btn btn-success w-100 rounded-0 margin-bottom'>Log in
//           </button>
//           <p>You agree to our terms and policies</p>
//           <button className='btn btn-default border w-100 bg-light rounded-0 text-decoration-none'>Create Account
//           </button>
          
//       </form>
//       </div>
//     </div>
    
//   )
// }

// export default Login




// import { useState } from 'react';
// import axios from 'axios';
// import { Link } from 'react-router-dom';
// import { useNavigate } from 'react-router';
// import styles from './styles.module.css';

// const Login = () => {
//   const [pole,setpole]=useState(true);
//   const navigate = useNavigate();
//   const [isError, setIsError] = useState(false);

//   const [data1, setData] = useState({name:'', email: '', password: '' });

//   const handleChange = ({ currentTarget: input }) => {
//     setData({ ...data1, [input.name]: input.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     axios
//       .post('http://localhost:5000/login', data1)
//       .then((res) => {
//         console.log(res.data);
//         // Check the response from the server and navigate accordingly
//         if (res.data.success) {
//           sessionStorage.setItem("user",res.data);
//           setIsError(false);
//           navigate('/');
//         } else {
//           setIsError(true);
//           setpole(false)
//         }
//       })
//       .catch((err) => {
//         console.log(err);
//         setpole(false)
//       });
//   };

//   return (
//     <div className={styles.login_container}>
//       <div className={styles.login_form_container}>
//         <div className={styles.left}>
          
//           <form className={styles.form_container} onSubmit={handleSubmit}>
//             <h1>Login to Your Account</h1>
//             <input
//               type="name"
//               placeholder="Enter your Name"
//               name="name"
//               onChange={handleChange}
//               value={data1.name}
//               required
//               className={styles.input}
//             />
//             <input
//               type="email"
//               placeholder="Email"
//               name="email"
//               onChange={handleChange}
//               value={data1.email}
//               required
//               className={styles.input}
//             />
//             <input
//               type="password"
//               placeholder="Password"
//               name="password"
//               onChange={handleChange}
//               value={data1.password}
//               required
//               className={styles.input}
//             />
//             <button type="submit" className={styles.green_btn}>
//               Sign In
//             </button>
//             {pole ? null : <p style={{color:"red"}} >Invalid input</p>}
//           </form>
//         </div>
//         <div className={styles.right}>
//           <h1>New Here ?</h1>
//           <Link to="/signup">
//             <button type="button" className={styles.white_btn}>
//               Sign Up
//             </button>
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;


































// // import React,{useState} from 'react'
// // import axios from 'axios';
// // import {useHistory} from "react-router-dom"

// // const Login = ({setLoginUser}) => {
// // const history = useHistory()
// //     const [user,setUser] = useState({
// //         name:"",
// //         password: ""
// //     })
// //     const handleChange = e =>{
// //     const {name,value} = e.target
// //     setUser({
// //     ...user,//spread operator 
// //     [name]:value
// //     })
// //     }

// //     const login =()=>{
// //         axios.post("http://localhost:6969/Login",user)
// //         .then(res=>{alert(res.data.message)
// //         setLoginUser(res.data.user)
// //     history.push("/")})
// //     }
// //     return (
// //         <>
// // <div class="flex flex-col w-full max-w-md px-4 py-8 bg-white rounded-lg shadow dark:bg-gray-800 sm:px-6 md:px-8 lg:px-10">
// //     <div class="self-center mb-6 text-xl font-light text-gray-600 sm:text-2xl dark:text-white">
// //         Login To Your Account
// //     </div>
// //     <div class="mt-8">
// //         <form action="#" autoComplete="off">
// //             <div class="flex flex-col mb-2">
// //                 <div class="flex relative ">
// //                     <span class="rounded-l-md inline-flex  items-center px-3 border-t bg-white border-l border-b  border-gray-300 text-gray-500 shadow-sm text-sm">
                        
// // <svg width="15" height="15" fill="currentColor" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">

// //                             <path d="M1792 710v794q0 66-47 113t-113 47h-1472q-66 0-113-47t-47-113v-794q44 49 101 87 362 246 497 345 57 42 92.5 65.5t94.5 48 110 24.5h2q51 0 110-24.5t94.5-48 92.5-65.5q170-123 498-345 57-39 100-87zm0-294q0 79-49 151t-122 123q-376 261-468 325-10 7-42.5 30.5t-54 38-52 32.5-57.5 27-50 9h-2q-23 0-50-9t-57.5-27-52-32.5-54-38-42.5-30.5q-91-64-262-182.5t-205-142.5q-62-42-117-115.5t-55-136.5q0-78 41.5-130t118.5-52h1472q65 0 112.5 47t47.5 113z">
// //                             </path>
// //                         </svg>
// //                     </span>
// //                     <input type="text" id="sign-in-email" class=" rounded-r-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" name="email" value={user.email}  onChange={handleChange} placeholder="Your email"/>
// //                     </div>
// //                 </div>
// //                 <div class="flex flex-col mb-6">
// //                     <div class="flex relative ">
// //                         <span class="rounded-l-md inline-flex  items-center px-3 border-t bg-white border-l border-b  border-gray-300 text-gray-500 shadow-sm text-sm">
// //                             <svg width="15" height="15" fill="currentColor" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
// //                                 <path d="M1376 768q40 0 68 28t28 68v576q0 40-28 68t-68 28h-960q-40 0-68-28t-28-68v-576q0-40 28-68t68-28h32v-320q0-185 131.5-316.5t316.5-131.5 316.5 131.5 131.5 316.5q0 26-19 45t-45 19h-64q-26 0-45-19t-19-45q0-106-75-181t-181-75-181 75-75 181v320h736z">
// //                                 </path>
// //                             </svg>
// //                         </span>
// //                         <input type="password" id="sign-in-email" class=" rounded-r-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" name="password" value={user.password}  onChange={handleChange} placeholder="Your password"/>
// //                         </div>
// //                     </div>
// //                     <div class="flex items-center mb-6 -mt-4">
// //                         <div class="flex ml-auto">
// //                             <link href="#" class="inline-flex text-xs font-thin text-gray-500 sm:text-sm dark:text-gray-100 hover:text-gray-700 dark:hover:text-white">
// //                                 Forgot Your Password?
// //                             </link>
// //                         </div>
// //                     </div>
// //                     <div class="flex w-full">
// //                         <button type="submit" class="py-2 px-4  bg-purple-600 hover:bg-purple-700 focus:ring-purple-500 focus:ring-offset-purple-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg  " onClick={login}>
// //                             Login
// //                         </button>
// //                     </div>
// //                 </form>
// //             </div>
// //             <div class="flex items-center justify-center mt-6">
// //                 <link href="#" target="_blank" class="inline-flex items-center text-xs font-thin text-center text-gray-500 hover:text-gray-700 dark:text-gray-100 dark:hover:text-white"  onClick={history.push("/Register")}>
// //                     <span class="ml-2">
// //                         You don&#x27;t have an account?
// //                     </span>
// //                 </link>
// //             </div>
// //         </div>

// //         </>
// //     )
// // }
// // export default Login
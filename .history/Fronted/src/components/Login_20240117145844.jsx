import { useState } from 'react'
// import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import axios from 'axios'


const Login = () => {

  const [email,setEmail] = useState('')
  const [password, setPassword] = useState()
  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('mongodb://localhost:27017/', {email,password})
    .then(result => console.log(result))
    .catch(err => console.log(err))
  }

  return (

    <>

    <h1 background-color="dark-brown">
        Welcome To NYAAYSAHAAYAK
    </h1>

    <div className='d-flex justify-content-center align-items-center bg-secondary vh-100'>
      <div className='bg-white p-3 rounded w-45'>
        <h2>
          Sign-In
        </h2>
      <form onSubmit={handleSubmit}>
          <div className='mb-3'>
            <label htmlFor="email"><strong>Email</strong></label>
          
            <input type="email" placeholder='Enter Email' autoComplete='off' name='email' className='form-control rounded-0' 
            onChange={(e) => setEmail(e.target.value)}/>
          </div>

          <div className='mb-3'>
            <label htmlFor="password"><strong>Password</strong></label>
            <input type="password" placeholder='Enter Password'  name='password' className='form-control'
            onChange={(e) => setPassword(e.target.value)}/>
          </div>

          <button type='submit' className='btn btn-success w-100 rounded-0 margin-bottom-30 margin-top-30'>Log in
          </button>
          <p>You agree to our terms and policies</p>
          <button className='btn btn-default border w-100 bg-light rounded-0 text-decoration-none'>Create Account
          </button>
          
      </form>
      </div>
    </div>
    </>
  )
}

export default Login




















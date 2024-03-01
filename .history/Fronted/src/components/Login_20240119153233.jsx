// // import { useState } from 'react'
// // // import './App.css'
// // import 'bootstrap/dist/css/bootstrap.min.css'
// // import axios from 'axios'


// // const Login = () => {

// //   const [email,setEmail] = useState('')
// //   const [password, setPassword] = useState()
// //   const handleSubmit = (e) => {
// //     e.preventDefault();
// //     axios.post('mongodb://localhost:27017/login/collection/', {email,password})
// //     .then(result => console.log(result))
// //     .catch(err => console.log(err))
// //   }

// //   return (

// //     <>

// //     <h1 background-color="dark-brown">
// //         Welcome To NYAAYSAHAAYAK
// //     </h1>

// //     <div className='d-flex justify-content-center align-items-center bg-secondary vh-100'>
// //       <div className='bg-white p-3 rounded w-45'>
// //         <h2>
// //           Sign-In
// //         </h2>
// //       <form onSubmit={handleSubmit}>
// //           <div className='mb-3'>
// //             <label htmlFor="email"><strong>Email</strong></label>
          
// //             <input type="email" placeholder='Enter Email' autoComplete='off' name='email' className='form-control rounded-0' 
// //             onChange={(e) => setEmail(e.target.value)}/>
// //           </div>

// //           <div className='mb-3'>
// //             <label htmlFor="password"><strong>Password</strong></label>
// //             <input type="password" placeholder='Enter Password'  name='password' className='form-control'
// //             onChange={(e) => setPassword(e.target.value)}/>
// //           </div>

// //           <button type='submit' className='btn btn-success w-100 rounded-0 margin-bottom-30 margin-top-30'>Log in
// //           </button>
// //           <p>You agree to our terms and policies</p>
// //           <button className='btn btn-default border w-100 bg-light rounded-0 text-decoration-none'>Create Account
// //           </button>
          
// //       </form>
// //       </div>
// //     </div>
// //     </>
// //   )
// // }

// // export default Login











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









import { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import styles from './styles.module.css';

const Signup = () => {
  const navigate = useNavigate();
  const [isError, setIsError] = useState(false);
  const [data, setData] = useState({ email: '', password: '',name:''});

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.post('http://localhost:5000/signup', data)
      .then((res) => {
        console.log(res.data);
        if (res.data.success) {
          sessionStorage.setItem("user",res.data);
          setIsError(false);
          navigate('/'); // Redirect to the login page after successful signup
        } else {
          setIsError(true);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
<div className={styles.signup_container}>
			<div className={styles.signup_form_container}>
				<div className={styles.left}>
					<h1>Already Have An Account?</h1>
					<Link to="/login">
						<button type="button" className={styles.white_btn}>
							Sign in
						</button>
					</Link>
				</div>

    
      
        <div className={styles.right}>
          {isError ? <p>Invalid input</p> : null}
          <form className={styles.form_container} onSubmit={handleSubmit}>
            <h1>Sign Up for an Account</h1>
            <input
              type="name"
              placeholder="Enter your Name"
              name="name"
              onChange={handleChange}
              value={data.name}
              required
              className={styles.input}
            />
            <input
              type="email"
              placeholder="Email"
              name="email"
              onChange={handleChange}
              value={data.email}
              required
              className={styles.input}
            />
            <input
              type="password"
              placeholder="Password"
              name="password"
              onChange={handleChange}
              value={data.password}
              required
              className={styles.input}
            />
            <button type="submit" className={styles.green_btn}>
              Sign Up
            </button>
          </form>
        </div>
        {/* <div className={styles.right}>
          <h1>Already Have an Account?</h1>
          <Link to="/login">
            <button type="button" className={styles.white_btn}>
              Log In
            </button>
          </Link>
        </div> */}
    
    </div>
    </div>
  );
};

export default Signup;
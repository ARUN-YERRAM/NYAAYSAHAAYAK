import { Link } from "react-router-dom";
// import 
const MyNav = () => {
    return (
        <>
        <div>
         <header>
            <h1 class="pad">NYAAY SAHAAYAK</h1>
        </header>
        
        
            <nav class="navbar navbar-expand-sm navbar" style={{backgroundColor: 'grey'}}>

                    <Link class="navbar-brand" style={{leftpadding:'8x'}} to="/"></Link>

                    <button class="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavId" aria-controls="collapsibleNavId"
                        aria-expanded="false" aria-label="Toggle navigation">
                            {/* <span class="navbar-toggler-icon"></span> */}
                    </button>

                <div class="collapse navbar-collapse" id="collapsibleNavId">

                    <ul class="navbar-nav me-auto mt-2 mt-lg-0 ul list">

                            <li class="nav-item col link">
                                <Link class="nav-link col" to="/" aria-current="page">Home <span class="visually-hidden">(current)</span></Link>
                            </li>


                            <li class="nav-item link">
                                <Link class="nav-link col" to="/services">Services</Link>
                            </li>

                            <li class="nav-item link">
                                <Link class="nav-link col" to="/about">About Us</Link>
                            </li>

                            <li class="nav-item link">
                                <Link class="nav-link col" to="/Login">Login </Link>
                            </li>

                            <li class="nav-item link">
                                <Link class="nav-link col" to="/FAQ">FAQS</Link>
                            </li>
                            
                            <li class="nav-item link">
                                    <Link class="nav-link col" to="/ChatBot">LEGAL ASSISTANT</Link>
                            </li>
                        

                        {/* <li class="nav-item link">
                            <Link class="nav-link col" to="/ChatBot">APICHATBOT</Link>
                        </li> */}
                        
                        
                    </ul>

                </div>

            </nav>
            
        </div>
        
        </>
      );
}
export default MyNav ;















// import { Link } from "react-router-dom";

// const MyNav = () => {
//     return (
//         <>
//         <div>
//          <header>
//             <h1 class="pad">NYAAY SAHAAYAK</h1>
//         </header>
        
        
//         <nav class="navbar navbar-expand-sm navbar" style={{backgroundColor: 'grey'}}>
//             <Link class="navbar-brand" style={{rightpadding:'10x'}} to="/"></Link>
//             <button class="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavId" aria-controls="collapsibleNavId"
//                 aria-expanded="false" aria-label="Toggle navigation">
//                     <span class="navbar-toggler-icon"></span>
//                 </button>
//             <div class="collapse navbar-collapse" id="collapsibleNavId">
//                 <ul class="navbar-nav me-auto mt-2 mt-lg-0 ul list">
//                     <li class="nav-item col link">
//                         <Link class="nav-link col" to="/" aria-current="page">Home <span class="visually-hidden">(current)</span></Link>
//                     </li>
//                     <li class="nav-item link style={{color:''}}">
//                         <Link class="nav-link col" to="/services">Services</Link>
//                     </li>
//                     <li class="nav-item link">
//                         <Link class="nav-link col" to="/about">About Us</Link>
//                     </li>
//                     <li class="nav-item link">
//                         <Link class="nav-link col" to="/contact">Contact Us</Link>
//                     </li>

//                     <li class="nav-item dropdown">
//                         {/* <Link class="nav-link dropdown-toggle col" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false"></Link> */}
//                         <a class="nav-link dropdown-toggle col link" href="FAQs/FAQ" role="button" data-bs-toggle="dropdown" aria-expanded="false">
//                             FAQs
//                         </a>
//                         <ul class="dropdown-menu dropdown-menu-dark">
                            
//                             <Link class="dropdown-item" to="/KeyFeatures/LawTypes">LawTypes</Link>
                            
//                             <Link class="dropdown-item" to="/FAQs/FAQ">frequently asked questions</Link>
                            
//                             {/* <li><button class="dropdown-item" href="#">Another action</button></li> 
//                                 <li><button class="dropdown-item" to="#">Something else here</button></li> */}
//                         </ul>
//                     </li>

//                     <li class="nav-item link">
//                         <Link class="nav-link col" to="/ChatBot">CHATBOT</Link>
//                     </li>
                
                   
//                 </ul>
//             </div>

//         <div class=' align-self-end-end-50 '>
//         <Link  to="/login">
//             <button class="nav-item" >Login</button>
//             {/* <button class="animated-button">Login</button> */}

//         </Link>
//         </div>



//         </nav>
//         </div>
        
//         </>
//       );
// }
 
// export default MyNav ;
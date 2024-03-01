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

                    {/* <Link class="navbar-brand" style={{leftpadding:'20px'}} to="/"></Link> */}

                    {/* <button class="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavId" aria-controls="collapsibleNavId"
                        aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                    </button> */}

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












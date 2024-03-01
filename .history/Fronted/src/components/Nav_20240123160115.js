import { Link } from "react-router-dom";
// import 
const MyNav = () => {
    downMenu1 = () => {
    onclick001=()=>{
    ionStorage.removeItem('user');
    
     (
    className="dropdown-menu">
    i className="nav-item">
    <Link className="dropdown-link" to="/" ><button onClick={onclick001()} style={{border:"0px",backgroundColor:"white"}}>Logout</button></Link>
    li> 
    >
    
    
    return (
        <>
        <div>
         <header>
            <h1 class="pad">NYAAY SAHAAYAK</h1>
        </header>
            <nav class="navbar navbar-expand-sm navbar" style={{backgroundColor: 'grey'}}>

                <div class="collapse navbar-collapse" id="collapsibleNavId">

                    <ul class="navbar-nav me-auto mt-2 mt-lg-0 ul list">

                            <li class="nav-item col link">
                                <Link class="nav-link col" to="/" aria-current="page">Home <span class="visually-hidden">(current)</span></Link>
                            </li>

                            <li class="nav-item link">
                                <Link class="nav-link col" to="/about">About Us</Link>
                            </li>


                            <li class="nav-item link">
                                <Link class="nav-link col" to="/services">Services</Link>
                            </li>

                            <li class="nav-item link">
                                <Link class="nav-link col" to="/FAQ">FAQS</Link>
                            </li>
                            
                            <li class="nav-item link">
                                    <Link class="nav-link col" to="/ChatBot">LEGAL ASSISTANT</Link>
                            </li>


                            {sessionStorage.getItem("user")?(
              <>  
              <li className="nav-item">
              <div className="nav-link active dropdown-toggle" data-bs-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
              Logout
              </div>
              
            </li></>):
              (<li className="nav-item" >
                <Link className="nav-link active" to="/login">Login</Link>
              </li>
            )}   
            </ul>
                </div>

            </nav>

        </div>
        
        </>
      );
}
export default MyNav ;












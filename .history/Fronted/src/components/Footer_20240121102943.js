    import { Link } from "react-router-dom";
    const Footer = () => {
        return ( 
            <>

    <footer class="site-footer">
    <div class="container">
    <div class="row">
    <div class="col-sm-12 col-md-6">
    <h6 class="text-justify" >About</h6>
    <p class="text-justify">At Legal Assistant Services, we are committed to providing expert legal assistance to meet your needs. Our team of experienced professionals is dedicated to delivering high-quality services and ensuring client satisfaction.

    With a focus on legal consultation, document drafting, contract review, and legal research, we strive to assist individuals and businesses in navigating the complexities of the legal landscape.</p>
    </div>
    <div class="col-6 col-md-3">
    <h6>Categories</h6>
    <ul class="footer-links ">
    <Link to="./KeyFeatures/LawTypes">Lawtypes</Link><br/>
    <Link to="./chatbot">Legal Assistant</Link><br/>
    <Link to="./KnowYourRights" >Know Your Rights</Link><br/>

    {/* <Link to="./chatbot"><li>Legal Assistant</li></Link> */}
    {/* <li><a href="#">UI Design</a></li>
    <li><a href="#">Web Development</a></li>
    <li><a href="#">Video Editor</a></li>
    <li><a href="#">Theme Creator</a></li>
    <li><a href="#">Templates</a></li> */}
    </ul>
    </div>
    <div class="col-6 col-md-3">
    <h6>Quick Links</h6>
        <ul class="footer-links">
            <Link to="./about">About Us</Link><br/>
            {/* <Link to="./contact"><li>Contact Us</li></Link> */}
            <Link to="./services">Services</Link><br/>
            {/* <Link to="./chatbot"><li>Legal Assistant</li></Link> */}
            <Link to="./login">Login</Link><br/>
            <Link to="./FAQ">FAQ'S</Link>

    {/* <li><a href="/about">About Us</a></li>
    <li><a href="/contact">Contact Us</a></li>
    <li><a href="/services">Services</a></li>
    <li><a href="/chatbot">Legal Assistant</a></li> */}
    {/* <li><a href="#">Privacy Policy</a></li> */}

    </ul>
    </div>
    </div>
    <hr class="small"></hr>
    </div>
    <div class="container">
    <div class="row">
    <div class="col-md-8 col-sm-6 col-12">
    <p class="copyright-text">Copyright © 2023 All Rights Reserved by
    <a href="/"><span class="logo">NYAAYSAHAYAK</span></a>
    </p>
    </div>

    {/* <div class="col-md-4 col-sm-6 col-12">
    <a class="facebook" href="https://www.facebook.com/"><i class="fab fa-facebook-f"></i></a>
    <a class="twitter" href="https://twitter.com/i/flow/login"><i class="fab fa-twitter"></i></a>
   <a class="dribbble" href="https://dribbble.com/session/new"><i class="fab fa-dribbble"></i></a>
    <a class="linkedin" href="https://www.linkedin.com/login"><i class="fab fa-linkedin-in"></i></a>
    <i class="fa fa-instagram" color="font-size:48px;color:red"></i>
    
    </div> */}

<div className="col-12 mb-2">
            <a href="#" class="text-decoration-none text-dark">
              <FaFacebookF size={24} />
            </a>
            <a href="#" class="text-decoration-none text-dark ms-3">
              <FaTwitter size={24} />
            </a>
            <a href="#" className="text-decoration-none text-dark ms-3">
              <FaInstagram size={24} />
            </a>
          </div>

    </div>
    </div>
    </footer>
            
            
            
            </>

        );
    }
    
    export default Footer;
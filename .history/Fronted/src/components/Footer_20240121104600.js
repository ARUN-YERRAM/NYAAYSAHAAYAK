//     import { Link } from "react-router-dom";
//     import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
//     const Footer = () => {
//         return ( 
//             <>
//     <footer class="site-footer">
//     <div class="container">
//     <div class="row">
//     <div class="col-sm-12 col-md-6">
//     <h6 class="text-justify" >About</h6>
//     <p class="text-justify">At Legal Assistant Services, we are committed to providing expert legal assistance to meet your needs. Our team of experienced professionals is dedicated to delivering high-quality services and ensuring client satisfaction.

//     With a focus on legal consultation, document drafting, contract review, and legal research, we strive to assist individuals and businesses in navigating the complexities of the legal landscape.</p>
//     </div>
//     <div class="col-6 col-md-3">
//     <h6>Categories</h6>
//     <ul class="footer-links ">
//     <Link to="./KeyFeatures/LawTypes">Lawtypes</Link><br/>
//     <Link to="./chatbot">Legal Assistant</Link><br/>
//     <Link to="./KnowYourRights" >Know Your Rights</Link><br/>

//     </ul>
//     </div>
//     <div class="col-6 col-md-3">
//     <h6>Quick Links</h6>
//         <ul class="footer-links">
//             <Link to="./about">About Us</Link><br/>
//             <Link to="./services">Services</Link><br/>
//             <Link to="./login">Login</Link><br/>
//             <Link to="./FAQ">FAQ'S</Link>
//     </ul>
//     </div>
//     </div>
//     <hr class="small"></hr>
//     </div>
//     <div class="container">
//     <div class="row">
//     <div class="col-md-8 col-sm-6 col-12">
//     <p class="copyright-text">Copyright © 2023 All Rights Reserved by
//     <a href="/"><span class="logo">NYAAYSAHAYAK</span></a>
//     </p>
//     </div>

//     <div class="col-md-4 col-sm-6 col-12">
//     <a class="facebook" href="https://www.facebook.com/"><i class="fab fa-facebook-f"></i></a>
//     <a class="twitter" href="https://twitter.com/i/flow/login"><i class="fab fa-twitter"></i></a>
//    <a class="dribbble" href="https://dribbble.com/session/new"><i class="fab fa-dribbble"></i></a>
//     <a class="linkedin" href="https://www.linkedin.com/login"><i class="fab fa-linkedin-in"></i></a>
//     <i class="fa fa-instagram" color="font-size:48px;color:red"></i>
    
//     </div>
//     </div>
//     </div>
//     </footer>
//             </>

//         );
//     }
    
//     export default Footer;




import { Link } from "react-router-dom"
import { FaFacebookF, FaTwitter, FaInstagram, FaDribbble, FaLinkedinIn } from "react-icons/fa"
const Footer = () => {
    return ((
        <>
        <footer class="site-footer">
            <div class="container">
                <div class="row"
                    <div class="col-sm-12 col-md-6">
                        <h6 class="text-justify"> About</h6>
                        <p class="text-justify">At Legal Assistant Services, we are committed to providing expert legal assistance to meet your needs. Our team of experienced professionals is dedicated to delivering high-quality services and ensuring client satisfaction.

                        With a focus on legal consultation, document drafting, contract review, and legal research, we strive to assist individuals and businesses in navigating the complexities of the legal landscape.</p>
                    </div>
                    <div class="col-6 col-md-3"
                        <h6>Categories</h6>
                        <ul class="footer-links ">
                            <Link to="./KeyFeatures/LawTypes">Lawtypes</Link><br/>
                            <Link to="./chatbot">Legal Assistant</Link><br/>
                            <Link to="./KnowYourRights" >Know Your Rights</Link><br/>

                        </ul>
                    </div>
                    <div class="col-6 col-md-3"
                        <h6>Quick Links</h6>
                        <ul class="footer-links">
                            <Link to="./about">About Us</Link><br/>
                            {/* <Link to="./contact"><li>Contact Us</li></Link> */}
                            <Link to="./services">Services</Link><br/>
                            {/* <Link to="./chatbot"><li>Legal Assistant</li></Link> */}
                            <Link to="./login">Login</Link><br/>
                            <Link to="./FAQ">FAQ'S</Link>
                        </ul>
                </div>
                </div>
                <hr class="small"></hr>
            </div>
            <div class="container"
                <div class="row"
                
                    <div class="col-md-8 col-sm-6 col-12"
                        <p class="copyright-text">Copyright © 2023 All Rights Reserved by
                        <a href="/"><span class="logo">NYAAYSAHAYAK</span></a>
                        </p>
                    </div>
                    <div class="col-md-4 col-sm-6 col-12"
                        <a class="facebook" href="https://www.facebook.com/"><FaFacebookF /></a>
                        <a class="twitter" href="https://twitter.com/i/flow/login"><FaTwitter /></a>
                        <a class="dribbble" href="https://dribbble.com/session/new"><FaDribbble /></a>
                        <a class="linkedin" href="https://www.linkedin.com/login"><FaLinkedinIn /></a>
                        <a class="instagram" href="https://www.instagram.com/"><FaInstagram /></a>
                    </div>
                </div>
            </div>
           
        </footer>
    </>
)
export default Footer;
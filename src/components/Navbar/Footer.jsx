import React from 'react';
//import footerDesign from '../../images/home/footer_design.svg';
import '../../styles/footer.css';

function Footer(props) {
    return (
       
           <footer id="footer" >
    

            <div className="footer-top">
                
                <div className="container">

                  <div className="row">
                 
                      <div className="col-lg-3 col-md-6 footer-info">

                          <h3> <strong>Profile</strong></h3>
                            <hr className="horizontaLine mb-4 mt-0 d-inline-block mx-auto" />
                          <p> A group of elite developers, mostly into web and android specialization.</p>
                      </div>
                      <div className="col-lg-3 col-md-6 footer-links">

                          <h3> <strong>Useful Links</strong></h3>
                            <hr className="horizontaLine mb-4 mt-0 d-inline-block mx-auto" />
                          <ul>
                              <li><a href="#!">Home</a></li>
                              <li><a href="#!">About us</a></li>
                              <li><a href="#!">Services</a></li>
                              <li><a href="#!">Terms of service</a></li>
                              <li><a href="#!">Privacy policy</a></li>
                          </ul>
                      </div>
                      <div className="col-lg-3 col-md-6 footer-contact">

                          <h3><strong>Contact Us</strong></h3>
                            <hr className="horizontaLine mb-4 mt-0 d-inline-block mx-auto" />
                          <p>
                            Freelance Group <br/>
                            Pan India<br/>
                            India<br/>
                            <strong>Phone:</strong>+91 9223832323<br/>
                            <strong>Email:</strong> info@example.com<br/>
                          </p>                      

                        
                      </div>
                      <div className="col-lg-3 col-md-6 footer-newsletter">
                          <h3><strong>Our Newsletter</strong></h3>
                            <hr className="horizontaLine mb-4 mt-0 d-inline-block mx-auto" />
                          <p>Tamen quem nulla quae legam multos aute sint culpa legam noster magna veniam enim veniam illum d.</p>
                          <form action="" method="post">
                            <input type="email" placeholder="enter email" name="email"/><input type="submit"  value="Subscribe"/>
                          </form>
                      </div>
                  </div>
                </div> 
                <div className="container text-center">
                    <div className="copyright">
                      &copy; {new Date().getFullYear()} Copyright <strong>GIS</strong>. All Rights Reserved
                    </div>
                  </div>                
            </div>
            
</footer>
         
    )
}

export default Footer;
import React from 'react';
import footerDesign from '../../images/home/footer_design.svg';
import '../../styles/footer.css';

function Footer(props) {
    return (
        
            <footer  className="footerPage ">
                <img src={footerDesign}  alt="heroWave"/>
                
                    <div className=" footerPlace container">  
                       

                        <div className="  row mt-3">                          
                          <div className="  col-md-3 col-lg-3 col-xl-3 mb-4">

                            <h3>
                              <strong>Organization Profile</strong>
                            </h3>
                            <hr className="horizontalLine mb-4 mt-0 d-inline-block mx-auto" />
                            <p>
                              A group of elite developers, mostly into web and android specialization.
                            </p>
                          </div>                          
                          <div className=" col-md-3 col-lg-3 col-xl-3 mb-4">
                                <h3>
                                  <strong>Contact</strong>
                                </h3>
                                <hr className="horizontalLine mb-4 mt-0 d-inline-block mx-auto"/>
                                <p>
                                  <i className="fa fa-home mr-3" />Pan India
                                </p>
                                <p>
                                  <i className="fa fa-envelope mr-3" /> info@example.com
                                </p>
                                <p>
                                  <i className="fa fa-phone mr-3" /> +91 9834734748
                                </p>
                                <p>
                                  <i className="fa fa-print mr-3" /> +91 9347347384
                                </p>
                          </div>
                          <div className=" col-md-3 col-lg-3 col-xl-3 mb-4">
                                <h3>
                                  <strong>Products</strong>
                                </h3>
                                <hr className="horizontalLine mb-4 mt-0 d-inline-block mx-auto"/>
                                <p>
                                  <a href="#!">Home</a>
                                </p>
                                <p>
                                  <a href="#!">About</a>
                                </p>
                                <p>
                                  <a href="#!">Profiles</a>
                                </p>
                                <p>
                                  <a href="#!">Portfolio</a>
                                </p>
                          </div>
                          <div className=" col-md-3 col-lg-3 col-xl-3 mb-4"> 

                                <h3>
                                  <strong>Subscribe to our tutorials</strong>
                                </h3>
                                <hr className="horizontalLine mb-4 mt-0 d-inline-block mx-auto"/>
                                <form>
                                        <label className="sr-only" for="inlineFormInputGroup">Email ID</label>
                                              <div className="input-group mb-2">
                                                <div className="input-group-prepend">
                                                  <div className="input-group-text">@</div>
                                                </div>
                                                <input type="text" className="form-control" id="inlineFormInputGroup" placeholder="Email-ID"/>
                                                <button className="btn home-bg-gradient text-white my-2">Subscribe</button>
                                              </div>
                                 </form>                                 
                          </div>                                                
                        </div>  
                    </div>
                    <div className=" footerCopyright text-center py-3 container-fluid">
                                                &copy; {new Date().getFullYear()} Copyright :<a href="#!">Thank you for visiting our web application!! </a>
                        </div> 

            </footer>
           
        
    )
}

export default Footer;



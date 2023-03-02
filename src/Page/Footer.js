import './Css/Footer.css'

const Footer = () =>{
    return(
        <>
        <div className="foot-main">
            <div className="footer-1">
                <div className="foot-left">
                    <button type="button" className="button-nav-logo"><span className="logo-black"/></button>
                    <p className="about-footer">Join our mailing list to stay in the loop with our newest feature releases, NFT drops, and tips.</p>
                    <div className="input-email">
                        <div className="footer-email">
                            <input class="email_input" type="text" name="" placeholder="Your email address"/>
                        </div>
                        <button type="button" className="footer-signup">
                            <p>Sign up</p>
                        </button>
                    </div>
                </div>
                <div className="foot-right">
                    <ul className="foot-right-ul">
                        <p>Marketplace</p>
                        <li><a href="#">All NFTs</a></li>
                        <li><a href="#">Art</a></li>
                        <li><a href="#">Collectibles</a></li>
                        <li><a href="#">Domain Names</a></li>
                        <li><a href="#">Music</a></li>
                        <li><a href="#">Photography</a></li>
                        <li><a href="#">Sports</a></li>
                        <li><a href="#">Trading Card</a></li>
                        <li><a href="#">Utility</a></li>
                        <li><a href="#">Virtual Worlds</a></li>
                    </ul>
                    <ul className="foot-right-ul">
                        <p>My Account</p>
                        <li><a href="#">Profile</a></li>
                        <li><a href="#">Favorite</a></li>
                        <li><a href="#">Watchlist</a></li>
                        <li><a href="#">My Collections</a></li>
                    </ul>
                    <ul className="foot-right-ul">
                        <p>Resources</p>
                        <li><a href="#">Help Center</a></li>
                        <li><a href="#">Platfom Status</a></li>
                        <li><a href="#">Partners</a></li>
                        <li><a href="#">Taxes</a></li>
                        <li><a href="#">Blog</a></li>
                        <li><a href="#">Docs</a></li>
                        <li><a href="#">Newsletter</a></li>
                    </ul>
                    <ul className="foot-right-ul">
                        <p>Company</p>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Careers</a></li>
                        <li><a href="#">Ventures</a></li>
                        <li><a href="#">Grants</a></li>
                    </ul>
                    <div className="b">
                        <div class="accordion" id="accordionExample">
                            <div class="accordion-item">
                                <h2 class="accordion-header" id="headingOne">
                                <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                    <p>Marketplace</p>
                                </button>
                                </h2>
                                <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                        <li><a href="#">All NFTs</a></li>
                                        <li><a href="#">Art</a></li>
                                        <li><a href="#">Collectibles</a></li>
                                        <li><a href="#">Domain Names</a></li>
                                        <li><a href="#">Music</a></li>
                                        <li><a href="#">Photography</a></li>
                                        <li><a href="#">Sports</a></li>
                                        <li><a href="#">Trading Card</a></li>
                                        <li><a href="#">Utility</a></li>
                                        <li><a href="#">Virtual Worlds</a></li>
                                </div>
                                </div>
                            </div>
                            <div class="accordion-item">
                                <h2 class="accordion-header" id="headingTwo">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                    <p>My Account</p>
                                </button>
                                </h2>
                                <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                    <li><a href="#">Profile</a></li>
                                    <li><a href="#">Favorite</a></li>
                                    <li><a href="#">Watchlist</a></li>
                                    <li><a href="#">My Collections</a></li>
                                </div>
                                </div>
                            </div>
                            <div class="accordion-item">
                                <h2 class="accordion-header" id="headingThree">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                    <p>Resources</p>
                                </button>
                                </h2>
                                <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                    <li><a href="#">Help Center</a></li>
                                    <li><a href="#">Platfom Status</a></li>
                                    <li><a href="#">Partners</a></li>
                                    <li><a href="#">Taxes</a></li>
                                    <li><a href="#">Blog</a></li>
                                    <li><a href="#">Docs</a></li>
                                    <li><a href="#">Newsletter</a></li>
                                </div>
                                </div>
                            </div>
                            <div class="accordion-item">
                                <h2 class="accordion-header" id="headingFour">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                    <p>Company</p>
                                </button>
                                </h2>
                                <div id="collapseFour" class="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                    <li><a href="#">About</a></li>
                                    <li><a href="#">Careers</a></li>
                                    <li><a href="#">Ventures</a></li>
                                    <li><a href="#">Grants</a></li>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
            
            <div className="footer-2">
                <hr className="footer-line"/>
                <div className="copyright">
                    <div className="left-copyright">
                        <p>© 2018 - 2022 Ozone Networks, Inc</p>
                    </div>
                    <div className="right-copyright">
                        <p>Privacy Policy</p>
                        <p>Terms of Service</p>
                    </div>
                </div>
            </div>
            
        </div>
        
        </>
    )
};
export default Footer;
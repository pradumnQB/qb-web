import React, {Component} from 'react';
import './Footer.scss'
import logo from '../../assets/images/logo.png'

class Footer extends Component {
    render() {
        return (
            <div id="footer">
                <div id="lists">
                    <div className="list" style={{flex: 2.5}}>
                        <div className="heading">About Queuebsuter</div>
                        <ul>
                            <li>At Queuebuster we are committed to provide world-class POS services. We let businesses focus on building customer relationship with your customers rather than having a hassle experience with POS.</li>
                        </ul>
                    </div>
                    <div className="list">
                        <div className="heading">About</div>
                        <ul>
                            <li>Blogs</li>
                            <li>Jobs</li>
                            <li>Contact</li>
                        </ul>
                    </div>
                    <div className="list">
                        <div className="heading">Product</div>
                        <ul>
                            <li>Restaurant POS</li>
                            <li>Retail POS</li>
                            <li>Grocery POS</li>
                            <li>Spa & Saloon POS</li>
                        </ul>
                    </div>
                    <div className="list">
                        <div className="heading">Useful Links</div>
                        <ul>
                            <li>Sign Up</li>
                            <li>Login</li>
                            <li>Become our partner</li>
                            <li>FAQs</li>
                        </ul>
                    </div>
                    <div className="list">
                        <div className="heading">FAQs</div>
                        <ul>
                            <li>Privacy Policy</li>
                            <li>Terms of Service</li>
                            <li>Policies</li>
                            <li>Refund Policy</li>
                        </ul>
                    </div>
                </div>
                <div id="contact_us" style={{marginTop: '23px', justifyContent: 'flex-end'}}>
                    <div className="list" style={{flex: '0 0 30%'}}>
                        <div className="heading">Address</div>
                        <ul>
                            <li>6th Floor, Priska Tower, C-56/45, Sector-62, Noida, Uttar Pradesh - 201309, INDIA</li>
                        </ul>
                    </div>
                    <div className="list" style={{flex: '0 0 15%'}}>
                        <div className="heading">Contact</div>
                        <ul>
                            <li>(+91) 705 3200 783</li>
                        </ul>
                    </div>
                </div>
                <div id="social">
                    <img src={logo}/>
                    <div style={{marginRight: '14px'}}>
                        <i className="fa fa-twitter"></i>
                        <i className="fa fa-facebook-f"></i>
                        <i className="fa fa-youtube-play"></i>
                    </div>
                </div>
                <div id="copyright">
                    Copyright 2015-19 © DPD Technologies LLP
                </div>
            </div>
        )
    }
}

export default Footer;
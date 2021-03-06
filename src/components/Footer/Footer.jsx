import React from 'react'
import Button from '../Button/Button'
import { Link } from 'react-router-dom';
import './Footer.css'

const Footer = () => {
   return (
      <div className="footer-container" >
         <section className="footer-subscription">
            <p className="footer-subscription-heading">
               Підпишись на найкращу розсилку наших пропозицій для великих пригод
            </p>
            <p className="footer-subscription-text">
               Ти можеш відмовитись від розсилки в любий час
            </p>
            <div className="input-areas">
               <form>
                  <input type="email" name="email" className="footer-input" placeholder="Введи свій е-мейл" />
                  <Button buttonStyle="btn--outline">Підписка</Button>
               </form>
            </div>
         </section>
         <div className="footer-links">
            <div className="footer-link-wrapper">
               <div className="footer-link-items">
                  <h2>About Us</h2>
                  <Link to='/sign-up'>How it works</Link>
                  <Link to='/'>Testimonials</Link>
                  <Link to='/'>Careers</Link>
                  <Link to='/'>Investors</Link>
                  <Link to='/'>Terms of Service</Link>
               </div>
               <div className="footer-link-items">
                  <h2>Contact Us</h2>
                  <Link to='/'>Contact</Link>
                  <Link to='/'>Support</Link>
                  <Link to='/'>Destinations</Link>
                  <Link to='/'>Sponsorships</Link>
               </div>
               <div className="footer-link-items">
                  <h2>Videos</h2>
                  <Link to='/'>Submit Video</Link>
                  <Link to='/'>Ambassadors</Link>
                  <Link to='/'>Agency</Link>
                  <Link to='/'>Influencer</Link>
               </div>
               <div className="footer-link-items">
                  <h2>Social Media</h2>
                  <Link to='/sign-up'>How it works</Link>
                  <Link to='/'>Testimonials</Link>
                  <Link to='/'>Careers</Link>
                  <Link to='/'>Investors</Link>
               </div>
            </div>
         </div>
         <section className="social-media">
            <div className="social-media-wrap">
               <div className="social-logo">
                  <Link to='/' className="social-logo">
                     TRAVEL&nbsp;<i className="fas fa-mountain"></i>
                  </Link>
               </div>
               <small className="website-rights">TRAVEL &copy; 2020</small>
               <div className="social-icons">
                  <Link className="social-icon-link facebook"
                     to="/"
                     target="_blank"
                     aria-label="Facebook">
                     <i className="fab fa-facebook"></i>
                  </Link>
                  <Link className="social-icon-link instagram"
                     to="/"
                     target="_blank"
                     aria-label="Instagram">
                     <i className="fab fa-instagram"></i>
                  </Link>
                  <Link className="social-icon-link youtube"
                     to="/"
                     target="_blank"
                     aria-label="Youtube">
                     <i className="fab fa-youtube"></i>
                  </Link>
                  <Link className="social-icon-link twitter"
                     to="/"
                     target="_blank"
                     aria-label="Twitter">
                     <i className="fab fa-twitter"></i>
                  </Link>
                  <Link className="social-icon-link linkedin"
                     to="/"
                     target="_blank"
                     aria-label="LinkedIn">
                     <i className="fab fa-linkedin"></i>
                  </Link>
               </div>
            </div>
         </section>
      </div >
   )
}

export default Footer

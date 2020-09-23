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
            </div>
            <div className="footer-link-wrapper">
               <div className="footer-link-items">
                  <h2>Videos</h2>
                  <Link to='/'></Link>
                  <Link to='/'>Testimonials</Link>
                  <Link to='/'>Careers</Link>
                  <Link to='/'>Investors</Link>
                  <Link to='/'>Terms of Service</Link>
               </div>
               <div className="footer-link-items">
                  <h2>Social Media</h2>
                  <Link to='/sign-up'>How it works</Link>
                  <Link to='/'>Testimonials</Link>
                  <Link to='/'>Careers</Link>
                  <Link to='/'>Investors</Link>
                  <Link to='/'>Terms of Service</Link>
               </div>
            </div>
         </div>
         <section className="social-media">
            <div className="social-media-wrap">
               <div className="footer-log">
                  <Link to='/' className="social-log">
                     TRAVEL <i className="fab fa-typo3"></i>
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
                     <i className="fab fa-facebook"></i>
                  </Link>
               </div>
            </div>
         </section>
      </div >
   )
}

export default Footer
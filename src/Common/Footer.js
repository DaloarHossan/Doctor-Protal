import React from 'react';
import footerImg from '../assets/images/footer.png';

const Footer = () => {
	return (
         <div style={{backgroundImage:`url(${footerImg})`}}>
					<footer className="footer p-10  text-base-content">
		<div>
		  <span className="footer-title">Services</span> 
		  <a className="link link-hover">Branding</a> 
		  <a className="link link-hover">Design</a> 
		  <a className="link link-hover">Marketing</a> 
		  <a className="link link-hover">Advertisement</a>
		</div> 
		<div>
		  <span className="footer-title">Our Health</span> 
		  <a className="link link-hover">Fluoride Treatment</a> 
		  <a className="link link-hover">Cavity Filling</a> 
		  <a className="link link-hover">Teeth Whitening</a> 
		</div> 
		<div>
		  <span className="footer-title">Legal</span> 
		  <a className="link link-hover">Terms of use</a> 
		  <a className="link link-hover">Privacy policy</a> 
		  <a className="link link-hover">Cookie policy</a>
		</div>
		
	  </footer> 
	  <footer className="footer footer-center p-4  text-base-content">
	  <div>
		<p>Copyright © 2023 - All right reserved</p>
	  </div>
	</footer>
		 </div>
	 
	 
		);
};

export default Footer;
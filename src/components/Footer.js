import React from 'react'
import Logo from './Logo'
import MenuBar from './MenuBar'
const Footer = () =>{
        return(  <footer className='section' role='navigation'>
                  <div className="container">
                    <section className='footer-nav' role='navigation'>
                    <Logo classes="grayscale"/>
                    <MenuBar />
                    </section>
                  </div>
                </footer>
        );
}

export default Footer;
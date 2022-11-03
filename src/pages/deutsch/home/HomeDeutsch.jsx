import React from 'react';
import { NavLink } from 'react-router-dom';
import '../../french/home/Home.css';

import Header from '../../../assets/img/hero.png'


import GifDeutsch from '../../../assets/img/drapDE.gif'
import GifFrench from '../../../assets/img/drapFR.gif'
import GifEnglish from '../../../assets/img/drapEN.gif'
import GifItalia from '../../../assets/img/drapIA.gif'


const Deutsch = {
    title: 'AU CAFE DU FRANCAIS',
}


function HomeDeutsch() {
  return (
    <div className='home'>
    <div className="container">
       <p className='home-title'>{Deutsch.title}</p>
       <img src={Header} alt="home" />
       <p className='home-text'><strong>Massgeschneiderte Französischkurse im 5. Arrondissement von Paris </strong>
         <p id='home-text-last'>
          <li>Allgmeines & Spezialisiertes Französisch Privatstunden</li>
          <li>DELF/DALF und TCF-Vorbereitung</li>
          <li>Französischunterricht in kleinen Gruppen (auf Antrag)</li>
          </p></p>
    

      
            <div className='home-links'>
                  <NavLink to='/lehrer'>
                      <li>Lehrer</li>
                  </NavLink>
                  <NavLink to='/preise'>
                      <li>Preise</li>
                  </NavLink>
                  <NavLink to='/cafesdufrancais'>
                      <li>Cafés du français</li>
                  </NavLink>
                  <NavLink to='/testimonialsDE'>
                      <li>Testimonials</li>
                  </NavLink>
                  <NavLink to='/voranmeldung'>
                      <li>Voranmeldung</li>
                  </NavLink>
                  
                </div>
     </div>
     
 
    </div>
  )
}

export default HomeDeutsch
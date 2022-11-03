import React from 'react';
import { NavLink } from 'react-router-dom';

import '../../french/home/Home.css'

import Header from '../../../assets/img/hero.png'

import GifDeutsch from '../../../assets/img/drapDE.gif'
import GifFrench from '../../../assets/img/drapFR.gif'
import GifEnglish from '../../../assets/img/drapEN.gif'
import GifItalia from '../../../assets/img/drapIA.gif'

const Italia = {
    title: 'AU CAFE DU FRANCAIS',
}

function HomeItalia() {
  return (
    <div className='home'>
    <div className="container">
       <p className='home-title'>{Italia.title}</p>
       <img src={Header} alt="home" />
       <p className='home-text'><strong>Corsi individuali di francese per stranieri nel quinto arrondissement di Parigi </strong>
       <p id='home-text-last'>
        <li>Lezioni private di francese generale e focalizzate</li>
        <li>Preparazione all’esame DALF/DELF e TCF</li>
        <li>Lezioni di francese in piccoli gruppi (su richiesta) </li>
        </p></p>


      
            <div className='home-links'>
                  <NavLink to='/professore'>
                      <li>Professore</li>
                  </NavLink>
                  <NavLink to='/tariffe'>
                      <li>Tariffe</li>
                  </NavLink>
                  <NavLink to='/cafesfrancais'>
                      <li>Cafés du français</li>
                  </NavLink>
                  <NavLink to='/testimonialsIA'>
                      <li>Testimonianze degli studenti</li>
                  </NavLink>
                  <NavLink to='/preiscrizione'>
                      <li> Pre-iscrizione</li>
                  </NavLink>
                  
                </div>
     </div>
 
    </div>
  )
}

export default HomeItalia
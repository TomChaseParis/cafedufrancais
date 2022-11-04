import React from 'react';
import { NavLink } from 'react-router-dom';
import '../../french/home/Home.css'
import Header from '../../../assets/img/hero.png'

const Italia = {
    title: 'AU CAFE DU FRANCAIS',
}

function HomeItalia() {
  return (
    <div className='home'>
    <div className="container">
       <p className='home-title'>{Italia.title}</p>
       <img src={Header} alt="home" />

       <div className='home-container'>
        <p className='home-text'><strong>Corsi individuali di francese per stranieri nel quinto arrondissement di Parigi </strong></p>
        <ul id='home-text-last'>
        <li>Lezioni private di francese generale e focalizzate</li>
        <li>Preparazione all’esame DALF/DELF e TCF</li>
        <li>Lezioni di francese in piccoli gruppi (su richiesta) </li>
        </ul>
       </div>
      


      
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
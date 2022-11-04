import React from 'react';
import { NavLink } from 'react-router-dom';

import '../../french/home/Home.css'

// Homes
import '../../english/home/HomeEnglish';


import Header from '../../../assets/img/hero.png'
import GifDeutsch from '../../../assets/img/drapDE.gif'
import GifFrench from '../../../assets/img/drapFR.gif'
import GifEnglish from '../../../assets/img/drapEN.gif'
import GifItalia from '../../../assets/img/drapIA.gif'


const French = {
    title: 'AU CAFE DU FRANCAIS',
    para2: "Cours particuliers de français général et de spécialité. Préparation aux examens de français DELF/DALF/TCF Classes de français en petits groupes sur demande"
}

function Home() {

  return (
    <div className='home'>
         <div className="container">
             <h1 className='home-title'>{French.title}</h1> 
            <img className='home-img' src={Header} alt="home" />
            <p className='home-container' id='first-home-container'
            style={{ marginTop: '2rem' }}>Cours de Français Langue Etrangère à la carte<br/> dans le 5ème arrondissement de Paris.</p>

            <div className="flag">

                <ul className="flag-list">
                    <NavLink to='/home'> 
                    <li className="flag-item">
                        <img src={GifFrench} alt="french" />
                    </li>
                    </NavLink>
                    
                    <NavLink to='/english'>
                        <li className="flag-item">
                        <img src={GifEnglish} alt="english" />
                    </li>
                    </NavLink>
                    
                    <NavLink to='/deutsch'>
                    <li className="flag-item">
                        <img src={GifDeutsch} alt="deutsch" />
                    </li>
                    </NavLink>
                    
                    <NavLink to='/italia'>
                         <li className="flag-item">
                        <img src={GifItalia} alt="italia" />
                    </li>
                    </NavLink>
                </ul>
            </div>
        </div>
      
    </div>
  )
}

export default Home;

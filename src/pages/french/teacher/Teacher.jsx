import React from 'react';
import { NavLink } from 'react-router-dom';
import './Teacher.css';

import TeacherPic from '../../../assets/img/profil.webp'


function Teacher() {

  const openLinkedin = url => {
    window.open(url, '_blank');
  };

  const openPlace = url => {
    window.open(url, '_blank');
  };

  const openLanguage = url => {
    window.open(url, '_blank');
  };

  const openAlip = url => {
    window.open(url, '_blank');
  };

  const openLevel = url => {
    window.open(url, '_blank');
  };

 

  return (
    <div className='teacher'>
      <div className='teacher-container'>
        <ul className="teacher-list">
            <h2>Pierre Chazal</h2>
            <li className="teacher-item">Professeur de Français Langue Etrangère</li>
            <li className="teacher-item">44 ans</li>
            <li className="teacher-item">Master 2 en Langue Française Appliquée à l'université de <span onClick={() => openPlace('https://lettres.sorbonne-universite.fr')} className='teacher-link'>Paris IV Sorbonne</span></li>
            <li className="teacher-item">15 ans d'expérience dans l'enseignement du FLE</li>
            <li className="teacher-item">F for French, <span
            onClick={() => openLanguage('https://www.accord-langues.com/fr/')} className='teacher-link'>Accord Langues</span>, <span
            onClick={() => openAlip('https://www.alipfrance.com')} 
            className='teacher-link'>ALIP</span></li>
            <li className="teacher-item">Cours pour tout <span
            onClick={() => openLevel('https://devenirbilingue.com/apprendre/certification/comprendre-le-cecrl-cadre-europeen-commun-de-reference-pour-les-langues/')} 
            className='teacher-link'>niveau</span>, tout profil</li>
            <li className="teacher-item">Méthodologie adaptée</li>
            <li className="teacher-item">Matériel pédagogique (texte, audio, vidéo) entièrement fourni</li>
            
            <button onClick={() => openLinkedin('https://www.linkedin.com/in/pierre-chazal-53237561/?originalSubdomain=fr')} className="teacher-button">Profil complet</button>
          
        </ul>
         <div className="teacher-pic">
            <img src={TeacherPic} alt="/" />
        </div>
        </div>
        <div className='home-links'>
                  <NavLink to='/professeur'>
                      <li>Professeur</li>
                  </NavLink>
                  <NavLink to='/tarifs'>
                      <li>Tarifs</li>
                  </NavLink>
                  <NavLink to='/cafes'>
                      <li>Cafés du français</li>
                  </NavLink>
                  <NavLink to='/Temoignages'>
                      <li>Temoignages</li>
                  </NavLink>
                  <NavLink to='/preinscription'>
                      <li>Formulaire de pré-inscription</li>
                  </NavLink>
                  
                </div>

    </div>
  )
}

export default Teacher;
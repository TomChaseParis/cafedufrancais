import React from 'react';
import { NavLink } from 'react-router-dom';
import TeacherPic from '../../../assets/img/profil.webp';

const TeacherDE = () => {

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
          <li className="teacher-item">Französischlehrer</li>
          <li className="teacher-item">44 Jahre alt</li>
          <li className="teacher-item">Absolvent der Universität <span onClick={() => openPlace('https://lettres.sorbonne-universite.fr')} className='teacher-link'>Paris IV Sorbonne</span></li>
          <li className="teacher-item">Masterstudium in Langue Française Appliquée (Französisch als Fremdsprache)</li>
          <li className="teacher-item">15 Jahre Erfahrung : F for French, <span
          onClick={() => openLanguage('https://www.accord-langues.com/fr/')} className='teacher-link'>Accord Langues</span>, <span
          onClick={() => openAlip('https://www.alipfrance.com')} 
          className='teacher-link'>ALIP</span></li>
          <li className="teacher-item">Französischkurse  für alle Sprachniveaus (A1 bis C1 des <span
          onClick={() => openLevel('https://www.thelanguageoffice.com/gemeinsamer-europaischer-referenzrahmen-fur-sprachen-gers/')} 
          className='teacher-link'>GERS</span>, und für jede Art von Lerner (Urlauber, Student, Pro, Expat)</li>
          <li className="teacher-item">Maßgeschneiderte Methode mit bereitgestellten Lehrmaterial (Text, audio, video) </li>
          
          <button onClick={() => openLinkedin('https://www.linkedin.com/in/pierre-chazal-53237561/?originalSubdomain=fr')} className="teacher-button">Linkedin Profile</button>
        
      </ul>
       <div className="teacher-pic">
          <img src={TeacherPic} alt="/" />
      </div>
      </div>

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
                  <NavLink to='/'>
                      <li>Testimonials</li>
                  </NavLink>
                  <NavLink to='/'>
                      <li>Voranmeldung</li>
                  </NavLink>
                  
                </div>

  </div>
  )
}

export default TeacherDE

import React from 'react';
import { NavLink } from 'react-router-dom';
import TeacherPic from '../../../assets/img/profil.webp';

const TeacherIA = () => {

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
          <li className="teacher-item">Professore di francese per stranieri</li>
          <li className="teacher-item">44 anni</li>
          <li className="teacher-item">Master 2 in Lingua Francese Applicata presso l'Università  <span onClick={() => openPlace('https://lettres.sorbonne-universite.fr')} className='teacher-link'>Paris IV Sorbona</span></li>
          <li className="teacher-item">15 anni di esperienza nell'insegnamento del francese per stranieri</li>
          <li className="teacher-item">F for French, <span
          onClick={() => openLanguage('https://www.accord-langues.com/fr/')} className='teacher-link'>Accord Langues</span>, <span
          onClick={() => openAlip('https://www.alipfrance.com')} 
          className='teacher-link'>ALIP</span></li>
          <li className="teacher-item">Corsi per <span
          onClick={() => openLevel('http://www.etraduzioni.it/corsi-di-lingue/qcer-il-quadro-comune-europeo-di-riferimento-per-la-conoscenza-delle-lingue-1457.html')} 
          className='teacher-link'>tutti i livelli</span>, tutti i profili</li>
          <li className="teacher-item">Metodologia su misura</li>
          <li className='teacher-item'>Materiale didattico (testi, audio, video) completamente fornito</li>
          
          <button onClick={() => openLinkedin('https://www.linkedin.com/in/pierre-chazal-53237561/?originalSubdomain=fr')} className="teacher-button">Profilo Linkedin</button>
        
      </ul>
       <div className="teacher-pic">
          <img src={TeacherPic} alt="/" />
      </div>
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
                  <NavLink to='/'>
                      <li> Pre-iscrizione</li>
                  </NavLink>
                  
                </div>

  </div>
  )
}

export default TeacherIA

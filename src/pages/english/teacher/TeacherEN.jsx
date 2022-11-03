import React from 'react';
import TeacherPic from '../../../assets/img/profil.webp';
import { NavLink } from 'react-router-dom';

const TeacherEN = () => {

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
            <li className="teacher-item">Teacher of French as a foreign language</li>
            <li className="teacher-item">44 years old</li>
            <li className="teacher-item">Master 2 in French & Linguistics, <span onClick={() => openPlace('https://lettres.sorbonne-universite.fr')} className='teacher-link'>Paris IV Sorbonne</span> University</li>
            <li className="teacher-item">15-year experience in teaching French</li>
            <li className="teacher-item">F for French, <span
            onClick={() => openLanguage('https://www.accord-langues.com/fr/')} className='teacher-link'>Accord Langues</span>, <span
            onClick={() => openAlip('https://www.alipfrance.com')} 
            className='teacher-link'>ALIP</span></li>
            <li className="teacher-item">Tailor-made lessons for every level, every learning profile, from A1 to C1 of the <span
            onClick={() => openLevel('https://www.monnalisaschool.com/further-info/common-european-framework-reference-languages/')} 
            className='teacher-link'>CEFR</span></li>
            <li className="teacher-item">Personalized, flexible approach</li>
            <li className='teacher-item'>Learning resources (text, audio, video) provided</li>
            
            <button onClick={() => openLinkedin('https://www.linkedin.com/in/pierre-chazal-53237561/?originalSubdomain=fr')} className="teacher-button">Linkedin Profile</button>
          
        </ul>
         <div className="teacher-pic">
            <img src={TeacherPic} alt="/" />
        </div>
        </div>

        <div className='home-links'>
                  <NavLink to='/teacher'>
                      <li>Teacher</li>
                  </NavLink>
                  <NavLink to='/prices'>
                      <li>Prices</li>
                  </NavLink>
                  <NavLink to='/places'>
                      <li>Cafés du français</li>
                  </NavLink>
                  <NavLink to='/studentsreview'>
                      <li>Student reviews</li>
                  </NavLink>
                  <NavLink to='/prebookingform'>
                      <li>Pre-booking form</li>
                  </NavLink>
                  
                </div>  

    </div>

  )
}

export default TeacherEN

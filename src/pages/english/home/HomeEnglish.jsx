import React from 'react'
import { NavLink } from 'react-router-dom'
import Header from '../../../assets/img/hero.png'

const English = {
    title: 'AU CAFE DU FRANCAIS',
}

function HomeEnglish() {
  return (
    <div className='home'>
    <div className="container">
       <p className='home-title'>{English.title}</p>
       <img src={Header} alt="home" />


       <div className='home-container'>
        <p className='home-text'><strong>Tailor-made French classes in the 5th arrondissement of Paris</strong></p>
        
         <ul id='home-text-last'>
                <li>Private lessons - General & Speciality French courses </li>
                <li> DELF/DALF and TCF preparation</li>
                <li>Mini-group French classes (on demand)</li>
            </ul>
       </div>
       
       <p className="flag-text">{English.lng}</p>

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
   </div>

      

  )
}

export default HomeEnglish;
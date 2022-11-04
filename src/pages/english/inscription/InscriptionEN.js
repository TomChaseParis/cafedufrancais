import React from 'react';
import { NavLink } from 'react-router-dom';
import InscriptionImg from '../../../assets/img/inscription.png'

const InscriptionEN = () => {

  const openInscription = url => {
    // 👇️ setting target to _blank with window.open
    window.open(url, '_blank');
  };

  return (
    <div className='inscription'>
      <div className='inscription-container'>
        <div className='inscription-left'></div>
        <div className='inscription-right'>
          <h3 className='inscription-title'>PRE-BOOKING FORM</h3>
          <img className='inscription-img' src={InscriptionImg} alt={InscriptionImg} />
          <p className='inscription-text'>Thank you to fill in the form below. It will allow us to better know your profile, specific needs and availabilities before a first meet.</p>

          <button className='inscription-button' onClick={() => openInscription('https://form.jotform.com/220972073962359')}>
            Pre-booking form
          </button>
        </div>
      </div>

      <div className='inscription-links'>

        <div className='home-links-inscription'>
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
            <li>Students Review</li>
          </NavLink>
          <NavLink to='/preinscription'>
            <li>Pre-booking form</li>
          </NavLink>


        </div>
      </div>
    </div>
  )
}

export default InscriptionEN;
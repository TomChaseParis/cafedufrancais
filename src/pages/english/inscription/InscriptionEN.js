import React from 'react';
import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

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
            <p className='inscription-text'>Thank you to fill in the form below. It will allow us to better know your profile, specific needs and availabilities before a first meet.</p>

       <button className='inscription-button' onClick={() => openInscription('https://form.jotform.com/220972073962359')}>
        Pre-booking form
      </button>
        </div>
        </div>

        <div className='inscription-links'>
        
        <div className='home-links-inscription'>
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
    </div>
  )
}

export default InscriptionEN;
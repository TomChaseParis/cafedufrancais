import React from 'react';
import { NavLink } from 'react-router-dom';
import './Inscription.css';

const Inscription = () => {

  const openInscription = url => {
    // 👇️ setting target to _blank with window.open
    window.open(url, '_blank');
  };

  return (
    <div className='inscription'>
      <div className='inscription-container'>
        <div className='inscription-left'></div>
        <div className='inscription-right'>
          <h3 className='inscription-title'>Formulaire de pré-inscription</h3>
          <p className='inscription-text'>Merci de remplir le formulaire de contact ci-dessous. Il nous permettra de mieux connaître votre profil, vos besoins et vos disponibilités et de vous proposer un premier rendez-vous afin d'échanger librement et de convenir ensemble d'un programme de formation.</p>

          <button className='inscription-button' onClick={() => openInscription('https://form.jotform.com/220942785260357')}>
            Formulaire de pré-inscription
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

export default Inscription;
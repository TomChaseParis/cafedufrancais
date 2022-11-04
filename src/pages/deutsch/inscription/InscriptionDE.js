import React from 'react';
import { NavLink } from 'react-router-dom';
import InscriptionImg from '../../../assets/img/inscription.png'


const InscriptionDE = () => {

  const openInscription = url => {
    // 👇️ setting target to _blank with window.open
    window.open(url, '_blank');
  };

  return (
    <div className='inscription'>
      <div className='inscription-container'>
        <div className='inscription-left'></div>
        <div className='inscription-right'>
          <h3 className='inscription-title'>Voranmeldungsformular</h3>
          <img className='inscription-img' src={InscriptionImg} alt={InscriptionImg} />
          <p className='inscription-text'>Bitte füllen Sie das unten stehende Kontaktformular aus. Dadurch können wir Ihr Profil, Ihre Bedürfnisse und Ihre Verfügbarkeit besser verstehen und Ihnen ein erstes Treffen anbieten, um frei zu diskutieren und gemeinsam ein Schulungsprogramm zu vereinbaren.</p>
          '
          <button className='inscription-button' onClick={() => openInscription('https://form.jotform.com/221143145895355')}>
            FORMULAR
          </button>
        </div>
      </div>

      <div className='inscription-links'>

        <div className='home-links-inscription'>
          <NavLink to='/lehrer'>
            <li>Lehrer</li>
          </NavLink>
          <NavLink to='/preise'>
            <li>Preise</li>
          </NavLink>
          <NavLink to='/cafes'>
            <li>Cafés du français</li>
          </NavLink>
          <NavLink to='/testimonialsDE'>
            <li>Testimonials</li>
          </NavLink>
          <NavLink to='/Voranmeldungsformular'>
            <li>Voranmeldungsformular</li>
          </NavLink>


        </div>
      </div>
    </div>
  )
}

export default InscriptionDE;
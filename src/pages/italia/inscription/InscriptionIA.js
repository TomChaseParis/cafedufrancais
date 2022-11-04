import React from 'react';
import { NavLink } from 'react-router-dom';
import InscriptionImg from '../../../assets/img/inscription.png'


const InscriptionIA = () => {

  const openInscription = url => {
    // 👇️ setting target to _blank with window.open
    window.open(url, '_blank');
  };


  return (

    <div className='inscription'>
      <div className='inscription-container'>
        <div className='inscription-left'></div>
        <div className='inscription-right'>
          <h3 className='inscription-title'>MODULO DI PRE-ISCRIZIONE</h3>
          <img className='inscription-img' src={InscriptionImg} alt={InscriptionImg} />
          <p className='inscription-text'>Si prega di compilare il modulo di contatto sottostante. Il modulo ci permetterà di comprendere meglio il vostro profilo, i vostri bisogni e le vostre disponibilità nonché di proporvi un primo incontro per discutere liberamente e concordare insieme un programma di formazione.</p>
          '
          <button className='inscription-button' onClick={() => openInscription('https://form.jotform.com/221352231196347')}>
            Modulo di pre-iscrizione
          </button>
        </div>
      </div>

      <div className='inscription-links'>

        <div className='home-links-inscription'>
          <NavLink to='/ Professore'>
            <li> Professore</li>
          </NavLink>
          <NavLink to='/Tariffe -'>
            <li>Tariffe</li>
          </NavLink>
          <NavLink to='/cafes'>
            <li>Cafés du français</li>
          </NavLink>
          <NavLink to='/Testimonianze degli studenti'>
            <li>Testimonials</li>
          </NavLink>
          <NavLink to='/preiscrizione'>
            <li>Pre-iscrizione</li>
          </NavLink>


        </div>
      </div>
    </div>
  )
}

export default InscriptionIA;
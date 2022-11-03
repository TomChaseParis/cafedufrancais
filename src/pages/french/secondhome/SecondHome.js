import React from 'react';
import { NavLink } from 'react-router-dom';
import Header from '../../../assets/img/hero.png'
import '../home/Home.css'

function SecondHome() {

  const French = {
    title: 'Au Café du Français',
  }

  return (

    <div className='home'>
      <div className="container">
        <p className='home-title'>{French.title}</p>
        <img src={Header} alt="home" />

        <div>
          <p className='home-text'><strong>Leçons de Français Langue Etrangère à la carte<br /> dans le 5ème arrondissement de Paris</strong>
            <p id='home-text-last'>
              <li>Cours particuliers de français général et de spécialité </li>
              <li>Préparation aux examens de français DELF/DALF/TCF</li>
              <li>Classes de français en petits groupes sur demande</li>
            </p></p>
        </div>


        <div className="flag">


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


      </div>
    </div>

  )

}

export default SecondHome


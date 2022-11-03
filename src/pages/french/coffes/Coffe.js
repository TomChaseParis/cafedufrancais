import React from 'react';
import { NavLink } from 'react-router-dom';
import "./Coffe.css";
import CoffeCard from './CoffeCard';
import CoffeData from './CoffeData';

function Coffe() {


  return (
    <div className='coffe'>
      <h1 className='coffe-title'>Les Cafés de Paris où nous aimons donner nos leçons de français...</h1>
      <div className='coffe-container'>
        {CoffeData.map((value, index) => {
          return (
            <CoffeCard
              key={index}
              img={value.img}
              title={value.title}
              text={value.text}
              coffe={value.coffe}
              adress={value.adress}
              linkUrl={value.linkUrl}
            />
          )
        })}
      </div>
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
        <NavLink to='/'>
          <li>Formulaire de pré-inscription</li>
        </NavLink>

      </div>
    </div>

  )

}

export default Coffe;
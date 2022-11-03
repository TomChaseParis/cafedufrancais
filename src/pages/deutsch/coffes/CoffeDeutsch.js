import React from 'react';
import { NavLink } from 'react-router-dom';
import CoffeCardDeutsch from './CoffeCardDeutsch';
import CoffeDataDeutsch from './CoffeDataDeutsch';

const CoffeDeutsch = () => {
  return (
    <div className='coffe'>
        <h1 className='coffe-title'>Die Cafés in Paris, in denen wir gerne unsere Französischkurse geben...

</h1>
    <div className='coffe-container'>
            {CoffeDataDeutsch.map((value, index) => {
                return (
                    <CoffeCardDeutsch
                    key={index}
                    img={value.img}
                    title={value.title}
                    text={value.text}
                    coffe={value.coffe}
                    adress={value.adress}
                    />
                )
            })}

        </div>
    

    <div className='home-links'>
                  <NavLink to='/lehrer'>
                      <li>Lehrer</li>
                  </NavLink>
                  <NavLink to='/preise'>
                      <li>Preise</li>
                  </NavLink>
                  <NavLink to='/cafesdufrancais'>
                      <li>Cafés du français</li>
                  </NavLink>
                  <NavLink to='/testimonialsDE'>
                      <li>Testimonials</li>
                  </NavLink>
                  <NavLink to='/'>
                      <li>Voranmeldung</li>
                  </NavLink>
                  
                </div>
    </div>
  )
}

export default CoffeDeutsch;

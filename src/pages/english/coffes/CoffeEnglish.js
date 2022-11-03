import React from 'react';
import CoffeCardEnglish from './CoffeCardEnglish';
import CoffeDataEnglish from './CoffeDataEnglish';
import { NavLink } from 'react-router-dom';


const CoffeEnglish = (props) => {
  return (
    <div className='coffe'>
    <h1 className='coffe-title'>Parisian cafés where we like to sit down for our French lessons...
</h1>
    <div className='coffe-container'>
            {CoffeDataEnglish.map((value, index) => {
                return (
                    <CoffeCardEnglish
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

export default CoffeEnglish;

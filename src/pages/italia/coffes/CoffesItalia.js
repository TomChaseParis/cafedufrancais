import React from 'react';
import { NavLink } from 'react-router-dom';
import CoffeDataItalia from './CoffeDataItalia';
import CoffeCardItalia from './CoffeCardItalia';
const CoffesItalia = () => {
  return (
    <div className='coffe'>
      <h1 className='coffe-title'>I caffè di Parigi dove amiamo dare le nostre lezioni di francese...</h1>
      <div className='coffe-container'>
        {CoffeDataItalia.map((value, index) => {
          return (
            <CoffeCardItalia
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
        <NavLink to='/professore'>
          <li>Professore</li>
        </NavLink>
        <NavLink to='/tariffe'>
          <li>Tariffe</li>
        </NavLink>
        <NavLink to='/cafesfrancais'>
          <li>Cafés du français</li>
        </NavLink>
        <NavLink to='/testimonialsIA'>
          <li>Testimonianze degli studenti</li>
        </NavLink>
        <NavLink to='/preiscrizione'>
          <li> Pre-iscrizione</li>
        </NavLink>

      </div>
    </div>
  )
}

export default CoffesItalia;

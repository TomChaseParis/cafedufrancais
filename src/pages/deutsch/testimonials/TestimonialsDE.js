import React from 'react';
import { NavLink } from 'react-router-dom';
import TestimonialsDECard from './TestimonialsDECard';
import TestimonialsDEData from './TestimonialsDEData';

const TestimonialsDE = () => {

    const openForFrench= url => {
        window.open(url, '_blank');
      };


  return (
    <div className='testimonials'>
    <h1 className='testimonials-title'>TESTIMONIALS *</h1>
    <div className='testimonials-container'>
    {TestimonialsDEData.map((value, index) => {
              return (
                  <TestimonialsDECard
                  key={index}
                  text={value.text}
                  name={value.name}
                  />
              )
          })}
    </div>

    <div className='testimonials-button'>
        <button className='button-for-french' onClick={() => openForFrench('https://www.google.fr/search?q=f+for+french+reviews&source=hp&ei=QyOGYrTSMtCmacGGgtAB&iflsig=AJiK0e8AAAAAYoYxU8RG6NAXVHNBnY_2aii78y8mA7EW&ved=0ahUKEwj0_-a8tOv3AhVQUxoKHUGDABoQ4dUDCAc&uact=5&oq=f+for+french+reviews&gs_lcp=Cgdnd3Mtd2l6EAM6EQguEIAEELEDEIMBEMcBENEDOg4ILhCABBCxAxDHARCjAjoRCC4QgAQQsQMQxwEQowIQ1AI6CwgAEIAEELEDEIMBOgsILhCABBDHARCjAjoICC4QsQMQgwE6CAgAELEDEIMBOgUIABCABDoUCC4QgAQQsQMQgwEQxwEQ0QMQ1AI6BQguEIAEOggIABCABBCxAzoICC4QgAQQsQM6CAguEIAEENQCOgcIABCABBAKOggIABAeEA0QCjoGCAAQHhAWOggIABAeEBYQCjoECAAQEzoECC4QEzoICAAQHhAWEBM6CggAEB4QFhAKEBM6BQghEKABOggIIRAeEBYQHToHCCEQChCgAVAAWIIgYIMhaABwAHgAgAFqiAGvCpIBBDE5LjGYAQCgAQE&sclient=gws-wiz')}>* F for French (2015-2020)</button>
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
                  <NavLink to='/voranmeldung'>
                      <li>Voranmeldung</li>
                  </NavLink>
                  
                </div>

  </div>
  )
}

export default TestimonialsDE;
import React from 'react';
import IntroImg from '../../assets/img/pantheon1BW.jpg';
import StudentsImg from '../../assets/img/hero.png';
import './HeroImg.css';

const HeroImg = () => {
  return (
    <div className='hero'>
    <div className='mask'>
        <img className='intro-img' src={IntroImg} alt='IntroImg' />
    </div>
    <div className='content'>
        <h1 className='hero-title'>Au Café du Français</h1>
        <p className='hero-text'>Cours de Français Langue Etrangère à la carte dans le 5ème arrondissement de Paris.</p>
        <img className='students-img' src={StudentsImg} alt='students' />
    </div>
</div>
  )
}

export default HeroImg
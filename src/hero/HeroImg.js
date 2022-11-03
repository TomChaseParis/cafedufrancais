import { Link } from 'react-router-dom';
import './HeroImgStyles.css';
import IntroImg from '../../assets/hero2.webp';

const HeroImg = () => {
  return (
    <div className='hero'>
        <div className='mask'>
            <img className='intro-img' src={IntroImg} alt='IntroImg' />
        </div>
        <div className='content'>
            <p>HELLO, JE M'APPELLE THOMAS CHASE</p>
            <h1>DEVELOPPEUR REACT</h1>
            <div>
                <Link to="/project" className='btn'>Projets</Link>
                <Link to="/contact" className='btn btn-light'>Contact</Link>
            </div>
        </div>
    </div>
  )
}

export default HeroImg
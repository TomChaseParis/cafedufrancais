import React from 'react';

import './Footer.css';

function Footer() {
  return (
    <div className='footer'>
      <div className="footer-container">
      <ul className="footer-list">
            <li className="footer-item">Mentions Légales</li>
            <li className="footer-item">Politique de confidentialité</li>
            <li className="footer-item">Paramètres des cookies</li>
            <li className="footer-item" id='sign'>Au Café du Français @ 2022</li>
        </ul>
      </div>
       
    </div>
  )
}

export default Footer
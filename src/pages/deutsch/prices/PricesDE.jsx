import React from 'react';
import { NavLink } from 'react-router-dom'; 
import Menu from '../../../assets/img/MenuDE.png'

const PricesDE = () => {
  return (
    <div className='prices'>
             <h1 className='prices-title'>PREISE FRANZÖSISCHKURSE</h1>

    <ul className="prices-list">
    
        <li><p className='prices-item'>• Der Preis des Französischkurse variiert zwischen 24€ und 30€ pro Stunde, je nach gewähltem <strong>Leistungspaket</strong> (20, 15, 10 oder 5 Lektionen). </p></li>
        <li><p className='prices-item'>• Vor Beginn der dritten Unterrichtsstunde muss der Student / die Studentin nichts bezahlen. Er/Sie verpflichtet sich nur, einen Vertrag über 5, 10, 15 oder 20 Unterrichtsstunden zu unterschreiben, wenn die ersten beiden Unterrichtsstunden ihn <strong>zufrieden gestellt</strong> haben. Die ersten beiden Unterrichtsstunden gelten dann als genommen.</p></li>
        <li><p className='prices-item'>• Wenn nicht anders vermerkt, dauert eine Lektion <strong>90 Minuten</strong> (1.5 Studen).</p></li>
        <img src={Menu} alt="" />
        <h2 className='conditions'>Besondere Bedingungen</h2>
        <li>
            <p className='conditions-item'>• Die Französischunterricht müssen innerhalb von <strong>12 Monaten</strong> nach der ersten Unterrichtsstunde genommen werden.</p></li>
        <li>
            <p className='conditions-item'>• Sobald der Vertrag unterzeichnet ist, sind die Lektionen <strong>nicht erstattungsfähig</strong>.</p>
        </li>
    </ul>

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

export default PricesDE

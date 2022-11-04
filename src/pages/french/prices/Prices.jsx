import React from 'react';
import { NavLink } from 'react-router-dom';
import './Prices.css';
import Menu from '../../../assets/img/tarifswithout.png'

function Prices() {
  return (
    <div className='prices'>
       <h1 className='prices-title'>TARIFS DES COURS DE FRANCAIS</h1>
        <ul className="prices-list">
            <li>
            </li>
            <li><p className='prices-item'>• Les tarifs des cours sont <strong>dégressifs</strong> en fonction du nombre de leçons prises.</p></li>
            <li><p className='prices-item'>• L'étudiant(e) n'a rien à régler avant le début de la troisième leçon. Il/Elle ne s'engage sur la signature d'un contrat de <strong>5, 10, 15 ou 20</strong> leçons que si les deux premiers cours lui ont donné <strong>satisfaction</strong>, auquel cas ces deux cours sont considérés comme pris.</p></li>
            <li><p className='prices-item'>• La durée de chaque leçon est d'<strong>une heure trente</strong>.</p></li>
            <div className='menu-img'>
            <img src={Menu} alt="" />
            </div>
           
               <h2 className='conditions'>Conditions particulières</h2>
            <li>
                <p className='conditions-item'>• Les leçons de français doivent être prises dans une limite de <strong>12 mois</strong> à compter du premier cours.</p></li>
            <li>
                <p className='conditions-item'>• Une fois le contrat signé, les cours ne sont <strong>pas remboursables</strong>.</p>
            </li>
          
           
        </ul>

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

export default Prices

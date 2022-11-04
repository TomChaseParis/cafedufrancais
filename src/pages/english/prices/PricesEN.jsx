import React from 'react';
import Menu from '../../../assets/img/MenuEN.png';
import { NavLink } from 'react-router-dom';

const PricesEN = () => {
  return (
    <div className='prices'>
             <h1 className='prices-title'>FRENCH COURSE PRICE</h1>

    <ul className="prices-list">
        <li><p className='prices-item'>• Course prices are on a <strong>sliding scale</strong> according to the number of lessons you choose to have. </p></li>
        <li><p className='prices-item'>• No payment required before the 3rd lesson. The student only commits to a <strong>5, 10, 15 or 20-lesson contract</strong> if the first two lessons gave him/her entire satisfaction, in which case they will be considered as taken.</p></li>
        <li><p className='prices-item'>• Each and every lesson's duration is <strong>one hour and a half</strong>.</p></li>
        <div className='menu-img'>
            <img src={Menu} alt="" />
        </div>
        <h2 className='conditions'>Agreement terms and conditions</h2>
        <li>
            <p className='conditions-item'>• French lessons must be completed within a <strong>12-month limit</strong> from the day of the first lesson.</p></li>
        <li>
            <p className='conditions-item'>• Once the contract has been signed, courses are <strong>not refundable.</strong></p>
        </li>
    </ul>
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

export default PricesEN;

import React from 'react';
import { NavLink } from 'react-router-dom';
import Menu from '../../../assets/img/MenuIA.png';

const PricesIA = () => {
  return (
    <div className='prices'>
      <h1 className='prices-title'>TARIFFE DEI CORSI DI FRANCESE</h1>

    <ul className="prices-list">
        <li><p className='prices-item'>• Le tariffe dei corsi <strong>diminuiscono</strong> in funzione del numero di lezioni seguite.</p></li>
        <li><p className='prices-item'>• Corsi da <strong> 5, 10, 15 o 20</strong> lezioni; le prime due lezioni sono considerate di prova e solo alla fine della seconda lezione lo studente, se <strong>soddisfatto</strong>, potrà sottoscrivere un contratto da 5, 10, 15 o 20 lezioni ; le due lezioni di prova in questo caso saranno decurtate da quelle previste nel pacchetto scelto. Nel caso in cui lo studente non sia soddisfatto non sarà tenuto al pagamento delle prime due lezioni.</p></li>
        <li><p className='prices-item'>• La durata di ogni lezione è di <strong>un'ora e mezzo</strong>.</p></li>
        <img src={Menu} alt="" />
        <h2 className='conditions'>Condizioni particolari</h2>
        <li>
            <p className='conditions-item'>• Le lezioni di francese devono essere prese entro <strong>12 mesi</strong> dalla data della prima lezione.</p></li>
        <li>
            <p className='conditions-item'>• Una volta firmato il contratto, le lezioni <strong>non sono rimborsabili</strong>.</p>
        </li>
    </ul>
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

export default PricesIA;

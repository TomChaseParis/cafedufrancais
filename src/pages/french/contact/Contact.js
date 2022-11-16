import React, { useRef } from 'react';
import { NavLink } from 'react-router-dom';
import emailjs from '@emailjs/browser';
import './Contact.css';

const Contact = () => {

  // EMAIL JS SECTION
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_wbk89ug', 'template_fug6syb', form.current, 'LtMSiEAC9v1Dj_P8-')
      .then((result) => {
        console.log(result.text);
        console.log('message envoyé')
      }, (error) => {
        console.log(error.text);
      });

      if (sendEmail) {
        document.location.href='/';
        alert('Merci, votre message a bien été envoyé, vous serez recontacté dans les meilleurs délais')
      }
  };

  return (
    <div className='contact'>
      {/* <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" />
    </form> */}

      <form ref={form} onSubmit={sendEmail} className='form'>
        <h3 className='contact-title'>Au Café du Français</h3>

        {/* Name */}
        <label htmlFor="name" name="user_name" >Votre Nom</label>
        <input type="text"
          name="user_name"
          placeholder="Votre Nom et prénom"
          required />

        {/* Phone */}
        <label htmlFor="phone">Téléphone</label>
        <input type="phone"
          name="user_phone"
          placeholder="0625172339" />

        {/* Mail */}
        <label htmlFor="mail" name="user_email" >Email</label>
        <input type="email"
          name="user_email"
          placeholder="votremail@email.com"
          required />

        {/* Message */}
        <label htmlFor="message">Message</label>
        <textarea name="message" type="submit"
          placeholder="Entrez votre message..."
          required />

        <p>Notre politique de confidentialité s'applique.</p>


        {/* Submit */}
        <button type='submit' value="Send"
          className='contact-button'
        >Envoyer</button>

      </form>

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

export default Contact;



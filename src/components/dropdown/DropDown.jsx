import React from 'react';
import Logo from '../../assets/img/Logo.jpg'


// React Bootstrap
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './DropDown.css';

// Home
import Home from '../../pages/french/home/Home';

// Prices
import Prices from '../../pages/french/prices/Prices';
import PricesIA from '../../pages/italia/prices/PricesIA';
import PricesDE from '../../pages/deutsch/prices/PricesDE';
import PricesEN from '../../pages/english/prices/PricesEN';

// Teacher
import Teacher from '../../pages/french/teacher/Teacher';
import TeacherEN from '../../pages/english/teacher/TeacherEN';
import TeacherIA from '../../pages/italia/teacher/TeacherIA';
import TeacherDE from '../../pages/deutsch/teacher/TeacherDE';

// Coffes
import Coffe from '../../pages/french/coffes/Coffe';
import CoffeEnglish from '../../pages/english/coffes/CoffeEnglish';
import CoffeDeutsch from '../../pages/deutsch/coffes/CoffeDeutsch';
import CoffesItalia from '../../pages/italia/coffes/CoffesItalia';

// Testimonials
import Testimonials from '../../pages/french/testimonials/Testimonials';
import TestimonialsIA from '../../pages/italia/testimonials/TestimonialsIA';
import TestimonialsDE from '../../pages/deutsch/testimonials/TestimonialsDE';
import StudentsReview from '../../pages/english/testimonials/StudentsReview';

// Inscription

const DropDown = () => {
  return ( 
    <>
  <Navbar id='navbar' bg="light" expand="lg" sticky='top'>
      <Container>
      <img className='logo' src={Logo} alt='' />
        <Navbar.Brand style={{ fontSize: '16px', marginLeft: '20px'}} href="/" id='drop-title'>
          Au Café du Français</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse className='' id="navbarScroll"  >
       
          <Nav className="bd-highlight" navbarScroll >
            <Nav.Link href="/" onClick={<Home />}>Accueil</Nav.Link>
            <Nav.Link href="/contact">Contact</Nav.Link>

            {/* French Section */}
            <NavDropdown title="Français" id="navbarScrollingDropdown">
              <NavDropdown.Item href="/professeur" onClick={<Teacher />}>Professeur</NavDropdown.Item>
              <NavDropdown.Item href="/tarifs" onClick={<Prices />}>Tarifs</NavDropdown.Item>
              <NavDropdown.Item href="/cafes" onClick={<Coffe />}>Cafés du français</NavDropdown.Item>
              <NavDropdown.Item href="/temoignages" onClick={<Testimonials />}>Témoignages d'étudiants</NavDropdown.Item>
              <NavDropdown.Item href="/preinscription">Formulaire de pré-inscription</NavDropdown.Item>
            </NavDropdown>

              {/* English Section */}
              <NavDropdown title="English" id="navbarScrollingDropdown">
              <NavDropdown.Item href="/teacher" onClick={<TeacherEN />}>Teacher</NavDropdown.Item>
              <NavDropdown.Item href="/prices" onClick={<PricesEN />}>Prices</NavDropdown.Item>
              <NavDropdown.Item href="/places" onClick={<CoffeEnglish />}>Cafés du français</NavDropdown.Item>
              <NavDropdown.Item href="/studentsreview" onClick={<StudentsReview />}>Student reviews</NavDropdown.Item>
            <NavDropdown.Item href="prebookingform">Pre-booking form</NavDropdown.Item>
            </NavDropdown>

              {/* Deutsch Section */}
              <NavDropdown title="Deutsch" id="navbarScrollingDropdown">
              <NavDropdown.Item href="/lehrer" onClick={<TeacherDE />}>Lehrer</NavDropdown.Item>
              <NavDropdown.Item href="/preise" onClick={<PricesDE />}>Preise</NavDropdown.Item>
              <NavDropdown.Item href="/cafesdufrancais" onClick={<CoffeDeutsch />}>Cafés du français</NavDropdown.Item>
              <NavDropdown.Item href="/testimonialsDE" onClick={<TestimonialsDE />}>Testimonials</NavDropdown.Item>
              <NavDropdown.Item href="/voranmeldung">Voranmeldung</NavDropdown.Item>
            </NavDropdown>

              {/* Italia Section */}
              <NavDropdown title="Italiano" id="navbarScrollingDropdown">
              <NavDropdown.Item href="/professore" onClick={<TeacherIA />}>Professore</NavDropdown.Item>
              <NavDropdown.Item href="/tariffe" onClick={<PricesIA />}>Tariffe</NavDropdown.Item>
              <NavDropdown.Item href="/cafesfrancais" onClick={<CoffesItalia />}>Cafés du français</NavDropdown.Item>
              <NavDropdown.Item href="/testimonialsIA" onClick={<TestimonialsIA />}>Testimonianze degli studenti</NavDropdown.Item>
              <NavDropdown.Item href="/preiscrizione">Pre-iscrizione</NavDropdown.Item>
            </NavDropdown>


            <Nav.Link href="#" disabled> 
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    </>
    )
  
}

export default DropDown;

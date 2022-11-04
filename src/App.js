import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// COMPONENTS
import DropDown from './components/dropdown/DropDown';
import Footer from './components/footer/Footer';

// HOME
import Home from './pages/french/home/Home';
import HomeDeutsch from './pages/deutsch/home/HomeDeutsch';
import HomeEnglish from './pages/english/home/HomeEnglish';
import HomeItalia from './pages/italia/home/HomeItalia';

// TESTIMONIALS
import Testimonials from './pages/french/testimonials/Testimonials';
import StudentsReview from './pages/english/testimonials/StudentsReview';
import TestimonialsIA from './pages/italia/testimonials/TestimonialsIA';
import TestimonialsDe from './pages/deutsch/testimonials/TestimonialsDE';

// COFFES
import CoffesItalia from './pages/italia/coffes/CoffesItalia';
import Coffe from './pages/french/coffes/Coffe';
import CoffeEnglish from './pages/english/coffes/CoffeEnglish';
import CoffeDeutsch from './pages/deutsch/coffes/CoffeDeutsch';

// TEACHER
import Teacher from './pages/french/teacher/Teacher';
import TeacherIA from './pages/italia/teacher/TeacherIA';
import TeacherDE from './pages/deutsch/teacher/TeacherDE';
import TeacherEN from './pages/english/teacher/TeacherEN';

// PRICES
import Prices from './pages/french/prices/Prices';
import PricesIA from './pages/italia/prices/PricesIA';
import PricesEN from './pages/english/prices/PricesEN';
import PricesDE from './pages/deutsch/prices/PricesDE';

// CONTACT
import Contact from './pages/french/contact/Contact';

// PRE INSCRIPTION
import Inscription from './pages/french/inscription/Inscription';
import InscriptionEN from './pages/english/inscription/InscriptionEN';
import InscriptionDE from './pages/deutsch/inscription/InscriptionDE';
import InscriptionIA from './pages/italia/inscription/InscriptionIA';
import SecondHome from './pages/french/secondhome/SecondHome';


function App() {
  return (
    <>
      <BrowserRouter>
        <DropDown />

        <Routes>

          {/* HOME PAGES */}
          <Route path='/' element={<Home />} />
          <Route path='/home' element={<SecondHome />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/english' element={<HomeEnglish />} />
          <Route path='/deutsch' element={<HomeDeutsch />} />
          <Route path='/italia' element={<HomeItalia />} />

          {/* TEACHER PAGES */}
          <Route path='/professeur' element={<Teacher />} />
          <Route path='/teacher' element={<TeacherEN />} />
          <Route path='/lehrer' element={<TeacherDE />} />
          <Route path='/professore' element={<TeacherIA />} />

          {/* PLACE PAGES */}
          <Route path='/cafes' element={<Coffe />} />
          <Route path='/places' element={<CoffeEnglish />} />
          <Route path='/cafesdufrancais' element={<CoffeDeutsch />} />
          <Route path='/cafesfrancais' element={<CoffesItalia />} />

          {/* TESTIMONIALS PAGES */}
          <Route path='/temoignages' element={<Testimonials />} />
          <Route path='/studentsreview' element={<StudentsReview />} />
          <Route path='/testimonialsDE' element={<TestimonialsDe />} />
          <Route path='/testimonialsIA' element={<TestimonialsIA />} />

          {/* TARIFS PAGES */}
          <Route path='/tarifs' element={<Prices />} />
          <Route path='/prices' element={<PricesEN />} />
          <Route path='/preise' element={<PricesDE />} />
          <Route path='/tariffe' element={<PricesIA />} />

          {/* CONTACT PAGES */}
          <Route path='/contact' element={<Contact />} />

          {/* INSCRIPTION PAGES */}
          <Route path='/preinscription' element={<Inscription />} />
          <Route path='/prebookingform' element={<InscriptionEN />} />
          <Route path='/voranmeldung' element={<InscriptionDE />} />
          <Route path='/preiscrizione' element={<InscriptionIA />} />

        </Routes>
        <Footer />
      </BrowserRouter>

    </>




  );
}

export default App;

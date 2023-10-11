import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

import Header from './components/Header'
import Home from './components/Home';
import Aboutus from './components/Aboutus';
import Services from './components/Services';
import Personal from './components/Personal/Personal';
import Yoga from './components/yoga/Yoga';
import AboutUs from './components/About-Us/AboutUs';
import Icon from './components/Icon/Icon';
import Footer from './components/Footer/Footer';
import Certificate from './components/Certificate/Certificate';
import Contact from './components/Contact/Contact';
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Home />
      <Personal />

      <Services />
      <AboutUs />



      <Yoga />
      <Certificate />
      <Contact/>
      <Icon/>
      <Footer/>


    </>
  )
}

export default App

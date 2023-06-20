import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header1 from './component/Header';
import { Carousel, Navbar } from 'react-bootstrap';
import Navbar1 from './component/Navbars';
import Carousel1 from './component/Carousel';
import Banner1 from './component/Banner';
import Section from './component/Section';
import Footer from './component/Footer';

function App() {
  return (
    <>
    <Header1/>
    <Navbar1/>
    <Carousel1/>
    <Banner1/>
    <Section/>
    <Footer/>
    </>
  );
}

export default App;

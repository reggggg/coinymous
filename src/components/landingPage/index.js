import React, {Component} from 'react';
import Header from '../header';
import Footer from '../footer';
import Showcase from '../landingPage/showcase';
import What from '../landingPage/what';
import Why from '../landingPage/why';
import Legal from '../landingPage/legal';
import TokenAllocations from '../landingPage/tokenAllocations';
import Roadmap from '../landingPage/roadmap';
import Faq from '../landingPage/faq';
import ContactUs from '../landingPage/contactUs';
import Subscribe from '../landingPage/subscribe';
import '../../css/landingPage/index.css';

class LandingPage extends Component {

  render(){
    return (
      <div className="landingPage">
        <Header />
        <Showcase />
        <What />
        <Why />
        <Legal />
        <TokenAllocations />
        <Roadmap />
        <Faq />
        <ContactUs />
        <Subscribe />
        <Footer />
      </div>
    );
  }
}
export default LandingPage;

import React from 'react';
import '../Inspiration.css';
import '../../home/Home.css';  
import StellarSections from './StellarSections';
import Footer from "../../../components/footer/Footer";
import Modals from "../../../components/modals/Modals";
import InspirationNav from '../InspirationNav'; 

class StellarTips extends React.Component {
  render() {
    return (
      <>
        <InspirationNav />
        <StellarSections />
        <Footer />
        <Modals />
      </>
    );
  }
}

export default StellarTips;
import React from 'react';
import "../stellar_tips/StellarTips.css";
import StellarSections from './StellarSections/StellarSections';
import Footer from "../../../components/footer/Footer";
import Modals from "../../../components/modals/Modals";
import InspirationNav from '../../../components/navigations/InspirationNav'; 

/**
 * StellarTips page composes top navigation, the StellarSections content, footer, and modals.
 * @extends React.Component
 */
class StellarTips extends React.Component {
  /**
   * Render the StellarTips page.
   * @returns {JSX.Element} Page markup including nav, content, footer and modals.
   */
  render() {
    return (
      <div className="stellar-tips-page">
        <InspirationNav />
        <StellarSections />
        <Footer />
        <Modals />
      </div>
    );
  }
}

export default StellarTips;
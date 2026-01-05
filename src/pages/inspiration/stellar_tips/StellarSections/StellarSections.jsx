import React from "react";
import "../../stellar_tips/StellarTips.css";
import "./StellarSections.css";
import TipsCategory from "../TipsCategory/TipsCategory";
import ChefSecretCard from "../ChefSecretCard/ChefSecretCard";
import QuickTipsSection from "../QuickTipsSection/QuickTipsSection";
import { essentialTips, flavorTips, proTips, quickTips, chefSecret } from "../tipData";

/**
 * StellarSections composes several sub-sections of the Stellar Tips page:
 * - essential techniques
 * - flavor tips
 * - pro tips
 * - a featured Chef secret card
 * - quick tips section
 *
 * The component loads tip data into state and renders the respective components.
 *
 * @extends React.Component
 */
class StellarSections extends React.Component {
  /**
   * Initialize component state with imported tip data.
   * @param {object} props - React props.
   */
  constructor(props) {
    super(props);

    this.state = {
      essentialTips,
      flavorTips,
      proTips,
      quickTips,
      chefSecret,
    };
  }

  /**
   * Render the StellarSections including categories and featured content.
   * @returns {JSX.Element} Stellar sections markup.
   */
  render() {
    const { essentialTips: essential, flavorTips: flavor, proTips: pro, quickTips: quick, chefSecret: secret } = this.state;

    return (
      <>
        <section className="stellar-hero">
          <div className="container">
            <h1 className="main-title">Stellar Tips</h1>
            <p className="hero-subtitle">Pro cooking secrets from across the culinary cosmos ✨</p>
          </div>
        </section>

        <main className="container my-5">
          <TipsCategory
            title="Essential Techniques"
            icon="🌟"
            description="Master these fundamental skills and watch your cooking orbit to new heights"
            tips={essential}
          />

          <TipsCategory
            title="Flavor Enhancement"
            icon="🌶️"
            description="Unlock stellar flavors with these cosmic cooking secrets"
            tips={flavor}
          />

          <TipsCategory
            title="Pro Chef Secrets"
            icon="👨‍🍳"
            description="Insider techniques from the culinary constellation"
            tips={pro}
          />

          <ChefSecretCard secret={secret} />

          <QuickTipsSection quickTips={quick} />
        </main>
      </>
    );
  }
}

export default StellarSections;
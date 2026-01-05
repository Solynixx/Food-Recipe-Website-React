import React from "react";
import './TipCard.css';

/**
 * TipCard displays a single tip with icon, title, description and metadata.
 *
 * Props:
 * - tip: {
 *     number: string,
 *     icon: ReactNode,
 *     title: string,
 *     description: string,
 *     badgeClass: string,
 *     badgeLabel: string,
 *     difficulty: string
 *   }
 *
 * @extends React.Component
 */
export default class TipCard extends React.Component {
  /**
   * Render the tip card including SVG icon, title, description and meta badges.
   * @returns {JSX.Element} Tip card markup.
   */
  render() {
    const { tip } = this.props;

    return (
      <article className="tip-card h-100">
        <div className="tip-number">{tip.number}</div>
        <div className="tip-icon-wrapper">
          <svg className="tip-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {tip.icon}
          </svg>
        </div>
        <h3 className="tip-title">{tip.title}</h3>
        <p className="tip-description">{tip.description}</p>
        <div className="tip-meta">
          <span className={`badge-custom ${tip.badgeClass}`}>{tip.badgeLabel}</span>
          <span className="difficulty">{tip.difficulty}</span>
        </div>
      </article>
    );
  }
}
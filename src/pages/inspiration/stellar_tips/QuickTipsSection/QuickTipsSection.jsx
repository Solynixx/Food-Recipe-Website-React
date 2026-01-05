import React from "react";
import './QuickTipsSection.css'

/**
 * QuickTipsSection renders a grid of short, actionable cooking tips.
 *
 * Props:
 * - quickTips: Array<{ icon: string, title: string, text: string }>
 *
 * @extends React.Component
 */
export default class QuickTipsSection extends React.Component {
  /**
   * Render a single quick tip card column.
   * @param {{icon: string, title: string, text: string}} tip - Tip data.
   * @param {number} index - Index of the tip.
   * @returns {JSX.Element} JSX for a quick tip.
   */
  renderQuickTip(tip, index) {
    return (
      <div key={index} className="col-md-6 col-lg-3">
        <div className="quick-tip">
          <div className="quick-icon">{tip.icon}</div>
          <h4>{tip.title}</h4>
          <p>{tip.text}</p>
        </div>
      </div>
    );
  }

  /**
   * Render the QuickTipsSection component.
   * @returns {JSX.Element} Section containing quick tips.
   */
  render() {
    const { quickTips } = this.props;

    return (
      <section className="quick-tips-section mb-5">
        <h2 className="section-title text-center mb-4">⚡ Quick Orbital Tips</h2>
        <div className="row g-3">{quickTips.map((tip, index) => this.renderQuickTip(tip, index))}</div>
      </section>
    );
  }
}
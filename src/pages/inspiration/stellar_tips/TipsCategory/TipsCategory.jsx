import React from "react";
import TipCard from "../TipCard/TipCard";
import './TipsCategory.css';

/**
 * TipsCategory renders a category section containing multiple TipCard items.
 *
 * Props:
 * - title: string - Category title
 * - icon: string | ReactNode - Category icon
 * - description: string - Short description of the category
 * - tips: Array<Object> - Array of tip objects accepted by TipCard
 *
 * @extends React.Component
 */
export default class TipsCategory extends React.Component {
  /**
   * Render the category with header and a grid of TipCard components.
   * @returns {JSX.Element} Category section markup.
   */
  render() {
    const { title, icon, description, tips } = this.props;

    return (
      <section className="tips-category mb-5">
        <div className="category-header">
          <h2 className="category-title">
            <span className="category-icon">{icon}</span>
            {title}
          </h2>
          <p className="category-desc">{description}</p>
        </div>

        <div className="row g-4">
          {tips.map((tip) => (
            <div key={tip.number} className="col-12 col-md-6 col-lg-4">
              <TipCard tip={tip} />
            </div>
          ))}
        </div>
      </section>
    );
  }
}
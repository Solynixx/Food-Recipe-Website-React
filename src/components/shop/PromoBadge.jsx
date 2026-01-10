import React from 'react';
import PropTypes from 'prop-types';
import './styles/PromoBadge.css';

/**
 * PromoBadge component.
 * Renders a visual badge indicating a discount percentage.
 *
 * Props:
 * - percent: number - The discount percentage to display.
 */
class PromoBadge extends React.Component {
  render() {
    const { percent } = this.props;
    
    if (!percent) return null;

    return (
      <div className="promo-badge">
        <span className="promo-text">PROMO</span>
        <span className="promo-value">{percent}% OFF</span>
      </div>
    );
  }
}

PromoBadge.propTypes = {
  percent: PropTypes.number,
};

export default PromoBadge;
import React from "react";

export default class SeasonalNav extends React.Component {
  renderDropdown(group) {
    return (
      <div key={group.id} className="stellar-dropdown">
        <input type="checkbox" id={`toggle-${group.id}`} className="stellar-submenu-toggle" hidden />
        <label htmlFor={`toggle-${group.id}`} className={`stellar-link toggle-label${group.active ? " active" : ""}`}>
          {group.label}
        </label>
        <a href="/" onClick={(e) => e.preventDefault()} className={`stellar-link${group.active ? " active" : ""} desktop-trigger`}>
          {group.label}
        </a>
        <div className="stellar-dropdown-menu">
          {group.items.map((item, idx) => (
            <a key={idx} href={item.href}>
              <img src={item.img} alt={item.alt} loading="lazy" />
              <span>{item.text}</span>
            </a>
          ))}
        </div>
      </div>
    );
  }

  render() {
    const { navGroups = [] } = this.props;

    return (
      <nav className="stellar-nav">
        <input type="checkbox" id="stellar-menu-toggle" className="stellar-menu-toggle" hidden />
        <div className="stellar-nav-container">
          <div className="stellar-nav-left-wrapper">
            <label htmlFor="stellar-menu-toggle" className="stellar-menu-btn">
              <span></span>
              <span></span>
              <span></span>
            </label>

            <div className="stellar-nav-left" id="stellar-nav-left">
              {navGroups.map((g) => this.renderDropdown(g))}
            </div>
          </div>

          <a href="/" className="stellar-brand">
            <span className="brand-text">CELESTIAL</span>
            <span className="brand-icon">💫</span>
            <div className="brand-glow"></div>
          </a>

          <div className="stellar-nav-right">
            <a href="/" id="home" className="stellar-icon-link" title="Home">
              <img src="/assets/icons/house.png" alt="home" />
            </a>
            <a href="/forms/index.html" className="stellar-icon-link" title="Account">
              <img src="/assets/icons/user.png" alt="user" />
            </a>
            <a href="/payment/payment.html" className="stellar-icon-link" title="Cart">
              <img src="/assets/icons/shopping_cart.png" alt="shopping bag" />
            </a>
          </div>
        </div>
      </nav>
    );
  }
}
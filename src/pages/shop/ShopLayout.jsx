import React from 'react';
import './Shop.css';

/**
 * ShopLayout
 *
 * Reusable layout component for shop listing pages. Renders header with title and search,
 * category filter buttons, and children content area where product grid is shown.
 *
 * Props:
 * - title: string - page title to show
 * - filters: array - filter objects { value, label }
 * - currentFilter: string - active filter value
 * - onFilterChange: function - callback when filter button is clicked
 * - searchPlaceholder: string - placeholder for search input
 * - searchValue: string - current search string
 * - onSearchChange: function - callback when search input changes
 * - children: React nodes - main content to render inside layout
 */
class ShopLayout extends React.Component {
  /**
   * Render filter buttons from props.filters
   */
  renderFilters() {
    const { filters = [], currentFilter, onFilterChange } = this.props;
    return (
      <div className="filters" aria-label="Category filters">
        {filters.map((f) => (
          <button
            key={f.value}
            type="button"
            className={`btn-label ${currentFilter === f.value ? 'active' : ''}`}
            aria-pressed={currentFilter === f.value}
            onClick={() => onFilterChange(f.value)}
          >
            {f.label}
          </button>
        ))}
      </div>
    );
  }

  /**
   * Render the search form
   */
  renderSearch() {
    const { searchPlaceholder, searchValue, onSearchChange } = this.props;
    return (
      <form className="site-search" action="#">
        <div className="search">
          <button type="submit" title="Search">
            <img className="img-fluid" src="/assets/icons/search.png" alt="search" width="24" height="24" />
          </button>
          <input
            type="text"
            className="form-control"
            placeholder={searchPlaceholder}
            value={searchValue}
            onChange={(e) => onSearchChange(e.target.value)}
          />
        </div>
      </form>
    );
  }

  render() {
    const { title, children } = this.props;
    return (
      <main className="container my-4 shop-main">
        <header className="d-flex flex-column flex-md-row align-items-md-center justify-content-between gap-3 mb-3">
          <div>
            <h1 className="h3 mb-1">{title}</h1>
          </div>
          <div className="d-flex gap-2 align-items-center">{this.renderSearch()}</div>
        </header>
        {this.renderFilters()}
        {children}
      </main>
    );
  }
}

export default ShopLayout;
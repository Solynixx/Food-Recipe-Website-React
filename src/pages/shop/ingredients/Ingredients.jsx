import React from 'react';
import ShopCategoryPage from '../ShopCategoryPage';
import { products, filters } from './IngredientsData.js';

/**
 * Ingredients
 *
 * Page component that renders the ShopCategoryPage configured for
 * cooking ingredients. It passes the title, search placeholder, products
 * and filters from IngredientsData to the ShopCategoryPage.
 *
 * This component does not accept any props and acts as a route/page wrapper.
 */
class Ingredients extends React.Component {
  render() {
    return (
      <ShopCategoryPage
        title="Cooking Ingredients"
        searchPlaceholder="Search ingredients..."
        products={products}
        filters={filters}
      />
    );
  }
}

export default Ingredients;
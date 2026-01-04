import React from 'react';
import ShopCategoryPage from '../ShopCategoryPage';
import { products, filters } from './IngredientsData.js';

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
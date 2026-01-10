import React from 'react';
import ShopCategoryPage from '../ShopCategoryPage';
import { products, filters } from './RecipeThemedMerchData';

class RecipeThemedMerch extends React.Component {
  render() {
    return (
      <ShopCategoryPage
        title="Recipe Themed Merch"
        searchPlaceholder="Search merch..."
        products={products}
        filters={filters}
        promoCount={10}
      />
    );
  }
}

export default RecipeThemedMerch;
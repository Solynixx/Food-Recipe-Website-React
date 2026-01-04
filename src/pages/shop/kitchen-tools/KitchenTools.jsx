import React from 'react';
import ShopCategoryPage from '../ShopCategoryPage'; 
import { products, filters } from './KitchenToolsData.js';

class KitchenTools extends React.Component {
  render() {
    return (
      <ShopCategoryPage
        title="Kitchen Tools"
        searchPlaceholder="Search tools..."
        products={products}
        filters={filters}
      />
    );
  }
}

export default KitchenTools;
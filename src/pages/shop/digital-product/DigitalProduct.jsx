import React from 'react';
import ShopCategoryPage from '../ShopCategoryPage'; 
import { products, filters } from './DigitalProductData';

class DigitalProduct extends React.Component {
  render() {
    return (
      <ShopCategoryPage
        title="Digital Products"
        searchPlaceholder="Search digital products..."
        products={products}
        filters={filters}
      />
    );
  }
}

export default DigitalProduct;
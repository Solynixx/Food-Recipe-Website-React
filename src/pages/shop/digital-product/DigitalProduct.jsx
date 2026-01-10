import React from 'react';
import ShopCategoryPage from '../ShopCategoryPage'; 
import { products, filters } from './DigitalProductData';

/**
 * DigitalProduct
 *
 * Page wrapper component that renders the ShopCategoryPage configured for
 * digital products. It passes the title, search placeholder, products and
 * filters from DigitalProductData to the ShopCategoryPage.
 *
 * This component does not accept any props and simply composes the shop page.
 */
class DigitalProduct extends React.Component {
  render() {
    return (
      <ShopCategoryPage
        title="Digital Products"
        searchPlaceholder="Search digital products..."
        products={products}
        filters={filters}
        promoCount={10}
      />
    );
  }
}

export default DigitalProduct;
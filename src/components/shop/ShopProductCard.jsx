import React from 'react';
import PropTypes from 'prop-types';
import './styles/ShopProductCard.css';
import PromoBadge from './PromoBadge';

/**
 * Card component representing a single shop product.
 * Displays product image, title, meta, price (including promo price), 
 * stock status and action buttons.
 * * @extends React.Component
 */
class ShopProductCard extends React.Component {
  /**
   * Render the product card.
   * @returns {JSX.Element} The rendered product card element.
   */
  render() {
    const { product, onDetailsClick, onAddClick } = this.props;

    /**
     * Flag indicating whether the product is out of stock.
     * @type {boolean}
     */
    const isOutOfStock = typeof product.stock === 'number' && product.stock <= 0;
    
    /**
     * Determine display price (promo vs regular).
     */
    const displayPrice = product.isPromo ? product.promoPrice : product.price;

    return (
      <div className="col-12 col-sm-6 col-md-4 product">
        <article className="card product-card h-100 border-0 shadow-sm">
          
          <div className="position-relative overflow-hidden">
            {product.isPromo && <PromoBadge percent={product.discountPercent} />}
            <img 
              src={product.img} 
              className="card-img-top" 
              alt={product.alt || product.title} 
              loading="lazy" 
            />
          </div>

          <div className="card-body">
            <h5 className="card-title mb-1">{product.title}</h5>
            <div className="meta">{product.meta}</div>
            
            <div className="d-flex justify-content-between align-items-start mt-2" id="card-desc">
              <div>
                <div>
                    {product.isPromo && (
                        <span className="original-price">{product.originalPrice}</span>
                    )}
                    <strong className={`${product.isPromo ? 'text-danger' : 'text-success'} text-nowrap`}>
                        {displayPrice}
                    </strong>
                </div>

                <div className="small text-muted">
                  {isOutOfStock ? (
                    <span className="text-danger fw-bold">Out of Stock</span>
                  ) : (
                    `Stock: ${product.stock}`
                  )}
                </div>
              </div>
              <div className="d-flex gap-2 align-items-start">
                <button
                  className="small btn btn-sm btn-outline-secondary"
                  type="button"
                  onClick={() => onDetailsClick(product)}
                >
                  Details
                </button>
                <button
                  className="btn btn-sm btn-primary btn-add"
                  type="button"
                  disabled={isOutOfStock}
                  onClick={() => onAddClick(product)}
                >
                  {isOutOfStock ? 'Sold Out' : 'Add'}
                </button>
              </div>
            </div>
          </div>
        </article>
      </div>
    );
  }
}

/**
 * Prop types for ShopProductCard component.
 * - product: object containing product data (img, title, price, stock, meta, alt, isPromo, promoPrice)
 * - onDetailsClick: function called with product when Details is clicked
 * - onAddClick: function called with product when Add is clicked
 * @type {Object}
 */
ShopProductCard.propTypes = {
  product: PropTypes.object.isRequired,
  onDetailsClick: PropTypes.func.isRequired,
  onAddClick: PropTypes.func.isRequired,
};

export default ShopProductCard;
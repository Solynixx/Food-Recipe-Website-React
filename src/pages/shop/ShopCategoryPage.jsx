import React from 'react';
import PropTypes from 'prop-types';
import ShopLayout from './ShopLayout'; 
import Shop from './Shop'; 
import ShopProductCard from '../../components/shop/ShopProductCard';
import ShopDetailsModal from '../../components/shop/ShopDetailsModal';
import ShopAddModal from '../../components/shop/ShopAddModal';

/**
 * ShopCategoryPage
 *
 * Page component that displays a list of products for a shop category.
 * Manages filtering, searching, local product state, selection for details modal,
 * and adding items to cart via the add modal.
 *
 * Props:
 * - title: string - page title to display in the layout
 * - searchPlaceholder: string - placeholder text for the search input
 * - products: array - initial list of product objects
 * - filters: array - list of filter objects { value, label }
 */
class ShopCategoryPage extends React.Component {
  constructor(props) {
    super(props);

    const savedCart = JSON.parse(localStorage.getItem('cart') || '[]');

    const syncedProducts = props.products.map(product => {
      const cartItem = savedCart.find(item => item.id === product.id);
      
      if (cartItem && typeof product.stock === 'number') {
        const remainingStock = Math.max(0, product.stock - cartItem.quantity);
        return { ...product, stock: remainingStock };
      }
      
      return { ...product };
    });
    this.state = {
      localProducts: syncedProducts,
      filter: 'all',
      search: '',
      selected: null,
      addItem: null,
      quantity: 1,
    };
  }

  /**
   * Update active filter
   * @param {string} filter - filter value to apply
   */
  handleFilterChange = (filter) => this.setState({ filter });

  /**
   * Update search term
   * @param {string} search - new search string
   */
  handleSearchChange = (search) => this.setState({ search });

  /**
   * Open add-to-cart modal for given product
   * @param {object} product - product to add
   */
  handleAddClick = (product) => this.setState({ addItem: product, quantity: 1 });

  /**
   * Close the add modal and reset quantity
   */
  closeAddModal = () => this.setState({ addItem: null, quantity: 1 });

  /**
   * Increase quantity for add modal (bounded by product stock if present)
   */
  incQty = () => {
    this.setState((state) => {
      const { addItem, quantity } = state;
      if (!addItem) return null;
      const maxStock = typeof addItem.stock === 'number' ? addItem.stock : 99;
      return { quantity: Math.min(maxStock, quantity + 1) };
    });
  };

  /**
   * Decrease quantity for add modal (minimum 1)
   */
  decQty = () => this.setState((s) => ({ quantity: Math.max(1, s.quantity - 1) }));
  
  /**
   * Handle manual quantity input change in add modal.
   * Ensures quantity stays within 1..maxStock
   * @param {Event} e - input change event
   */
  handleQtyChange = (e) => {
    const { addItem } = this.state;
    if (!addItem) return;
    const maxStock = typeof addItem.stock === 'number' ? addItem.stock : 99;
    const val = parseInt(e.target.value, 10);
    const validQuantity = Math.max(1, Math.min(maxStock, val || 1));
    this.setState({ quantity: validQuantity });
  };

  /**
   * Save the addItem with selected quantity to localStorage 'cart' and update local product stock
   * Also dispatches a 'cart-updated' event for other components to react.
   */
  saveToCart = () => {
    const { addItem, quantity } = this.state;
    if (!addItem) return;

    const stored = JSON.parse(localStorage.getItem('cart') || '[]');
    const existing = stored.find((i) => i.id === addItem.id);

    if (existing) {
      existing.quantity += quantity;
    } else {
      stored.push({
        id: addItem.id,
        title: addItem.title,
        price: addItem.price,
        quantity,
      });
    }
    localStorage.setItem('cart', JSON.stringify(stored));
    window.dispatchEvent(new CustomEvent('cart-updated', { detail: stored }));
    this.closeAddModal();

    this.setState((prevState) => ({
      localProducts: prevState.localProducts.map((p) => {
        if (p.id === addItem.id) {
          if (typeof p.stock === 'number') {
            const newStock = Math.max(0, p.stock - quantity); 
            return { ...p, stock: newStock };
          }
        }
        return p;
      }),
      addItem: null, 
      quantity: 1
    }));
  };

  /**
   * Filter localProducts by current filter and search string
   * @returns {Array} filtered product list
   */
  filteredProducts() {
    const { localProducts, filter, search } = this.state; 
    const term = search.trim().toLowerCase();
    
    return localProducts.filter((p) => {
      const byFilter = filter === 'all' || p.category === filter;
      const bySearch = !term || p.title.toLowerCase().includes(term) || p.meta.toLowerCase().includes(term);
      return byFilter && bySearch;
    });
  }

  render() {
    const { title, searchPlaceholder, filters } = this.props; 
    const { search, filter, selected, addItem, quantity } = this.state;
    const items = this.filteredProducts();

    return (
      <Shop>
        <ShopLayout
          title={title}
          searchPlaceholder={searchPlaceholder}
          searchValue={search}
          onSearchChange={this.handleSearchChange}
          filters={filters}
          currentFilter={filter}
          onFilterChange={this.handleFilterChange}
        >
          <section id="products" className="row g-3" aria-live="polite">
            {items.map((p) => (
              <ShopProductCard 
                key={p.id} 
                product={p} 
                onDetailsClick={(product) => this.setState({ selected: product })}
                onAddClick={this.handleAddClick}
              />
            ))}
          </section>
        </ShopLayout>
        
        <ShopDetailsModal 
          product={selected} 
          onClose={() => this.setState({ selected: null })} 
        />
        
        <ShopAddModal 
          product={addItem} 
          quantity={quantity}
          onClose={this.closeAddModal}
          onSave={this.saveToCart}
          onInc={this.incQty}
          onDec={this.decQty}
          onQtyChange={this.handleQtyChange}
        />
      </Shop>
    );
  }
}

ShopCategoryPage.propTypes = {
  title: PropTypes.string.isRequired,
  searchPlaceholder: PropTypes.string.isRequired,
  products: PropTypes.array.isRequired,
  filters: PropTypes.array.isRequired,
};

export default ShopCategoryPage;
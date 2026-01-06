import React from 'react';
import { FaSearch } from 'react-icons/fa';
import { IoTrendingUp } from 'react-icons/io5';
import './Search.css';
import { allMainCourseRecipes } from '../../recipes/main-page/main-course/MainCourseData';
import { allAppetizerRecipes } from '../../recipes/main-page/appetizer/AppetizerData';
import { allDessertRecipes } from '../../recipes/main-page/dessert/DessertData';
import { allSaladRecipes } from '../../recipes/main-page/salad/SaladData';
import { allSpecialDietsRecipes } from '../../recipes/main-page/special-diets/SpecialDietsData';

export default class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchTerm: '',
            isFocused: false,
            searchResults: []
        };

        this.searchTimeout = null;

        this.allRecipes = [
            ...allMainCourseRecipes,
            ...allAppetizerRecipes,
            ...allDessertRecipes,
            ...allSaladRecipes,
            ...allSpecialDietsRecipes
        ];
    }

    componentWillUnmount() {
        if (this.searchTimeout) clearTimeout(this.searchTimeout);
    }

    handleSearchChange = (e) => {
        const target = e.target.value;
        this.setState({ searchTerm: target });

        if (this.searchTimeout) clearTimeout(this.searchTimeout);

        this.searchTimeout = setTimeout(() => {
            if (target.trim().length > 0) {
                this.performSearch(target);
            } else {
                this.setState({ searchResults: [] });
            }
        }, 300);
    };

    performSearch = (target) => {
        const results = this.allRecipes.filter((recipe) => {
            const t = target.toLowerCase();
            
            if (recipe.title.toLowerCase().includes(t)) return true;
            if (recipe.keywords && recipe.keywords.some((k) => k.toLowerCase().includes(t))) return true;
            if (recipe.category && recipe.category.toLowerCase().includes(t)) return true;
            
            if (recipe.subcategory) {
                if (Array.isArray(recipe.subcategory)) {
                    if (recipe.subcategory.some((sub) => sub.toLowerCase().includes(t))) return true;
                } else if (recipe.subcategory.toLowerCase().includes(t)) return true;
            }

            if (recipe.tags && recipe.tags.some((tag) => tag.toLowerCase().includes(t))) return true;

            return false;
        });

        this.setState({ searchResults: results.slice(0, 8) });
    }

    handleSearchFocus = () => { this.setState({ isFocused: true }); }

    handleSearchBlur = () => {
        setTimeout(() => {
            this.setState({ isFocused: false });
        }, 200);
    }

    handleTrendingClick = (searchTerm) => {
        this.setState({ searchTerm: searchTerm, isFocused: true }, () => {
            this.performSearch(searchTerm);
        });
    };

    handleCategoryClick = (categoryPath) => {
        window.location.href = `/recipes/main-page/${categoryPath}`;
    };

    render() {
        const { searchTerm, isFocused, searchResults } = this.state;
        const { isHero } = this.props;

        const showDropdown = isFocused;
        const trendingSearches = ['Sausage & Kale', 'Miso Soup', 'Tiramisu', 'Sheet-Pan Chicken', 'Pistachio'];
        
        const categories = [
            { name: 'Appetizers', path: 'appetizer', img: '/assets/appetizers/appetizers_pfp.jpg'},
            { name: 'Main Course', path: 'main-course', img:  '/assets/main_course/main_course_pfp.jpg'},
            { name: 'Salad', path: 'salad', img: '/assets/salad/salad_pfp.jpg'},
            { name: 'Desserts', path: 'dessert', img: '/assets/desserts/desserts_pfp.jpg'},
            { name: 'Special Diets', path: 'special-diets', img: '/assets/special_diets/vegan/Vegan BG.jpg'}
        ];

        const showSearchResults = searchTerm.trim().length > 0 && searchResults.length > 0;
        const wrapperClass = isHero ? "search-wrapper hero-mode" : "search-wrapper";

        return (
        <div className={wrapperClass}>
            <div className="search-container">
            <form onSubmit={(e) => e.preventDefault()}>
                <div className="search-input-wrapper">
                <FaSearch className="search-icon" />
                <input
                    type="text"
                    className="search-input"
                    placeholder={isHero ? "Start searching..." : "Search Recipes"}
                    value={searchTerm}
                    onChange={this.handleSearchChange}
                    onFocus={this.handleSearchFocus}
                    onBlur={this.handleSearchBlur}
                />
                </div>
            </form>
            {showDropdown && (
                <div className="search-dropdown">
                {showSearchResults ?  (
                    <div className="search-results-section">
                    <h3 className="search-heading">Results</h3>
                        {searchResults.map((recipe, index) => (
                            <a key={`${recipe.title}-${index}`} href={recipe.href} className="search-result-item">
                            <img src={recipe.img} alt={recipe.title} className="result-img"/>
                            <div className="result-info">
                                <span className="result-title">{recipe.title}</span>
                                <div className="result-meta">
                                <span className="result-category">{recipe.category}</span>
                                <span className="result-time">{recipe.time}</span>
                                </div>
                            </div>
                            </a>
                        ))}
                    </div>
                ) : (
                    <>
                    <div className="trending-section">
                        <h3 className="search-heading">Trending Now</h3>
                        {trendingSearches.map((item, index) => (
                        <div 
                            key={index} 
                            className="trending-item"
                            onMouseDown={() => this.handleTrendingClick(item)}>
                            <IoTrendingUp className="trending-icon" />
                            <span>{item}</span>
                        </div>
                        ))}
                    </div>

                    <div className="category-section">
                        <h3 className="search-heading">Categories</h3>
                        {categories.map((category, index) => (
                        <div 
                            key={index} 
                            className="category-item"
                            onMouseDown={() => this.handleCategoryClick(category.path)}>
                            <img src={category.img} alt={category.name} className="category-img"/>
                            <span>{category.name}</span>
                        </div>
                        ))}
                    </div>
                    </>
                )}
                </div>
            )}
            </div>
        </div>
        );
    }
}
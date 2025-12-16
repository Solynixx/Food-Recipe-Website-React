import React, {Fragment} from "react";
import "../../home/Home.css";
import "../styles/main.css";
import RecipeNavBar from "../RecipesNavBar"; 
import Footer from "../../home/Footer";
import RecipeCard from "./RecipeCard";
import TopPicks from "./TopPicks";
import { FaChevronLeft, FaChevronRight, FaHeart, FaRegHeart } from "react-icons/fa";
import { chicken, beef, lamb, pork, seafood, allRecipes } from './MainCourseData';

export default class MainCourse extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      savedRecipes: [],
      currentPage: 1,
      recipesPerPage: 8,
      tappedHeart: null
    };
    this.toggleSave = this.toggleSave.bind(this);
    this.paginate = this.paginate.bind(this);
    this.handleHeartTap = this.handleHeartTap.bind(this);
  }

  handleHeartTap(recipeTitle) {
    this.toggleSave(recipeTitle);
    this.setState({tappedHeart: recipeTitle});
    setTimeout(() => {
      this.setState({tappedHeart: null});
    }, 300);
  }

  toggleSave(recipeTitle) {
    this.setState((state) => {
      const { savedRecipes } = state;
      if (savedRecipes.includes(recipeTitle)) {
        return {
          savedRecipes: savedRecipes.filter(title => title !== recipeTitle)
        };
      } else {
        return {
          savedRecipes: [...savedRecipes, recipeTitle]
        };
      }
    });
  }

  isRecipesSaved(recipeTitle) {
    return this.state.savedRecipes.includes(recipeTitle);
  }

  paginate(pageNumber) {
    this.setState({currentPage: pageNumber});
    const allRecipesTitle = document.querySelector('.all-recipes');
    if (allRecipesTitle) {
      allRecipesTitle.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  renderCategoryRecipes() {
    return (
      <Fragment>
        <RecipeCard recipes={chicken} title="Chicken" />
        <RecipeCard recipes={beef} title="Beef" />
        <RecipeCard recipes={lamb} title="Lamb" />
        <RecipeCard recipes={pork} title="Pork" />
        <RecipeCard recipes={seafood} title="Seafood" />
      </Fragment>
    )
  }

  renderAllRecipes() {
    const { currentPage, recipesPerPage } = this.state;
    const indexOfLastRecipe = currentPage * recipesPerPage;
    const indexOfFirstRecipe = indexOfLastRecipe - recipesPerPage;
    const currentRecipes = allRecipes.slice(indexOfFirstRecipe, indexOfLastRecipe);
    const totalPages = Math.ceil(allRecipes.length / recipesPerPage);
    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(i);
    }

    return (
      <Fragment>
        <section className="recipe-section">
          {currentRecipes.map((r) => {
            const isSaved = this.isRecipesSaved(r.title);
            return (
            <div className="card-container" key={r.title}>
              <div className="card">
                <div className="card-image">
                  <img src={r.img} alt={r.title} />
                  <span 
                    className="fa-heart"
                    data-tooltip={isSaved ? "Recipe Saved" : "Save Recipe"}
                    onClick={() => this.handleHeartTap(r.title)}
                    role="button">
                    {isSaved ? <FaHeart /> : <FaRegHeart />}
                  </span>
                </div>
                <div className="card-content">
                  <div className="text">
                    <a href={r.href}>{r.title}</a>
                    <p>{r.time}</p>
                  </div>
                </div>
              </div>
            </div>
          )
          })}
        </section>
        <div className="pagination-container">
          {currentPage > 1 && (
            <button className="pagination-btn pagination-prev" onClick={() => this.paginate(currentPage - 1)}>
              <FaChevronLeft />
            </button>
          )}

          {pageNumbers.map((number) => (
            <button key={number} className={`pagination-btn ${currentPage === number ? 'active' : ''}`} onClick={() => this.paginate(number)}>
              {number}
            </button>
          ))}

          {currentPage < totalPages && (
            <button className="pagination-btn pagination-next" onClick={() => this.paginate(currentPage + 1)}>
              <FaChevronRight />
            </button>
          )}
        </div>
      </Fragment>
    );
  }

  render() {
    return (
      <div className="page-wrapper">
        <RecipeNavBar />

        <main>
          <h1 className="head-title">Main Course</h1>

          <div className="main text-container">
            <div className="content">
              <p className="check-out">
                Explore our website's full main course recipe collection. Log in or create your account to easily save, revisit and review all your favourite main-course dishes!
              </p>
            </div>
          </div>

          <TopPicks />

          {this.renderCategoryRecipes()}

          <div className="all-recipes">
            <h3 className="all-recipes">
              A<span className="blink">l</span>l R<span className="long-blink">e</span>ci<span className="blink">p</span>es
            </h3>
          </div>

          {this.renderAllRecipes()}

          <section className="more-recipes-section">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-lg-6">
                  <div className="cooking-badge">COOKING FOR EVERYONE</div>
                  <h1 className="more-section-title">MAIN COURSE</h1>
                  <p className="description-text">
                    For more best main course recipe ideas, Celestial's got you covered!
                  </p>
                  <button type="button" className="cta-button">MORE MAIN COURSE RECIPE</button>
                </div>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    );
  }
}
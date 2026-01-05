import React, { Fragment } from "react";
import MainPageLayout from "../MainPageLayout"; 
import RecipeCard from "../RecipeCard";
import { lettuceBased, mixedVegetable, specialty, allSaladRecipes, description, topPicks } from './SaladData';

/**
 * Salad page component that composes the MainPageLayout for salad recipes.
 * Renders RecipeCard carousels for lettuce-based, mixed vegetable, and specialty subcategories.
 * @extends React.Component
 */
export default class Salad extends React.Component {
  render() {
    return (
      <MainPageLayout 
        title="Salad"
        description={description}
        topPicks={topPicks}
        allRecipes={allSaladRecipes}
      >
        <Fragment>
          <RecipeCard recipes={lettuceBased} title="Lettuce Based" />
          <RecipeCard recipes={mixedVegetable} title="Mixed Vegetable" />
          <RecipeCard recipes={specialty} title="Specialty" />
        </Fragment>
      </MainPageLayout>
    );
  }
}
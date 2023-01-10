import React from "react";
import LayoutSection from "../LayoutSection";
import RecipeCard from "../RecipeCard";

function index({ trio }) {
  return (
    <LayoutSection>
      <div className="flex">
        {trio.map((recipe, index) => (
          <RecipeCard key={index} width="card-trio" recipe={recipe} />
        ))}
      </div>
    </LayoutSection>
  );
}

export default index;

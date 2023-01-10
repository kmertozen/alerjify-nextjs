import React from "react";
import RecipeCard from "../RecipeCard";
import SectionTitle from "../SectionTitle";
function index({ trends }) {
  return (
    <div className="trends">
      <SectionTitle title={"Trendler"} />
      <div className="recipes">
        {trends.map((recipe, index) => {
          return <RecipeCard key={index} width="card-trend" recipe={recipe} />;
        })}
      </div>
    </div>
  );
}

export default index;

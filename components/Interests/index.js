import React from "react";
import RecipeCardSide from "../RecipeCardSide";
import SectionTitle from "../SectionTitle";

function index({ interests }) {
  return (
    <div className="interests">
      <SectionTitle title={"İlginizi Çekebilir"} />
      {interests.map((recipe, index) => {
        if (index < 5) {
          return <RecipeCardSide key={index} recipe={recipe} />;
        }
      })}
    </div>
  );
}

export default index;

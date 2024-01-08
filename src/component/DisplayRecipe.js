import { useParams } from "react-router-dom";

function DisplayRecipe({ searchResult }) {
  const { idMeal } = useParams();
  const recipe = searchResult.find((item) => item.idMeal === idMeal);
  console.log(recipe);
  return (
    <>
      {recipe.strMeal}
      <br />
      {recipe.strIngredient1}
      <br />
      Instructions
      <br />
      {recipe.strInstructions}
    </>
  );
}

export default DisplayRecipe;

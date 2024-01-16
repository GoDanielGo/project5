import { useNavigate } from "react-router-dom";
import { Modal } from "./Modal";
import { useEffect, useState } from "react";
import styles from "./DisplayMyRecipe.module.css";
import { BeatLoader } from "react-spinners";

function DisplayRecipe({
  openModal,
  handlerCloseModal,
  recipeLoading,
  recipeById,
  handlerAddMyFavourite,
  addMyFavouriteLoading,
}) {
  const [ingredients, setMyIngredients] = useState([]);

  useEffect(() => {
    if (!recipeLoading && recipeById) {
      let newIngredients = [];
      for (let i = 1; i <= 10; i++) {
        const ingredientKey = "strIngredient" + i;
        const mesuerementKey = "strMeasure" + i;
        if (
          recipeById[ingredientKey] !== null &&
          recipeById[ingredientKey] !== ""
        ) {
          newIngredients.push(
            recipeById[mesuerementKey] + ", " + recipeById[ingredientKey]
          );
        }
      }
      setMyIngredients(newIngredients);
    }
  }, [recipeById, recipeLoading]);

  const navigate = useNavigate();
  return (
    <>
      <div
        style={{
          textAlign: "center",
          display: "block",
          padding: 30,
          margin: "auto",
        }}
      >
        {!recipeLoading && recipeById && (
          <Modal openModal={openModal}>
            <>
              <img
                src={
                  !recipeById.strMealThumb
                    ? `${process.env.PUBLIC_URL}/noimage.png`
                    : recipeById.strMealThumb
                }
                style={{ width: "30%" }}
                alt={recipeById.idMeal}
              />
              <h2 style={{ color: "#5f3dc4" }}>{recipeById.strMeal}</h2>
              <h3>Ingredients</h3>
              <div className={styles.ingredientsContainer}>
                {ingredients.map((ingredient, index) => (
                  <div className={styles.ingredientItem} key={index}>
                    {ingredient}
                  </div>
                ))}
              </div>
              <h3>Instructions</h3>
              <div className={styles.instructions}>
                {recipeById.strInstructions}
              </div>
            </>
            {addMyFavouriteLoading && (
              <>
                <br />
                <div>
                  <BeatLoader color="#5f3dc4" />
                </div>
                <br />
              </>
            )}
            {!addMyFavouriteLoading && (
              <>
                <button
                  style={{ margin: "15px", padding: "15px" }}
                  onClick={async () => {
                    await handlerAddMyFavourite();
                    handlerCloseModal();
                    navigate("/search");
                  }}
                >
                  Add to Favorite
                </button>
                <button
                  style={{ padding: "15px" }}
                  onClick={() => {
                    handlerCloseModal();
                    navigate("/search");
                  }}
                >
                  Close
                </button>{" "}
              </>
            )}
          </Modal>
        )}
      </div>
    </>
  );
}

export default DisplayRecipe;

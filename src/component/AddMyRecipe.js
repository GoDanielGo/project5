import { useState } from "react";
import Modal from "./Modal";

const initialRecipeState = {
  strMeal: "",
  strMealThumb: "",
  strIngredient1: "",
  strIngredient2: "",
  strIngredient3: "",
  strIngredient4: "",
  strIngredient5: "",
  strIngredient6: "",
  strIngredient7: "",
  strIngredient8: "",
  strIngredient9: "",
  strIngredient10: "",
  strIngredient11: "",
  strIngredient12: "",
  strIngredient13: "",
  strIngredient14: "",
  strIngredient15: "",
  strIngredient16: "",
  strIngredient17: "",
  strIngredient18: "",
  strIngredient19: "",
  strIngredient20: "",
  strInstructions: "",
  idMeal: "",
};

function AddMyRecipe({
  handlerAddMyRecipe,
  handlerFormStatus,
  openModal,
  handlerCloseModal,
}) {
  const [myRecipe, setMyRecipe] = useState(initialRecipeState);
  const handlerRecipeChange = (event) => {
    console.log(event.target.value);
    console.log(myRecipe);
    setMyRecipe((prevState) => {
      return { ...prevState, [event.target.name]: event.target.value };
    });
  };
  const handlerSubmit = (event) => {
    event.preventDefault();
    handlerAddMyRecipe(myRecipe);
    setMyRecipe(initialRecipeState);
    handlerFormStatus(false);
  };
  return (
    <>
      <Modal openModal={openModal}>
        <div>
          <form onSubmit={handlerSubmit}>
            <input
              type="text"
              name="strMeal"
              placeholder="Recipe Name"
              onChange={handlerRecipeChange}
              value={myRecipe.strMeal}
            />
            <input
              type="text"
              name="strMealThumb"
              placeholder="Meal Picture"
              onChange={handlerRecipeChange}
              value={myRecipe.strMealThumb}
            />
            <br />
            <input
              type="text"
              name="strIngredient1"
              placeholder="Ingredient 1"
              onChange={handlerRecipeChange}
              value={myRecipe.strIngredient1}
            />
            <br />
            <button>Add</button>
            <button
              onClick={() => {
                handlerCloseModal();
                handlerFormStatus(false);
              }}
            >
              Close
            </button>
          </form>
        </div>
      </Modal>
    </>
  );
}

export default AddMyRecipe;

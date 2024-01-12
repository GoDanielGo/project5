import { useState } from "react";
import Modal from "./Modal";
import { BeatLoader } from "react-spinners";

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
  strInstructions: "",
  idMeal: "",
};

function AddMyRecipe({
  handlerAddMyRecipe,
  handlerFormStatus,
  openModal,
  handlerCloseModal,
  addMyRecipeLoading,
}) {
  const [myRecipe, setMyRecipe] = useState(initialRecipeState);
  const handlerRecipeChange = (event) => {
    console.log(event.target.value);
    console.log(myRecipe);
    setMyRecipe((prevState) => {
      return { ...prevState, [event.target.name]: event.target.value };
    });
  };
  const handlerSubmit = async (event) => {
    event.preventDefault();
    await handlerAddMyRecipe(myRecipe);
    setMyRecipe(initialRecipeState);
    !addMyRecipeLoading && handlerFormStatus(false);
  };
  return (
    <>
      <Modal openModal={openModal}>
        <div>
          <h1 style={{ textAlign: "center", color: "#5f3dc4" }}>
            Add New Recipe
          </h1>
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
            <input
              type="text"
              name="strIngredient2"
              placeholder="Ingredient 2"
              onChange={handlerRecipeChange}
              value={myRecipe.strIngredient2}
            />
            <input
              type="text"
              name="strIngredient3"
              placeholder="Ingredient 3"
              onChange={handlerRecipeChange}
              value={myRecipe.strIngredient3}
            />
            <input
              type="text"
              name="strIngredient4"
              placeholder="Ingredient 4"
              onChange={handlerRecipeChange}
              value={myRecipe.strIngredient4}
            />
            <input
              type="text"
              name="strIngredient5"
              placeholder="Ingredient 5"
              onChange={handlerRecipeChange}
              value={myRecipe.strIngredient5}
            />
            <br />
            <input
              type="text"
              name="strIngredient6"
              placeholder="Ingredient 6"
              onChange={handlerRecipeChange}
              value={myRecipe.strIngredient6}
            />
            <input
              type="text"
              name="strIngredient7"
              placeholder="Ingredient 7"
              onChange={handlerRecipeChange}
              value={myRecipe.strIngredient7}
            />
            <input
              type="text"
              name="strIngredient8"
              placeholder="Ingredient 8"
              onChange={handlerRecipeChange}
              value={myRecipe.strIngredient8}
            />
            <input
              type="text"
              name="strIngredient9"
              placeholder="Ingredient 9"
              onChange={handlerRecipeChange}
              value={myRecipe.strIngredient9}
            />
            <input
              type="text"
              name="strIngredient10"
              placeholder="Ingredient 10"
              onChange={handlerRecipeChange}
              value={myRecipe.strIngredient10}
            />
            <br />
            <textarea
              name="strInstructions"
              placeholder="Instructions"
              onChange={handlerRecipeChange}
              value={myRecipe.strInstructions}
              rows="5"
              style={{ width: "97%" }}
            />
            <div
              style={{
                textAlign: "center",
              }}
            >
              {addMyRecipeLoading && (
                <>
                  <div>
                    <BeatLoader color="#5f3dc4" />
                  </div>
                  <br />
                </>
              )}
              {!addMyRecipeLoading && (
                <>
                  <button>Add</button>
                  <button
                    onClick={() => {
                      handlerCloseModal();
                      handlerFormStatus(false);
                    }}
                  >
                    Close
                  </button>
                </>
              )}
            </div>
          </form>
        </div>
      </Modal>
    </>
  );
}

export default AddMyRecipe;

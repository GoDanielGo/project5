import { useNavigate } from "react-router-dom";
import Modal from "./Modal";
import { myRecipeApi } from "../api/api";



function DisplayRecipe({
  openModal,
  handlerCloseModal,
  // handlerAddMyFavourite,
  recipeLoading,
  recipeById,
}) {
  console.log("recipeById", recipeById);

 
  
  // () => console.log("add to favorite clicked");
  const handlerAddMyFavourite = async () => {
    
    let addMyFavouriteMessage = "";
    try {
      // setAddMyFavouriteLoading(true);
      let favoriteList = {
        strMeal: recipeById.strMeal,
        strMealThumb: recipeById.strMealThumb,
        idMeal: recipeById.idMeal,
      };
      const response = await myRecipeApi.post("/favorites", favoriteList);
      console.log(response);
      addMyFavouriteMessage = "New Favourite has been added";
    } catch (error) {
      addMyFavouriteMessage = error.message;
      alert("Error", error.message);
    } finally {
      // setAddMyFavouriteLoading(false);
      alert(addMyFavouriteMessage);
      // setRefreshKey((prevKey) => prevKey + 1);
    }
  };

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
              <p>{recipeById.strInstructions}</p>
              <img
                src={recipeById.strMealThumb}
                style={{ width: "30%" }}
                alt={recipeById.idMeal}
              />
              <br />
              {recipeById.strMeal}
              <br />
            </>
            <button onClick={handlerAddMyFavourite}>Add to Favorite</button>
            <button
              onClick={() => {
                handlerCloseModal();
                navigate("/search");
              }}
            >
              Close
            </button>
          </Modal>
        )}
      </div>
    </>
  );
}

export default DisplayRecipe;

import { useNavigate } from "react-router-dom";
import Modal from "./Modal";

function DisplayRecipe({
  openModal,
  handlerCloseModal,
  recipeLoading,
  recipeById,
}) {
  console.log("recipeById", recipeById);
  const addtoFavorite = () => console.log("add to favorite clicked");
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
                src={recipeById.strMealThumb}
                style={{ width: "30%" }}
                alt={recipeById.idMeal}
              />
              <br />
              {recipeById.strMeal}
              <br />
            </>
            <button onClick={addtoFavorite}>Add to Favorite</button>
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

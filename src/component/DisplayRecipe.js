import Modal from "./Modal";

function DisplayRecipe({
  openModal,
  handleCloseModal,
  recipeLoading,
  recipeById,
}) {
  console.log("recipeById", recipeById);
  const addtoFavorite = () => console.log("add to favorite clicked");
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
            <button onClick={handleCloseModal}>Close</button>
          </Modal>
        )}
      </div>
    </>
  );
}

export default DisplayRecipe;

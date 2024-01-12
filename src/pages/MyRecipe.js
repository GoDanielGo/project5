import { useEffect, useState } from "react";
import AddMyRecipe from "../component/AddMyRecipe";
import MyRecipeList from "../component/MyRecipeList";
import { Outlet } from "react-router-dom";

function MyRecipe({
  handlerAddMyRecipe,
  openModal,
  handlerOpenModal,
  handlerCloseModal,
  addMyRecipeLoading,
  refreshKey,
  myRecipeList,
  myRecipeListLoading,
  searchMyRecipe,
}) {
  const [formStatus, setFormStatus] = useState(false);
  useEffect(() => {
    console.log("useEffect Running");
    searchMyRecipe();
    console.log(myRecipeList);
  }, [refreshKey]);
  const handlerFormStatus = (status) => setFormStatus(status);
  return (
    <>
      {!formStatus && (
        <button
          onClick={() => {
            handlerFormStatus(true);
            handlerOpenModal();
          }}
        >
          Add New Recipe
        </button>
      )}
      {!myRecipeListLoading && (
        <div className="search-container">
          <div className="topics-container">
            <MyRecipeList
              myRecipeList={myRecipeList}
              handlerOpenModal={handlerOpenModal}
            />
          </div>
        </div>
      )}
      {formStatus && (
        <AddMyRecipe
          handlerAddMyRecipe={handlerAddMyRecipe}
          handlerFormStatus={handlerFormStatus}
          openModal={openModal}
          handlerCloseModal={handlerCloseModal}
          addMyRecipeLoading={addMyRecipeLoading}
        />
      )}
      <Outlet />
    </>
  );
}
export default MyRecipe;

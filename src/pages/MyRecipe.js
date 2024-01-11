import { useState } from "react";
import AddMyRecipe from "../component/AddMyRecipe";

function MyRecipe({
  handlerAddMyRecipe,
  openModal,
  handlerOpenModal,
  handlerCloseModal,
}) {
  const [formStatus, setFormStatus] = useState(false);
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
      {formStatus && (
        <AddMyRecipe
          handlerAddMyRecipe={handlerAddMyRecipe}
          handlerFormStatus={handlerFormStatus}
          openModal={openModal}
          handlerCloseModal={handlerCloseModal}
        />
      )}
    </>
  );
}
export default MyRecipe;

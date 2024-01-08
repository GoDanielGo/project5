function Display({ searchResult }) {
  const displayMessage = function (className, message) {
    document.querySelector(className).textContent = message;
  };

  const closeModal = function () {
    modal.classList.add("hidden");
    overlay.classList.add("hidden");
  };

  const openModal = function () {
    console.log("button clicked");
    modal.classList.remove("hidden");
    overlay.classList.remove("hidden");
  };

  const modal = document.querySelector(".modal");
  const overlay = document.querySelector(".overlay");
  const btnCloseModal = document.querySelector(".close-modal");
  const btnsOpenModal = document.querySelectorAll(".show-modal");

  console.log(btnsOpenModal);

  for (let i = 0; i < btnsOpenModal.length; i++)
    btnsOpenModal[i].addEventListener("click", openModal);

  btnCloseModal.addEventListener("click", closeModal);

  overlay.addEventListener("click", closeModal);

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && !modal.classList.contains("hidden")) closeModal();
  });

  const recipe = searchResult.filter((item) => item.idMeal === idMeal);
  return (
    <>
      <div class="modal hidden">
        <button class="close-modal">&times;</button>
        <h1>{recipe.strMeal}</h1>
        <p>{recipe.strInstructions}</p>
      </div>
      <div class="overlay hidden"></div>
    </>
  );
}

export default Display;

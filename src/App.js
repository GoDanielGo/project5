import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Search from "./pages/Search";
import RootLayout from "./Layout/RootLayout";
import { useState } from "react";
import api from "./api/api";
import DisplayRecipe from "./component/DisplayRecipe";

function App() {
  const [searchBy, setSearchBy] = useState("search.php?s=");
  const [foodName, setFoodName] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [recipeById, setRecipeById] = useState(null);
  const [recipeLoading, setRecipeLoading] = useState(false);

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handlerChangeName = (event) => {
    setFoodName(event.target.value);
  };

  const handlerChangeSearchBy = (event) => {
    setSearchBy(event.target.value);
    setFoodName("");
  };

  const searchByName = async () => {
    try {
      const response = await api.get(`${searchBy}${foodName}`);
      setSearchResult(response.data.meals);
      console.log("searchResult", response.data.meals);
    } catch (error) {
      console.log("error", error.message);
    } finally {
      console.log("done");
    }
  };

  const searchRecipe = async (id) => {
    try {
      setRecipeLoading(true);
      console.log("searchResult idmeal", id);
      const response = await api.get(`lookup.php?i=${id}`);
      setRecipeById(response.data.meals[0]);
      console.log("recipeById", response.data.meals[0]);
    } catch (error) {
      console.log("error", error.message);
    } finally {
      console.log("searchRecipe done");
      setRecipeLoading(false);
    }
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route
            path="search"
            element={
              <Search
                searchBy={searchBy}
                handlerChangeSearchBy={handlerChangeSearchBy}
                handlerChangeName={handlerChangeName}
                foodName={foodName}
                searchResult={searchResult}
                searchByName={searchByName}
                handleOpenModal={handleOpenModal}
                searchRecipe={searchRecipe}
              />
            }
          >
            <Route
              path=":idMeal"
              element={
                <DisplayRecipe
                  openModal={openModal}
                  handleCloseModal={handleCloseModal}
                  recipeLoading={recipeLoading}
                  recipeById={recipeById}
                />
              }
            />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

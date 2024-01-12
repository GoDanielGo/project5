import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Search from "./pages/Search";
import RootLayout from "./Layout/RootLayout";
import { useEffect, useState } from "react";
import { api, myRecipeApi } from "./api/api";
import DisplayRecipe from "./component/DisplayRecipe";
import Favorite from "./pages/Favorite";
import About from "./pages/About";
import Home from "./pages/Home";
import MyRecipe from "./pages/MyRecipe";
import DisplayMyRecipe from "./component/DisplayMyRecipe";

function App() {
  const [searchBy, setSearchBy] = useState("search.php?s=");
  const [foodName, setFoodName] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [recipeById, setRecipeById] = useState(null);
  const [recipeLoading, setRecipeLoading] = useState(false);
  const [addMyRecipeLoading, setAddMyRecipeLoading] = useState(false);
  const [myRecipeList, setMyRecipeList] = useState([]);
  const [myRecipeLoading, setMyRecipeLoading] = useState(false);
  const [deleteMyRecipeLoading, setDeleteMyRecipeLoading] = useState(false);
  const [refreshKey, setRefreshKey] = useState(0);
  useEffect(() => {
    console.log("Initial load");
    handlerClear();
  }, []);

  const handlerCloseModal = () => {
    setOpenModal(false);
  };

  const handlerOpenModal = () => {
    setOpenModal(true);
  };

  const handlerChangeName = (event) => {
    setFoodName(event.target.value);
  };

  const handlerChangeSearchBy = (event) => {
    setSearchBy(event.target.value);
    setFoodName("");
  };

  const handlerClear = () => {
    setFoodName("");
    setSearchResult("");
    setSearchBy("search.php?s=");
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

  const handlerAddMyRecipe = async (myRecipe) => {
    let addMyRecipeMessage = "";
    try {
      setAddMyRecipeLoading(true);
      const response = await myRecipeApi.post("/myrecipe", myRecipe);
      console.log(response);
      addMyRecipeMessage = "New Recipe added";
    } catch (error) {
      addMyRecipeMessage = error.message;
      alert("Error", error.message);
    } finally {
      setAddMyRecipeLoading(false);
      alert(addMyRecipeMessage);
      setRefreshKey((prevKey) => prevKey + 1);
    }
  };

  const searchMyRecipe = async () => {
    try {
      setMyRecipeLoading(true);
      const response = await myRecipeApi.get("/myrecipe");
      console.log(response);
      setMyRecipeList(response.data);
    } catch (error) {
      console.log("Error", error.message);
    } finally {
      setMyRecipeLoading(false);
    }
  };

  const deleteMyRecipe = async (id) => {
    let deleteMyRecipeMessage = "";
    try {
      setDeleteMyRecipeLoading(true);
      const response = await myRecipeApi.delete("/myrecipe/" + id);
      deleteMyRecipeMessage = "Recipe Deleted";
      console.log("delete receipe response", response);
    } catch (error) {
      deleteMyRecipeMessage = error.message;
    } finally {
      alert(deleteMyRecipeMessage);
      setRefreshKey((prevKey) => prevKey + 1);
      setDeleteMyRecipeLoading(false);
    }
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
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
                handlerOpenModal={handlerOpenModal}
                searchRecipe={searchRecipe}
                handlerClear={handlerClear}
              />
            }
          >
            <Route
              path=":idMeal"
              element={
                <DisplayRecipe
                  openModal={openModal}
                  handlerCloseModal={handlerCloseModal}
                  recipeLoading={recipeLoading}
                  recipeById={recipeById}
                />
              }
            />
          </Route>
          <Route path="favorite" element={<Favorite />} />
          <Route
            path="myrecipe"
            element={
              <MyRecipe
                handlerAddMyRecipe={handlerAddMyRecipe}
                openModal={openModal}
                handlerOpenModal={handlerOpenModal}
                handlerCloseModal={handlerCloseModal}
                addMyRecipeLoading={addMyRecipeLoading}
                refreshKey={refreshKey}
                searchMyRecipe={searchMyRecipe}
                myRecipeList={myRecipeList}
              />
            }
          >
            <Route
              path=":idMeal"
              element={
                <DisplayMyRecipe
                  openModal={openModal}
                  handlerCloseModal={handlerCloseModal}
                  myRecipeList={myRecipeList}
                  myRecipeLoading={myRecipeLoading}
                  deleteMyRecipe={deleteMyRecipe}
                  deleteMyRecipeLoading={deleteMyRecipeLoading}
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

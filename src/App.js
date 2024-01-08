import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Search from "./pages/Search";
import RootLayout from "./Layout/RootLayout";
import { useState } from "react";
import api from "./api/api";

function App() {
  const [searchBy, setSearchBy] = useState("search.php?s=");
  const [foodName, setFoodName] = useState("");
  const [searchResult, setSearchResult] = useState([]);

  const handlerChangeName = (event) => {
    setFoodName(event.target.value);
  };

  const handlerChangeSearch = (event) => {
    setSearchBy(event.target.value);
    setFoodName("");
  };

  const searchByName = async () => {
    try {
      const response = await api.get(`${searchBy}${foodName}`);
      console.log(response);
      setSearchResult(response.data.meals);
      console.log(response.data.meals);
    } catch (error) {
      console.log("error", error.message);
    } finally {
      console.log("done");
    }
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route
            path="Search"
            element={
              <Search
                searchBy={searchBy}
                handlerChangeSearch={handlerChangeSearch}
                handlerChangeName={handlerChangeName}
                foodName={foodName}
                searchResult={searchResult}
                searchByName={searchByName}
              />
            }
          ></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

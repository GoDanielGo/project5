import SearchResult from "../component/SearchResult";
import api from "../api/api";
import { useState } from "react";
import "./Search.module.css";

function Search() {
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
    <div className="container">
      <select name="searchBy" value={searchBy} onChange={handlerChangeSearch}>
        <option value="search.php?s=">Search By Name</option>
        <option value="filter.php?i=">Search By ingeredient</option>
        <option value="filter.php?c=">Search By Category</option>
      </select>{" "}
      <input
        type="text"
        value={foodName}
        label="Search By Food Name"
        onChange={handlerChangeName}
      />{" "}
      <button onClick={searchByName}>search</button>
      {searchResult === null && <h1>No Recipe found!</h1>}
      {searchResult && (
        <div className="search-container">
          <div className="topics-container">
            <SearchResult searchResult={searchResult} />
          </div>
        </div>
      )}
    </div>
  );
}

export default Search;

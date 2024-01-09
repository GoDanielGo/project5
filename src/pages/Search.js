import { Outlet, useNavigate } from "react-router-dom";
import SearchResult from "../component/SearchResult";
import "./Search.module.css";

function Search({
  searchBy,
  handlerChangeSearchBy,
  foodName,
  handlerChangeName,
  searchByName,
  searchResult,
  handleOpenModal,
  searchRecipe,
}) {
  const navigate = useNavigate();
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <span>
        <select
          name="searchBy"
          value={searchBy}
          onChange={handlerChangeSearchBy}
        >
          <option value="search.php?s=">Search By Name</option>
          <option value="filter.php?i=">Search By Ingeredient</option>
          <option value="filter.php?c=">Search By Category</option>
        </select>{" "}
        <input
          type="text"
          value={foodName}
          label="Search By Food Name"
          onChange={handlerChangeName}
        />{" "}
        <button
          onClick={() => {
            searchByName();
            navigate("/search");
          }}
        >
          Search
        </button>
      </span>
      <br />
      {searchResult === null && <h1>No Recipe found!</h1>}
      {searchResult && (
        <div className="search-container">
          <div className="topics-container">
            <SearchResult
              searchResult={searchResult}
              handleOpenModal={handleOpenModal}
              searchRecipe={searchRecipe}
            />
          </div>
        </div>
      )}
      <Outlet />
    </div>
  );
}

export default Search;

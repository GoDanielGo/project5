import SearchResult from "../component/SearchResult";
import "./Search.module.css";

function Search({
  searchBy,
  handlerChangeSearch,
  foodName,
  handlerChangeName,
  searchByName,
  searchResult,
}) {
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

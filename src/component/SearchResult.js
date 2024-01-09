import { Link } from "react-router-dom";

function SearchResult({ searchResult, handleOpenModal, searchRecipe }) {
  return (
    <>
      {searchResult.map((item) => (
        <div className="topic" key={item.idMeal}>
          <h2 className="topic-name">{item.strMeal}</h2>
          <nav>
            <Link to={item.idMeal} key={item.idMeal}>
              <img
                onClick={() => {
                  searchRecipe(item.idMeal);
                  handleOpenModal();
                }}
                style={{ width: "80%" }}
                src={item.strMealThumb}
                alt={item.idMeal}
              />
            </Link>
          </nav>
        </div>
      ))}
    </>
  );
}

export default SearchResult;

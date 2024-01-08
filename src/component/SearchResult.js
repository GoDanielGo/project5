import { Link, Outlet } from "react-router-dom";

function SearchResult({ searchResult }) {
  return (
    <>
      <Outlet />
      {searchResult.map((item) => (
        <div className="topic" id={item.idMeal}>
          <h2 className="topic-name">{item.strMeal}</h2>
          <nav>
            <Link to={item.idMeal} key={item.idMeal}>
              <img
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

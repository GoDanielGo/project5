function SearchResult({ searchResult }) {
  return (
    <>
      {searchResult.map((item) => (
        <div className="topic">
          <h2 className="topic-name">{item.strMeal}</h2>
          <img
            style={{ width: "80%" }}
            src={item.strMealThumb}
            alt={item.idMeal}
          />
        </div>
      ))}
    </>
  );
}

export default SearchResult;

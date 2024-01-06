import "./App.css";
import api from "./api/api";

function App() {
  const searchByName = async () => {
    try {
      const response = await api.get("search.php?s=Arrabiata");
      console.log(response);
    } catch (error) {
      console.log("error", error.message);
    } finally {
      console.log("done");
    }
  };

  return (
    <div className="App">
      <h1>react</h1>
      <button onClick={searchByName}>click</button>
    </div>
  );
}

export default App;

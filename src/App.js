import "./App.css";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Search from "./pages/Search";
import RootLayout from "./Layout/RootLayout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route path="Search" element={<Search />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

import { NavLink, Route, Routes } from "react-router-dom";
import "./App.scss";
import Products from "./pages/Products/Products";
import Categories from "./pages/Categories/Categories";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import Home from "./pages/Home/Home";

function App() {
  return (
    <div>
      <div>
        <NavLink to="/">Main Page</NavLink>
        <br />
        <NavLink to="/products">All products</NavLink>
        <br />
        <NavLink to="/categories">Categories</NavLink>
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
}

export default App;

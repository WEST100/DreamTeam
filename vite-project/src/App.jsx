import { NavLink, Route, Routes } from "react-router-dom";
import "./App.scss";
import Products from "./pages/Products/Products";
import Categories from "./pages/Categories/Categories";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import Home from "./pages/Home/Home";
import Discounted from "./pages/Discounted/Discounted";

function App() {
  return (
    <main>
      <div className="nav-link__div">
        <NavLink to="/">Main Page</NavLink>
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/discounted" element={<Discounted />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </main>
  );
}

export default App;

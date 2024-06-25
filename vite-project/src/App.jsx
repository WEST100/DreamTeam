import { NavLink, Route, Routes } from "react-router-dom";
import "./App.scss";
import Products from "./pages/Products/Products";
import Categories from "./pages/Categories/Categories";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import Home from "./pages/Home/Home";
import Discounted from "./pages/Discounted/Discounted";
import Layout from "./components/Layout/Layout";

function App() {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/discounted" element={<Discounted />} />
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
    </main>
  );
}

export default App;

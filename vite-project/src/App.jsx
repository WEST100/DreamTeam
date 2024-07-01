import { Route, Routes } from "react-router-dom";
import "./App.scss";
import Products from "./pages/Products/Products";
import Categories from "./pages/Categories/Categories";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import Home from "./pages/Home/Home";
import Discounted from "./pages/Discounted/Discounted";
import Layout from "./components/Layout/Layout";
import ItemsFromCategoryPage from "./pages/ItemsFromCategory/ItemsFromCategoryPage";
import { ThemeProvider } from "./components/Theme/ThemeContext";

function App() {
  return (
    <main>
      <ThemeProvider>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/categories" element={<Categories />} />
            <Route path="/discounted" element={<Discounted />} />
            <Route path="/categories/:categoryId" element={<ItemsFromCategoryPage />} />
            <Route path="*" element={<ErrorPage />} />
          </Route>
        </Routes>
      </ThemeProvider>
    </main>
  );
}

export default App;

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
import ProductCardDetailPage from "./pages/ProductCartDetailPage/ProductCardDetailPage";
import ShoppingCart from "./pages/ShoppingCart/ShoppingCart";
import Favorites from "./pages/Favorites/Favorites";
import { useDispatch } from "react-redux";
import { getFavoritesFromLocalStorage, getProductsFromLocalStorage } from "./store/Reducers/ProductsReducer";
import { useEffect } from "react";
import { getAllProductAction } from "./store/asyncActions/product";

function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllProductAction());
    dispatch(getProductsFromLocalStorage());
    dispatch(getFavoritesFromLocalStorage());
  }, []);

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
            <Route path="/products/:productId" element={<ProductCardDetailPage />} />
            <Route path="/shopping-cart" element={<ShoppingCart />} />
            <Route path="/favorites" element={<Favorites />} />
            <Route path="*" element={<ErrorPage />} />
          </Route>
        </Routes>
      </ThemeProvider>
    </main>
  );
}

export default App;

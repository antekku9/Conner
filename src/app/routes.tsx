import { createBrowserRouter } from "react-router";
import { Layout } from "./components/conner/Layout";
import HomePage from "./pages/HomePage";
import FirmyPage from "./pages/FirmyPage";
import SzkolyPage from "./pages/SzkolyPage";
import InstytucjePage from "./pages/InstytucjePage";
import ProductsPage from "./pages/ProductsPage";
import ProductDetailPage from "./pages/ProductDetailPage";
import NotFoundPage from "./pages/NotFoundPage";  // ← DODAJ!

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: HomePage },
      { path: "obsluga-firm", Component: FirmyPage },
      { path: "szkoly", Component: SzkolyPage },
      { path: "instytucje-publiczne", Component: InstytucjePage },
      { path: "produkty", Component: ProductsPage },
      { path: "produkty/:slug", Component: ProductDetailPage },
      { path: "*", Component: NotFoundPage },  // ← DODAJ!
    ],
  },
], {
  basename: import.meta.env.BASE_URL,
});

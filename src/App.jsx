import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import HomePage from "./pages/HomePage";
import Product from "./pages/Product";
import Basket from "./pages/Basket";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<Product />} />
        <Route path="/basket" element={<Basket />} />
      </Routes>
    </Layout>
  );
}

export default App;

import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import HomePage from "./pages/private/HomePage";
import Product from "./pages/private/Product";
import Basket from "./pages/private/Basket";
import LoginPage from "./pages/public/LoginPage";
import AuthLogin from "./pages/public/AuthLogin";
import Register from "./pages/public/Register";
import { useContext } from "react";
import { Context } from "./context/Context";

function App() {
  const { user } = useContext(Context);
  return (
    <>
      {user.length > 0 ? (
        <Layout>
          <Routes>
            <Route
              path="/"
              element={
                <AuthLogin>
                  <HomePage />
                </AuthLogin>
              }
            />
            <Route
              path="/products"
              element={
                <AuthLogin>
                  <Product />
                </AuthLogin>
              }
            />
            <Route
              path="/basket"
              element={
                <AuthLogin>
                  <Basket />
                </AuthLogin>
              }
            />
          </Routes>
        </Layout>
      ) : (
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<Register />} />
          <Route path="*" element={<LoginPage />} />
        </Routes>
      )}
    </>
  );
}

export default App;

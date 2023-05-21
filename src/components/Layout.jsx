/* eslint-disable react/prop-types */
import Footer from "./footer/Footer";
import Header from "./header/Header";
function Layout({ children }) {
  return (
    <div className="layout">
      <Header />
      <div> {children}</div>
      <Footer />
    </div>
  );
}

export default Layout;

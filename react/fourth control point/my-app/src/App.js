import "./App.css";
import Header from "./components/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AboutPage from "./pages/AboutPage";
import ContactsPage from "./pages/ContactsPage";
import Footer from "./components/Footer";
import NotFoundPage from "./pages/NotFoundPage";
import ProductInfoPage from "./pages/ProductInfoPage.js";

function App() {
  return (
    <div>
      <Router basename="/">
        <Header />
        <Routes>
          <Route path="/" element={<AboutPage />} />
          <Route path="/contacts" element={<ContactsPage />} />
          <Route path="/product/:id" element={<ProductInfoPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;

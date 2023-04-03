import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Store from "./pages/Store";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";
import { ShoppingCartProvider } from "./context/ShoppingCartContext";

function App() {
  return (
    <ShoppingCartProvider>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/store" element={<Store />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </ShoppingCartProvider>
  );
}

export default App;

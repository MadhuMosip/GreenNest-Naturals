import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Index from "./pages";
import Products from "./pages/Products";
import Subscription from "./pages/Subscription";
import Contact from "./pages/Contact";
import { CartProvider } from "./context/cartContext.jsx"
import Cart from "./pages/Cart.jsx";

function App() {
  return (
    <CartProvider>
      <BrowserRouter basename="/">
        <Routes>
          <Route path="/" element={<Index />}>
            <Route index element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/subscription" element={<Subscription />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/cart" element={<Cart/>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </CartProvider>
  )
}

export default App

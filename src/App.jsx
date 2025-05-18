import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Index from "./pages";
import Products from "./pages/Products";
import Subscription from "./pages/Subscription";
import Contact from "./pages/Contact";

function App() {
  return (
    <BrowserRouter basename="/">
      <Routes>
        <Route path="/" element={<Index />}>
          <Route index element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/subscription" element={<Subscription/>}/>
          <Route path="/contact" element={<Contact/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App

import Header from "./components/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Products from "./components/Products";
import Carts from "./components/Carts";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Products />} />
          <Route path="/cart" element={<Carts />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
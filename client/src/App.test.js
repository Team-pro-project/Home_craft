import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import allProduct from "./components/allProduct.jsx";


function App() {
  return (
    <>
      <BrowserRouter> 
        <Navbar />
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/Product-list" element={<allProduct />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

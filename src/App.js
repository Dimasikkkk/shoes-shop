import "./App.css";
import Shoes from "../src/pages/Shoes";
// import Header from "./components/Header/Header";
import { Routes, Route } from "react-router-dom";
import ProductFull from "./pages/ProductFull";
import Main from "./pages/Main";
function App() {

  return (
    <div className="wrapper">
      <Routes>
        <Route path="/shoes" element={<Shoes />} />
        <Route path="/" element={<Main />} />
        <Route path="/shoes/:id" element={<ProductFull/>} />
        {/* <Route path="*" element={<NotFound />}></Route> */}
      </Routes>
    </div>
  );
}

export default App;

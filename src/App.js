import "./App.css";
// import Header from "./components/Header/Header";
import { Routes, Route } from "react-router-dom";
import { Main, ProductFull, Shoes } from "./pages";
import Header from "./components/Header/Header";
function App() {
  return (
    <>
        <Header />
        <Routes>
          <Route path="/shoes" element={<Shoes />} />
          <Route path="/" element={<Main />} />
          <Route path="/shoes/:id" element={<ProductFull />} />
          {/* <Route path="*" element={<NotFound />}></Route> */}
        </Routes>
    </>
  );
}

export default App;

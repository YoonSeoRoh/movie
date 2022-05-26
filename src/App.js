import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./component/Header";
import Home from "./component/Home";
import BookMarkContainer from "./component/BookMarkContainer";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/bookmark" element={<BookMarkContainer />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

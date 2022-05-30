import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./component/Header";
import Home from "./component/Home";
import BookMarkContainer from "./component/BookMarkContainer";
import RankContiner from "./component/RankContainer";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/bookmark" element={<BookMarkContainer />}></Route>
          <Route path="/rank" element={<RankContiner />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

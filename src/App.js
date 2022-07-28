import logo from "./logo.svg";
import SearchParams from "./SearchParam";
import "./App.css";
import Pet from "./Pet";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Details from "./Details";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SearchParams />} />
          <Route path="/details/:id" element={<Details />} />
        </Routes>
      </BrowserRouter>
      {/* <Pet name="Luna" breed="havanees" animal="dog" />
      <SearchParams /> */}
    </>
  );
}

export default App;

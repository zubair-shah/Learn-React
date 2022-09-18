import logo from "./logo.svg";
import SearchParams from "./SearchParam";
import "./App.css";
import Pet from "./Pet";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import WrapdDetails from "./Details";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SearchParams />} />
          <Route path="/details/:id" element={<WrapdDetails />} />
        </Routes>
        {/* <Pet name="Luna" breed="havanees" animal="dog" /> */}
        {/* <SearchParams /> */}
      </BrowserRouter>
    </>
  );
}

export default App;

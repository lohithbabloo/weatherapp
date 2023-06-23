// import { useState } from "react";

import Searchbar from "./components/search/searchbar";
import "./index.css";
import Weather from "./components/weather/presentweather";
function App() {
  const handlesearchchange = (searchData) => {
    console.log(searchData);
  };
  return (
    <div className="container">
      <Searchbar onSearchChange={handlesearchchange} />
      <Weather />
    </div>
  );
}

export default App;

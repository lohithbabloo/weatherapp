import { useState } from "react";

import Searchbar from "./components/searchbar";
import Inputresults from "./components/Inputresults";

function App() {
  const handlesearchchange = (searchData) => {
    console.log(searchData);
  };
  return (
    <div className="App">
      <Searchbar onSearchChange={handlesearchchange} />
      {/* <Inputresults results={results} /> */}
    </div>
  );
}

export default App;

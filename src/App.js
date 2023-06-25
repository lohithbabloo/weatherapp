import { useState } from "react";

import Searchbar from "./components/search/searchbar";
import "./index.css";
import Weather from "./components/weather/presentweather";
import Forecast from "./components/forecast/forecast";
function App() {
  const [weather, Setweather] = useState("");
  const [forecast, Setforecast] = useState("");
  const handlesearchchange = (searchData) => {
    const [lon, lat] = searchData.value.split(" ");

    const weatherFetch = fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=ce27eb90548b30ef59c3a280aef4f09f&units=metric`
    );
    const foreCastFetch = fetch(
      `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=ce27eb90548b30ef59c3a280aef4f09f&units=metric`
    );

    Promise.all([weatherFetch, foreCastFetch])
      .then(async (response) => {
        const weatherResponse = await response[0].json();
        const forecastResponse = await response[1].json();

        Setweather({ city: searchData.label, ...weatherResponse });
        Setforecast({ city: searchData.label, ...forecastResponse });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="container">
      <Searchbar onSearchChange={handlesearchchange} />
      {weather && <Weather data={weather} />}
      {forecast && <Forecast data={forecast} />}
    </div>
  );
}

export default App;

import "./presentweather.css";

const Weather = () => {
  return (
    <div className="weather">
      <div className="top">
        <div>
          <p className="cityname">City</p>
          <p className="countrycode">CountryCode</p>
        </div>
        <div>
          <p className="temp">temperature</p>
        </div>
      </div>
    </div>
  );
};

export default Weather;

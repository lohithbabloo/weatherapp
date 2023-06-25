import "./presentweather.css";

const Weather = ({ data }) => {
  return (
    <div className="weather-container">
      <div className="top">
        <div className="geoDetails">
          <p className="city">
            {data.city},{data.country}
          </p>
          <p className="temperature">{data.main.temp}°C</p>
          <hr />
          <p>feels like {data.main.feels_like}°C</p>
        </div>
        <div className="weatherdetails">
          <img
            src={`${data.weather[0].icon}.png`}
            alt={`${data.weather[0].main}`}
          />
          <p className="weather">{data.weather[0].main}</p>
          <p className="description">{data.weather[0].description}</p>
        </div>
      </div>
      <div className="bottom">
        <div>
          <p>Humidity</p>
          <p>{data.main.humidity}%</p>
        </div>
        <div>
          <p>WindSpeed</p>
          <p>{data.wind.speed}m/s</p>
        </div>
        <div>
          <p>Pressure</p>
          <p>{data.main.pressure}hPa</p>
        </div>
      </div>
    </div>
  );
};

export default Weather;

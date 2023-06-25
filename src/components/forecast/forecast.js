import "./forecast.css";

const daytimes = [
  "09:00 AM",
  "12:00 AM",
  "03:00 PM",
  "06:00 PM",
  "09:00 PM",
  "12:00 AM",
];

const Forecast = ({ data }) => {
  //   console.log(data);

  return (
    <div className="details">
      <h3>Next Day Weather Forecast</h3>
      <div className="headers">
        <p>Time</p>
        <p>temperature</p>
        <p>Weather</p>
      </div>
      {data.list.splice(0, 6).map((item, id) => {
        console.log(item);
        return (
          <>
            <div className="nextdayforecast">
              <p>{daytimes[id]}</p>
              <p>{item.main.temp}</p>
              <p>{item.weather[0].description}</p>
            </div>
          </>
        );
      })}
    </div>
  );
};

export default Forecast;

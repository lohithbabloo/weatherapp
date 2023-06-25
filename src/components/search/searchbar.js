import { React, useState } from "react";
import { AsyncPaginate } from "react-select-async-paginate";
import { geoLocApiKey, url } from "../../api";
import "./seachbar.css";

const Searchbar = ({ onSearchChange }) => {
  const [search, setSearch] = useState("");

  function loadOptions(inputValue) {
    return fetch(
      `${url}/cities?minPopulation=1000000&namePrefix=${inputValue}`,
      geoLocApiKey
    )
      .then((response) => response.json())
      .then((response) => {
        return {
          options: response.data.map((city) => {
            return {
              value: `${city.longitude} ${city.latitude}`,
              label: `${city.city},${city.countryCode}`,
            };
          }),
        };
      })
      .catch((err) => {
        console.error(err);
      });
  }
  const style = {
    control: (provided, state) => ({
      ...provided,
      boxShadow: state.isFocussed ? null : null,
    }),
  };

  const handleChange = (searchData) => {
    setSearch(searchData);
    onSearchChange(searchData);
  };

  return (
    <div className="searchbar_wrapper">
      <div className="logo">
        <img src="weather.png" alt="logo" />
        <p>SkyView</p>
      </div>
      <div className="searchbar">
        <AsyncPaginate
          placeholder="Search......"
          debounceTimeout={600}
          value={search}
          onChange={handleChange}
          loadOptions={loadOptions}
          styles={style}
        ></AsyncPaginate>
      </div>
    </div>
  );
};
export default Searchbar;

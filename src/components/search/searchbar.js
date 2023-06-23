import { React, useState } from "react";
import { AsyncPaginate } from "react-select-async-paginate";
import geoLocApiKey from "./search";

const Searchbar = ({ onSearchChange }) => {
  const [search, setSearch] = useState("");

  function loadOptions(inputValue) {
    const url = `https://wft-geo-db.p.rapidapi.com/v1/geo/cities?minPopulation=1000000&namePrefix=${inputValue}`;

    return fetch(url, geoLocApiKey)
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

  const handleChange = (searchData) => {
    setSearch(searchData);
    onSearchChange(searchData);
  };

  return (
    <div className="searchbar_wrapper">
      <AsyncPaginate
        placeholder="Search......"
        debounceTimeout={600}
        value={search}
        onChange={handleChange}
        loadOptions={loadOptions}
      ></AsyncPaginate>
    </div>
  );
};
export default Searchbar;

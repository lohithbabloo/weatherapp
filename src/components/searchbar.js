import { React, useState } from "react";
import { AsyncPaginate } from "react-select-async-paginate";

const Searchbar = ({ onSearchChange }) => {
  const [search, setSearch] = useState("");
  const loadOptions = (inputValue) => {
    const url = `https://wft-geo-db.p.rapidapi.com/v1/geo/cities?minPopulation=1000000&namePrefix=${inputValue}`;
    const geoLocApiKey = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "635873e582mshbcc7d021d8369ebp1e5750jsn7c0e1eac16ff",
        "X-RapidAPI-Host": "wft-geo-db.p.rapidapi.com",
      },
    };
    if (inputValue.length >= 3) {
      return fetch(url, geoLocApiKey)
        .then((response) => response.json())
        .then((value) => {
          return {
            options: value.data.map((city) => {
              return {
                value: `${city.longitude} ${city.latitude}`,
                label: `${city.name}, ${city.countryCode}`,
              };
            }),
          };
        });
    }
  };
  const handleChange = (searchData) => {
    setSearch(searchData);
    // onSearchChange(searchData);
    loadOptions(searchData);
  };

  return (
    <div className="searchbar_wrapper">
      <AsyncPaginate
        placeholder="Search......"
        debounceTimeout={600}
        value={search}
        onChange={(e) => handleChange(e.target.value)}
        loadOptions={loadOptions}
      ></AsyncPaginate>
    </div>
  );
};

export default Searchbar;

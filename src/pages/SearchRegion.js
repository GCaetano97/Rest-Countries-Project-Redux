import { Tab, Tabs } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import ShowCountries from "../components/ShowCountries";

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const SearchRegion = ({ countries }) => {
  const [value, setValue] = useState(0);
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [backHolder, setBackHolder] = useState([]);

  useEffect(() => {
    setFilteredCountries(
      countries.filter((country) => country.region === "Africa")
    );
  }, [countries]);

  const filterHelper = (region) => {
    const filter = countries.filter((country) => country.region === region);
    setFilteredCountries(filter);
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
    if (newValue === 0) {
      filterHelper("Africa");
    }
    if (newValue === 1) {
      filterHelper("Americas");
    }
    if (newValue === 2) {
      filterHelper("Asia");
    }
    if (newValue === 3) {
      filterHelper("Europe");
    }
    if (newValue === 4) {
      filterHelper("Oceania");
    }
  };

  const handleCountryClick = (country) => {
    setBackHolder(filteredCountries);
    setFilteredCountries([country]);
  };

  const handleCountryBack = () => {
    setFilteredCountries(backHolder);
  };

  return (
    <div>
      <Tabs
        value={value}
        onChange={handleChange}
        aria-label="simple tabs example"
        centered
      >
        <Tab label="Africa" {...a11yProps(0)} />
        <Tab label="Americas" {...a11yProps(1)} />
        <Tab label="Asia" {...a11yProps(2)} />
        <Tab label="Europe" {...a11yProps(3)} />
        <Tab label="Oceania" {...a11yProps(4)} />
      </Tabs>

      <ShowCountries
        filteredCountries={filteredCountries}
        handleCountryClick={handleCountryClick}
        handleCountryBack={handleCountryBack}
      />
    </div>
  );
};

export default SearchRegion;

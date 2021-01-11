import { Grid, TextField } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import ShowCountries from "../components/ShowCountries";

const SearchCountry = ({ countries }) => {
  const [term, setTerm] = useState("");
  const [filteredCountries, setFilteredCountries] = useState([]);

  useEffect(() => {
    const filter = countries.filter((country) =>
      country.name.toLowerCase().includes(term.toLowerCase())
    );
    setFilteredCountries(filter);
  }, [countries, term]);

  const handleCountryClick = (country) => {
    setFilteredCountries([country]);
    setTerm(country.name);
  };

  const handleCountryBack = () => {
    setTerm("");
  };

  return (
    <Grid container direction="row">
      <Grid item xs={12}>
        <TextField
          label="Enter the name of the Country"
          placeholder="Ex: Portugal"
          fullWidth
          margin="normal"
          InputLabelProps={{ shrink: true }}
          value={term}
          onChange={(e) => setTerm(e.target.value)}
        />
      </Grid>
      <Grid item xs={12}>
        <ShowCountries
          term={term}
          countries={countries}
          setTerm={setTerm}
          filteredCountries={filteredCountries}
          setFilteredCountries={setFilteredCountries}
          handleCountryClick={handleCountryClick}
          handleCountryBack={handleCountryBack}
        />
      </Grid>
    </Grid>
  );
};

export default SearchCountry;

import { Grid, List } from "@material-ui/core";
import React from "react";
import Countries from "./Countries";
import Country from "./Country";

const ShowCountries = ({
  filteredCountries,
  handleCountryClick,
  handleCountryBack,
}) => {
  if (filteredCountries.length > 1) {
    return (
      <List>
        {filteredCountries.map((country) => {
          return (
            <div key={country.alpha3Code}>
              <Countries
                country={country}
                handleCountryClick={handleCountryClick}
              />
            </div>
          );
        })}
      </List>
    );
  }

  if (filteredCountries.length === 1) {
    return (
      <Grid container item xs={12}>
        <Country
          country={filteredCountries}
          handleCountryBack={handleCountryBack}
        />
      </Grid>
    );
  }
  return <div />;
};

export default ShowCountries;

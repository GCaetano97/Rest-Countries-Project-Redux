import { Button, Grid, Typography } from "@material-ui/core";
import React from "react";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import { useDispatch } from "react-redux";
import { addFavorite } from "../redux/actions/favoriteActions";

const Country = ({ country, handleCountryBack }) => {
  const dispatch = useDispatch();

  return (
    <Grid container item direction="row">
      <Grid item xs={3} />
      <Grid container item direction="column" xs={2}>
        <Typography variant="h2">
          {country[0].name}
          <Button onClick={() => dispatch(addFavorite(country))}>
            Favorite
          </Button>
        </Typography>
        <Typography variant="subtitle1">{country[0].region}</Typography>
        <Typography>Capital: {country[0].capital}</Typography>
        <Typography>Population: {country[0].population}</Typography>
        <Typography>
          Currency: {country[0].currencies.map((currency) => currency.name)}
        </Typography>
        <Typography>
          Languages:{" "}
          {country[0].languages.map((language) => `${language.name} `)}
        </Typography>
        <img
          src={country[0].flag}
          alt={country[0].alpha3Code}
          style={{ width: "25vh", height: "auto" }}
        />
      </Grid>
      <Grid item xs={4}>
        <Button onClick={() => handleCountryBack()}>
          <ArrowBackIosIcon /> Back
        </Button>
      </Grid>
    </Grid>
  );
};

export default Country;

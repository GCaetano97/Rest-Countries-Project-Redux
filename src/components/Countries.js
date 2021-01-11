import {
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
} from "@material-ui/core";
import React from "react";

const Countries = ({ country, handleCountryClick }) => {
  return (
    <ListItem button onClick={() => handleCountryClick(country)}>
      <ListItemAvatar>
        <Avatar alt={country.alpha2Code} src={country.flag} />
      </ListItemAvatar>
      <ListItemText secondary={country.region}>{country.name}</ListItemText>
    </ListItem>
  );
};

export default Countries;

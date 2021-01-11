import React, { useState } from "react";
import {
  Typography,
  IconButton,
  Toolbar,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Avatar,
} from "@material-ui/core";
import PublicIcon from "@material-ui/icons/Public";
import MenuIcon from "@material-ui/icons/Menu";
import Menu from "./Menu";
import { Link } from "react-router-dom";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import { useSelector, useDispatch } from "react-redux";
import { removeFavorite } from "../redux/actions/favoriteActions";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";

const Header = () => {
  const [menu, setMenu] = useState(false);
  const [favoriteMenu, setFavoriteMenu] = useState(false);
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  console.log(state);

  return (
    <Toolbar
      position="static"
      style={{ display: "flex", justifyContent: "space-between" }}
    >
      <IconButton edge="start" onClick={() => setMenu(!menu)}>
        <MenuIcon />
      </IconButton>
      <Menu menu={menu} setMenu={setMenu} side="left">
        <Typography style={{ marginTop: "20px", marginLeft: "10px" }}>
          Search by...
        </Typography>
        <ul>
          <li>
            <Typography
              component={Link}
              to="/searchcountry"
              style={{ textDecoration: "none" }}
              color="textPrimary"
              onClick={() => setMenu(false)}
            >
              Country
            </Typography>
          </li>
          <li>
            <Typography
              component={Link}
              to="/searchregion"
              style={{ textDecoration: "none" }}
              color="textPrimary"
              onClick={() => setMenu(false)}
            >
              Region
            </Typography>
          </li>
        </ul>
      </Menu>
      <Typography
        variant="h6"
        component={Link}
        to="/"
        style={{ textDecoration: "none" }}
        color="textPrimary"
      >
        Rest Countries Project {<PublicIcon style={{ fontSize: 18 }} />}
      </Typography>
      <IconButton
        style={{ position: "flexEnd" }}
        onClick={() => setFavoriteMenu(!favoriteMenu)}
      >
        <FavoriteBorderIcon />
      </IconButton>
      <Menu menu={favoriteMenu} setMenu={setFavoriteMenu} side="right">
        {state.favorite.length > 0 &&
          state.favorite.map((country) => {
            return (
              <div key={country.alpha2Code}>
                <ListItem>
                  <ListItemAvatar>
                    <Avatar alt={country.alpha2Code} src={country.flag} />
                  </ListItemAvatar>
                  <ListItemText secondary={country.region}>
                    {country.name}
                  </ListItemText>
                  <IconButton onClick={() => dispatch(removeFavorite(country))}>
                    <HighlightOffIcon />
                  </IconButton>
                </ListItem>
              </div>
            );
          })}
        {state.favorite.length === 0 && (
          <div>
            <Typography align="center" style={{ marginTop: "40px" }}>
              There are no favorites yet <br /> try adding some !
            </Typography>
          </div>
        )}
      </Menu>
    </Toolbar>
  );
};

export default Header;

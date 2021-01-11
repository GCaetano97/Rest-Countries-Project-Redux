import { Typography } from "@material-ui/core";
import React from "react";
import LanguageIcon from "@material-ui/icons/Language";
import Footer from "../components/Footer";

const Homepage = () => {
  return (
    <div>
      <div align="center" style={{ marginTop: "9vh", minHeight: "58vh" }}>
        <Typography>Search some countries and learn more about it!</Typography>
        <Typography>
          You can search each country or by filtering them for their region.
        </Typography>
        <Typography>
          To start click on the menu and choose your option!
        </Typography>
        <LanguageIcon style={{ fontSize: 150 }} />
      </div>
      <Footer />
    </div>
  );
};

export default Homepage;

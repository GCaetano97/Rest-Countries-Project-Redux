import { Grid } from "@material-ui/core";
import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import Homepage from "./pages/Homepage";
import SearchCountry from "./pages/SearchCountry";
import SearchRegion from "./pages/SearchRegion";
import { useDispatch, useSelector } from "react-redux";
import { initializeCountries } from "./redux/actions/fullCountriesActions";

const App = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);

  useEffect(() => {
    dispatch(initializeCountries());
  }, [dispatch]);

  return (
    <Router>
      <Grid container direction="row">
        <Grid item xs={12}>
          <Header />
        </Grid>
        <Grid item xs={12}>
          <Switch>
            <Route path="/searchregion">
              <SearchRegion countries={state.countries} />
            </Route>
            <Route path="/searchcountry">
              <SearchCountry countries={state.countries} />
            </Route>
            <Route path="/">
              <Homepage />
            </Route>
          </Switch>
        </Grid>
      </Grid>
    </Router>
  );
};

export default App;

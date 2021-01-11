import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import favoriteReducer from "./reducers/favoriteReducer";
import fullCountriesReducer from "./reducers/fullCountriesReducer";

const reducer = combineReducers({
  favorite: favoriteReducer,
  countries: fullCountriesReducer,
});

const store = createStore(reducer, applyMiddleware(thunk));

export default store;

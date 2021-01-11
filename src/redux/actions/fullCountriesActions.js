import axios from "axios";

export const initializeCountries = () => {
  return async (dispatch) => {
    const countries = await axios.get("https://restcountries.eu/rest/v2/all");
    dispatch({
      type: "INIT_COUNTRIES",
      payload: countries.data,
    });
  };
};

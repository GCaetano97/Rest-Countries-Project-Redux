const fullCountriesReducer = (state = [], action) => {
  switch (action.type) {
    case "INIT_COUNTRIES":
      return action.payload;
    default:
      return state;
  }
};

export default fullCountriesReducer;

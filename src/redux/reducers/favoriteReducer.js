const favoriteReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_FAVORITE":
      if (
        state.filter((fav) => fav.name === action.payload[0].name).length > 0
      ) {
        return state;
      } else return [...state, ...action.payload];
    case "REMOVE_FAVORITE":
      return state.filter((country) => country.name !== action.payload.name);
    default:
      return state;
  }
};

export default favoriteReducer;

export const addFavorite = (country) => {
  return {
    type: "ADD_FAVORITE",
    payload: country,
  };
};

export const removeFavorite = (country) => {
  return {
    type: "REMOVE_FAVORITE",
    payload: country,
  };
};

export function addFavoriteItem(item) {
  return {
    type: "ADD_FAVORITE_ITEM",
    playload: item,
  };
}

export function removeFavoriteItem(item) {
  return {
    type: "REMOVE_FAVORITE_ITEM",
    playload: item,
  };
}

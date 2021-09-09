const initState = {
  items: [],
};

export default function favorites(state = initState, action) {
  if (action.type === "ADD_FAVORITE_ITEM") {
    return {
      items: [...state.items, action.playload],
    };
  } else if (action.type === "REMOVE_FAVORITE_ITEM") {
    return {
      items: state.items.filter((item) => item.title !== action.playload.title),
    };
  }
  return state;
}

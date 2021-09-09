const initState = {
  items: [],
};

export default function orders(state = initState, action) {
  if (action.type === "CREATE_ORDER") {
    return {
      items: [...state.items, action.playload],
    };
  } else if (action.type === "REMOVE_ORDER_ITEM") {
    return {
      items: state.items.filter((item) => item.title !== action.playload.title),
    };
  }
  return state;
}

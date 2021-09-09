const initState = {
  items: [],
  isReady: false,
};

export default function sneakers(state = initState, action) {
  if (action.type === "LOAD_SNEAKERS") {
    return {
      items: action.playload,
      isReady: true,
    };
  }

  return state;
}

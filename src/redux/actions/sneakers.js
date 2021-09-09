export function addSneakers(items) {
  return {
    type: "LOAD_SNEAKERS",
    playload: items,
  };
}

export function addItemToCart(item) {
  return {
    type: "ADD_TO_CART",
    playload: item,
  };
}

export function toggleCart() {
  return {
    type: "TOGGLE_CART",
  };
}

export function removeItemFromCart(item) {
  return {
    type: "REMOVE_FROM_CART",
    playload: item,
  };
}

export function clearCart() {
  return {
    type: "CLEAR_CART",
  };
}

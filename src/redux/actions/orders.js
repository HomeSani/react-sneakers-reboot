export function createOrder(order) {
  return {
    type: "CREATE_ORDER",
    playload: order,
  };
}

export function removeOrderItem(item) {
  return {
    type: "REMOVE_ORDER_ITEM",
    playload: item,
  };
}

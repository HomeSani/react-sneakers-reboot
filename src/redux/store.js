import { createStore, combineReducers } from "redux";

import sneakers from "./reducers/sneakers";
import cart from "./reducers/cart";
import search from "./reducers/search";
import favorites from "./reducers/favorites";
import orders from "./reducers/orders";

const store = createStore(
  combineReducers({
    sneakers,
    cart,
    search,
    favorites,
    orders,
  }),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;

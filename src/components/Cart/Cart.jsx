import React from "react";

import { useDispatch, useSelector } from "react-redux";

import {
  toggleCart,
  removeItemFromCart,
  clearCart,
} from "../../redux/actions/cart";
import Button from "../Button/Button";

import { createOrder } from "../../redux/actions/orders";

import "./Cart.scss";
import Item from "./Item/Item";

function Cart() {
  const dispatch = useDispatch();

  const cartItems = useSelector(({ cart }) => cart.items);

  const getCartPrice = () => {
    return cartItems
      ? cartItems.reduce((sum, obj) => (sum += obj.price), 0)
      : 0;
  };

  const closeCart = () => {
    dispatch(toggleCart());
    document.body.classList.toggle("lock");
  };

  const removeItem = (item) => {
    dispatch(removeItemFromCart(item));
  };

  const createCartOrder = () => {
    dispatch(createOrder(cartItems));
    dispatch(clearCart());
  };

  return (
    <div>
      <div className="cart__holder" onClick={closeCart}></div>
      <div className="cart">
        <div className="cart__title">
          <h2>Корзина</h2>
        </div>
        <div className="cart__list">
          {cartItems.length !== 0 ? (
            cartItems.map((item) => (
              <Item key={item.title} onRemove={removeItem} {...item} />
            ))
          ) : (
            <div className="cart__empty">
              <img src="img/empty.png" alt="empty" />
              <h3>Корзина пустая</h3>
              <p>Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ.</p>
              <Button onClick={closeCart} small>
                Вернуться назад
              </Button>
            </div>
          )}
        </div>
        <div className="cart__additional">
          <ul>
            <li>
              <p>Итого: </p>
              <span>..............................</span>
              <b>{getCartPrice()} руб. </b>
            </li>
            <li>
              <p>Налог 5%: </p>
              <span>..............................</span>
              <b>{Math.floor(getCartPrice() * 0.05)} руб. </b>
            </li>
          </ul>
          <Button onClick={createCartOrder}>Оформить заказ</Button>
        </div>
      </div>
    </div>
  );
}

export default Cart;

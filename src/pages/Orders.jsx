import React from "react";

import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import Header from "../components/Header/Header.jsx";
import Item from "../components/SneakerCatalog/Item/Item";
import Cart from "../components/Cart/Cart";

import Button from "../components/Button/Button";

import "./Favorites.scss";

function Orders() {
  const isActiveCart = useSelector(({ cart }) => cart.isActive);

  const orderItems = useSelector(({ orders }) => orders.items);

  return (
    <div>
      <Header />
      {isActiveCart && <Cart />}

      <div className="favorite__title">
        <Link to="/">
          <button>
            <img src="img/ui/back.png" alt="back" />
          </button>
        </Link>
        <h2>Мои Заказы</h2>
      </div>
      <div className="favorite__list">
        {orderItems.length !== 0 ? (
          orderItems.map((order, index) =>
            order.map((item) => (
              <div>
                <Item key={item.title} {...item} />
              </div>
            ))
          )
        ) : (
          <div className="favorite__empty">
            <img src="img/smile.png" alt="empty" />
            <h3>Заказов нет :(</h3>
            <p>Вы не сделали заказ</p>
            <Link to="/">
              <Button>Вернуться назад</Button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}

export default Orders;

import React from "react";

import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import Header from "../components/Header/Header.jsx";
import Item from "../components/SneakerCatalog/Item/Item";
import Cart from "../components/Cart/Cart";

import Button from "../components/Button/Button";

import "./Favorites.scss";

function Favorites() {
  const isActiveCart = useSelector(({ cart }) => cart.isActive);

  const favoriteItems = useSelector(({ favorites }) => favorites.items);

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
        <h2>Мои закладки</h2>
      </div>
      <div className="favorite__list">
        {favoriteItems.length !== 0 ? (
          favoriteItems.map((item) => <Item key={item.title} {...item} />)
        ) : (
          <div className="favorite__empty">
            <img src="img/smile.png" alt="empty" />
            <h3>Закладок нет :(</h3>
            <p>Вы ничего не добавляли в закладки</p>
            <Link to="/">
              <Button>Вернуться назад</Button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}

export default Favorites;

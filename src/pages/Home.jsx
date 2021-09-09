import React from "react";

import axios from "axios";
import { useDispatch, useSelector } from "react-redux";

import Header from "../components/Header/Header.jsx";
import Banner from "../components/Banner/Banner.jsx";
import Catalog from "../components/SneakerCatalog/SneakerCatalog.jsx";
import Cart from "../components/Cart/Cart";

import { addSneakers } from "../redux/actions/sneakers";

function Home() {
  const dispatch = useDispatch();

  const isActiveCart = useSelector(({ cart }) => cart.isActive);

  React.useEffect(() => {
    axios
      .get("https://6123a1da124d880017568378.mockapi.io/sneakers")
      .then(({ data }) => {
        dispatch(addSneakers(data));
      });
  }, [dispatch]);

  return (
    <div>
      {isActiveCart && <Cart />}
      <Header />
      <Banner />
      <Catalog />
    </div>
  );
}

export default Home;

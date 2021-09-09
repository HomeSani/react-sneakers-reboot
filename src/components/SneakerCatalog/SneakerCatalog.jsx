import React from "react";
import { useSelector } from "react-redux";

import List from "./List/List.jsx";
import Search from "./Search/Search.jsx";

function SneakerCatalog() {
  const sneakers = useSelector((state) => state.sneakers.items);

  return (
    <div>
      <Search />
      <List items={sneakers} />
    </div>
  );
}

export default SneakerCatalog;

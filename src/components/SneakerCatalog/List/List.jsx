import React from "react";
import { useSelector } from "react-redux";
import Item from "../Item/Item";
import LoadingItem from "../LoadignItem/LoadingItem";

import "./List.scss";

function List({ items }) {
  const isReady = useSelector(({ sneakers }) => sneakers.isReady);
  const searchValue = useSelector(({ search }) => search.value);

  return (
    <div className="sneakers">
      {isReady
        ? items
            .filter((item) =>
              item.title.toLowerCase().includes(searchValue.toLowerCase())
            )
            .map((item) => <Item key={item.title} {...item} />)
        : Array(8).fill(<LoadingItem />)}
    </div>
  );
}

export default List;

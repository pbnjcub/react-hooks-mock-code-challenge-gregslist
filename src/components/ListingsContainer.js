import React from "react";
import ListingCard from "./ListingCard";

function ListingsContainer( {items, onDeleteItem }) {

  return (
    <main>
      <ul className="cards">
        {items.map((item) => (
          <ListingCard key={item.id}  item={item} onDeleteItem={onDeleteItem} />
        ))}
      </ul>
    </main>
  );
}

export default ListingsContainer;

import React, { useState, useEffect } from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {
  const [items, setItems] = useState([])
  const [search, setSearch] = useState(" ")

  useEffect(() => {
    fetch('http://localhost:6001/listings')
    .then((resp) => resp.json())
    .then((items) => setItems(items))
  }, [])

  console.log(search)
  function handleSearch(searchedItem) {
    console.log(searchedItem)
    const updatedItems = items.filter((item) => {
      if (searchedItem === " ") {
        return item
      } else {
        return item.description.toLowerCase().match(searchedItem)
      }
    })
    setItems(updatedItems)
  }
  console.log(items)
  function handleDeleteItem(deletedItem) {
    const updatedItems = items.filter((filter) => filter.id !== deletedItem.id);
    setItems(updatedItems);
  }



  return (
    <div className="app">
      <Header onSearch={handleSearch} setSearch={setSearch} search={search} />
      <ListingsContainer items={items} onDeleteItem={handleDeleteItem} />
    </div>
  );
}

export default App;

import React, { useState, useEffect } from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {
  const [items, setItems] = useState([])
  const [search, setSearch] = useState(" ")
  const [displayedItems, setDisplayedItems] = useState([])

  useEffect(() => {
    fetch('http://localhost:6001/listings')
    .then((resp) => resp.json())
    .then((items) => {
      setItems(items)
      setDisplayedItems(items)
    })
  }, [])
 
  function handleSearch() {
    const updatedItems = items.filter((item) => {
      if (search === "") {
        return item
      } else {
        return item.description.toLowerCase().match(search)
      }
    })
    console.log(updatedItems)
    setDisplayedItems(updatedItems)
  }
 
  function handleDeleteItem(deletedItem) {
    const updatedItems = items.filter((filter) => filter.id !== deletedItem.id);
    setItems(updatedItems)
    setDisplayedItems(updatedItems);
  }


  return (
    <div className="app">
      <Header onSearch={handleSearch} setSearch={setSearch} search={search} />
      <ListingsContainer items={displayedItems} onDeleteItem={handleDeleteItem} />
    </div>
  );
}

export default App;

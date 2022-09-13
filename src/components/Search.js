import React from "react";

function Search( { onSearch, setSearch, search } ) {


  function handleSubmit(e) {
    e.preventDefault();
    onSearch(search)
    console.log("submitted");
  }

  return (
    <form className="searchbar" onSubmit={handleSubmit}>
      <input
        type="text"
        id="search"
        placeholder="search free stuff"
        value={search}
        onChange={(e) => setSearch(e.target.value.toLowerCase())}
      />
      <button type="submit">🔍</button>
    </form>
  );
}

export default Search;

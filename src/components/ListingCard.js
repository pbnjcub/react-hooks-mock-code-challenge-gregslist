import React, {useState} from "react";

function ListingCard( {item, onDeleteItem } ) {
  const [isFavorited, setIsFavorited] = useState(false)

  function handleClickFavorite (e) {
    setIsFavorited(isFavorited => !isFavorited)
  }

  function handleDeleteClick() {
    fetch(`http://localhost:6001/listings/${item.id}`, {
      method: 'DELETE',
    })
      .then((resp) => resp.json())
      .then(() => onDeleteItem(item))
  }

  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={item.image} alt={item.description} />
      </div>
      <div className="details">
        {isFavorited ? (
          <button className="emoji-button favorite active" onClick={handleClickFavorite}>★</button>
        ) : (
          <button className="emoji-button favorite" onClick={handleClickFavorite}>☆</button>
        )}
        <strong>{item.description}</strong>
        <span> · {item.location}</span>
        <button className="emoji-button delete" onClick={handleDeleteClick} >🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;

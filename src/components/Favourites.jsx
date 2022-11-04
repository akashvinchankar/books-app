import React from 'react';
import '../App.css';
import { useAppContext } from '../context/appContext';

const Favourites = () => {
  const { favourites, addToFavourites, removeFromFavourites } = useAppContext();

  console.log(favourites);

  const favouritesChecker = (id) => {
    return favourites.some((book) => book.id === id);
  };

  return (
    <div className="favourites">
      {favourites.length > 0 ? (
        favourites.map((book) => (
          <div key={book.id} className="book">
            <div>
              <h4>{book.title}</h4>
            </div>
            <div>
              <img src={book.image_url} alt="#" />
            </div>
            <div>
              {favouritesChecker(book.id) ? (
                <button onClick={() => removeFromFavourites(book.id)}>
                  Remove from Favourites
                </button>
              ) : (
                <button onClick={() => addToFavourites(book)}>
                  Add to Favourites
                </button>
              )}
            </div>
          </div>
        ))
      ) : (
        <h1>You don't have any favourite books yet!!</h1>
      )}
    </div>
  );
};

export default Favourites;

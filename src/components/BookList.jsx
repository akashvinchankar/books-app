import React, { useEffect, useState } from 'react';
import '../App.css';
import { API_URL } from '../API';
import axios from 'axios';
import { useAppContext } from '../context/appContext';
import { useNavigate } from 'react-router';

const BookList = () => {
  const [books, setBooks] = useState([]);

  const navigate = useNavigate();

  const { favourites, addToFavourites, removeFromFavourites } = useAppContext();

  const favouritesChecker = (id) => {
    return favourites.some((book) => book.id === id);
  };

  useEffect(() => {
    axios
      .get(API_URL)
      .then((res) => {
        console.log(res.data);
        setBooks(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="book-list">
      {books.map((book) => (
        <div key={book.id} className="book">
          <div>
            <h4>{book.title}</h4>
          </div>
          <div>
            <img
              src={book.image_url}
              alt="#"
              onClick={() => navigate(`/books/${book.id}`)}
            />
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
      ))}
    </div>
  );
};

export default BookList;

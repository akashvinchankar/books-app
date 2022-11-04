import { createContext, useContext, useState } from 'react';

const AppContext = createContext();

const AppContextProvider = ({ children }) => {
  const [favourites, setFavourites] = useState([]);

  const addToFavourites = (book) => {
    setFavourites([...favourites, book]);
  };

  const removeFromFavourites = (id) => {
    const oldFavourites = [...favourites];
    const newFavourites = oldFavourites.filter((book) => book.id !== id);
    setFavourites(newFavourites);
  };

  return (
    <AppContext.Provider
      value={{
        favourites,
        addToFavourites,
        removeFromFavourites,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);

  if (context === undefined) {
    throw new Error('AppContext must be within AppContextProvider');
  }

  return context;
};

export default AppContextProvider;

import React, { createContext, useContext, useState, useEffect } from 'react';

interface LibraryContextType {
  favorites: string[];
  toggleFavorite: (bookId: string) => void;
  isFavorite: (bookId: string) => boolean;
}

const LibraryContext = createContext<LibraryContextType | undefined>(undefined);

export const LibraryProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [favorites, setFavorites] = useState<string[]>(() => {
    const saved = localStorage.getItem('bookclub_favorites');
    // Default mock favorites to make it look nice initially if empty
    return saved ? JSON.parse(saved) : ['1', '3', '7', '30']; 
  });

  useEffect(() => {
    localStorage.setItem('bookclub_favorites', JSON.stringify(favorites));
  }, [favorites]);

  const toggleFavorite = (bookId: string) => {
    setFavorites(prev => 
      prev.includes(bookId) ? prev.filter(id => id !== bookId) : [...prev, bookId]
    );
  };

  const isFavorite = (bookId: string) => favorites.includes(bookId);

  return (
    <LibraryContext.Provider value={{ favorites, toggleFavorite, isFavorite }}>
      {children}
    </LibraryContext.Provider>
  );
};

export const useLibrary = () => {
  const context = useContext(LibraryContext);
  if (context === undefined) {
    throw new Error('useLibrary must be used within a LibraryProvider');
  }
  return context;
};

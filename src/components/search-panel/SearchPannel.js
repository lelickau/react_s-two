import React from 'react';
import './SearchPannel.css';

const SearchPannel = () => {
  return (
    <input
            className="form-control search-input"
            type="text"
            placeholder="Поиск по записям"
        />
  );
}

export default SearchPannel;
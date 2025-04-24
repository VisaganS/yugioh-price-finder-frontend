// src/components/SearchBar.jsx
import React from 'react';
import './SearchBar.scss';

export default function SearchBar({ value, onChange, onSearch }) {
  return (
    <form className="search-bar" onSubmit={onSearch}>
      <input
        className="search-bar__input"
        type="text"
        placeholder="Enter card name"
        value={value}
        onChange={e => onChange(e.target.value)}
      />
      <button className="search-bar__button" type="submit">
        Search
      </button>
    </form>
  );
}

import React from 'react';
import { MdSearch } from 'react-icons/md';

const Searchbox = () => {
  return (
    <div className="searchBox">
      <input type="text" placeholder="Buscar" />
      <MdSearch />
    </div>
  );
};

export default Searchbox;

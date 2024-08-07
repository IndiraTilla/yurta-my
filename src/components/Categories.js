import React from 'react';
import { FaCouch, FaBed, FaDesktop, FaMugHot, FaWindowClose } from 'react-icons/fa'; // Updated imports
import '../styles/Categories.css';

const Categories = () => {
  return (
    <div className="categories">
      <div className="category">
        <FaCouch size={40} />
        <p>Гостиная</p>
      </div>
      <div className="category">
        <FaBed size={40} />
        <p>Спальня</p>
      </div>
      <div className="category">
        <FaDesktop size={40} />
        <p>Офис</p>
      </div>
      <div className="category">
        <FaMugHot size={40} />
        <p>Кухня</p>
      </div>
      <div className="category">
        <FaWindowClose size={40} />
        <p>Балкон</p>
      </div>
    </div>
  );
};

export default Categories;

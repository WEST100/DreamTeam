import React from 'react'
import { Link } from 'react-router-dom';
import "./CategoryCard.scss";

const CategoryCard = ({ category }) => {
  return (
    <div className="categories__card">
      <div className="categories__card-item">
        <Link to={`/categories/${category.id}`}>
          <img src={`https://exam-server-5c4e.onrender.com/${category.image}`} alt="category_img" />
        </Link>
      </div>
      <p>
        <Link to={`/categories/${category.id}`}>{category.title}</Link>
      </p>
    </div>
  );
};

export default CategoryCard
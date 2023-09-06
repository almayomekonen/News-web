import React from "react";
import { Link } from "react-router-dom";

const Card = ({ article }) => (
  <Link to={`/news/${article.id}`}>
    <div className="Card">
      <header>{article.headline}</header>
      <div
        className="card-img"
        style={{ backgroundImage: `url('${article.imgUrl}')` }}
      ></div>
      <footer>{article.description}</footer>
    </div>
  </Link>
);

export default Card;

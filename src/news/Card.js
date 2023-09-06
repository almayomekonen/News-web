import React from "react";
import { Link } from "react-router-dom";

const Card = ({ article }) => (
  <Link to={`/news/${article.id}`}>
    <div className="Card">
      <div
        className="card-img"
        style={{ backgroundImage: `url('${article.imgUrl}')` }}
      ></div>
      <header>{article.headline}</header>
      <footer>{article.description}</footer>
    </div>
  </Link>
);

export default Card;

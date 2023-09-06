import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { GeneralContext } from "../App";
import { Link } from "react-router-dom";
import Talkbacks from "../talkbacks/Talkbacks";
import "./News.css";

export default function NewsPage() {
  const [article, setArticle] = useState(null);
  const [error, setError] = useState(false);
  const { id } = useParams();
  const { snackbar, setIsLoader } = useContext(GeneralContext);

  useEffect(() => {
    setIsLoader(true);

    fetch(
      `https://api.shipap.co.il/articles/${id}?token=ce742e70-44f2-11ee-ba96-14dda9d4a5f0`
    )
      .then((res) => res.json())
      .then((data) => {
        setArticle(data);
        setIsLoader(false);
      });
  }, [id]);

  return (
    <div className="NewsPage">
      {article ? (
        <div className="article">
          <Link to="/">
            <button className="back">back</button>
          </Link>
          <h3>{article.headline}</h3>
          <p>{article.description}</p>
          <img src={article.imgUrl} width="100%" alt={article.headline} />
          <p>{article.content}</p>
          <Talkbacks articleId={id} />
        </div>
      ) : (
        <p className="article">Loading...</p>
      )}
    </div>
  );
}

import React, { useContext, useEffect, useState } from "react";
import { GeneralContext } from "../App";
import Card from "./Card";
import "./News.css";

const News = () => {
  const [articles, setArticles] = useState([]);
  const { snackbar, setIsLoader } = useContext(GeneralContext);

  useEffect(() => {
    setIsLoader(true);

    fetch(
      `https://api.shipap.co.il/articles?token=ce742e70-44f2-11ee-ba96-14dda9d4a5f0`
    )
      .then((res) => res.json())
      .then((data) => {
        setArticles(data);
        setIsLoader(false);
      });
  }, []);

  return (
    <div className="News">
      {articles.map((article) => (
        <Card key={article.id} article={article} />
      ))}
    </div>
  );
};

export default News;

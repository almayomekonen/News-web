import { Route, Routes } from "react-router-dom";
import News from "./news/News";
import NewsPage from "./news/NewsPage";

const Router = () => {
  return (
    <Routes>
      <Route path="/News" element={<News />} />
      <Route path="/news/:id" element={<NewsPage />} />
    </Routes>
  );
};
export default Router;

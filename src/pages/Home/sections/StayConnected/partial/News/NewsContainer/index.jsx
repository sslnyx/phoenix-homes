import React, { useEffect, useState } from "react";
import NewsLine from "./NewsLine";
import newsData from "./newsData";
import ArrowRBtn from "../../../../../../../components/ArrowRBtn";
import "./index.scss";

const NewsContainer = () => {
  const [page, setPage] = useState(0);

  const paginatedNews = newsData.reduce((acc, news, i) => {
    let idx = Math.floor(i / 3);
    !acc[idx] ? (acc[idx] = []) : "";
    acc[idx].push(news);
    return acc;
  }, []);

  const NextPageHandler = (currentPage) => {
    currentPage + 1 < paginatedNews.length ? setPage((currentPage += 1)) : "";
  };

  const PrevPageHandler = (currentPage) => {
    currentPage ? setPage((currentPage -= 1)) : "";
  };

  return (
    <div className="news-line-wrapper d-flex flex-column">
      <div>
        {paginatedNews[page]
          ? paginatedNews[page].map((news, i) => <NewsLine {...news} key={i} />)
          : ""}
      </div>

      <div style={{ flex: 1 }}></div>

      <div className="d-flex justify-content-between">
        {page ? <div onClick={() => PrevPageHandler(page)}>Prev</div> : ""}
        {page !== paginatedNews.length - 1 ? (
          <div onClick={() => NextPageHandler(page)}>
            <ArrowRBtn way="right">VIEW MORE ARTICLES</ArrowRBtn>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default NewsContainer;

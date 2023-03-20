import { notFound } from "next/navigation";
import React from "react";
import Article from "./Article";

type Props = {
  news: NewsResponse | null;
};

function NewsList({ news }: Props) {
  if (!news) {
    return notFound();
  }
  return (
    <main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-10 gap-10">
      {news.data.map((article, i) => (
        <Article article={article} key={article.title} />
      ))}
    </main>
  );
}

export default NewsList;

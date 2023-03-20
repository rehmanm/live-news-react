import React from "react";
import { categories } from "../../../constant";
import { fetchNews } from "../../../lib/fetchNews";
import NewsList from "../../NewsList";

type Props = {
  params: { category: Category };
};
async function NewsCategory({ params: { category } }: Props) {
  const news: NewsResponse | null = await fetchNews(category);

  return (
    <div>
      <h1 className="headerTitle">Search Result for {category}</h1>
      <NewsList news={news} />
    </div>
  );
}

export default NewsCategory;

export async function generateStaticParams() {
  return categories.map((category) => ({
    category: category,
  }));
}

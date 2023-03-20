import { categories } from "../constant";
import { fetchNews } from "../lib/fetchNews";
import NewsList from "./NewsList";

async function HomePage() {
  //fetch news data
  const news: NewsResponse | null = await fetchNews(categories.join(","));

  return (
    <div>
      <NewsList news={news} />
    </div>
  );
}

export default HomePage;

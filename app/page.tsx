import { categories } from "../constant";
import { fetchNews } from "../lib/fetchNews";


async function HomePage() {

  //fetch news data
  const news: NewsResponse = await fetchNews(categories.join(","))
  return <div className="grid grid-cols-3">
    { /* News List news */ }
    {
      news.data.map((data, i) => (
        <span key={`key-${i}`}>{ data.author }</span>
      ))
    }

  </div>;
}

export default HomePage;

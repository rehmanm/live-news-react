import { fetchNews } from "../../lib/fetchNews";
import NewsList from "../NewsList";

type Props = {
  searchParams?: { term: string };
};

async function Search({ searchParams }: Props) {
  const news: NewsResponse | null = await fetchNews(
    "general",
    searchParams?.term,
    true
  );

  return (
    <div>
      <h1 className="headerTitle">Search Result for {searchParams?.term}</h1>
      <NewsList news={news} />
    </div>
  );
}

export default Search;

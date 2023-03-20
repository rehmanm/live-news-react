import { gql } from "graphql-request";
import sortNewsByImage from "./sortNewsByImage";

export const fetchNews = async (
  category?: Category | string,
  keywords?: string,
  isDynamic?: boolean
): Promise<NewsResponse | null> => {
  //Graph Ql
  const query = gql`
    query MyQuery(
      $access_key: String!
      $categories: String!
      $keywords: String
    ) {
      myQuery(
        access_key: $access_key
        categories: $categories
        countries: "gb"
        sort: "published_desc"
        keywords: $keywords
      ) {
        data {
          author
          category
          image
          description
          country
          language
          source
          title
          url
          published_at
        }
        pagination {
          count
          limit
          total
          offset
        }
      }
    }
  `;

  // Fetch function with Next.js caching
  const headers = {
    "Content-Type": "application/json",
    Authorization: `Apikey ${process.env.STEPZEN_API_KEY}`,
  };

  const res = await fetch(
    "https://portchester.stepzen.net/api/quieting-ibis/__graphql",
    {
      method: "POST",
      cache: isDynamic ? "no-cache" : "default",
      next: isDynamic ? { revalidate: 0 } : { revalidate: 20 },
      headers,
      body: JSON.stringify({
        query,
        variables: {
          access_key: process.env.MEDIASTACK_API_KEY,
          categories: category,
          keywords: keywords,
        },
      }),
    }
  );

  const newsResponse = await res.json();

  if (!newsResponse.errors) {
    //Sort function
    const sortedNewsResponse = sortNewsByImage(newsResponse.data.myQuery);

    return sortedNewsResponse;
  }
  return null;
};

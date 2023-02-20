export default function sortNewsByImage(newsResponse: NewsResponse) : NewsResponse {

    const newsWithImage = newsResponse.data.filter((news) => news.image !== null);
    const newsWithoutImage = newsResponse.data.filter((news) => news.image === null);

    const sortedNewsResponse= {
        pagination: newsResponse.pagination,
        data: [...newsWithImage, ...newsWithoutImage]
    } 

    return sortedNewsResponse;
}
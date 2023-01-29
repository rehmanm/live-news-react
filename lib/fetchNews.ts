export const fetchNews = async(category?: Category | string, keywords?: string, isDynamic?: boolean) =>{
    //Graph Ql

    // Fetch function with Next.js caching

    //Sort function

    // return 
    
    const artcile: Article = {
        author: "a",
        category: "c",
        country: "string",
        description: "string",
        image: "string | null",
        language: "string",
        published_at: "string",
        source: "string",
        title: "string",
        url: "string",

    };
    const newsResponse: NewsResponse =  {
        data: [
            artcile, artcile, artcile, artcile, artcile
        ], pagination:{
            count: 10,
            limit: 100,
            offset:0, 
            total: 500
        }
    };

    return newsResponse
}
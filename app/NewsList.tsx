 
import React from 'react'
import Article from './Article'

type Props = {
    news: NewsResponse
}

function NewsList({ news }: Props) {
  return (
    <main className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-10 gap-10'>{
            news.data.map((article, i) => (
                <Article article={ article } key={article.title} />
            ))
        }
    </main>
  )
}

export default NewsList

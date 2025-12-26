import React, { useEffect, useState } from 'react'
import NewzCard from './NewzCard.jsx'

const NewzContainer = ({ category }) => {
  const [news, setNews] = useState([])
  const [loading, setLoading] = useState(false)

  const URL = import.meta.env.VITE_URL

  useEffect(() => {
    fetchNews()
  }, [category])

  async function fetchNews() {
    try {
      setLoading(true)

      const response = await fetch(`${URL}?category=${category}`)
      const data = await response.json()

      setNews(data.articles || [])
    } catch (error) {
      console.error(error)
      setNews([])
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="container mx-auto pb-10">
      {loading ? (
        <div className="min-h-[75vh] flex items-center justify-center">
          <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
        </div>
      ) : (
        <div className="flex flex-wrap items-start justify-around gap-6">
          {news.map(newsItem =>
            newsItem.urlToImage ? (
              <a
                key={newsItem.url}
                href={newsItem.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <NewzCard
                  title={newsItem.title}
                  image={newsItem.urlToImage}
                  description={(newsItem.description || '').slice(0, 300)}
                  date={new Date(newsItem.publishedAt).toLocaleDateString()}
                />
              </a>
            ) : null
          )}
        </div>
      )}
    </div>
  )
}

export default NewzContainer

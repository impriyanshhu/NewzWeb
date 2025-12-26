import React, { useEffect, useState } from 'react'
import NewzCard from './NewzCard.jsx';

const NewzContainer = ({category}) => {

    const [news, setNews] = useState([]);
    const [loading, setLoading] = useState(false);
    const URL = import.meta.env.VITE_URL;

    useEffect(() => {
        fetchNews();
    }, [category]);

    async function fetchNews() {
        setLoading(true)
        const url = `${URL}?category=${category}`;
        let response = await fetch(url);
        response = await response.json();
        setNews(response.articles);
        setLoading(false);
    }

    return (
        <div className='container mx-auto pb-10'>
            {loading ?
                <div className="min-h-[75vh] flex items-center justify-center">
                    <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
                </div>
                :
                <div className='flex flex-wrap items-start justify-around gap-6'>
                    {news.map((newsItem) => {
                        if (newsItem.urlToImage !== null) {
                            return (
                                <a
                                    href={newsItem.url}
                                    target='_blank'
                                >
                                    <NewzCard
                                        key={newsItem.url}
                                        title={newsItem.title}
                                        image={newsItem.urlToImage}
                                        description={newsItem.description.slice(0, 300)}
                                        date={new Date(newsItem.publishedAt).toLocaleDateString()}
                                    />
                                </a>
                            )
                        }
                    })}
                </div>
            }
        </div>
    )
}

export default NewzContainer

'use client'

import { useEffect, useState } from 'react'

export default function NewsPage() {
  const [news, setNews] = useState(null)

  useEffect(() => {
    fetch('http://localhost:8080/api/content/')
      .then((res) => {
        if (!res.ok) throw new Error('Серверээс өгөгдөл авч чадсангүй')
        return res.json()
      })
      .then((data) => setNews(data))
      .catch((err) => console.error('Алдаа:', err))
  }, [])

  if (!news) {
    return <div className="text-center text-gray-500 mt-10">Ачааллаж байна...</div>
  }

  console.log(news);
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-md p-6">
        <h1
          className="text-2xl font-bold text-gray-800 mb-2"
          dangerouslySetInnerHTML={{ __html: news.title }}
        />
        <div className="text-sm text-gray-500 mb-4">
          Зохиогч: {news.author} · {news.createAt}
        </div>
        <div
          className="text-base leading-relaxed"
          dangerouslySetInnerHTML={{ __html: news.news }}
        />
      </div>
    </div>
  )
}

'use client'
import Head from 'next/head'
import Layout from './components/Layout'
import ProductGrid from './components/ProductGrid'
import { useState } from 'react'

export default function Home() {
  const [currentPage, setCurrentPage] = useState(1);
  
  const products = [
    { id: '1', name: 'EW200E', price: '11,600,000', imageUrl: 'https://gratisography.com/wp-content/uploads/2025/03/gratisography-robot-portrait-1036x780.jpg' },
    { id: '2', name: 'DX300R 계양', price: '7,700,000', imageUrl: 'https://gratisography.com/wp-content/uploads/2025/03/gratisography-robot-portrait-1036x780.jpg' },
    { id: '3', name: '220', price: '4,100,000', imageUrl: 'https://gratisography.com/wp-content/uploads/2025/03/gratisography-robot-portrait-1036x780.jpg' },
    { id: '4', name: 'HX60', price: '2,460,000', imageUrl: 'https://gratisography.com/wp-content/uploads/2025/03/gratisography-robot-portrait-1036x780.jpg' },
  ];

  return (
    <Layout>
      <Head>
        <title>YNE TULGA - Тоног төхөөрөмжийн худалдаа</title>
        <meta name="description" content="Construction equipment sales" />
      </Head>

      <div className="container mx-auto px-4 py-8">
        <div className="bg-white p-4 rounded shadow-sm mb-6">
          <div className="flex flex-wrap gap-2 mb-4">
            <select className="border rounded px-2 py-1 text-sm">
              <option>제조사</option>
            </select>
            <select className="border rounded px-2 py-1 text-sm">
              <option>보증/일반/매입</option>
            </select>
            <select className="border rounded px-2 py-1 text-sm">
              <option>융차</option>
            </select>
            <select className="border rounded px-2 py-1 text-sm">
              <option>등록일</option>
            </select>
            <select className="border rounded px-2 py-1 text-sm">
              <option>년식</option>
            </select>
            <select className="border rounded px-2 py-1 text-sm">
              <option>지역</option>
            </select>
            <select className="border rounded px-2 py-1 text-sm">
              <option>품목</option>
            </select>
          </div>

          <div className="flex flex-wrap gap-2 mb-4">
            <label className="flex items-center">
              <input type="checkbox" className="mr-1" />
              <span className="text-sm">올컬러</span>
            </label>
            <label className="flex items-center">
              <input type="checkbox" className="mr-1" />
              <span className="text-sm">진품사진</span>
            </label>
            <label className="flex items-center">
              <input type="checkbox" className="mr-1" />
              <span className="text-sm">영상</span>
            </label>
            <label className="flex items-center">
              <input type="checkbox" className="mr-1" />
              <span className="text-sm">거래</span>
            </label>
          </div>

          <div className="flex justify-end">
            <button className="bg-gray-800 text-white px-4 py-1 rounded text-sm">
              검색
            </button>
          </div>
        </div>

        <ProductGrid products={products} />
        
        <div className="flex justify-center mt-6 gap-1">
          <button className="px-3 py-1 border rounded hover:bg-gray-100">&lt;&lt;</button>
          <button className="px-3 py-1 border rounded hover:bg-gray-100">&lt;</button>
          <button className="px-3 py-1 border rounded bg-green-600 text-white">1</button>
          <button className="px-3 py-1 border rounded hover:bg-gray-100">2</button>
          <button className="px-3 py-1 border rounded hover:bg-gray-100">3</button>
          <button className="px-3 py-1 border rounded hover:bg-gray-100">4</button>
          <button className="px-3 py-1 border rounded hover:bg-gray-100">&gt;</button>
          <button className="px-3 py-1 border rounded hover:bg-gray-100">&gt;&gt;</button>
        </div>
      </div>
    </Layout>
  )
}
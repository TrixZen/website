"use client";
import { useEffect, useState } from "react";

export default function Home() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:8080/scrape/unegui")
      .then((res) => res.json())
      .then((res) => {
        setData(res);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  return (
    <main className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 md:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-semibold text-center text-gray-800 mb-8">
          Unegui.mn зарууд
        </h1>

        {loading ? (
          <div className="text-center text-lg text-gray-500">Уншиж байна...</div>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {data.map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 ease-in-out"
              >
                <div className="relative">
                  <img
                    src={item.imageUrl}
                    alt={item.title}
                    className="w-full h-56 object-cover object-center"
                  />
                  <div className="absolute top-3 left-3 bg-gray-800 text-white px-3 py-1 rounded-full text-xs">
                    Онцгой
                  </div>
                </div>
                <div className="p-6">
                  <h2 className="text-xl font-semibold text-gray-800 truncate">
                    {item.title}
                  </h2>
                  <p className="mt-2 text-gray-600">{item.price}</p>
                  <p className="text-sm text-gray-500 mt-1">{item.location}</p>
                  <a
                    href="#"
                    className="mt-4 inline-block text-indigo-600 hover:text-indigo-800 text-sm font-semibold"
                  >
                    Дэлгэрэнгүй
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}

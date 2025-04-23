// app/page.js
"use client";
import { useRouter } from "next/navigation";

export default function LandingPage() {
  const router = useRouter();

  const navigateTo = (path) => {
    router.push(path);
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      {/* Navigation Bar */}
      <nav className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex">
              <div className="flex-shrink-0 flex items-center">
                <h1 className="text-2xl font-bold text-gray-800">Машин Хайх</h1>
              </div>
            </div>
            <div className="flex items-center">
              
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section with Menu Cards */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
            Машин, тоног төхөөрөмж хайх
          </h1>
          <p className="mt-4 text-xl text-gray-600">
            Та доорх хайлтын сонголтуудаас сонгоно уу
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Excavator Card */}
          <div 
            className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer"
            onClick={() => navigateTo("/excavator")}
          >
            <div className="p-6">
              <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-gray-800 mb-2">Гидравлик экскаватор</h2>
              <p className="text-gray-600 mb-4">
                Үнэ, загвар болон бусад үзүүлэлтээр экскаваторуудыг харьцуулан үзэх
              </p>
              <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md font-medium transition">
                Хайх
              </button>
            </div>
          </div>

          {/* Unegui Card */}
          <div 
            className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer"
            onClick={() => navigateTo("/unegui")}
          >
            <div className="p-6">
              <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-gray-800 mb-2">Унэгүй.мн хайлт</h2>
              <p className="text-gray-600 mb-4">
                Унэгүй.мн дээрх зар
              </p>
              <button className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-md font-medium transition">
                Хайх
              </button>
            </div>
          </div>
          {/* News Card */}
          <div 
            className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer"
            onClick={() => navigateTo("/news")}
          >
            <div className="p-6">
              <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-gray-800 mb-2">News</h2>
              <p className="text-gray-600 mb-4">
                 News 
              </p>
              <button className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-md font-medium transition">
                Харах
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p>&copy; 2025 Хувийн хэрэглээний зориулалттай вэб.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
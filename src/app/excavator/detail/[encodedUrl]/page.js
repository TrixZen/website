"use client";
import { useEffect, useState, use } from "react";
import Link from "next/link";

export default function ExcavatorDetailPage({ params }) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { encodedUrl } = use(params);
  const detailUrl = decodeURIComponent(encodedUrl);
  console.log("detailUrl", detailUrl);
  useEffect(() => {
    fetch(`http://localhost:8080/scrape/excavator/detail?url=${detailUrl}`)
    .then((res) => res.json())
    .then((res) => {
        setData(res);
        setLoading(false);
    })
    .catch((err) => {
      console.error("Алдаа гарлаа:", err);
      setError("Мэдээлэл авахад алдаа гарлаа.");
      setLoading(false);
    });
  }, [detailUrl]);

  return (
    <main className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 md:px-8">
      {/* Navigation Bar */}
      <nav className="bg-white shadow-md mb-8 rounded-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex">
              <div className="flex-shrink-0 flex items-center">
                <Link href="/" className="text-2xl font-bold text-gray-800">МашинХайх</Link>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Link 
                href="/excavator" 
                className="px-3 py-2 text-blue-600 font-medium"
              >
                Экскаватор
              </Link>
              <Link 
                href="/unegui" 
                className="px-3 py-2 text-gray-500 hover:text-gray-700"
              >
                Унэгүй.мн
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-4xl mx-auto">
        {loading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
            <p className="ml-4 text-lg text-gray-500">Уншиж байна...</p>
          </div>
        ) : error ? (
          <div className="bg-red-50 border border-red-200 rounded-lg p-6 text-center">
            <p className="text-red-500 text-lg">{error}</p>
            <button 
              className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
              onClick={() => window.location.reload()}
            >
              Дахин оролдох
            </button>
          </div>
        ) : (
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            {/* Header with main info */}
            <div className="bg-blue-600 p-6 text-white">
              <div className="flex justify-between items-center">
                <h1 className="text-3xl font-bold">{data["제작사"]} {data["모델명"]}</h1>
                <div className="bg-white text-blue-700 px-4 py-2 rounded-full font-bold text-xl">
                  {data["가격"]}
                </div>
              </div>
              <div className="mt-2 flex items-center">
                <span className="inline-block bg-blue-800 text-white px-3 py-1 rounded-full text-sm font-semibold mr-3">
                  {data["상태"]}
                </span>
                <span className="text-white text-sm">
                  제작: {data["제작년월"]} | 운행: {data["운행"]}
                </span>
              </div>
            </div>

            {/* Detail information table */}
            <div className="p-6">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">상세 정보</h2>
              
              <div className="overflow-hidden border border-gray-200 rounded-lg">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider" colSpan="4">
                        기본 정보
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap bg-gray-50 w-1/4">
                        <div className="text-sm font-medium text-gray-900">구분</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap w-1/4">
                        <div className="text-sm text-gray-900">{data["구분"] || "-"}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap bg-gray-50 w-1/4">
                        <div className="text-sm font-medium text-gray-900">제작년월</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap w-1/4">
                        <div className="text-sm text-gray-900">{data["제작년월"] || "-"}</div>
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap bg-gray-50">
                        <div className="text-sm font-medium text-gray-900">분류</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">{data["분류"] || "-"}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap bg-gray-50">
                        <div className="text-sm font-medium text-gray-900">상태</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">{data["상태"] || "-"}</div>
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap bg-gray-50">
                        <div className="text-sm font-medium text-gray-900">제작사</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">{data["제작사"] || "-"}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap bg-gray-50">
                        <div className="text-sm font-medium text-gray-900">위치</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">{data["위치"] || "-"}</div>
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap bg-gray-50">
                        <div className="text-sm font-medium text-gray-900">모델명</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">{data["모델명"] || "-"}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap bg-gray-50">
                        <div className="text-sm font-medium text-gray-900">가격</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900 font-bold">{data["가격"] || "-"}</div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Technical specifications */}
              <div className="mt-6 overflow-hidden border border-gray-200 rounded-lg">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider" colSpan="4">
                        기술 사양
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap bg-gray-50 w-1/4">
                        <div className="text-sm font-medium text-gray-900">엔진</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap w-1/4">
                        <div className="text-sm text-gray-900">{data["엔진"] || "-"}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap bg-gray-50 w-1/4">
                        <div className="text-sm font-medium text-gray-900">밋션</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap w-1/4">
                        <div className="text-sm text-gray-900">{data["밋션"] || "-"}</div>
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap bg-gray-50">
                        <div className="text-sm font-medium text-gray-900">톤수</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">{data["톤수"] || "-"}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap bg-gray-50">
                        <div className="text-sm font-medium text-gray-900">운행</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">{data["운행"] || "-"}</div>
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap bg-gray-50">
                        <div className="text-sm font-medium text-gray-900">할부여부/원금</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">{data["할부여부/원금"] || "-"}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap bg-gray-50">
                        <div className="text-sm font-medium text-gray-900">사고여부</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">{data["사고여부"] || "-"}</div>
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap bg-gray-50">
                        <div className="text-sm font-medium text-gray-900">하부타입</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">{data["하부타입"] || "-"}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap bg-gray-50">
                        <div className="text-sm font-medium text-gray-900">하부상태</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">{data["하부상태"] || "-"}</div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Seller information */}
              <div className="mt-6 overflow-hidden border border-gray-200 rounded-lg">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider" colSpan="4">
                        판매자 정보
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap bg-gray-50 w-1/4">
                        <div className="text-sm font-medium text-gray-900">작성구분</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap w-1/4">
                        <div className="text-sm text-gray-900">{data["작성구분"] || "-"}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap bg-gray-50 w-1/4">
                        <div className="text-sm font-medium text-gray-900">IP주소</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap w-1/4">
                        <div className="text-sm text-gray-900">{data["IP주소"] || "-"}</div>
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap bg-gray-50">
                        <div className="text-sm font-medium text-gray-900">상호</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">{data["상호"] || "-"}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap bg-gray-50">
                        <div className="text-sm font-medium text-gray-900">연락처</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">{data["연락처"] || "-"}</div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Action buttons */}
              <div className="mt-8 flex justify-between">
                <Link 
                  href="/excavator" 
                  className="px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
                >
                  목록으로 돌아가기
                </Link>
                <div>
                  <button 
                    className="mr-3 px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700"
                    onClick={() => window.open(`tel:${data["연락처"]}`, "_self")}
                  >
                    판매자에게 전화
                  </button>
                  <button 
                    className="px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
                  >
                    찜하기
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
import Link from 'next/link'

export default function SideMenu() {
  return (
    <div className="bg-white text-black p-4 mt-4 rounded">
      <ul>
        <li className="border-b border-green-400 py-2">
          <Link href="/category/1">
            <span className="block hover:bg-white-600 p-2 rounded cursor-pointer">Item 1</span>
          </Link>
        </li>
        <li className="border-b border-green-400 py-2">
          <Link href="/category/2">
            <span className="block hover:bg-green-600 p-2 rounded cursor-pointer">Item 2</span>
          </Link>
        </li>
      </ul>

      <div className="mt-4 bg-white-600 rounded">
        <ul>
          <li className="border-b border-green-500 py-2">
            <Link href="/subcategory/1">
              <span className="block hover:bg-green-700 p-2 rounded cursor-pointer">Item 1</span>
            </Link>
          </li>
          <li className="border-b border-green-500 py-2">
            <Link href="/subcategory/2">
              <span className="block hover:bg-green-700 p-2 rounded cursor-pointer">Item 2</span>
            </Link>
          </li>
          <li className="border-b border-green-500 py-2">
            <Link href="/subcategory/3">
              <span className="block hover:bg-green-700 p-2 rounded cursor-pointer">Item 3</span>
            </Link>
          </li>
          <li className="py-2">
            <Link href="/subcategory/4">
              <span className="block hover:bg-green-700 p-2 rounded cursor-pointer">Item 4</span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  )
}
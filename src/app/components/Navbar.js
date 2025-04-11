import Link from 'next/link'
import Image from 'next/image'

export default function Navbar() {
  return (
    <nav className="bg-white-500 text-black shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Link href="/">
                <span className="flex items-center cursor-pointer">
                  <Image src="/logo_new.png" alt="YNE TULGA" width={80} height={80} />
                </span>
              </Link>
            </div>
          </div>
          
          <div className="hidden md:block">
            <div className="flex items-center space-x-4">
              <Link href="/about">
                <span className="px-3 py-2 rounded-md hover:bg-green-600 cursor-pointer">Танилцуулга</span>
              </Link>
              <Link href="/products">
                <span className="px-3 py-2 rounded-md hover:bg-green-600 cursor-pointer">Татварын мэдээлэл</span>
              </Link>
              <Link href="/services">
                <span className="px-3 py-2 rounded-md hover:bg-green-600 cursor-pointer">Төлбөрийн зарлалын мэдээлэл</span>
              </Link>
              <Link href="/contact">
                <span className="px-3 py-2 rounded-md hover:bg-green-600 cursor-pointer">Тооцоолол</span>
              </Link>
              <Link href="/contact">
                <span className="px-3 py-2 rounded-md hover:bg-green-600 cursor-pointer">Зар нэмэх</span>
              </Link>
            </div>
          </div>

          <div className="flex items-center">
            <button className="bg-white text-gray-800 px-3 py-1 rounded text-sm">
              EN
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}
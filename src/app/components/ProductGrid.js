import Image from 'next/image'
import Link from 'next/link'

export default function ProductGrid({ products }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {products.map((product) => (
        <div key={product.id} className="bg-white overflow-hidden rounded shadow-sm">
          <Link href={`/product/${product.id}`}>
            <div className="cursor-pointer">
              <div className="relative h-48">
                <Image 
                  src={product.imageUrl} 
                  alt={product.name}
                  layout="fill"
                  objectFit="cover"
            
                />
              </div>
              <div className="p-3 text-center">
                <h3 className="text-gray-800 font-medium">{product.name}</h3>
                <div className="mt-2 text-red-600">가격 {product.price} 원</div>
                <div className="mt-1 text-gray-600">A+급</div>
              </div>
            </div>
          </Link>
        </div>
      ))}
    </div>
  )
}
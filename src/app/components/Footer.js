import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="bg-white text-black py-8 mt-8 drop-shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <div className="flex items-center">
              <Image src="/logo_new.png" alt="YNE TULGA" width={140} height={140} />
            </div>
          </div>
          
          <div className="text-center mb-4 md:mb-0">
            <h3 className="font-bold mb-2">Хаяг</h3>
            <p>Монгол улс, Улаанбаатар хот, Хан-Уул дүүрэг, 15-р хороо,</p>
            <p>CEO office, 7 давхар, 703 тоот.</p>
          </div>
          
          <div className="text-center">
            <h3 className="font-bold mb-2">Холбоо барих</h3>
            <p>Утасны дугаар : 12345678</p>
            <p>email: example@gmail.com</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
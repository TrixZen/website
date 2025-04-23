import "./globals.css";

export const metadata = {
  title: "Unegui.mn зарууд",
  description: "Unegui.mn сайт дахь заруудыг хялбар харах вэб",
};

export default function RootLayout({ children }) {
  return (
    <html lang="mn">
      <body className="bg-gray-100 text-gray-900">
        <header className="bg-white shadow p-4">
          <div className="container mx-auto">
            <h1 className="text-xl font-bold">Scraper</h1>
          </div>
        </header>

        <main className="container mx-auto p-4">{children}</main>

        <footer className="bg-white text-center text-sm text-gray-500 p-4 mt-10">
          © {new Date().getFullYear()} - Хувийн хэрэглээний зориулалттай вэб
        </footer>
      </body>
    </html>
  );
}

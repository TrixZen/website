import "../styles/globals.css"
import Navbar from './Navbar.js'
import Footer from './Footer.js'
import SideMenu from './SideMenu.js'

export default function Layout({ children }) {
  return (
    <html lang="en">
    <body>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-grow">
          <div className="container mx-auto">
            <div className="flex flex-col md:flex-row">
              <div className="md:w-64 flex-shrink-0">
                <SideMenu />
              </div>
              <div className="flex-grow">
                <main>{children}</main>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </body>
  </html>
  )
}
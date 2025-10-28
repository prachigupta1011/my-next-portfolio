import './globals.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

export const metadata = {
    title: 'Prachi Portfolio',
    description: 'My Next.js demo portfolio and blog',
}

export default function RootLayout({ children }) {
    return (
        <html lang="en">
        <body className="bg-gray-50 text-gray-800 dark:bg-gray-900 dark:text-gray-200">
        <Navbar />
        <main className="min-h-screen container mx-auto p-4">{children}</main>
        <Footer />
        </body>
        </html>
    )
}

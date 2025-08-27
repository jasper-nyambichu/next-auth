import './globals.css'

export const metadata = {
  title: 'AuthApp - Secure Authentication',
  description: 'A simple and secure authentication solution built with Next.js',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-50">{children}</body>
    </html>
  )
}
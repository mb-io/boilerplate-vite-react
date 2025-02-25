import { Navbar } from '@/components/navbar/navbar'
import { useLocation } from 'react-router-dom'
import { useEffect } from 'react'

export default function DefaultLayout({ children }: { readonly children: React.ReactNode }) {
  const year = new Date().getFullYear()
  const location = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location])

  return (
    <div className="relative flex h-screen flex-col">
      <Navbar />
      <main className="container mx-auto max-w-7xl grow px-6 pt-16">{children}</main>
      <footer className="flex w-full items-center justify-center gap-4 py-3">
        <span className="text-default-600">&copy; {year} MeteorByte LLC</span>
      </footer>
    </div>
  )
}

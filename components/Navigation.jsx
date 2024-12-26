import Image from 'next/image'
import Link from 'next/link'

export default function Navigation() {
  return (
    <nav className="bg-black py-4 sticky top-0 z-50 border-b ">
    <div className="container mx-auto px-4 flex justify-between items-center">
      <Link href="/" className="w-48 h-12 relative">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202024-12-26%20at%2015.20.55(3)-PwcOXCeCQqdMZLbJ6OME9C9lGAo3qD.jpeg"
          alt="Barhamienne Transport Logo"
          fill
          className="object-contain"
          priority
        />
      </Link>
      <ul className="flex space-x-6">
        <li><Link href="/" className="hover:text-red-500 transition-colors">Accueil</Link></li>
        <li><Link href="/contact" className="hover:text-red-500 transition-colors">Yobanté</Link></li>
        <li><Link href="/faq" className="hover:text-red-500 transition-colors">FAQ</Link></li>
      </ul>
    </div>
  </nav>
  );
}

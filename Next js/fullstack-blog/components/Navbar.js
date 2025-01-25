// components/Navbar.js
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-semibold">
          <Link href="/">Building Design Co.</Link>
        </div>
        <ul className="hidden md:flex space-x-4">
          <li><Link href="/">Home</Link></li>
          <li><Link href="/blog">Blog</Link></li>
          <li><Link href="/dashboard">Dashboard</Link></li>
        </ul>
        <div className="md:hidden">
          {/* Mobile Menu (Hamburger) */}
          <button className="text-white">☰</button>
        </div>
      </div>
    </nav>
  );
}

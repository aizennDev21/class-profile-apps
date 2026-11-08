'use client';
import React, { useState, useEffect } from 'react';
import { Poppins } from 'next/font/google';
import Image from 'next/image';
import logo from '@/images/logo-xymips.jpg';


const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

const links = [
  { href: '#home', label: 'Beranda' },
  { href: '#students', label: 'Daftar Siswa' },
  { href: '#gallery', label: 'Galeri' },
  { href: '#teachers', label: 'Wali Kelas' },
  { href: '#contact', label: 'Pesan' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`${poppins.className} fixed top-0 left-0 right-0 z-50 text-neutral-900 transition-all duration-300 ${
        scrolled || mobileMenuOpen
          ? 'bg-white/90 backdrop-blur-md border-b border-neutral-200 shadow-sm py-3'
          : 'bg-white py-5'
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-6 flex items-center justify-between">
        <a href="#home" aria-label="XYMIPS, kembali ke beranda" className="flex items-center">
        <Image
          src={logo}
          alt="Logo XYMIPS"
          priority
          className="h-10 w-auto"
        />
      </a>
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-neutral-600 hover:text-neutral-900 transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <a
            href="#students"
            className="px-5 py-2 rounded-full bg-neutral-900 text-white font-medium text-sm hover:bg-neutral-700 transition-colors"
          >
            Jelajahi Arsip
          </a>
        </div>

        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-lg bg-neutral-100 text-neutral-900 hover:bg-neutral-200 transition-colors"
          aria-label="Toggle menu"
          aria-expanded={mobileMenuOpen}
        >
          <span className="material-symbols-outlined">
            {mobileMenuOpen ? 'close' : 'menu'}
          </span>
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white border-t border-neutral-200 shadow-xl px-6 py-6 flex flex-col gap-4">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-neutral-700 hover:text-neutral-900 font-medium"
            >
              {l.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
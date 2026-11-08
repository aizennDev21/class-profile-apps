'use client';
import Image from 'next/image';
import logo from '@/images/logo-xymips.jpg';
import { useRef } from 'react';
import { Poppins } from 'next/font/google';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
});

const navLinks = [
  { href: '#home', label: 'Beranda' },
  { href: '#students', label: 'Daftar Siswa' },
  { href: '#gallery', label: 'Galeri' },
  { href: '#teachers', label: 'Wali Kelas' },
  { href: '#contact', label: 'Pesan' },
];

// Ganti href="#" dengan tautan akun yang sebenarnya.
const socials = [
  {
    label: 'Instagram',
    href: '#',
    icon: (
      <>
        <rect x="2" y="2" width="20" height="20" rx="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
      </>
    ),
  },
  {
    label: 'LinkedIn',
    href: '#',
    icon: (
      <>
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
      </>
    ),
  },
  {
    label: 'YouTube',
    href: '#',
    icon: (
      <>
        <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
        <path d="m10 15 5-3-5-3z" />
      </>
    ),
  },
];

export default function Footer() {
  const wordRef = useRef<HTMLDivElement>(null);

  // Teks besar yang "menyala" gelap di sekitar kursor
  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = wordRef.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    el.style.setProperty('--mx', `${e.clientX - r.left}px`);
    el.style.setProperty('--my', `${e.clientY - r.top}px`);
    el.style.setProperty('--on', '1');
  };
  const handleLeave = () => wordRef.current?.style.setProperty('--on', '0');

  const wordClass =
    'select-none whitespace-nowrap text-center font-semibold leading-none tracking-[-0.06em] text-[clamp(4.5rem,21vw,17rem)]';

  return (
    <footer
      className={`${poppins.className} w-full overflow-hidden border-t border-neutral-200 bg-white text-neutral-900`}
    >
      <div className="mx-auto max-w-[1200px] px-6 pt-16">
        <div className="grid grid-cols-1 gap-12 pb-12 md:grid-cols-12">
          <div className="flex flex-col gap-4 md:col-span-5">
          <Image
            src={logo}
            alt="Logo XYMIPS"
            className="h-12 w-auto self-start"
          />
          <p className="max-w-sm text-sm font-light leading-relaxed text-neutral-600">
            Arsip digital untuk mengenang kecerdasan, kenangan, dan kebersamaan
            angkatan 2023, tersimpan untuk dibuka kembali kapan saja.
          </p>
        </div>

          {/* Navigasi */}
          <nav aria-label="Navigasi footer" className="md:col-span-3">
            <h4 className="mb-4 text-sm font-semibold">Navigasi</h4>
            <ul className="flex flex-col gap-3">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-sm text-neutral-600 transition-colors hover:text-neutral-900"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Kontak */}
          <div className="md:col-span-4">
            <h4 className="mb-4 text-sm font-semibold">Kontak</h4>
            <p className="text-sm text-neutral-600">MAN SIDRAP</p>
            <a
              href="mailto:xymips@gmail.com"
              className="mt-3 inline-block text-sm text-neutral-600 underline-offset-4 transition-colors hover:text-neutral-900 hover:underline"
            >
              xymips@gmail.com
            </a>
            <div className="mt-5 flex items-center gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-neutral-200 text-neutral-700 transition-colors hover:border-neutral-900 hover:bg-neutral-900 hover:text-white"
                >
                  <svg
                    viewBox="0 0 24 24"
                    width="18"
                    height="18"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    {s.icon}
                  </svg>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bar bawah */}
        <div className="flex flex-col items-center justify-between gap-3 border-t border-neutral-200 py-6 text-xs text-neutral-500 sm:flex-row">
          <p>&copy; 2026 XII MIPA 1. Seluruh hak cipta dilindungi.</p>
          <a
            href="#home"
            className="inline-flex items-center gap-1 transition-colors hover:text-neutral-900"
          >
            Kembali ke atas
            <span className="material-symbols-outlined text-[16px]">arrow_upward</span>
          </a>
        </div>
      </div>

      {/* Teks besar dengan efek spotlight */}
      <div
        ref={wordRef}
        onMouseMove={handleMove}
        onMouseLeave={handleLeave}
        className="relative mx-auto max-w-[1400px] px-4 pb-2"
        aria-hidden="true"
      >
        <div className={`${wordClass} text-neutral-100`}>XYMIPS</div>
        <div
          className={`${wordClass} absolute inset-x-4 top-0 text-neutral-900 transition-opacity duration-300`}
          style={{
            opacity: 'var(--on, 0)',
            WebkitMaskImage:
              'radial-gradient(220px circle at var(--mx, 50%) var(--my, 50%), #000 0%, transparent 100%)',
            maskImage:
              'radial-gradient(220px circle at var(--mx, 50%) var(--my, 50%), #000 0%, transparent 100%)',
          }}
        >
          XYMIPS
        </div>
      </div>
    </footer>
  );
}
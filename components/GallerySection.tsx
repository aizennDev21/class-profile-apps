'use client';
import { useState, useEffect, useRef, useCallback } from 'react';
import { Poppins } from 'next/font/google';
import { galleryItems } from '@/lib/classData';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
});

type Item = (typeof galleryItems)[number];

// Pola bento 3 kolom, berulang tiap 5 foto (membentuk kotak 3x3 yang rapat).
const bentoSpan = [
  'lg:col-span-2 lg:row-span-2',
  '',
  '',
  '',
  'lg:col-span-2',
];

function GalleryCard({
  item,
  className,
  onOpen,
}: {
  item: Item;
  className: string;
  onOpen: () => void;
}) {
  const ref = useRef<HTMLButtonElement>(null);

  const handleMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    const el = ref.current;
    if (!el || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const r = el.getBoundingClientRect();
    const x = e.clientX - r.left;
    const y = e.clientY - r.top;
    const rotY = (x / r.width - 0.5) * 8; // maks ±4 derajat
    const rotX = (0.5 - y / r.height) * 8;
    el.style.setProperty('--mx', `${x}px`);
    el.style.setProperty('--my', `${y}px`);
    el.style.transform = `rotateX(${rotX}deg) rotateY(${rotY}deg) scale(1.01)`;
  };

  const handleLeave = () => {
    const el = ref.current;
    if (el) el.style.transform = 'rotateX(0deg) rotateY(0deg) scale(1)';
  };

  return (
    <div className={className} style={{ perspective: '1000px' }}>
      <button
        ref={ref}
        type="button"
        onClick={onOpen}
        onMouseMove={handleMove}
        onMouseLeave={handleLeave}
        aria-label={`Buka foto: ${item.title}`}
        className="group relative block h-full w-full overflow-hidden rounded-3xl bg-neutral-100 text-left outline-none transition-transform duration-300 ease-out focus-visible:ring-2 focus-visible:ring-neutral-900 focus-visible:ring-offset-2"
        style={{ transformStyle: 'preserve-3d' }}
      >
        <img
          src={item.image}
          alt={item.title}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110 motion-reduce:transition-none"
        />

        {/* Spotlight yang mengikuti kursor */}
        <div
          className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{
            background:
              'radial-gradient(350px circle at var(--mx, 50%) var(--my, 50%), rgba(255,255,255,0.28), transparent 60%)',
          }}
        />

        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent p-5 pt-20">
          <p className="text-sm text-white/75">{item.category}</p>
          <h3 className="text-lg font-semibold text-white">{item.title}</h3>
        </div>

        <span className="material-symbols-outlined absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-[20px] text-neutral-900 opacity-0 transition-all duration-300 group-hover:opacity-100 group-focus-visible:opacity-100 sm:translate-y-1 sm:group-hover:translate-y-0">
          open_in_full
        </span>
      </button>
    </div>
  );
}

export default function GallerySection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const total = galleryItems.length;

  const close = useCallback(() => setOpenIndex(null), []);
  const step = useCallback(
    (dir: 1 | -1) =>
      setOpenIndex((i) => (i === null ? i : (i + dir + total) % total)),
    [total]
  );

  // Keyboard + kunci scroll saat lightbox terbuka
  useEffect(() => {
    if (openIndex === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close();
      if (e.key === 'ArrowRight') step(1);
      if (e.key === 'ArrowLeft') step(-1);
    };
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKey);
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [openIndex, close, step]);

  const current = openIndex !== null ? galleryItems[openIndex] : null;

  return (
    <section
      id="gallery"
      className={`${poppins.className} mx-auto max-w-[1200px] px-6 py-24 text-neutral-900`}
    >
      <div className="mb-14 flex flex-col items-center text-center">
        <h2 className="mb-4 text-4xl font-semibold tracking-tight md:text-6xl">
          Dokumentasi
        </h2>
        <p className="max-w-xl text-base font-light text-neutral-600">
          Rekaman visual dari kebersamaan kita di koridor sekolah, laboratorium,
          lapangan olahraga, hingga perjalanan studi tour. Klik foto untuk memperbesar.
        </p>
      </div>

      <div className="grid auto-rows-[240px] grid-cols-1 gap-4 sm:grid-cols-2 lg:auto-rows-[260px] lg:grid-cols-3 lg:grid-flow-dense">
        {galleryItems.map((item, idx) => (
          <GalleryCard
            key={idx}
            item={item}
            className={bentoSpan[idx % bentoSpan.length]}
            onOpen={() => setOpenIndex(idx)}
          />
        ))}
      </div>

      {/* Lightbox */}
      {current && openIndex !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={current.title}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-neutral-950/90 p-4 backdrop-blur-sm"
          onClick={close}
        >
          <button
            type="button"
            onClick={close}
            aria-label="Tutup"
            autoFocus
            className="material-symbols-outlined absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-full bg-white text-neutral-900 transition hover:bg-neutral-200"
          >
            close
          </button>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              step(-1);
            }}
            aria-label="Foto sebelumnya"
            className="material-symbols-outlined absolute left-3 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-neutral-900 transition hover:bg-white md:left-6"
          >
            arrow_back
          </button>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              step(1);
            }}
            aria-label="Foto berikutnya"
            className="material-symbols-outlined absolute right-3 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-neutral-900 transition hover:bg-white md:right-6"
          >
            arrow_forward
          </button>

          <figure
            className="flex max-h-full max-w-5xl flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={current.image}
              alt={current.title}
              className="max-h-[75vh] w-auto max-w-full rounded-2xl object-contain"
            />
            <figcaption className="mt-5 text-center text-white">
              <p className="text-sm text-white/60">{current.category}</p>
              <p className="mt-1 text-xl font-semibold">{current.title}</p>
              <p className="mt-2 text-xs text-white/50">
                {openIndex + 1} / {total}
              </p>
            </figcaption>
          </figure>
        </div>
      )}
    </section>
  );
}
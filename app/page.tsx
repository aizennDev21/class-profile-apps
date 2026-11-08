import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import StudentDirectory from '@/components/StudentDirectory';
import GallerySection from '@/components/GallerySection';
import TeachersSection from '@/components/TeachersSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-[#fcf9f4] text-[#1c1c19]">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <StudentDirectory />
        <GallerySection />
        <TeachersSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

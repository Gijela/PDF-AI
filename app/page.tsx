import Header from '@/components/home/Header';
import Hero from '@/components/home/Hero';
import Feature from '@/components/home/Feature';
import WallOfLove from '@/components/home/WallOfLove';
import CTA from '@/components/home/CTA';

export default function Home() {
  return (
    <main className="flex flex-col items-center">
      <Header />
      <Hero />
      <Feature />
      <WallOfLove />
      <CTA />
    </main>
  );
}

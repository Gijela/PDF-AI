// import Footer from '@/components/home-row/Footer';
// import Header from '@/components/home-row/Header';
// import Hero from '@/components/home-row/Hero';
import Header from '@/components/home/Header';
import Hero from '@/components/home/Hero';
import Feature from '@/components/home/Feature';
import WallOfLove from '@/components/home/WallOfLove';
import CTA from '@/components/home/CTA';
// import HowItWorks from '@/components/home-row/HowItWorks';
// import ProudlyOpenSource from '@/components/home-row/ProudlyOpenSource';

import { currentUser } from '@clerk/nextjs';
import { User } from '@clerk/nextjs/server';
import { redirect } from 'next/navigation';

export default async function Home() {
  const user: User | null = await currentUser();
  const isLoggedIn = !!user;
  if (isLoggedIn) {
    redirect('/dashboard');
  }

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

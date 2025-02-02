import { Navigation } from '@/components/Navigation';
import Script from 'next/script';
import './page.css';
import { Hero } from '@/components/page-components/landing-page/sections/Hero';
import { Separator } from '@/components/ui/separator';
import { Supporting } from '@/components/page-components/landing-page/sections/Supporting';
import { FinalSupporting } from '@/components/page-components/landing-page/sections/FinalSupporting';
import { Footer } from '@/components/Footer';

export default function Home() {
  return (
    <div className="m-auto w-full max-w-[1024px] bg-custom-white px-8 pt-8 font-[family-name:var(--font-space-grotesk)]">
      <Script
        src="https://tally.so/widgets/embed.js"
        async
      />
      <Navigation />
      <main className="row-start-2 flex flex-col items-center gap-8 sm:items-start">
        <Hero />
        <Separator className="my-8 bg-custom-secondary" />
        <Supporting />
        <Separator className="my-8 bg-custom-secondary" />
        <FinalSupporting />
      </main>
      <Footer />
    </div>
  );
}

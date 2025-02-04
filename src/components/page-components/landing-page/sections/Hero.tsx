import Image from 'next/image';
import heroImage from '@/../public/Illustration.svg';
import { JoinWaitlistButton } from '@/components/page-components/landing-page/JoinWaitlistButton';

export function Hero() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2">
      <div className="flex flex-col justify-center gap-8 py-8 md:max-w-[80%]">
        <h1 className="text-4xl/[1.2] font-semibold md:text-6xl/[1.2]">
          Bring Your Script to Life
        </h1>
        <p className="text-lg md:text-xl">
          Post your script, assign roles, and hear your words performed by real
          actors. Experience your story beyond the page.
        </p>
        <JoinWaitlistButton eventValue="landing_page_hero" />
      </div>
      <div className="flex items-center justify-center">
        <Image
          src={heroImage}
          alt="HeroImage"
        />
      </div>
    </div>
  );
}

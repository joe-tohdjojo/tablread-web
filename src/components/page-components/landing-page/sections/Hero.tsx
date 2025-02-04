import Image from 'next/image';
import { sendGTMEvent } from '@next/third-parties/google';
import { Button } from '@/components/ui/custom/button';
import heroImage from '@/../public/Illustration.svg';

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
        <Button
          className="w-fit"
          data-tally-auto-close="0"
          data-tally-emoji-animation="wave"
          data-tally-emoji-text="👋"
          data-tally-hide-title="1"
          data-tally-open="wkJGdd"
          variant="secondary"
          size="lg"
          onClick={() =>
            sendGTMEvent({
              event: 'join_event_button',
              value: 'landing_page_hero',
            })
          }
        >
          Join the waitlist!
        </Button>
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

import Image from 'next/image';
import { Button } from '@/components/ui/custom/button';
import { Card } from '@/components/ui/custom/card';
import funImage from '@/../public/Illustration2.svg';

export function FinalSupporting() {
  return (
    <>
      <Card
        className="flex w-full flex-col items-center justify-between gap-8 text-center md:grid md:grid-cols-8 md:text-left"
        variant="default"
      >
        <div className="col-span-5 flex flex-col items-center gap-4 md:col-span-4 md:items-start lg:col-span-5">
          <h4 className="text-xl font-semibold">Let&apos;s make it happen!</h4>
          <p>
            Your next big project deserves the perfect cast, crew, and
            collaboration. Table Read is here to connect you with industry
            professionals and bring your creative vision to life. Be part of the
            future of filmmaking—start your journey today.
          </p>
          <Button
            variant="secondary"
            size="lg"
            className="w-fit"
            data-tally-open="wkJGdd"
            data-tally-hide-title="1"
            data-tally-emoji-text="👋"
            data-tally-emoji-animation="wave"
            data-tally-auto-close="0"
          >
            Join the waitlist!
          </Button>
        </div>
        <div className="flex h-full flex-col items-end justify-center md:col-span-4 md:max-h-48 lg:col-span-3">
          <Image
            src={funImage}
            className="h-full max-h-[250px] md:max-h-none md:min-h-[300px]"
            alt="fun image"
          />
        </div>
      </Card>
      <div
        className="my-20 mb-40 w-full"
        id="waitlist-form"
      >
        <iframe
          data-tally-src="https://tally.so/embed/wkJGdd?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
          loading="lazy"
          width="100%"
          height="742"
          title="Table Read App"
          className="w-full"
        ></iframe>
        <script
          dangerouslySetInnerHTML={{
            __html: `var d=document,w="https://tally.so/widgets/embed.js",v=function(){"undefined"!=typeof Tally?Tally.loadEmbeds():d.querySelectorAll("iframe[data-tally-src]:not([src])").forEach((function(e){e.src=e.dataset.tallySrc}))};if("undefined"!=typeof Tally)v();else if(d.querySelector('script[src="'+w+'"]')==null){var s=d.createElement("script");s.src=w,s.onload=v,s.onerror=v,d.body.appendChild(s);}`,
          }}
        ></script>
      </div>
    </>
  );
}

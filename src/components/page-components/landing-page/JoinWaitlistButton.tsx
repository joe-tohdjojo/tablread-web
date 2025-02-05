'use client';

import { Button } from '@/components/ui/custom/button';
import { sendGTMEvent } from '@next/third-parties/google';

export function JoinWaitlistButton({ eventValue }: { eventValue: string }) {
  return (
    <Button
      id="join_waitlist"
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
          value: eventValue,
        })
      }
    >
      Join the waitlist!
    </Button>
  );
}

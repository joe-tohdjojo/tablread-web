import { Card, CardContent, CardTitle } from '@/components/ui/custom/card';
const data = [
  {
    header: <>A Creative Hub for Writers & Actors</>,
    text: (
      <>
        Connect with a community of storytellers, collaborate on table reads,
        and refine your work with insightful feedback.
      </>
    ),
  },
  {
    header: <>Simple, Seamless Scheduling</>,
    text: (
      <>
        Poll availability, book reading sessions, and get automatic reminders—so
        your table read runs smoothly.
      </>
    ),
  },
  {
    header: <>Earn Recognition & Build Your Reputation</>,
    text: (
      <>
        The more you participate, the more credibility you gain. Highly rated
        scripts can attract industry professionals.
      </>
    ),
  },
  {
    header: <>Shape the Future of Table Read</>,
    text: (
      <>
        Your feedback drives new features. Suggest ideas and help build a
        platform that truly supports writers and actors.
      </>
    ),
  },
  {
    header: <>Unlock Your Script&apos;s Potential</>,
    text: (
      <>
        Refine your dialogue, improve pacing, and get professional-level
        feedback—without paying for expensive script readers.
      </>
    ),
  },
  {
    header: <>Join the Movement</>,
    text: (
      <>
        Be part of a thriving creative network and take your writing to the next
        level.{' '}
        <span className="font-bold">Sign up for the waitlist today!</span>
      </>
    ),
  },
];

export function Supporting() {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col items-center gap-4">
        <h1 className="w-fit rounded-md bg-custom-primary px-1 py-0 text-2xl font-semibold">
          Why Table Read Stands Out
        </h1>
        <p className="text-center text-xl">
          Explore how Table Read makes collaboration seamless and stories
          unforgettable.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        {data.map((el, i) => {
          let variant: 'dark' | 'green' | 'default';
          let titleVariant: 'dark' | 'green' | 'default';
          switch (i) {
            case 0:
            case 3:
              variant = 'default';
              titleVariant = 'green';
              break;
            case 1:
            case 4:
              variant = 'green';
              titleVariant = 'dark';
              break;
            case 2:
            case 5:
              variant = 'dark';
              titleVariant = 'default';
              break;
          }

          return (
            <Card
              variant={variant!}
              key={i}
              className="px-8"
            >
              <CardContent className="grid w-full grid-cols-1 gap-4 p-0 lg:grid-cols-8">
                <div className="flex w-full flex-col justify-between gap-4 lg:col-span-8">
                  <CardTitle variant={titleVariant!}>{el.header}</CardTitle>
                  <p>{el.text}</p>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
}

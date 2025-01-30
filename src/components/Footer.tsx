import { BookOpen } from 'lucide-react';
import Link from 'next/link';
import { Card } from '@/components/ui/custom/card';

export function Footer() {
  return (
    <Card
      className="shadow-none flex justify-between rounded-b-none"
      variant="dark"
    >
      <Link
        href="/"
        className="flex items-center gap-2 text-xl font-semibold"
      >
        <BookOpen />
        Table Read
        <span className="text-sm font-normal">
          © {new Date().getFullYear()}
        </span>
      </Link>
    </Card>
  );
}

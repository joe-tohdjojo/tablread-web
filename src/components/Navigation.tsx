import { BookOpen } from 'lucide-react';
import Link from 'next/link';

export function Navigation() {
  return (
    <div className="flex justify-between">
      <Link
        href="/"
        className="mb-8 flex items-center gap-2 text-3xl font-semibold"
      >
        <BookOpen />
        Table Read
      </Link>
    </div>
  );
}

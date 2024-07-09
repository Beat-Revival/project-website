import { Button } from '@/components/ui/button';
import Link from 'next/link';

// Define the navigation items and URLs as a tuple
const mainNavLinks: [string, string][] = [
  ['Home', '/'],
  ['Info', '/info'],
  ['Contact Us', '/contact'],
  ['Support the project', '/support'],
  ['Blog', 'https://blog.beatrevival.me'],
  ['Become a developer', '/developer'],
  ['Community', '/community'],
];

export default function MainNav() {
  return (
    <div className="mr-4 hidden gap-2 md:flex text-2xl">
      {mainNavLinks.map(([item, url], index) => (
        <Link key={index} href={url} passHref>
          <Button variant="link" size="lg" className="hover:bg-[#fd1111] hover:text-white">
            {item}
          </Button>
        </Link>
      ))}
    </div>
  );
}

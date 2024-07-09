import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { mainNavLinks } from './navLinks';

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

import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { mainNavLinks } from './navLinks';


export default function MainNav() {
  const textColor = "text-black";
  const hoverBgColor = "hover:bg-[#fd1111]";
  const buttonClassName = `hover:text-white ${hoverBgColor} ${textColor}`;


  return (
    <div className="mr-4 hidden gap-2 md:flex text-2xl">
      {mainNavLinks.map(([item, url], index) => (
        <Link key={index} href={url} passHref>
          <Button variant="link" size="lg" className={buttonClassName}>
            {item}
          </Button>
        </Link>
      ))}
    </div>
  );
}
import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";
import { MenuIcon } from "lucide-react";
import { mainNavLinks } from './navLinks';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function MobileNav() {
  const textColor = "text-black";
  const hoverBgColor = 'hover:bg-[#fd1111]';
  const buttonClassName = `hover:text-white ${hoverBgColor} ${textColor}`;

  return (
    <Drawer direction="right">
      <DrawerTrigger>
        <MenuIcon />
      </DrawerTrigger>
      <DrawerContent className={'bg-white text-black'}>
        <div className="flex flex-col gap-2 p-4">
          {mainNavLinks.map(([item, url], index) => (
            <Link key={index} href={url} passHref>
              <Button variant="link" size="lg" className={buttonClassName}>
                {item}
              </Button>
            </Link>
          ))}
        </div>
      </DrawerContent>
    </Drawer>
  );
}
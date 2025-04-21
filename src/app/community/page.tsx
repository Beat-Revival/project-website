import { Button } from "@/components/ui/button";
import Image from 'next/image';

export default function Community() {
  return (
    <div>
      <div className="text-xl">
        Here are the places you can chat with the developers and other members of the community.
      </div>
      <br/>

      <div>
        <a href="https://discord.gg/FGftmuRrrG">
        <Button className="bg-[#5865F2]">
        <Image src="/Discord.svg" alt="Discord" width={32} height={32}/>&nbsp;&nbsp;&nbsp;Discord
        </Button>
        </a>
        &nbsp;&nbsp;
        <a href="https://bsky.app/profile/beatrevival.me">
        <Button className="bg-[#1DA1F2]">
        <Image src="/Bluesky.svg" alt="Bluesky" width={32} height={32}/>&nbsp;&nbsp;&nbsp;Bluesky
        </Button>
        </a>
      </div>
    </div>
  );
}
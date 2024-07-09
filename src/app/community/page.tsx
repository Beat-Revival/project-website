import BeatRevivalLayout from "../components/BeatRevivalLayout";
import { Button } from "@/components/ui/button";
import Image from 'next/image';

export default function Home() {
  return (
    <BeatRevivalLayout>
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
        <a href="https://twitter.com/BeatRevivalMEC">
        <Button className="bg-[#1DA1F2]">
        <Image src="/x.svg" alt="Twitter" width={32} height={32}/>&nbsp;&nbsp;&nbsp;Twitter
        </Button>
        </a>
      </div>
    </BeatRevivalLayout>
  );
}
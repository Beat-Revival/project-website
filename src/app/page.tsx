import BeatRevivalLayout from "./components/BeatRevivalLayout";

export default function Home() {
  return (
    <BeatRevivalLayout>
      <p className="text-xl">
        <strong>Welcome to the Beat Revival.</strong>
      </p>
      <br />
      <p className="text-lg">
        This project aims to bring back the online functionality of Mirror&apos;s
        Edge: Catalyst through the reverse engineering of EA/DICE&apos;s server
        software.
      </p>
      <p className="text-lg">
        This project is still in development and isn&apos;t ready just yet but if you
        would like to keep up-to-date with the project&apos;s development then you
        can join our Discord.
      </p>
    </BeatRevivalLayout>
  );
}

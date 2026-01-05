import Link from "next/link";

export default function Home() {
  return (
    <section className="px-4 py-8">
      <div className="mx-auto max-w-2xl">
        <h1 className="mb-4 text-2xl font-bold">Join our team</h1>

        <p className="mb-4">
          We&lsquo;re currently looking for developers to help us with the
          project. If you are any of these:
        </p>

        <ul className="mb-4 list-disc space-y-2 pl-5">
          <li>Proficient in the Rust programming language</li>
          <li>Knowledgeable in reverse engineering proprietary binary file formats</li>
          <li>Knowledgeable in reverse engineering x86/x64 machine code</li>
        </ul>

        <p className="mb-4">
          If you&rsquo;re interested in joining our team, either send Loomeh or
          Meteor (CodeNameMeteor) a private message on Discord, or send Loomeh an{" "}
          <Link href="/contact" className="underline underline-offset-4">
            email
          </Link>{" "}
          (see the Contact Us tab).
        </p>

        <p>
          Whilst not required, a portfolio or showcase of your work would be
          appreciated.
        </p>
      </div>
    </section>
  );
}

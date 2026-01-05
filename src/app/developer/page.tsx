import Link from "next/link";

export default function Home() {
  return (
    <section className="py-8 px-4">
      <div>
        <h1 className="text-2xl font-bold mb-4">
          Join our team
        </h1>
        <p>
          We&lsquo;re currently looking for developers to help us with the project. If you are any of these:<br/>

          - Proficient in the Rust programming language<br/><br/>
          - Knowledgeable in reverse engineering proprietary binary file formats<br/>
          - Knowledgeable in reverse engineering x86/x64 machine code<br/>

          and are interested in joining our team, either send Loomeh or Meteor (CodeNameMeteor) a private message on Discord or send Loomeh an email (look at the Contact Us tab).<br/><br/>

          Whilst not required, a portfolio or showcase of your work would be appreciated.
        </p>
      </div>
    </section>
  );
}

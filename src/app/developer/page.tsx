import Link from "next/link";

export default function Home() {
  return (
    <section className="py-8 px-4">
      <div>
        <h1 className="text-2xl font-bold mb-4">
          Contribute
        </h1>
        <p>
          <div className="mb-2">
            If you&lsquo;d like to contribute to the Beat Revival project, consider submitting pull requests to the repos below:
          </div>
          <div className="mb-8">
            <Link
              href="https://github.com/ploxxxy/pamplona-future/"
              className="text-red-500 hover:text-red-700 underline"
              target="_blank"
              rel="noopener noreferrer"
            >
            pamplona-future
            </Link>
            <p className="text-sm text-gray-400">
              A private server implementation for Mirror&apos;s Edge Catalyst.
            </p>
          </div>
        </p>
      </div>
      <div>
        <h1 className="text-2xl font-bold mb-4">
          Join our team
        </h1>
        <p>
          We&lsquo;re currently looking for developers to help us with the project. If you are any of these:<br/>

          - Knowledgeable in reverse engineering binary file formats<br/>
          - A JavaScript/TypeScript backend developer<br/><br/>

          and are interested in joining our team, either send Loomeh or Meteor (CodeNameMeteor) a private message on Discord or send Loomeh an email (look at the Contact Us tab).<br/><br/>

          Whilst not required, a portfolio or showcase of your work would be appreciated.
        </p>
      </div>
    </section>
  );
}

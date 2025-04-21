import Link from "next/link";

export default function Home() {
  return (
    <section className="py-8 px-4">
        <h1 className="text-2xl font-bold mb-4">
          Additional Projects
        </h1>
        <p className="mb-6">
          Alongside our server emulator project, we&apos;ve also created other
          projects related to Mirror&apos;s Edge Catalyst. Check
          them out below:
        </p>

        <div className="mb-4">
          <Link
            href="https://ploxxxy.github.io/frostnibble/"
            className="text-red-500 hover:text-red-700 underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Frostnibble
          </Link>
          <p className="text-sm text-gray-400">
            A web-based save editor for Mirror&apos;s Edge Catalyst by ploxxy.
          </p>
        </div>
      </section>
  );
}
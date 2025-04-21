import Link from "next/link";

export default function Support() {
  return (
    <section className="py-8 px-4">
      <div>
        <p className="text-2xl mb-6">
          <strong>Support the project</strong>
        </p>

        <p>
          We currently have no plans to enable monetary support. The best way to support the project is by <Link href="/developer" className="text-red-500 hover:text-red-700 underline" target="_blank" rel="noopener noreferrer">contributing to it.</Link>
        </p>        
      </div>
    </section>
  );
}
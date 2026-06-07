import Image from "next/image";
import { get } from "@vercel/blob";

export default function DownloadPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="mb-4 text-2xl font-bold">Download (Open Beta)</h1>
        <p>Choose the download that matches your platform.</p>
      </div>

      <div className="w-full max-w-3xl rounded-2xl border border-gray-300 bg-gray-100 p-6 shadow-sm rounded-bl-none rounded-tr-none">
        <div className="flex flex-col items-stretch gap-6 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-1 flex-col items-center gap-4 text-center">
            <Image src="/windows.svg" alt="Windows logo" className="h-24 w-24" width={512} height={512} />
            <a
              href="https://v3mb4p5cgonobgfy.public.blob.vercel-storage.com/BeatLink.zip?download=1"
              className="inline-flex items-center justify-center rounded-lg bg-[#0078d4] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#005ba1] rounded-bl-none rounded-tr-none"
            >
              Download (BeatLink)
            </a>
            <div className="w-full max-w-md rounded-md border border-gray-300 bg-gray-50 px-3 py-2 text-left rounded-bl-none rounded-tr-none">
              <p className="text-[14px] font-semibold uppercase tracking-wide text-gray-500">SHA256</p>
              <code className="mt-1 block select-all break-all font-mono text-[10px] text-gray-700">
                bb2b86a0933aa1bd27a01128d19f35cc80f82504ebfed11b106725ba0bf1992a
              </code>
            </div>
          </div>

          <div
            aria-hidden="true"
            className="h-px w-full bg-gray-300 md:h-28 md:w-px"
          />

          <div className="flex flex-1 flex-col items-center gap-4 text-center">
            <Image src="/Tux.svg" alt="Tux logo" className="h-24 w-auto" width={414} height={480} />
            <a
              href="https://v3mb4p5cgonobgfy.public.blob.vercel-storage.com/beatlink-cli.zip?download=1"
              className="inline-flex items-center justify-center rounded-lg bg-gray-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#d67a18] bg-[#ff921e] rounded-bl-none rounded-tr-none"
            >
              Download (beatlink-cli)
            </a>
            <div className="w-full max-w-md rounded-md border border-gray-300 bg-gray-50 px-3 py-2 text-left rounded-bl-none rounded-tr-none">
              <p className="text-[14px] font-semibold uppercase tracking-wide text-gray-500">SHA256</p>
              <code className="mt-1 block select-all break-all font-mono text-[10px] text-gray-700">
                707dcd379292b55bc8ae8c66b397be8a011ae411ecf20b79376ef3ab7034b33d
              </code>
            </div>
          </div>
        </div>
      </div>

      <p className="text-[10px] text-gray-500">
        Windows and the Windows logo are registered trademarks of Microsoft Corporation in the United States and/or other countries.<br/>
        The Tux logo was created by Larry Ewing and is used under the GNU General Public License (GPL).
      </p>
    </div>
  );
}
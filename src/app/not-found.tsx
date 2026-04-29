import Link from "next/link";
import { FaceSmileIcon } from "@heroicons/react/24/outline";

export default function NotFound() {
  return (
    <main className="container relative flex flex-col items-center justify-center min-h-[70vh] py-16 text-center">
      <span className="text-7xl sm:text-9xl font-bold text-primary-6000 dark:text-primary-400">
        404
      </span>

      <div className="mt-6 flex items-center justify-center gap-2 text-neutral-700 dark:text-neutral-200">
        <FaceSmileIcon className="w-7 h-7 text-primary-500" />
        <p className="text-lg sm:text-xl font-medium">
          Page under construction
        </p>
      </div>

      <p className="mt-3 max-w-md text-sm text-neutral-500 dark:text-neutral-400">
        We&apos;re still working on this page. Please check back soon.
      </p>

      <Link
        href="/"
        className="mt-8 inline-flex items-center px-6 py-3 rounded-full bg-primary-6000 hover:bg-primary-700 text-white font-medium transition-colors"
      >
        Return Home
      </Link>
    </main>
  );
}

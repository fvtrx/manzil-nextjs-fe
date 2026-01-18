import Link from "next/link";

export default function Footer() {
  return (
    <footer className="py-2 sm:py-4 px-3 sm:px-6 border-t border-gray-100 text-center text-gray-400 text-xs sm:text-sm">
      <span className="font-semibold text-black/60">Quran Manzil</span> •
      Developed and built by{" "}
      <Link
        href={"https://fvtrx.com"}
        className="text-black/60 font-semibold hover:text-blue-500 transition-colors duration-300"
      >
        @fvtrx
      </Link>{" "}
      &copy;.
    </footer>
  );
}

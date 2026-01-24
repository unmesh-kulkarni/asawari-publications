import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-100 border-t mt-12">
      <div className="container mx-auto px-4 py-6 flex flex-col md:flex-row items-center justify-between text-sm text-gray-600">
        <div>
          &copy; {new Date().getFullYear()} Asawari Publications. All rights
          reserved.
        </div>
        <div className="flex gap-4 mt-2 md:mt-0">
          <Link href="/gallery" className="hover:underline">
            Gallery
          </Link>
          <Link href="/contact-us" className="hover:underline">
            Contact Us
          </Link>
          <a
            href="mailto:atulniy.kulkarni@gmail.com?subject=Book Request&body=Hello,%0A%0AI would like to request the following book:%0A- Book Title:%0A- Author:%0A%0AThank you!"
            className="hover:underline"
          >
            atulniy.kulkarni@gmail.com
          </a>
        </div>
      </div>
    </footer>
  );
}

export default function Footer() {
  return (
    <footer className="bg-gray-100 border-t mt-12">
      <div className="container mx-auto px-4 py-6 flex flex-col md:flex-row items-center justify-between text-sm text-gray-600">
        <div>
          &copy; {new Date().getFullYear()} Asawari Publications. All rights
          reserved.
        </div>
        <div className="flex gap-4 mt-2 md:mt-0">
          <a href="/gallery" className="hover:underline">
            Gallery
          </a>
          <a href="/contact" className="hover:underline">
            Contact Us
          </a>
          <a href="mailto:info@asawari.com" className="hover:underline">
            info@asawari.com
          </a>
        </div>
      </div>
    </footer>
  );
}

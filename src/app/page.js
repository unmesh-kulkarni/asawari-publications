import { BookCard } from "@/components/book-card";
import { Button } from "@/components/ui";
import { publicationBooks } from "@/content/publicationBooks";

export default function Home() {
  return (
    <main className="container mx-auto px-4 py-8">
      <section className="mb-12">
        <div className="flex flex-col items-center text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Welcome to Our Bookstore
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Discover our carefully curated collection of books from our
            publication.
          </p>
        </div>

        <div className="flex justify-center mb-8">
          <Button>Request a Book</Button>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Our Publications</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {publicationBooks.map((book) => (
            <BookCard key={book.id} book={book} />
          ))}
        </div>
      </section>
    </main>
  );
}

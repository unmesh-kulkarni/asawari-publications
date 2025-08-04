import Image from "next/image";
import { Card, CardContent, CardFooter } from "./ui";

export function BookCard({ book }) {
  return (
    <Card className="overflow-hidden h-full flex flex-col">
      <div className="relative aspect-[2/3] w-full">
        <Image
          src={book.coverImage || "/placeholder.svg"}
          alt={book.title}
          fill
          className="object-cover"
        />
      </div>
      <CardContent className="pt-4 flex-grow">
        <h3 className="font-semibold text-lg mb-1">{book.title}</h3>
        <p className="text-sm text-muted-foreground mb-2">by {book.author}</p>
        <p className="text-sm line-clamp-3">{book.description}</p>
      </CardContent>
      <CardFooter className="border-t pt-4">
        <p className="font-medium">₹{book.price}</p>
      </CardFooter>
    </Card>
  );
}

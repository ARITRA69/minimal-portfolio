import Link from "next/link";
import Image from "next/image";
import { Separator } from "@/components/ui/separator";

// This would typically come from a database or API
const destinations = {
  santorini: {
    name: "Santorini",
    country: "Greece",
    description: "Beautiful white-washed buildings and stunning sunsets",
    images: [
      "/images/santorini-1.jpg",
      "/images/santorini-2.jpg",
      "/images/santorini-3.jpg",
    ],
  },
  "machu-picchu": {
    name: "Machu Picchu",
    country: "Peru",
    description: "Ancient Incan city in the Andes Mountains",
    images: [
      "/images/machu-picchu-1.jpg",
      "/images/machu-picchu-2.jpg",
      "/images/machu-picchu-3.jpg",
    ],
  },
  kyoto: {
    name: "Kyoto",
    country: "Japan",
    description: "Traditional Japanese culture and beautiful temples",
    images: [
      "/images/kyoto-1.jpg",
      "/images/kyoto-2.jpg",
      "/images/kyoto-3.jpg",
    ],
  },
};

export default function TravelDestination({
  params,
}: {
  params: { id: string };
}) {
  const destination = destinations[params.id as keyof typeof destinations];

  if (!destination) {
    return (
      <main className="w-11/12 sm:w-3/4 lg:w-2/5 mx-auto flex flex-col gap-16 pt-20 pb-40">
        <div className="flex flex-col gap-8">
          <Link
            href="/travels"
            className="text-neutral-500 hover:text-neutral-800"
          >
            ← Back to bucket list
          </Link>
          <h1 className="text-4xl font-bold">Destination not found</h1>
        </div>
      </main>
    );
  }

  return (
    <main className="w-11/12 sm:w-3/4 lg:w-2/5 mx-auto flex flex-col gap-16 pt-20 pb-40">
      <div className="flex flex-col gap-8">
        <Link
          href="/travels"
          className="text-neutral-500 hover:text-neutral-800"
        >
          ← Back to bucket list
        </Link>
        <div className="flex flex-col gap-2">
          <h1 className="text-4xl font-bold">{destination.name}</h1>
          <span className="text-xl text-neutral-500">
            {destination.country}
          </span>
        </div>
        <p className="text-neutral-600">{destination.description}</p>
        <Separator />
      </div>

      <div className="flex flex-col gap-8">
        <h2 className="text-2xl font-semibold">Photos</h2>
        <div className="flex flex-col gap-8">
          {destination.images.map((image, index) => (
            <div key={index} className="aspect-video relative bg-neutral-100">
              {/* Note: In a real application, you would need to add actual images */}
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-neutral-400">Photo {index + 1}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}

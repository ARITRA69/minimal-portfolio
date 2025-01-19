"use client";

import Link from "next/link";
import { Separator } from "@/components/ui/separator";

interface TravelDestination {
  id: string;
  name: string;
  country: string;
  isVisited: boolean;
  visitDate?: string;
  description: string;
  imageUrl: string;
}

const destinations: TravelDestination[] = [
  {
    id: "santorini",
    name: "Santorini",
    country: "Greece",
    isVisited: true,
    visitDate: "2023-06",
    description: "Beautiful white-washed buildings and stunning sunsets",
    imageUrl: "/images/santorini.jpg",
  },
  {
    id: "machu-picchu",
    name: "Machu Picchu",
    country: "Peru",
    isVisited: false,
    description: "Ancient Incan city in the Andes Mountains",
    imageUrl: "/images/machu-picchu.jpg",
  },
  {
    id: "kyoto",
    name: "Kyoto",
    country: "Japan",
    isVisited: false,
    description: "Traditional Japanese culture and beautiful temples",
    imageUrl: "/images/kyoto.jpg",
  },
];

export default function TravelBucketList() {
  return (
    <main className="w-11/12 sm:w-3/4 lg:w-2/5 mx-auto flex flex-col gap-16 pt-20 pb-40">
      <div className="flex flex-col gap-8">
        <Link
          href="/"
          className="text-foreground/50 hover:text-foreground/30 transition-colors duration-300"
        >
          ← Back home
        </Link>
        <h1 className="text-4xl font-bold">Travel Bucket List</h1>
      </div>
      <div className="flex flex-col gap-4">
        {destinations.map((destination) => (
          <div key={destination.id}>
            <Link
              href={`/travels/${destination.id}`}
              className="group cursor-pointer"
            >
              <div className="flex flex-col gap-2">
                <div className="flex items-center justify-between">
                  <h2 className="text-lg font-semibold group-hover:text-foreground/60 transition-colors duration-300">
                    {destination.name}
                  </h2>
                  <span className="text-sm text-foreground/50">
                    {destination.country}
                  </span>
                </div>
                <p className="text-foreground/50 text-sm">
                  {destination.description}
                </p>
              </div>
            </Link>
            <div className="flex items-center gap-4">
              <span className="text-sm text-foreground/60">
                {destination.isVisited ? "Visited" : "Not visited yet"}
                {destination.isVisited && destination.visitDate && (
                  <span className="ml-4">Date: {destination.visitDate}</span>
                )}
              </span>
            </div>
            <Separator className="mt-4" />
          </div>
        ))}
      </div>
    </main>
  );
}

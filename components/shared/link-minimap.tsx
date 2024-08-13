import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MINIMAP_LINKS } from "@/constants";
import Link from "next/link";

export const LinkMinimap = () => {
  return (
    <div className="fixed top-10 right-0 z-50 max-w-sm w-full hidden md:flex flex-col gap-2">
      {MINIMAP_LINKS.map((link, index) => (
        <Link key={index} href={link.href} className="text-sm">
          {link.label}
        </Link>
      ))}
    </div>
  );
};

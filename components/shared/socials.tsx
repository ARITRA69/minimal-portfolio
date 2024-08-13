import Link from "next/link";
import { Rss } from "lucide-react";
import { bricolageGrotesque } from "@/fonts";
import { cn } from "@/lib/utils";
import { Separator } from "@/components/ui/separator";

export const Socials = () => {
  return (
    <div id="socials" className="flex flex-col gap-4">
      <h5 className={cn(bricolageGrotesque, "text-xl font-bold")}>Socials</h5>
      <div className="flex flex-col gap-2">
        <div className="bg-foreground/10 p-4 flex gap-2">
          <Rss size={18} />
          <div className="flex flex-col gap-1">
            <h6 className="uppercase">Follow</h6>
            <ul className="flex items-center gap-2">
              <li className="text-sm opacity-70 hover:opacity-100 transition-all duration-300">
                <Link href="https://x.com/ARITRA81999">Twitter</Link>
              </li>
              <Separator orientation="vertical" />
              <li className="text-sm opacity-70 hover:opacity-100 transition-all duration-300">
                <Link href="https://www.instagram.com/thatgoddamnpope/">
                  Instagram
                </Link>
              </li>
              <Separator orientation="vertical" />
              <li className="text-sm opacity-70 hover:opacity-100 transition-all duration-300">
                <Link href="https://github.com/aritra69">Github</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

import { bricolageGrotesque } from "@/fonts";
import { cn } from "@/lib/utils";
import { Globe, Mail, MapPin, PhoneCall } from "lucide-react";
import Link from "next/link";

export const Contact = () => {
  return (
    <div id="contact" className="flex flex-col gap-4">
      <h5 className={cn(bricolageGrotesque, "text-xl font-bold")}>Contact</h5>
      <div className="grid grid-cols-2 gap-4">
        <div className="border border-foreground/10 px-4 py-2 flex items-center gap-2">
          <MapPin size={16} />
          <p className="text-sm opacity-70">Kolkata, India</p>
        </div>
        <div className="border border-foreground/10 px-4 py-2 flex items-center gap-2">
          <Globe size={16} />
          <Link
            href="https://aritra69.com"
            className="text-sm opacity-70  hover:opacity-100 transition-all duration-300"
          >
            aritra69.com
          </Link>
        </div>
        <div className="border border-foreground/10 px-4 py-2 flex items-center gap-2">
          <PhoneCall size={16} />
          <Link
            href="tel:+919681215129"
            className="text-sm opacity-70 hover:opacity-100 transition-all duration-300"
          >
            +91 9681215129
          </Link>
        </div>
        <div className="border border-foreground/10 px-4 py-2 flex items-center gap-2">
          <Mail size={16} />
          <Link
            href="mailto:aritrasarkar2002@gmail.com"
            className="text-sm opacity-70 hover:opacity-100 transition-all duration-300"
          >
            aritrasarkar2002@gmail.com
          </Link>
        </div>
      </div>
    </div>
  );
};

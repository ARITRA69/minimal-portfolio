"use client";

import { bricolageGrotesque } from "@/fonts";
import { cn } from "@/lib/utils";
import { CodeXml, Download, Minus } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <div id="about" className="flex flex-col gap-10">
      <CodeXml size={40} />
      <h1 className={cn(bricolageGrotesque, "text-4xl font-bold uppercase")}>
        Aritra Sarkar
      </h1>
      <div className="flex flex-col gap-2">
        <h5 className="font-semibold text-xl">
          I make Fullstack Web Apps when I get bored.
        </h5>
        <small className="opacity-80">
          I had the opportunity to work with some of the best developers in the
          industry.
        </small>
        <p className="text-sm w-2/3 opacity-80">
          I think about every detail in my work - from idea and analytics to
          prototype and visual design.
        </p>
        <Button
          size="sm"
          variant="link"
          className="w-max mt-2 gap-2 flex items-center"
          onClick={() => {
            const link = document.createElement("a");
            link.href = "/Aritra Sarkar Resume A4.pdf";
            link.download = "Aritra Sarkar Resume.pdf";
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
          }}
        >
          <Download size={16} /> <span>Resume</span>
        </Button>
      </div>
    </div>
  );
};

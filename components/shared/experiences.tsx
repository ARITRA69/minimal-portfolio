import { EXPERIENCES } from "@/constants";
import { bricolageGrotesque } from "@/fonts";
import { cn } from "@/lib/utils";
import Link from "next/link";

export const Experiences = () => {
  return (
    <div id="experiences" className="flex flex-col gap-6">
      <h5 className={cn(bricolageGrotesque, "text-xl font-bold")}>
        Experiences
      </h5>
      <div className="grid gap-8 relative">
        {EXPERIENCES.map((experience, i) => (
          <div key={i} className="grid gap-4">
            <div className="flex items-center gap-4">
              <div className="bg-primary rounded-full w-3 h-3" />
              <div className="grid gap-1">
                <div className="font-medium">{experience.title}</div>
                <div className="text-sm text-muted-foreground">
                  <Link href={experience.company.href}>
                    {experience.company.label}
                  </Link>{" "}
                  | {experience.period}
                </div>
              </div>
            </div>
            <div className="grid gap-3 pl-7">
              <div className="grid gap-1">
                <div className="text-sm font-medium">Responsibilities</div>
                <ul className="grid gap-2 text-sm text-muted-foreground">
                  {experience.responsibilities.map((responsibility, i) => (
                    <li key={i}> {responsibility}</li>
                  ))}
                </ul>
              </div>
              <div className="grid gap-1">
                <div className="text-sm font-medium">Tech Stack</div>
                <div className="flex flex-wrap gap-2 text-sm">
                  {experience.techStack.map((tech, i) => (
                    <div
                      key={i}
                      className="bg-foreground/10 px-2 py-1 rounded-md"
                    >
                      {tech}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
        <div className="absolute left-1.5 top-4 h-full w-0.5 bg-foreground/10" />
      </div>
    </div>
  );
};

import { ACHIEVEMENTS } from "@/constants";
import { bricolageGrotesque } from "@/fonts";
import { cn } from "@/lib/utils";

export const Achievements = () => {
  return (
    <div id="achievements" className="grid grid-cols-3">
      {ACHIEVEMENTS.map((achievement, i) => (
        <div
          key={i}
          className="flex flex-col items-center justify-center text-center"
        >
          <span className={cn(bricolageGrotesque, "text-3xl font-bold")}>
            {achievement.count}+
          </span>
          <span className="text-sm">{achievement.label}</span>
        </div>
      ))}
    </div>
  );
};

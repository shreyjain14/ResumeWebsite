import { Badge } from "./ui/Badge";
import skillsData from "@/data/skills.json";

export default function Skills() {
  return (
    <section className="flex flex-col gap-8">
      <h2 className="title text-2xl sm:text-3xl">skills</h2>
      <div className="flex flex-col gap-8">
        {Object.entries(skillsData).map(([category, skills]) => (
          <div key={category} className="flex flex-col gap-4">
            <h3 className="text-lg font-medium">{category}</h3>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <Badge key={skill} variant="secondary" className="text-sm">
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

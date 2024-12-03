import { Badge } from "./ui/Badge";

const SKILLS = [
  // Frontend
  "React",
  "Next.js",
  "TypeScript",
  "JavaScript",
  "Tailwind CSS",
  "HTML/CSS",
  // Backend
  "Node.js",
  "Express",
  "MongoDB",
  "PostgreSQL",
  // Tools & Others
  "Git",
  "Docker",
  "REST APIs",
  "GraphQL",
];

export default function Skills() {
  return (
    <section className="flex flex-col gap-8">
      <h2 className="title text-2xl sm:text-3xl">skills</h2>
      <div className="flex flex-wrap gap-2">
        {SKILLS.map((skill) => (
          <Badge key={skill} variant="secondary" className="text-sm">
            {skill}
          </Badge>
        ))}
      </div>
    </section>
  );
}

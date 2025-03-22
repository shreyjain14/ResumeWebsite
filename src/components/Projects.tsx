"use client";

import data from "@/data/projects.json";
import { projectSchema } from "@/lib/schemas";
import { ProjectCard } from "./ProjectCard";
import { useEffect, useState } from "react";

interface Props {
  limit?: number;
}

export default function Projects({ limit }: Props) {
  const [selectedSkills, setSelectedSkills] = useState<string[]>([]);
  let projects = projectSchema.parse(data).projects;

  useEffect(() => {
    const handleSkillSelect = (event: CustomEvent) => {
      setSelectedSkills(event.detail);
    };

    window.addEventListener('skillSelect', handleSkillSelect as EventListener);
    return () => {
      window.removeEventListener('skillSelect', handleSkillSelect as EventListener);
    };
  }, []);

  // Filter projects based on selected skills
  if (selectedSkills.length > 0) {
    projects = projects.filter(project => 
      selectedSkills.every(skill => project.tags.includes(skill))
    );
  }

  if (limit) {
    projects = projects.slice(0, limit);
  }

  return (
    <section className="grid grid-cols-1 gap-4 sm:grid-cols-2">
      {projects.map((project, id) => (
        <ProjectCard key={id} project={project} />
      ))}
      {projects.length === 0 && (
        <div className="col-span-full text-center py-8 text-muted-foreground">
          No projects found with the selected skills.
        </div>
      )}
    </section>
  );
}

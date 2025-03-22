"use client";

import { projectSchema } from "@/lib/schemas";
import data from "@/data/projects.json";
import skillsData from "@/data/project_skills.json";
import { useState } from "react";

export default function SkillsFilter() {
  const projects = projectSchema.parse(data).projects;
  const allProjectSkills = Array.from(new Set(projects.flatMap(project => project.tags)));
  const [selectedSkills, setSelectedSkills] = useState<string[]>([]);
  const [isExpanded, setIsExpanded] = useState(false);

  // Get all skills from the categories
  const categorizedSkills = Object.values(skillsData).flat();
  
  // Find skills that aren't in any category
  const uncategorizedSkills = allProjectSkills.filter(skill => !categorizedSkills.includes(skill));
  
  // Create a map of category to skills
  const categorizedSkillsMap = {
    ...skillsData,
    ...(uncategorizedSkills.length > 0 ? { "Others": uncategorizedSkills } : {})
  };

  const toggleSkill = (skill: string) => {
    setSelectedSkills(prev => {
      const newSelection = prev.includes(skill)
        ? prev.filter(s => s !== skill)
        : [...prev, skill];
      
      // Dispatch event with all selected skills
      const event = new CustomEvent('skillSelect', { detail: newSelection });
      window.dispatchEvent(event);
      
      return newSelection;
    });
  };

  return (
    <section className="mt-8 border rounded-lg overflow-hidden bg-[#0B0F17]">
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full px-6 py-4 flex justify-between items-center hover:bg-primary/5 transition-colors"
      >
        <h2 className="text-2xl font-bold">Skills Used</h2> 
        <h4 className="text-muted-foreground">Click on a skill to filter projects by it.</h4>
        <span className="text-2xl">
          {isExpanded ? '−' : '+'}
        </span>
      </button>
      
      {isExpanded && (
        <div className="px-6 pb-6 space-y-6">
          {Object.entries(categorizedSkillsMap).map(([category, skills]) => (
            <div key={category} className="space-y-3">
              <h3 className="text-lg font-semibold">{category}</h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, index) => (
                  <button
                    key={index}
                    className={`px-4 py-2 rounded-lg text-sm transition-colors ${
                      selectedSkills.includes(skill)
                        ? 'bg-primary text-primary-foreground'
                        : 'bg-[#1A1F2B] hover:bg-[#252B38]'
                    }`}
                    onClick={() => toggleSkill(skill)}
                  >
                    {skill}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
} 
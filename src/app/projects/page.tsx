import Projects from "@/components/Projects";
import SkillsFilter from "@/components/SkillsFilter";

export default async function ProjectPage() {
  return (
    <article className="mt-8 flex flex-col gap-8 pb-16">
      <h1 className="title">my projects.</h1>

      <SkillsFilter />

      <Projects />
    </article>
  );
}

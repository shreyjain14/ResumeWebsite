import Projects from "@/components/Projects";
import { projects } from "@/data/Projects";

export default async function ProjectPage() {
  return (
    <article className="mt-8 flex flex-col gap-8 pb-16">
      <h1 className="title">my projects.</h1>

      <Projects projects={projects} />
    </article>
  );
}
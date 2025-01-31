import Experience from "@/components/Experience";
import LinkWithIcon from "@/components/LinkWithIcon";
import Projects from "@/components/Projects";
import Socials from "@/components/Socials";
import { Button } from "@/components/ui/Button";
import { ArrowDownRight, ArrowRightIcon, FileDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import path from "path";
import Skills from "@/components/Skills";
import aboutData from "@/data/about.json";
import { aboutSchema } from "@/lib/schemas";
import { calculateAge } from "@/lib/utils";

const blogDirectory = path.join(process.cwd(), "content");
const LIMIT = 2; // max show 2

export default async function Home() {
  const birthDate = aboutSchema.parse(aboutData).birthDate;
  const name = aboutSchema.parse(aboutData).name;
  const location = aboutSchema.parse(aboutData).location;
  const description = aboutSchema.parse(aboutData).description;
  const image = aboutSchema.parse(aboutData).image;
  const resumeLink = aboutSchema.parse(aboutData).resumeLink;
  
  return (
    <article className="mt-8 flex flex-col gap-16 pb-16">
      <section className="flex flex-col items-start gap-8 md:flex-row-reverse md:items-center md:justify-between">
        <Image
          className="rounded-lg"
          src={image}
          alt={"Photo of " + name}
          width={175}
          height={175}
          priority
        />
        <div className="flex flex-col">
          <h1 className="title text-5xl">{name}</h1>
          <p className="mt-4 font-light">
            {calculateAge(birthDate)}-year-old computer enthusiast based in {location}.
          </p>
          <p className="mt-4 font-light">{description}</p>

          <section className="mt-8 flex items-center gap-8">
            <Link href={resumeLink} target="_blank">
              <Button variant="outline">
                <span className="font-semibold">Resume</span>
                <FileDown className="ml-2 size-5" />
              </Button>
            </Link>
            <Socials />
          </section>
        </div>
      </section>

      <Experience />

      <Skills />

      <section className="flex flex-col gap-8">
        <div className="flex justify-between">
          <h2 className="title text-2xl sm:text-3xl">featured projects</h2>
          <LinkWithIcon
            href="/projects"
            position="right"
            icon={<ArrowRightIcon className="size-5" />}
            text="view more"
          />
        </div>
        <Projects limit={LIMIT} />
      </section>
    </article>
  );
}

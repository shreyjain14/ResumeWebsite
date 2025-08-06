import { OpenSource } from "@/lib/schemas";
import Link from "next/link";
import { Badge } from "./ui/Badge";
import Icon from "./Icon";
import { Github } from "lucide-react";

interface Props {
  opensource: OpenSource;
}

export default function OpenSourceTimelineItem({ opensource }: Props) {
  const {
    name,
    organization,
    startDate,
    endDate,
    description,
    technologies,
    links,
  } = opensource;

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
    });
  };

  return (
    <li className="relative ml-10 py-4">
      <div className="absolute -left-16 top-4 flex items-center justify-center rounded-full bg-white">
        <div className="flex size-12 items-center justify-center rounded-full border bg-background">
          <Github className="size-6 text-muted-foreground" />
        </div>
      </div>
      <div className="flex flex-1 flex-col justify-start gap-1">
        <time className="text-xs text-muted-foreground">
          <span>{formatDate(startDate)}</span>
          <span>{" - "}</span>
          <span>{endDate ? formatDate(endDate) : "Present"}</span>
        </time>
        <h2 className="font-semibold leading-none">{name}</h2>
        <p className="text-sm text-muted-foreground">{organization}</p>
        <p className="prose pr-8 text-sm dark:prose-invert">{description}</p>

        {technologies && technologies.length > 0 && (
          <div className="mt-2 flex flex-row flex-wrap items-start gap-1">
            {technologies.map((tech, idx) => (
              <Badge key={idx} variant="secondary" className="text-xs">
                {tech}
              </Badge>
            ))}
          </div>
        )}
      </div>

      {links && links.length > 0 && (
        <div className="mt-2 flex flex-row flex-wrap items-start gap-2">
          {links.map((link, idx) => (
            <Link href={link.href} key={idx} target="_blank">
              <Badge title={link.name} className="flex gap-2">
                <Icon name={link.icon} aria-hidden="true" className="size-3" />
                {link.name}
              </Badge>
            </Link>
          ))}
        </div>
      )}
    </li>
  );
}

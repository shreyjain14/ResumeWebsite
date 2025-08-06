import { OpenSource } from "@/lib/schemas";
import OpenSourceTimelineItem from "./OpenSourceTimelineItem";
import { Card, CardContent } from "./ui/Card";

interface Props {
  opensource: OpenSource[];
}

export default function OpenSourceTimeline({ opensource }: Props) {
  return (
    <Card>
      <CardContent className="p-0">
        <ul className="ml-10 border-l">
          {opensource.map((project, id) => (
            <OpenSourceTimelineItem key={id} opensource={project} />
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}

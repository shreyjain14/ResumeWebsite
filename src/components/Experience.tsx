import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/Tabs";
import careerData from "@/data/career.json";
import educationData from "@/data/education.json";
import opensourceData from "@/data/opensource.json";
import { careerSchema, educationSchema, opensourceSchema } from "@/lib/schemas";
import Timeline from "./Timeline";
import OpenSourceTimeline from "./OpenSourceTimeline";

export default function Experience() {
  const career = careerSchema.parse(careerData).career;
  const education = educationSchema.parse(educationData).education;
  const opensource = opensourceSchema.parse(opensourceData).opensource;

  return (
    <Tabs defaultValue="work">
      <TabsList className="mb-2 grid w-full grid-cols-3">
        <TabsTrigger value="work">Work</TabsTrigger>
        <TabsTrigger value="opensource">Open Source</TabsTrigger>
        <TabsTrigger value="education">Education</TabsTrigger>
      </TabsList>
      <TabsContent value="work">
        <Timeline experience={career}></Timeline>
      </TabsContent>
      <TabsContent value="education">
        <Timeline experience={education}></Timeline>
      </TabsContent>
      <TabsContent value="opensource">
        <OpenSourceTimeline opensource={opensource}></OpenSourceTimeline>
      </TabsContent>
    </Tabs>
  );
}

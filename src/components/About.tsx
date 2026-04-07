import SectionHeading from "./SectionHeading";
import { resumeData } from "@/data/resume";
import { Cloud, Database, BarChart3, Briefcase } from "lucide-react";

const highlights = [
  { icon: Briefcase, label: "Experience", value: "4+ Years" },
  { icon: Database, label: "Data Systems", value: "SQL & Python" },
  { icon: BarChart3, label: "Visualization", value: "Power BI & Tableau" },
  { icon: Cloud, label: "Cloud Platforms", value: "Snowflake & Azure" },
];

const About = () => (
  <section id="about" className="section-padding" aria-label="About">
    <div className="container mx-auto px-6">
      <SectionHeading title="About Me" />

      <div className="max-w-3xl mx-auto" data-aos="fade-up" data-aos-delay="100">
        <p className="text-muted-foreground leading-relaxed text-base md:text-lg mb-12">
          {resumeData.summary}
        </p>
      </div>

      <div
        className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        {highlights.map((h) => (
          <div
            key={h.label}
            className="bg-card rounded-lg p-5 text-center border border-border/50 hover:border-primary/30 transition-colors"
          >
            <h.icon className="w-6 h-6 mx-auto mb-3" style={{ color: "#3b82f6" }} />
            <p className="text-xs text-muted-foreground mb-1">{h.label}</p>
            <p className="text-sm font-semibold">{h.value}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default About;

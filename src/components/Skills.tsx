import SectionHeading from "./SectionHeading";
import { resumeData } from "@/data/resume";

const Skills = () => (
  <section id="skills" className="section-padding bg-card/30" aria-label="Skills">
    <div className="container mx-auto px-6">
      <SectionHeading title="Technical Skills" />

      <div
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        {Object.entries(resumeData.skills).map(([category, skills]) => (
          <div
            key={category}
            className="bg-card rounded-xl p-5 border border-border/50"
          >
            <h3
              className="text-sm font-semibold mb-3 font-display"
              style={{ color: "#3b82f6" }}
            >
              {category}
            </h3>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1.5 text-xs rounded-md bg-accent text-accent-foreground border border-border/50"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Skills;

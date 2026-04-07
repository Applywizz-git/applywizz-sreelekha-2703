import SectionHeading from "./SectionHeading";
import { resumeData } from "@/data/resume";
import { Briefcase, MapPin, Calendar } from "lucide-react";

const Experience = () => (
  <section id="experience" className="section-padding bg-card/30" aria-label="Experience">
    <div className="container mx-auto px-6">
      <SectionHeading title="Experience" />

      <div className="flex flex-col gap-8">
        {resumeData.experience.map((exp, idx) => (
          <div
            key={idx}
            className="max-w-4xl mx-auto w-full"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div className="bg-card border border-border/50 rounded-xl p-6 md:p-8">
              <div className="flex flex-wrap items-start gap-4 mb-6">
                <div
                  className="w-12 h-12 rounded-lg flex items-center justify-center shrink-0"
                  style={{ backgroundColor: "rgba(59, 130, 246, 0.1)" }}
                >
                  <Briefcase className="w-6 h-6" style={{ color: "#3b82f6" }} />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-xl font-display font-bold">{exp.title}</h3>
                  <p className="font-medium" style={{ color: "#3b82f6" }}>{exp.company}</p>
                  <div className="flex flex-wrap gap-4 mt-2 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <MapPin size={14} /> {exp.location}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar size={14} /> {exp.period}
                    </span>
                  </div>
                </div>
              </div>

              <ul className="space-y-3">
                {exp.bullets.map((bullet, i) => (
                  <li
                    key={i}
                    className="flex gap-3 text-sm text-muted-foreground leading-relaxed"
                  >
                    <span
                      className="w-1.5 h-1.5 rounded-full mt-2 shrink-0"
                      style={{ backgroundColor: "#3b82f6" }}
                    />
                    {bullet}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Experience;

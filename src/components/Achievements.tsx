import SectionHeading from "./SectionHeading";
import { resumeData } from "@/data/resume";
import { Star } from "lucide-react";

const Achievements = () => {
  if (!resumeData.achievements || resumeData.achievements.length === 0) return null;
  
  return (
    <section id="achievements" className="section-padding" aria-label="Achievements">
      <div className="container mx-auto px-6">
        <SectionHeading title="Achievements & Activities" />

        <div
          className="max-w-2xl mx-auto space-y-3"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          {resumeData.achievements.map((item, i) => (
            <div
              key={i}
              className="flex items-center gap-4 bg-card rounded-xl p-4 border border-border/50"
            >
              <Star className="w-4 h-4 shrink-0" style={{ color: "#3b82f6" }} />
              <p className="text-sm">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;

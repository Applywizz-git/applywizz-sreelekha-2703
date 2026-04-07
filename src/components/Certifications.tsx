import SectionHeading from "./SectionHeading";
import { resumeData } from "@/data/resume";
import { Award } from "lucide-react";

const Certifications = () => (
  <section id="certifications" className="section-padding" aria-label="Certifications">
    <div className="container mx-auto px-6">
      <SectionHeading title="Certifications" />

      <div
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        {resumeData.certifications.map((cert, i) => (
          <div
            key={i}
            className="group flex flex-col gap-4 bg-card/40 backdrop-blur-sm rounded-2xl p-6 border border-border/50 hover:border-primary/40 transition-all duration-300 hover:shadow-[0_0_20px_rgba(59,130,246,0.08)] hover:-translate-y-1"
          >
            <div
              className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 transition-colors duration-300 group-hover:bg-primary/20"
              style={{ backgroundColor: "rgba(59, 130, 246, 0.1)" }}
            >
              <Award className="w-6 h-6" style={{ color: "#3b82f6" }} />
            </div>
            <div className="space-y-1">
              <p className="text-sm font-display font-bold leading-tight group-hover:text-primary transition-colors">
                {cert}
              </p>
              <div className="w-8 h-0.5 bg-primary/30 rounded-full group-hover:w-full transition-all duration-500" />
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Certifications;

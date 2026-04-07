import SectionHeading from "./SectionHeading";
import { resumeData } from "@/data/resume";
import { GraduationCap, Calendar } from "lucide-react";

const Education = () => (
  <section id="education" className="section-padding bg-card/30" aria-label="Education">
    <div className="container mx-auto px-6">
      <SectionHeading title="Education" />

      <div
        className="flex justify-center max-w-5xl mx-auto"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        <div className="grid md:grid-cols-1 gap-8 w-full max-w-2xl">
        {resumeData.education.map((edu, i) => (
          <div
            key={i}
            className="group relative bg-card/50 backdrop-blur-sm rounded-2xl p-8 border border-border/50 hover:border-primary/40 transition-all duration-300 hover:shadow-[0_0_30px_rgba(59,130,246,0.1)]"
          >
            {/* Background Accent */}
            <div className="absolute top-0 right-0 p-8 opacity-[0.03] group-hover:opacity-[0.06] transition-opacity">
              <GraduationCap size={120} />
            </div>

            <div
              className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110"
              style={{ backgroundColor: "rgba(59, 130, 246, 0.1)" }}
            >
              <GraduationCap className="w-7 h-7" style={{ color: "#3b82f6" }} />
            </div>
            
            <h3 className="text-xl font-display font-bold mb-2 group-hover:text-primary transition-colors">
              {edu.degree}
            </h3>
            <p className="text-lg text-muted-foreground/90 font-medium mb-4">{edu.school}</p>
            
            <div className="flex items-center gap-2 text-sm text-muted-foreground bg-secondary/50 w-fit px-3 py-1.5 rounded-full">
              <Calendar size={14} className="text-primary" />
              {edu.period}
            </div>
          </div>
        ))}
        </div>
      </div>
    </div>
  </section>
);

export default Education;
